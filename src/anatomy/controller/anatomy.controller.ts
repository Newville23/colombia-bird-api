import { Controller, Get, Param } from '@nestjs/common';
import { AnatomyService } from '../service/anatomy.service';
import { Anatomy } from '@prisma/client';

@Controller('anatomy')
export class AnatomyController {
  constructor(private anatomyService: AnatomyService) {}

  @Get(':id')
  async getOneAnatomyById(@Param() params): Promise<Anatomy> {
    return this.anatomyService.anatomyById(params.id);
  }
}
