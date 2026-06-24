import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminFromRequest } from "@/lib/auth";
import { SendZeptomail } from "@/lib/zeptomail";
import { applicationReceivedEmail, adminNotificationEmail } from "@/lib/emailTemplates";

// ── POST — public form submission ─────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      country,
      whatYouDo,
      howHeard,
      referredBy,
      whatMadeApply,
      earlyThing,
      anythingElse,
    } = body;

    if (!name || !email || !country || !whatYouDo || !whatMadeApply) {
      return NextResponse.json(
        { error: "All required fields must be completed." },
        { status: 400 }
      );
    }

    const emailLower = email.toLowerCase().trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLower)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    const duplicate = await prisma.application.findFirst({
      where: { email: emailLower },
    });
    if (duplicate) {
      return NextResponse.json(
        { error: "An application with this email already exists." },
        { status: 409 }
      );
    }

    const application = await prisma.application.create({
      data: {
        name: name.trim(),
        email: emailLower,
        phone: phone?.trim() || null,
        country: country.trim(),
        whatYouDo: whatYouDo.trim(),
        howHeard: howHeard?.trim() || "Not specified",
        referredBy: referredBy?.trim() || null,
        whatMadeApply: whatMadeApply.trim(),
        earlyThing: earlyThing?.trim() || null,
        anythingElse: anythingElse?.trim() || null,
        consent: true,
      },
    });

    // 1. Send confirmation email to the applicant
    try {
      await SendZeptomail({
        toEmail: email,
        toName: name,
        subject: "Your Application — Maison Vereen Edition I",
        htmlBody: applicationReceivedEmail(name),
      });
    } catch (mailErr) {
      console.error("[POST /api/applications] Failed to send applicant confirmation email:", mailErr);
    }

    // 2. Fetch all notification recipients
    try {
      const [dbAdmins, customRecipients] = await Promise.all([
        prisma.admin.findMany({ select: { email: true, name: true } }),
        prisma.notificationEmail.findMany({ select: { email: true, name: true } }),
      ]);

      const adminMap = new Map<string, { email: string; name: string }>();
      customRecipients.forEach((adm: { email: string; name: string | null }) => {
        if (adm.email?.trim()) adminMap.set(adm.email.toLowerCase().trim(), { email: adm.email.trim(), name: adm.name || "Recipient" });
      });
      dbAdmins.forEach((adm: { email: string; name: string }) => {
        if (adm.email?.trim()) adminMap.set(adm.email.toLowerCase().trim(), { email: adm.email.trim(), name: adm.name || "Admin" });
      });

      const allAdmins = Array.from(adminMap.values());
      if (allAdmins.length > 0) {
        const adminEmailHtml = adminNotificationEmail({
          name: name.trim(),
          email: emailLower,
          country: country.trim(),
          whatYouDo: whatYouDo.trim(),
          howHeard: howHeard?.trim() || "Not specified",
          referredBy: referredBy?.trim() || null,
          whatMadeApply: whatMadeApply.trim(),
          earlyThing: earlyThing?.trim() || null,
          anythingElse: anythingElse?.trim() || null,
        });

        const results = await Promise.allSettled(
          allAdmins.map((admin) =>
            SendZeptomail({
              toEmail: admin.email,
              toName: admin.name,
              subject: `New Application: ${name.trim()} — Maison Vereen`,
              htmlBody: adminEmailHtml,
            })
          )
        );
        results.forEach((result, index) => {
          if (result.status === "rejected") {
            console.error(`[POST /api/applications] Failed to notify admin ${allAdmins[index].email}:`, result.reason);
          }
        });
      }
    } catch (adminMailErr) {
      console.error("[POST /api/applications] Failed to process administrator notification emails:", adminMailErr);
    }

    return NextResponse.json({ ok: true, id: application.id }, { status: 201 });
  } catch (err) {
    console.error("[POST /api/applications]", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

// ── GET — admin only, paginated + filtered ────────────────────────────────────
export async function GET(req: NextRequest) {
  const admin = await getAdminFromRequest(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const page = Math.max(1, Number(searchParams.get("page") ?? 1));
  const limit = Math.min(100, Number(searchParams.get("limit") ?? 20));
  const status = searchParams.get("status") ?? undefined;
  const search = searchParams.get("search")?.trim() ?? "";
  const skip = (page - 1) * limit;

  const where = {
    ...(status ? { status: status as "PENDING" | "REVIEWING" | "APPROVED" | "REJECTED" } : {}),
    ...(search ? {
      OR: [
        { name: { contains: search, mode: "insensitive" as const } },
        { email: { contains: search, mode: "insensitive" as const } },
        { country: { contains: search, mode: "insensitive" as const } },
        { whatYouDo: { contains: search, mode: "insensitive" as const } },
      ],
    } : {}),
  };

  const [items, total] = await Promise.all([
    prisma.application.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
      select: {
        id: true, name: true, email: true, country: true,
        whatYouDo: true, status: true, createdAt: true, howHeard: true,
        whatMadeApply: true, earlyThing: true, anythingElse: true,
        referredBy: true, phone: true,
      },
    }),
    prisma.application.count({ where }),
  ]);

  return NextResponse.json({
    applications: items,
    pagination: { total, page, limit, pages: Math.ceil(total / limit) },
  });
}
