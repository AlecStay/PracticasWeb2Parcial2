import { PrismaClient } from '@prisma/client';
import { CreateEntornoDTO, UpdateEntornoDTO } from '../dtos/entorno.dto';

const prisma = new PrismaClient();

export class EntornoRepository {
  async findAll() {
    return prisma.entorno.findMany();
  }

  async findOne(id: number) {
    return prisma.entorno.findUnique({ where: { identorno: id } });
  }

  async create(data: CreateEntornoDTO) {
    // Asegurarse de que los datos coincidan con los tipos esperados por Prisma
    const entornoData = {
      Descripcion: data.Descripcion,
    };
    return prisma.entorno.create({ data: entornoData });
  }

  async update(id: number, data: UpdateEntornoDTO) {
    return prisma.entorno.update({
      where: { identorno: id },
      data,
    });
  }

  async delete(id: number) {
    return prisma.entorno.update({
      where: { identorno: id },
      data: { Descripcion: 'Eliminado' }, // Considera agregar el campo Estado si es relevante para tu modelo de datos
    });
  }
}
