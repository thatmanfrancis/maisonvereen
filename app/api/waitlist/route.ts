import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminFromRequest } from "@/lib/auth";

// ── POST — public waitlist sign-up ────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { email, name, country } = await req.json();

    if (!email?.trim()) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const emailLower = email.toLowerCase().trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLower)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    await prisma.waitlistEntry.upsert({
      where: { email: emailLower },
      update: {
        ...(name?.trim() ? { name: name.trim() } : {}),
        ...(country?.trim() ? { country: country.trim() } : {}),
      },
      create: {
        email: emailLower,
        name: name?.trim() || null,
        country: country?.trim() || null,
      },
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("[POST /api/waitlist]", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

// ── GET — admin only ──────────────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  const admin = await getAdminFromRequest(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const entries = await prisma.waitlistEntry.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ entries, total: entries.length });
}
