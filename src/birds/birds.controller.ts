import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { BirdsService } from './service/birds.service';
import { CreateBirdDto } from './dto';
import { Bird } from './interfaces/bird.interface';

@Controller('birds')
export class BirdsController {
  constructor(private birdsService: BirdsService) {}

  @Post()
  async create(@Body() createBirdDto: CreateBirdDto) {
    this.birdsService.create(createBirdDto);
  }

  @Get(':id')
  async getOne(@Param() params): Promise<Bird> {
    return this.birdsService.getOne(params.id);
  }

  @Get()
  async getAll(): Promise<Bird[]> {
    return this.birdsService.getAll();
  }
}
