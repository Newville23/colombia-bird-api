import { Module } from '@nestjs/common';
import { ConservationStatusService } from './service/conservation-status.service';
import { ConservationStatusController } from './controller/conservation-status.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ConservationStatusService, PrismaService],
  controllers: [ConservationStatusController],
})
export class ConservationStatusModule {}
