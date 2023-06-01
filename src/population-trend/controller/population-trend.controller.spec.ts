import { Test, TestingModule } from '@nestjs/testing';
import { PopulationTrendController } from './population-trend.controller';

describe('PopulationTrendController', () => {
  let controller: PopulationTrendController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PopulationTrendController],
    }).compile();

    controller = module.get<PopulationTrendController>(PopulationTrendController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
