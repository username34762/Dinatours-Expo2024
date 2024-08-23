/*
  Warnings:

  - The primary key for the `Tour` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Tour" DROP CONSTRAINT "Tour_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "placeId" DROP NOT NULL,
ADD CONSTRAINT "Tour_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Tour_id_seq";
