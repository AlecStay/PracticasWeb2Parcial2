import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { PartidoService } from './partido.service';
import { Partido } from './entities/partido.entity';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';

@Resolver(() => Partido)
export class PartidoResolver {
  constructor(private readonly partidoService: PartidoService) {}

  @Query(() => [Partido])
  async partidos(@Args('estado', { type: () => String, nullable: true }) estado?: string) {
    return this.partidoService.findAll(estado);
  }

  @Mutation(() => Partido)
  async createPartido(@Args('createPartidoDto', { type: () => CreatePartidoDto }) createPartidoDto: CreatePartidoDto) {
    return this.partidoService.create(createPartidoDto);
  }

  @Mutation(() => Partido)
  async updatePartido(
    @Args('id', { type: () => ID }) id: number,
    @Args('updatePartidoDto', { type: () => UpdatePartidoDto }) updatePartidoDto: UpdatePartidoDto,
  ) {
    return this.partidoService.update(id, updatePartidoDto);
  }

  @Mutation(() => Boolean)
  async deletePartido(@Args('id', { type: () => ID }) id: number) {
    await this.partidoService.delete(id);
    return true;
  }
}
