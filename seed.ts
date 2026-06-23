import "dotenv/config";
import { prisma } from "./lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  const email = "apply@maisonvereen.com";
  const name = "Maison Vereen";
  const plainPassword = "Admin@123";

  console.log("Seeding database...");

  // Hash password correctly using bcryptjs before storing
  const hash = await bcrypt.hash(plainPassword, 12);

  // Use upsert to avoid duplicate errors if seed is re-run
  const admin = await prisma.admin.upsert({
    where: { email },
    update: {
      name,
      password: hash,
    },
    create: {
      email,
      name,
      password: hash,
    },
  });

  console.log("-----------------------------------------------------");
  console.log(`✓ Admin user successfully seeded.`);
  console.log(`  Name:      ${admin.name}`);
  console.log(`  Email:     ${admin.email}`);
  console.log(`  Password:  ${plainPassword}`);
  console.log("-----------------------------------------------------");
}

main()
  .catch((err) => {
    console.error("Error during database seed execution:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
