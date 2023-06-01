import { Controller, Param, Get } from '@nestjs/common';
import { GenderService } from '../service/gender.service';
import { Gender } from '@prisma/client';

@Controller('gender')
export class GenderController {
  constructor(private genderService: GenderService) {}

  @Get(':id')
  async getOneById(@Param() params): Promise<Gender> {
    return this.genderService.getOneGenderById(params.id);
  }

  @Get()
  async getAll(): Promise<Gender[]> {
    return this.genderService.getAllGenders();
  }
}
