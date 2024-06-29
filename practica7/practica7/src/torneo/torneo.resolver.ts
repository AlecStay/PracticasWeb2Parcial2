import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TorneoService } from './torneo.service';
import { Torneo } from './entities/torneo.entity';
import { CreateTorneoDto } from './dto/create-torneo.dto';
import { ID } from '@nestjs/graphql';

@Resolver(() => Torneo)
export class TorneoResolver {
  constructor(private readonly torneoService: TorneoService) {}

  @Query(() => [Torneo])
  async torneos(@Args('estado', { type: () => String, nullable: true }) estado?: string) {
    return this.torneoService.findAll(estado);
  }

  @Mutation(() => Torneo)
  async createTorneo(@Args('createTorneoDto', { type: () => CreateTorneoDto }) createTorneoDto: CreateTorneoDto) {
    return this.torneoService.create(createTorneoDto);
  }

  @Mutation(() => Boolean)
  async deleteTorneo(@Args('id', { type: () => ID }) id: number) {
    await this.torneoService.delete(id);
    return true;
  }
}
