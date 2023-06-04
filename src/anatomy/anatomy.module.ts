import { Module } from '@nestjs/common';
import { AnatomyController } from './controller/anatomy.controller';
import { AnatomyService } from './service/anatomy.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AnatomyController],
  providers: [AnatomyService, PrismaService],
})
export class AnatomyModule {}
