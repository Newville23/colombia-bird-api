import { Controller, Get, Param } from '@nestjs/common';
import { BirdsService } from './service/birds.service';
import { Bird } from './interfaces/bird.interface';

@Controller('birds')
export class BirdsController {
  constructor(private birdsService: BirdsService) {}

  @Get(':id')
  async getOne(@Param() params): Promise<Bird> {
    return this.birdsService.getOne(params.id);
  }

  @Get()
  async getAll(): Promise<Bird[]> {
    return this.birdsService.getAll();
  }
}
