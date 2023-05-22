-- CreateTable
CREATE TABLE "Bird" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "colName" TEXT NOT NULL,
    "sciName" TEXT NOT NULL,
    "familyId" INTEGER NOT NULL,
    "genderId" INTEGER NOT NULL,
    "populationTrendCode" INTEGER NOT NULL,
    "conservationStatusCode" TEXT NOT NULL,
    "anatomyId" INTEGER,
    "size" INTEGER NOT NULL,
    "geographicalAreaId" INTEGER NOT NULL,

    CONSTRAINT "Bird_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Family" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "species" INTEGER NOT NULL,

    CONSTRAINT "Family_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gender" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "species" INTEGER NOT NULL,
    "description" TEXT,
    "familyId" INTEGER NOT NULL,

    CONSTRAINT "Gender_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PopulationTrend" (
    "code" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "PopulationTrend_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "ConservationStatus" (
    "code" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ConservationStatus_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "GeographicalArea" (
    "id" SERIAL NOT NULL,
    "department" TEXT,
    "region" TEXT,
    "habitat" TEXT NOT NULL,
    "polygon" JSONB,

    CONSTRAINT "GeographicalArea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anatomy" (
    "id" SERIAL NOT NULL,
    "head" TEXT NOT NULL,
    "neck" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "wings" TEXT NOT NULL,
    "tail" TEXT NOT NULL,
    "legs" TEXT NOT NULL,

    CONSTRAINT "Anatomy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bird_name_key" ON "Bird"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Family_name_key" ON "Family"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Gender_name_key" ON "Gender"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PopulationTrend_label_key" ON "PopulationTrend"("label");

-- CreateIndex
CREATE UNIQUE INDEX "ConservationStatus_label_key" ON "ConservationStatus"("label");

-- AddForeignKey
ALTER TABLE "Bird" ADD CONSTRAINT "Bird_familyId_fkey" FOREIGN KEY ("familyId") REFERENCES "Family"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bird" ADD CONSTRAINT "Bird_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "Gender"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bird" ADD CONSTRAINT "Bird_populationTrendCode_fkey" FOREIGN KEY ("populationTrendCode") REFERENCES "PopulationTrend"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bird" ADD CONSTRAINT "Bird_conservationStatusCode_fkey" FOREIGN KEY ("conservationStatusCode") REFERENCES "ConservationStatus"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bird" ADD CONSTRAINT "Bird_anatomyId_fkey" FOREIGN KEY ("anatomyId") REFERENCES "Anatomy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bird" ADD CONSTRAINT "Bird_geographicalAreaId_fkey" FOREIGN KEY ("geographicalAreaId") REFERENCES "GeographicalArea"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gender" ADD CONSTRAINT "Gender_familyId_fkey" FOREIGN KEY ("familyId") REFERENCES "Family"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
