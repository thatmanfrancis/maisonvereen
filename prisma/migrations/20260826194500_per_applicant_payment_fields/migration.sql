-- AlterTable
ALTER TABLE "Application" ADD COLUMN "paymentDeadline" TEXT;

-- AlterTable: amount & deadlines move to per-applicant fields
ALTER TABLE "SiteSetting" DROP COLUMN IF EXISTS "amountNaira";
ALTER TABLE "SiteSetting" DROP COLUMN IF EXISTS "foundingDeadline";
ALTER TABLE "SiteSetting" DROP COLUMN IF EXISTS "collectorsDeadline";
ALTER TABLE "SiteSetting" DROP COLUMN IF EXISTS "houseDeadline";
