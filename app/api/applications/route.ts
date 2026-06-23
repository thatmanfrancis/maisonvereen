import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminFromRequest } from "@/lib/auth";
import { SendZeptomail } from "@/lib/zeptomail";
import { applicationReceivedEmail, adminNotificationEmail } from "@/lib/emailTemplates";



// ── POST — public form submission ─────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, country, occupation, drives, legacy, howHeard } = body;

    if (!name || !email || !country || !occupation || !drives || !legacy) {
      return NextResponse.json(
        { error: "All fields are required." },
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
        country: country.trim(),
        occupation: occupation.trim(),
        drives: drives.trim(),
        legacy: legacy.trim(),
        howHeard: howHeard ?? "Not specified",
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

    // 2. Fetch all notification recipients (Admin table + custom NotificationEmail table)
    try {
      const [dbAdmins, customRecipients] = await Promise.all([
        prisma.admin.findMany({
          select: {
            email: true,
            name: true,
          },
        }),
        prisma.notificationEmail.findMany({
          select: {
            email: true,
            name: true,
          },
        }),
      ]);

      // Build unique list based on email addresses
      const adminMap = new Map<string, { email: string; name: string }>();

      // Load custom notification emails first
      customRecipients.forEach((adm) => {
        if (adm.email?.trim()) {
          adminMap.set(adm.email.toLowerCase().trim(), {
            email: adm.email.trim(),
            name: adm.name || "Recipient",
          });
        }
      });

      // Merge database admins (overwrites if duplicate, otherwise adds them)
      dbAdmins.forEach((adm) => {
        if (adm.email?.trim()) {
          adminMap.set(adm.email.toLowerCase().trim(), {
            email: adm.email.trim(),
            name: adm.name || "Admin",
          });
        }
      });

      const allAdmins = Array.from(adminMap.values());

      if (allAdmins.length > 0) {
        const adminEmailHtml = adminNotificationEmail({
          name: name.trim(),
          email: emailLower,
          country: country.trim(),
          occupation: occupation.trim(),
          drives: drives.trim(),
          legacy: legacy.trim(),
          howHeard: howHeard ?? "Not specified",
        });

        // Send to each administrator in parallel
        const emailPromises = allAdmins.map((admin) =>
          SendZeptomail({
            toEmail: admin.email,
            toName: admin.name,
            subject: `New Application: ${name.trim()} — Maison Vereen`,
            htmlBody: adminEmailHtml,
          })
        );

        const results = await Promise.allSettled(emailPromises);
        results.forEach((result, index) => {
          if (result.status === "rejected") {
            console.error(`[POST /api/applications] Failed to notify admin ${allAdmins[index].email}:`, result.reason);
          }
        });
      } else {
        console.warn("[POST /api/applications] No administrators found in database or hardcoded config.");
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
        { occupation: { contains: search, mode: "insensitive" as const } },
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
        occupation: true, status: true, createdAt: true, howHeard: true,
      },
    }),
    prisma.application.count({ where }),
  ]);

  return NextResponse.json({
    applications: items,
    pagination: { total, page, limit, pages: Math.ceil(total / limit) },
  });
}
