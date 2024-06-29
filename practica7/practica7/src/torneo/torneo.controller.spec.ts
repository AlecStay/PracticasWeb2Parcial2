import { Test, TestingModule } from '@nestjs/testing';
import { TorneoController } from './torneo.controller';
import { TorneoService } from './torneo.service';

describe('TorneoController', () => {
  let controller: TorneoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TorneoController],
      providers: [TorneoService],
    }).compile();

    controller = module.get<TorneoController>(TorneoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
