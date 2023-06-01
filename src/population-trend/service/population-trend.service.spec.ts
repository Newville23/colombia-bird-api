import { Test, TestingModule } from '@nestjs/testing';
import { PopulationTrendService } from './population-trend.service';

describe('PopulationTrendService', () => {
  let service: PopulationTrendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PopulationTrendService],
    }).compile();

    service = module.get<PopulationTrendService>(PopulationTrendService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
