import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Torneo } from './entities/torneo.entity';
import { TorneoService } from './torneo.service';
import { TorneoController } from './torneo.controller';
import { TorneoResolver } from './torneo.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Torneo])],
  controllers: [TorneoController],
  providers: [TorneoService, TorneoResolver],
})
export class TorneoModule {}
