import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Partido } from './entities/partido.entity';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';

@Injectable()
export class PartidoService {
  constructor(
    @InjectRepository(Partido)
    private readonly partidoRepository: Repository<Partido>,
  ) {}

  create(createPartidoDto: CreatePartidoDto): Promise<Partido> {
    const partido = this.partidoRepository.create({...createPartidoDto, torneo: { idtorneo: createPartidoDto.idtorneo }, equipo1: { idequipo: createPartidoDto.equipo1Id }});
    return this.partidoRepository.save(partido);
  }

  findAll(estado?: string): Promise<Partido[]> {
    if (estado) {
      return this.partidoRepository.find({ where: { Estado: estado } });
    }
    return this.partidoRepository.find();
  }

  findOne(id: number): Promise<Partido> {
    return this.partidoRepository.findOne({ where: { idpartido: id } });
  }

  async update(id: number, updatePartidoDto: UpdatePartidoDto): Promise<Partido> {
    await this.partidoRepository.update(id, updatePartidoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.partidoRepository.delete(id);
  }

  async delete(id: number): Promise<void> {
    await this.partidoRepository.update(id, { Estado: 'Eliminado' });
  }
  
}
