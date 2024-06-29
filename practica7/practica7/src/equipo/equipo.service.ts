import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Equipo } from './entities/equipo.entity';

@Injectable()
export class EquipoService {
  constructor(
    @InjectRepository(Equipo)
    private readonly equipoRepository: Repository<Equipo>,
  ) {}

  create(createEquipoDto: CreateEquipoDto): Promise<Equipo> {
    const equipo = this.equipoRepository.create(createEquipoDto);
    return this.equipoRepository.save(equipo);
  }

  findAll(estado?: string): Promise<Equipo[]> {
    if (estado) {
      return this.equipoRepository.find({ where: { Estado: estado } });
    }
    return this.equipoRepository.find();
  }

  findOne(id: number): Promise<Equipo> {
    return this.equipoRepository.findOneBy({ idequipo: id });
  }

  update(id: number, updateEquipoDto: UpdateEquipoDto): Promise<Equipo> {
    return this.equipoRepository.save({ ...updateEquipoDto, idequipo: id });
  }
  
  async remove(id: number): Promise<void> {
    await this.equipoRepository.delete(id);
  }

  async delete(id: number): Promise<void> {
    await this.equipoRepository.update(id, { Estado: 'Eliminado' });
  }
}
