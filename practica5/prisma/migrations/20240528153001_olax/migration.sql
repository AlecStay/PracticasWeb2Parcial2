-- AlterTable
ALTER TABLE "Equipo" ADD COLUMN     "entornoId" INTEGER;

-- AddForeignKey
ALTER TABLE "Equipo" ADD CONSTRAINT "Equipo_entornoId_fkey" FOREIGN KEY ("entornoId") REFERENCES "Entorno"("identorno") ON DELETE SET NULL ON UPDATE CASCADE;
