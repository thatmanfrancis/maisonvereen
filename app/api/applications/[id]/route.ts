import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminFromRequest } from "@/lib/auth";
import { SendZeptomail } from "@/lib/zeptomail";
import {
  applicationApprovedEmail,
  applicationDeclinedEmail,
  applicationReviewingEmail,
} from "@/lib/emailTemplates";
import {
  buildHouseId,
  buildReceiptNo,
  CIRCLE_LABELS,
  deadlineForCircle,
  formatNaira,
  releaseYearSuffix,
  type MembershipCircle,
} from "@/lib/membership";

type Ctx = { params: Promise<{ id: string }> };

const CIRCLES = new Set(["FOUNDING", "COLLECTORS", "HOUSE"]);

async function requireAdmin(req: NextRequest) {
  const admin = await getAdminFromRequest(req);
  if (!admin) return null;
  return admin;
}

async function getOrCreateSettings() {
  return prisma.siteSetting.upsert({
    where: { id: "default" },
    update: {},
    create: {
      id: "default",
      bankName: "",
      accountName: "",
      accountNumber: "",
      paymentNote: null,
      releaseLabel: "Edition One — 2027",
      releaseDate: "29 May 2027",
      amountNaira: 430000,
      foundingDeadline: "2 weeks",
      collectorsDeadline: "1 month",
      houseDeadline: "1 month 2 weeks",
    },
  });
}

function parseOptionalAmount(value: unknown): number | null | undefined {
  if (value === undefined) return undefined;
  if (value === null) return null;
  if (typeof value === "number" && Number.isFinite(value)) return Math.round(value);
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (!trimmed) return null;
    const n = Number(trimmed.replace(/,/g, ""));
    if (Number.isFinite(n)) return Math.round(n);
  }
  return undefined;
}

function parseOptionalNullableString(value: unknown): string | null | undefined {
  if (value === undefined) return undefined;
  if (value === null) return null;
  if (typeof value === "string") return value.trim() || null;
  return undefined;
}

// ── GET /api/applications/:id ─────────────────────────────────────────────────
export async function GET(req: NextRequest, { params }: Ctx) {
  if (!(await requireAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  const { id } = await params;
  const app = await prisma.application.findUnique({ where: { id } });
  if (!app) return NextResponse.json({ error: "Not found." }, { status: 404 });
  return NextResponse.json(app);
}

// ── PATCH /api/applications/:id — update status / notes / membership fields ──
export async function PATCH(req: NextRequest, { params }: Ctx) {
  if (!(await requireAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  const { id } = await params;
  const body = await req.json();
  const {
    status,
    notes,
    membershipCircle,
    houseId,
    receiptNo,
    amountPaid,
    paymentDeadline,
  } = body;

  const valid = ["PENDING", "REVIEWING", "APPROVED", "REJECTED"];
  if (status && !valid.includes(status)) {
    return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  }
  if (
    membershipCircle !== undefined &&
    membershipCircle !== null &&
    !CIRCLES.has(membershipCircle)
  ) {
    return NextResponse.json(
      { error: "Invalid membership circle." },
      { status: 400 }
    );
  }

  const existing = await prisma.application.findUnique({ where: { id } });
  if (!existing) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  const becameReviewing =
    status === "REVIEWING" && existing.status !== "REVIEWING";
  const becameApproved =
    status === "APPROVED" && existing.status !== "APPROVED";
  const becameRejected =
    status === "REJECTED" && existing.status !== "REJECTED";

  const settings = await getOrCreateSettings();
  const yearSuffix = releaseYearSuffix(settings.releaseLabel);

  let nextHouseId =
    typeof houseId === "string"
      ? houseId.trim() || null
      : existing.houseId;
  let nextReceiptNo =
    typeof receiptNo === "string"
      ? receiptNo.trim() || null
      : existing.receiptNo;

  const parsedAmount = parseOptionalAmount(amountPaid);
  const parsedDeadline = parseOptionalNullableString(paymentDeadline);
  const nextAmountPaid =
    parsedAmount !== undefined ? parsedAmount : existing.amountPaid;
  const nextPaymentDeadline =
    parsedDeadline !== undefined ? parsedDeadline : existing.paymentDeadline;

  if (becameApproved) {
    const approvedCount = await prisma.application.count({
      where: { status: "APPROVED" },
    });
    const seq = approvedCount + 1;

    if (!nextHouseId) nextHouseId = buildHouseId(seq, yearSuffix);
    if (!nextReceiptNo) nextReceiptNo = buildReceiptNo(seq, yearSuffix);
  }

  const updated = await prisma.application.update({
    where: { id },
    data: {
      ...(status !== undefined ? { status } : {}),
      ...(notes !== undefined ? { notes } : {}),
      ...(membershipCircle !== undefined
        ? { membershipCircle: membershipCircle as MembershipCircle }
        : {}),
      ...(houseId !== undefined || becameApproved
        ? { houseId: nextHouseId }
        : {}),
      ...(receiptNo !== undefined || becameApproved
        ? { receiptNo: nextReceiptNo }
        : {}),
      ...(parsedAmount !== undefined ? { amountPaid: nextAmountPaid } : {}),
      ...(parsedDeadline !== undefined
        ? { paymentDeadline: nextPaymentDeadline }
        : {}),
      ...(becameApproved ? { approvedAt: new Date() } : {}),
      ...(status && status !== "APPROVED" && existing.approvedAt
        ? { approvedAt: null }
        : {}),
    },
  });

  const circle = updated.membershipCircle as MembershipCircle;
  const effectiveAmount = updated.amountPaid ?? settings.amountNaira;
  const effectiveDeadline =
    updated.paymentDeadline?.trim() ||
    deadlineForCircle(circle, settings);

  try {
    if (becameReviewing) {
      await SendZeptomail({
        toEmail: updated.email,
        toName: updated.name,
        subject: "Payment Instructions — Maison Vereen Edition One",
        htmlBody: applicationReviewingEmail(updated.name, {
          bankName: settings.bankName,
          accountName: settings.accountName,
          accountNumber: settings.accountNumber,
          paymentNote: settings.paymentNote,
          paymentDeadline: effectiveDeadline,
          amountLabel: formatNaira(effectiveAmount),
          releaseLabel: settings.releaseLabel,
        }),
      });
    } else if (becameApproved) {
      await SendZeptomail({
        toEmail: updated.email,
        toName: updated.name,
        subject: "Access Granted — Maison Vereen Edition One",
        htmlBody: applicationApprovedEmail(updated.name, {
          releaseLabel: settings.releaseLabel,
          membershipCircle: CIRCLE_LABELS[circle],
          houseId: updated.houseId ?? "",
          amountPaidLabel: formatNaira(effectiveAmount),
          receiptNo: updated.receiptNo ?? "",
        }),
      });
    } else if (becameRejected) {
      await SendZeptomail({
        toEmail: updated.email,
        toName: updated.name,
        subject: "Application Update — Maison Vereen Edition One",
        htmlBody: applicationDeclinedEmail(updated.name),
      });
    }
  } catch (mailErr) {
    console.error(
      `[PATCH /api/applications/${id}] Failed to send applicant status email:`,
      mailErr
    );
  }

  return NextResponse.json(updated);
}

// ── DELETE /api/applications/:id ──────────────────────────────────────────────
export async function DELETE(req: NextRequest, { params }: Ctx) {
  if (!(await requireAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  const { id } = await params;
  await prisma.application.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
