import { Module } from '@nestjs/common';
import { GenderService } from './service/gender.service';
import { GenderController } from './controller/gender.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [GenderService, PrismaService],
  controllers: [GenderController],
})
export class GenderModule {}
