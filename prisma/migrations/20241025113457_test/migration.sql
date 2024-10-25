-- CreateTable
CREATE TABLE `Group` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Peaple1` INTEGER NOT NULL,
    `Peaple2` INTEGER NOT NULL,

    UNIQUE INDEX `Group_Peaple1_key`(`Peaple1`),
    UNIQUE INDEX `Group_Peaple2_key`(`Peaple2`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
