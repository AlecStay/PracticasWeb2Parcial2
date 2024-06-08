-- AlterTable
ALTER TABLE "Partido" ADD COLUMN     "entornoId" INTEGER;

-- AlterTable
ALTER TABLE "Torneo" ADD COLUMN     "entornoId" INTEGER;

-- AddForeignKey
ALTER TABLE "Torneo" ADD CONSTRAINT "Torneo_entornoId_fkey" FOREIGN KEY ("entornoId") REFERENCES "Entorno"("identorno") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partido" ADD CONSTRAINT "Partido_entornoId_fkey" FOREIGN KEY ("entornoId") REFERENCES "Entorno"("identorno") ON DELETE SET NULL ON UPDATE CASCADE;
