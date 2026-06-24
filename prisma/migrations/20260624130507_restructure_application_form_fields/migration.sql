/*
  Warnings:

  - You are about to drop the column `drives` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `legacy` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `occupation` on the `Application` table. All the data in the column will be lost.
  - Added the required column `whatMadeApply` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whatYouDo` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" DROP COLUMN "drives",
DROP COLUMN "legacy",
DROP COLUMN "occupation",
ADD COLUMN     "anythingElse" TEXT,
ADD COLUMN     "earlyThing" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "referredBy" TEXT,
ADD COLUMN     "whatMadeApply" TEXT NOT NULL,
ADD COLUMN     "whatYouDo" TEXT NOT NULL;
