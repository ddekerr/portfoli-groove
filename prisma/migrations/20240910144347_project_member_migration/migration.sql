/*
  Warnings:

  - You are about to alter the column `telegram` on the `Social` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `facebook` on the `Social` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `instagram` on the `Social` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `linkedIn` on the `Social` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `watsapp` on the `Social` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Made the column `memberId` on table `Social` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Social" DROP CONSTRAINT "Social_memberId_fkey";

-- DropIndex
DROP INDEX "Social_memberId_key";

-- AlterTable
ALTER TABLE "Social" ALTER COLUMN "telegram" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "facebook" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "instagram" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "linkedIn" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "watsapp" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "memberId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Social" ADD CONSTRAINT "Social_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
