/*
  Warnings:

  - A unique constraint covering the columns `[short]` on the table `URL` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "URL" ADD COLUMN     "clicks" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "URL_short_key" ON "URL"("short");
