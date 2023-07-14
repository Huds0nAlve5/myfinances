/*
  Warnings:

  - You are about to alter the column `saldo` on the `contas` table. The data in that column could be lost. The data in that column will be cast from `Decimal(6,2)` to `Decimal(9,2)`.
  - You are about to alter the column `saldo` on the `despesas` table. The data in that column could be lost. The data in that column will be cast from `Decimal(6,2)` to `Decimal(9,2)`.
  - You are about to alter the column `saldo` on the `receitas` table. The data in that column could be lost. The data in that column will be cast from `Decimal(6,2)` to `Decimal(9,2)`.

*/
-- AlterTable
ALTER TABLE `contas` MODIFY `saldo` DECIMAL(9, 2) NOT NULL;

-- AlterTable
ALTER TABLE `despesas` MODIFY `saldo` DECIMAL(9, 2) NOT NULL;

-- AlterTable
ALTER TABLE `receitas` MODIFY `saldo` DECIMAL(9, 2) NOT NULL;
