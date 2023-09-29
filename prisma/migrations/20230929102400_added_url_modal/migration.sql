-- DropIndex
DROP INDEX "User_id_key";

-- AlterTable
ALTER TABLE "User" ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "URL" (
    "id" SERIAL NOT NULL,
    "short" TEXT NOT NULL,
    "long" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "URL_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "URL" ADD CONSTRAINT "URL_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
