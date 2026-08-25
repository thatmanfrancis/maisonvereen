import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminFromRequest } from "@/lib/auth";
import { SendZeptomail } from "@/lib/zeptomail";
import {
  applicationApprovedEmail,
  applicationDeclinedEmail,
  applicationReviewingEmail,
} from "@/lib/emailTemplates";

type Ctx = { params: Promise<{ id: string }> };

async function requireAdmin(req: NextRequest) {
  const admin = await getAdminFromRequest(req);
  if (!admin) return null;
  return admin;
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

// ── PATCH /api/applications/:id — update status / notes ──────────────────────
export async function PATCH(req: NextRequest, { params }: Ctx) {
  if (!(await requireAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  const { id } = await params;
  const { status, notes } = await req.json();

  const valid = ["PENDING", "REVIEWING", "APPROVED", "REJECTED"];
  if (status && !valid.includes(status)) {
    return NextResponse.json({ error: "Invalid status." }, { status: 400 });
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

  const updated = await prisma.application.update({
    where: { id },
    data: {
      ...(status !== undefined ? { status } : {}),
      ...(notes !== undefined ? { notes } : {}),
      ...(becameApproved ? { approvedAt: new Date() } : {}),
      ...(status && status !== "APPROVED" && existing.approvedAt
        ? { approvedAt: null }
        : {}),
    },
  });

  // Applicant status emails — only on first transition into that status
  try {
    if (becameReviewing) {
      const settings = await prisma.siteSetting.upsert({
        where: { id: "default" },
        update: {},
        create: {
          id: "default",
          bankName: "",
          accountName: "",
          accountNumber: "",
          paymentNote: null,
        },
      });

      await SendZeptomail({
        toEmail: updated.email,
        toName: updated.name,
        subject: "Payment Instructions — Maison Vereen Edition I",
        htmlBody: applicationReviewingEmail(updated.name, {
          bankName: settings.bankName,
          accountName: settings.accountName,
          accountNumber: settings.accountNumber,
          paymentNote: settings.paymentNote,
        }),
      });
    } else if (becameApproved) {
      await SendZeptomail({
        toEmail: updated.email,
        toName: updated.name,
        subject: "Application Approved — Maison Vereen Edition I",
        htmlBody: applicationApprovedEmail(updated.name),
      });
    } else if (becameRejected) {
      await SendZeptomail({
        toEmail: updated.email,
        toName: updated.name,
        subject: "Application Update — Maison Vereen Edition I",
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
