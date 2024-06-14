import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class EquipoRepository {
    async findAll() {
        return prisma.equipo.findMany();
    }

    async findOne(id: number) {
        return prisma.equipo.findUnique({ where: { idequipo: id } });
    }

    async create(data: any) {
        // Aquí asumimos que el DTO tiene los campos correspondientes (Descripción, Serie, entornoId)
        return prisma.equipo.create({ data });
    }

    async update(id: number, data: any) {
        return prisma.equipo.update({
            where: { idequipo: id },
            data,
        });
    }

    async delete(id: number) {
        return prisma.equipo.update({
            where: { idequipo: id },
            data: { Estado: 'Eliminado' },
        });
    }
}
