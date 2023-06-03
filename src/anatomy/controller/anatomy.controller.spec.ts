import { Test, TestingModule } from '@nestjs/testing';
import { AnatomyController } from './anatomy.controller';

describe('AnatomyController', () => {
  let controller: AnatomyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnatomyController],
    }).compile();

    controller = module.get<AnatomyController>(AnatomyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
