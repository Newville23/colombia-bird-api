import { Test, TestingModule } from '@nestjs/testing';
import { AnatomyService } from './anatomy.service';

describe('AnatomyService', () => {
  let service: AnatomyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnatomyService],
    }).compile();

    service = module.get<AnatomyService>(AnatomyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
