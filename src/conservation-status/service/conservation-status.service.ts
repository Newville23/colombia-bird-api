import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConservationStatus } from '@prisma/client';

@Injectable()
export class ConservationStatusService {
  constructor(private prisma: PrismaService){}

  async conservationStatuses(): Promise<ConservationStatus[]> {
    return this.prisma.conservationStatus.findMany();
  }
}
