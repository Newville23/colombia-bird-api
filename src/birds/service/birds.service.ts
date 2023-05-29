import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Bird } from '@prisma/client';

@Injectable()
export class BirdsService {
  constructor(private prisma: PrismaService) {}

  async getOne(id: string): Promise<Bird> {
    return this.prisma.bird.findUnique({
      where: { id: Number(id) },
      include: {
        gender: { select: { name: true } },
        family: { select: { name: true } },
        geographicalArea: true,
      },
    });
  }

  async getAll(): Promise<Bird[]> {
    return this.prisma.bird.findMany({
      include: {
        gender: { select: { name: true } },
        family: { select: { name: true } },
        geographicalArea: true,
      },
    });
  }
}
