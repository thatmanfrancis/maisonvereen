-- AlterTable
ALTER TABLE "Application" ADD COLUMN "approvedAt" TIMESTAMP(3);

-- CreateIndex
CREATE INDEX "Application_approvedAt_idx" ON "Application"("approvedAt");

-- Backfill approvedAt from updatedAt for existing approved applications
UPDATE "Application"
SET "approvedAt" = "updatedAt"
WHERE "status" = 'APPROVED' AND "approvedAt" IS NULL;

-- CreateTable
CREATE TABLE "SiteSetting" (
    "id" TEXT NOT NULL DEFAULT 'default',
    "bankName" TEXT NOT NULL DEFAULT '',
    "accountName" TEXT NOT NULL DEFAULT '',
    "accountNumber" TEXT NOT NULL DEFAULT '',
    "paymentNote" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SiteSetting_pkey" PRIMARY KEY ("id")
);

-- Seed default empty settings row
INSERT INTO "SiteSetting" ("id", "bankName", "accountName", "accountNumber", "updatedAt")
VALUES ('default', '', '', '', CURRENT_TIMESTAMP)
ON CONFLICT ("id") DO NOTHING;
