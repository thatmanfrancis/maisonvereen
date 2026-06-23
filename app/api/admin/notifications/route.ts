import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";

// ── GET — List all notification emails ──────────────────────────────────────────
export async function GET(req: NextRequest) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const emails = await prisma.notificationEmail.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ emails });
  } catch (err) {
    console.error("[GET /api/admin/notifications]", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

// ── POST — Add a notification email ─────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const body = await req.json();
    const { email, name } = body;

    if (!email?.trim()) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const emailClean = email.toLowerCase().trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailClean)) {
      return NextResponse.json({ error: "Invalid email address format." }, { status: 400 });
    }

    // Check duplicates
    const existing = await prisma.notificationEmail.findUnique({
      where: { email: emailClean },
    });

    if (existing) {
      return NextResponse.json(
        { error: "This email address is already added." },
        { status: 409 }
      );
    }

    const newEmail = await prisma.notificationEmail.create({
      data: {
        email: emailClean,
        name: name?.trim() || null,
      },
    });

    return NextResponse.json({ ok: true, email: newEmail }, { status: 201 });
  } catch (err) {
    console.error("[POST /api/admin/notifications]", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

// ── DELETE — Remove a notification email ──────────────────────────────────────────
export async function DELETE(req: NextRequest) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID is required." }, { status: 400 });
    }

    await prisma.notificationEmail.delete({
      where: { id },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[DELETE /api/admin/notifications]", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
