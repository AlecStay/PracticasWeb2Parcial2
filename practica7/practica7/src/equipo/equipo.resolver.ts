import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EquipoService } from './equipo.service';
import { Equipo } from './entities/equipo.entity';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';

@Resolver(() => Equipo)
export class EquipoResolver {
  constructor(private readonly equipoService: EquipoService) {}

  @Query(() => [Equipo])
  async equipos(@Args('estado', { type: () => String, nullable: true }) estado?: string) {
    return this.equipoService.findAll(estado);
  }

  @Mutation(() => Equipo)
  async createEquipo(@Args('createEquipoDto') createEquipoDto: CreateEquipoDto) {
    return this.equipoService.create(createEquipoDto);
  }

  @Mutation(() => Equipo)
  async updateEquipo(@Args('id') id: number, @Args('updateEquipoDto') updateEquipoDto: UpdateEquipoDto) {
    return this.equipoService.update(id, updateEquipoDto);
  }

  @Mutation(() => Boolean)
  async deleteEquipo(@Args('id') id: number) {
    await this.equipoService.delete(id);
    return true;
  }
}
