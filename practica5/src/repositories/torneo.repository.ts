import { PrismaClient } from '@prisma/client';
import { CreateTorneoDTO, UpdateTorneoDTO } from '../dtos/torneo.dto';

const prisma = new PrismaClient();

export class TorneoRepository {
  async findAll() {
    return prisma.torneo.findMany();
  }

  async findOne(id: number) {
    return prisma.torneo.findUnique({ where: { idtorneo: id } });
  }

  async create(data: CreateTorneoDTO) {
    // Asegurarse de que los datos coincidan con los tipos esperados por Prisma
    const torneoData = {
      Descripcion: data.Descripcion,
      Estado: data.Estado || 'Activo',
    };
    return prisma.torneo.create({ data: torneoData });
  }

  async update(id: number, data: UpdateTorneoDTO) {
    return prisma.torneo.update({
      where: { idtorneo: id },
      data,
    });
  }

  async delete(id: number) {
    return prisma.torneo.update({
      where: { idtorneo: id },
      data: { Estado: 'Eliminado' },
    });
  }
}
