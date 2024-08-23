-- CreateTable
CREATE TABLE "Place" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ubication" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "isPublish" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Place_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tour" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "placeId" TEXT NOT NULL,
    "placeName" TEXT NOT NULL,
    "tourDate" TEXT NOT NULL,
    "tourEndDate" TEXT NOT NULL,
    "ubication" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "isPublish" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tour_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Tour_placeId_idx" ON "Tour"("placeId");

-- CreateIndex
CREATE INDEX "Tour_userId_idx" ON "Tour"("userId");
