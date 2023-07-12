-- CreateTable
CREATE TABLE `contas` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `conta` VARCHAR(191) NOT NULL,
    `saldo` DECIMAL(6, 2) NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `receitas` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `saldo` DECIMAL(6, 2) NOT NULL,
    `data_inclusao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `conta_id` INTEGER NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `despesas` (
    `codigo` INTEGER NOT NULL AUTO_INCREMENT,
    `saldo` DECIMAL(6, 2) NOT NULL,
    `data_inclusao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `conta_id` INTEGER NOT NULL,

    PRIMARY KEY (`codigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `receitas` ADD CONSTRAINT `receitas_conta_id_fkey` FOREIGN KEY (`conta_id`) REFERENCES `contas`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `despesas` ADD CONSTRAINT `despesas_conta_id_fkey` FOREIGN KEY (`conta_id`) REFERENCES `contas`(`codigo`) ON DELETE RESTRICT ON UPDATE CASCADE;
