-- CreateTable
CREATE TABLE `message` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Text` VARCHAR(50) NOT NULL,
    `Time` DATE NOT NULL,
    `ReciveId` INTEGER NOT NULL,
    `SendId` INTEGER NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
