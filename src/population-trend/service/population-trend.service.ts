import { Injectable } from '@nestjs/common';
import { PopulationTrend } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PopulationTrendService {
  constructor(private prisma: PrismaService) {}

  async getOnePopulationTrendByCode(code: string): Promise<PopulationTrend> {
    return this.prisma.populationTrend.findUnique({
      where: { code: Number(code) },
    });
  }

  async getAllPopulationTrends(): Promise<PopulationTrend[]> {
    return this.prisma.populationTrend.findMany();
  }
}
