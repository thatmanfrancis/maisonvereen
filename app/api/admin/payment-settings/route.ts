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
      releaseLabel: "Edition One — 2027",
      releaseDate: "29 May 2027",
    },
  });
}

function optionalString(value: unknown): string | undefined {
  return typeof value === "string" ? value.trim() : undefined;
}

function optionalNullableString(value: unknown): string | null | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed || null;
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
  const bankName = optionalString(body.bankName);
  const accountName = optionalString(body.accountName);
  const accountNumber = optionalString(body.accountNumber);
  const paymentNote = optionalNullableString(body.paymentNote);
  const releaseLabel = optionalString(body.releaseLabel);
  const releaseDate = optionalString(body.releaseDate);

  await getOrCreateSettings();

  const settings = await prisma.siteSetting.update({
    where: { id: SETTINGS_ID },
    data: {
      ...(bankName !== undefined ? { bankName } : {}),
      ...(accountName !== undefined ? { accountName } : {}),
      ...(accountNumber !== undefined ? { accountNumber } : {}),
      ...(paymentNote !== undefined ? { paymentNote } : {}),
      ...(releaseLabel !== undefined ? { releaseLabel } : {}),
      ...(releaseDate !== undefined ? { releaseDate } : {}),
    },
  });

  return NextResponse.json({ settings });
}
