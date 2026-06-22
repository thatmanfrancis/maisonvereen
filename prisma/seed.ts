// Run: npx prisma db seed
// Or:  node -r dotenv/config -r ts-node/register prisma/seed.ts
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  const email = "admin@maisonvereen.com";
  const plainPassword = "MaisonAdmin2024!"; // Change immediately after first login

  const existing = await prisma.admin.findUnique({ where: { email } });
  if (existing) {
    console.log("Admin already exists:", email);
    return;
  }

  const hash = await bcrypt.hash(plainPassword, 12);
  const admin = await prisma.admin.create({
    data: { email, password: hash, name: "Maison Vereen Admin" },
  });

  console.log("✓ Admin created:", admin.email);
  console.log("  Password:", plainPassword);
  console.log("  ⚠  Change this password immediately after first login.");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
