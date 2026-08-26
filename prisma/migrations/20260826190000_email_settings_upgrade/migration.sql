-- CreateEnum
CREATE TYPE "MembershipCircle" AS ENUM ('FOUNDING', 'COLLECTORS', 'HOUSE');

-- AlterTable Application
ALTER TABLE "Application" ADD COLUMN "membershipCircle" "MembershipCircle" NOT NULL DEFAULT 'FOUNDING';
ALTER TABLE "Application" ADD COLUMN "houseId" TEXT;
ALTER TABLE "Application" ADD COLUMN "receiptNo" TEXT;
ALTER TABLE "Application" ADD COLUMN "amountPaid" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Application_houseId_key" ON "Application"("houseId");
CREATE UNIQUE INDEX "Application_receiptNo_key" ON "Application"("receiptNo");

-- AlterTable SiteSetting
ALTER TABLE "SiteSetting" ADD COLUMN "releaseLabel" TEXT NOT NULL DEFAULT 'Edition One — 2027';
ALTER TABLE "SiteSetting" ADD COLUMN "releaseDate" TEXT NOT NULL DEFAULT '29 May 2027';
ALTER TABLE "SiteSetting" ADD COLUMN "amountNaira" INTEGER NOT NULL DEFAULT 430000;
ALTER TABLE "SiteSetting" ADD COLUMN "foundingDeadline" TEXT NOT NULL DEFAULT '2 weeks';
ALTER TABLE "SiteSetting" ADD COLUMN "collectorsDeadline" TEXT NOT NULL DEFAULT '1 month';
ALTER TABLE "SiteSetting" ADD COLUMN "houseDeadline" TEXT NOT NULL DEFAULT '1 month 2 weeks';
