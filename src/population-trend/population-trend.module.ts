import { Module } from '@nestjs/common';
import { PopulationTrendService } from './service/population-trend.service';
import { PopulationTrendController } from './controller/population-trend.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PopulationTrendService, PrismaService],
  controllers: [PopulationTrendController],
})
export class PopulationTrendModule {}
