import { Module } from '@nestjs/common';
import { BirdsController } from './birds.controller';
import { BirdsService } from './service/birds.service';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  providers: [BirdsService, PrismaService],
  controllers: [BirdsController],
})
export class BirdsModule {}
