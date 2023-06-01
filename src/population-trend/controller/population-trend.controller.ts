import { Controller, Get, Param } from '@nestjs/common';
import { PopulationTrendService } from '../service/population-trend.service';
import { PopulationTrend } from '@prisma/client';

@Controller('population-trend')
export class PopulationTrendController {
  constructor(private populationTrendService: PopulationTrendService) {}

  @Get(':code')
  async getOne(@Param() params): Promise<PopulationTrend> {
    return this.populationTrendService.getOnePopulationTrendByCode(params.code);
  }

  @Get()
  async getAll(): Promise<PopulationTrend[]> {
    return this.populationTrendService.getAllPopulationTrends();
  }
}
