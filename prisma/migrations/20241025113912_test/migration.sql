/*
  Warnings:

  - Added the required column `GroupId` to the `Texts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `texts` ADD COLUMN `GroupId` INTEGER NOT NULL;
