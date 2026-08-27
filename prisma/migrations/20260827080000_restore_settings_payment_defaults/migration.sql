-- Restore shared payment defaults on SiteSetting
ALTER TABLE "SiteSetting" ADD COLUMN IF NOT EXISTS "amountNaira" INTEGER NOT NULL DEFAULT 430000;
ALTER TABLE "SiteSetting" ADD COLUMN IF NOT EXISTS "foundingDeadline" TEXT NOT NULL DEFAULT '2 weeks';
ALTER TABLE "SiteSetting" ADD COLUMN IF NOT EXISTS "collectorsDeadline" TEXT NOT NULL DEFAULT '1 month';
ALTER TABLE "SiteSetting" ADD COLUMN IF NOT EXISTS "houseDeadline" TEXT NOT NULL DEFAULT '1 month 2 weeks';
