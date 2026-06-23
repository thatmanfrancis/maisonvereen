import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminFromRequest } from "@/lib/auth";

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

  const updated = await prisma.application.update({
    where: { id },
    data: {
      ...(status !== undefined ? { status } : {}),
      ...(notes !== undefined ? { notes } : {}),
    },
  });
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
