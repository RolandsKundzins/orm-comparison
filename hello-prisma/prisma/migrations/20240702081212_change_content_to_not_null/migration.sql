/*
  Warnings:

  - Made the column `content` on table `post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
update post set content = "not empty";
ALTER TABLE `post` MODIFY `content` VARCHAR(191) NOT NULL;
