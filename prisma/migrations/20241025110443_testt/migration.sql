/*
  Warnings:

  - You are about to drop the `message` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `message`;

-- CreateTable
CREATE TABLE `Texts` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Text` VARCHAR(50) NOT NULL,
    `Time` DATE NOT NULL,
    `ReciveId` INTEGER NOT NULL,
    `SendId` INTEGER NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
