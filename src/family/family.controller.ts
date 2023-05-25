import { Controller, Get } from '@nestjs/common';
import { FamilyService } from './service/family.service';
import { Family } from '@prisma/client';

@Controller('family')
export class FamilyController {
  constructor(private familyService: FamilyService) {}

  @Get()
  async getAllFamilies(): Promise<Family[]> {
    return this.familyService.families();
  }
}
