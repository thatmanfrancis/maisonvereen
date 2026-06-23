// Prisma 7 config — replaces datasource url in schema.prisma
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "npx tsx seed.ts",
  },
  datasource: {
    url: process.env.DATABASE_URL as string,
  },
});
