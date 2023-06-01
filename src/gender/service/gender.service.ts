import { Injectable } from '@nestjs/common';
import { Gender } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GenderService {
  constructor(private prisma: PrismaService) {}

  async getOneGenderById(id: string): Promise<Gender> {
    return this.prisma.gender.findUnique({ where: { id: Number(id) } });
  }

  async getAllGenders(): Promise<Gender[]> {
    return this.prisma.gender.findMany();
  }
}
