import { PrismaClient } from '@prisma/client';
import { CreatePartidoDTO, UpdatePartidoDTO } from '../dtos/partido.dto';

const prisma = new PrismaClient();

export class PartidoRepository {
  async findAll() {
    return prisma.partido.findMany();
  }

  async findOne(id: number) {
    return prisma.partido.findUnique({ where: { idpartido: id } });
  }

  async create(data: CreatePartidoDTO) {
    // Asegurarse de que los datos coincidan con los tipos esperados por Prisma
    const partidoData = {
      torneoId: data.torneoId,
      equipo1Id: data.equipo1Id,
      equipo2Id: data.equipo2Id,
      golesEquipo1: data.golesEquipo1,
      golesEquipo2: data.golesEquipo2,
      observacion: data.observacion,
      Estado: data.Estado || 'Activo',
    };
    return prisma.partido.create({ data: partidoData });
  }

  async update(id: number, data: UpdatePartidoDTO) {
    return prisma.partido.update({
      where: { idpartido: id },
      data,
    });
  }

  async delete(id: number) {
    return prisma.partido.update({
      where: { idpartido: id },
      data: { Estado: 'Eliminado' },
    });
  }
}
