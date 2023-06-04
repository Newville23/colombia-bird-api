import { Injectable } from '@nestjs/common';
import { Anatomy } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnatomyService {
  constructor(private prismaService: PrismaService) {}

  async anatomyById(id: string): Promise<Anatomy> {
    return this.prismaService.anatomy.findUnique({ where: { id: Number(id) } });
  }
}
