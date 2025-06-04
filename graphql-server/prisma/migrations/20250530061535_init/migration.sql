-- CreateEnum
CREATE TYPE "OripaType" AS ENUM ('POKEMON', 'YUGIOH', 'ONEPIECE', 'MTG', 'DRAGONBALL');

-- CreateTable
CREATE TABLE "Oripa" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "OripaType" NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Oripa_pkey" PRIMARY KEY ("id")
);
