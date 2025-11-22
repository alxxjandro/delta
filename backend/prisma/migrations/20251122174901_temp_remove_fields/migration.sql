/*
  Warnings:

  - You are about to drop the column `lastAttemptAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `loginAttempts` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "lastAttemptAt",
DROP COLUMN "loginAttempts";
