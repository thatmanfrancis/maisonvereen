import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const body = await req.json();
    const { currentPassword, newPassword } = body;

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: "Current password and new password are required." },
        { status: 400 }
      );
    }

    if (newPassword.length < 8) {
      return NextResponse.json(
        { error: "New password must be at least 8 characters long." },
        { status: 400 }
      );
    }

    const admin = await prisma.admin.findUnique({
      where: { id: session.adminId },
    });

    if (!admin) {
      return NextResponse.json({ error: "Admin not found." }, { status: 404 });
    }

    // Verify current password is correct
    const isMatch = await bcrypt.compare(currentPassword, admin.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Incorrect current password." },
        { status: 400 }
      );
    }

    // Hash the new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 12);

    // Update the database
    await prisma.admin.update({
      where: { id: session.adminId },
      data: { password: hashedNewPassword },
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[POST /api/admin/settings]", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
