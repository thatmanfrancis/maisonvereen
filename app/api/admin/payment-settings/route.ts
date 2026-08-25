import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminFromRequest } from "@/lib/auth";

const SETTINGS_ID = "default";

async function getOrCreateSettings() {
  return prisma.siteSetting.upsert({
    where: { id: SETTINGS_ID },
    update: {},
    create: {
      id: SETTINGS_ID,
      bankName: "",
      accountName: "",
      accountNumber: "",
      paymentNote: null,
    },
  });
}

export async function GET(req: NextRequest) {
  const admin = await getAdminFromRequest(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const settings = await getOrCreateSettings();
  return NextResponse.json({ settings });
}

export async function PATCH(req: NextRequest) {
  const admin = await getAdminFromRequest(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const body = await req.json();
  const bankName =
    typeof body.bankName === "string" ? body.bankName.trim() : undefined;
  const accountName =
    typeof body.accountName === "string" ? body.accountName.trim() : undefined;
  const accountNumber =
    typeof body.accountNumber === "string"
      ? body.accountNumber.trim()
      : undefined;
  const paymentNote =
    typeof body.paymentNote === "string"
      ? body.paymentNote.trim() || null
      : undefined;

  await getOrCreateSettings();

  const settings = await prisma.siteSetting.update({
    where: { id: SETTINGS_ID },
    data: {
      ...(bankName !== undefined ? { bankName } : {}),
      ...(accountName !== undefined ? { accountName } : {}),
      ...(accountNumber !== undefined ? { accountNumber } : {}),
      ...(paymentNote !== undefined ? { paymentNote } : {}),
    },
  });

  return NextResponse.json({ settings });
}
