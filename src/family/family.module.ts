import { Module } from '@nestjs/common';
import { FamilyController } from './family.controller';
import { FamilyService } from './service/family.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FamilyController],
  providers: [FamilyService, PrismaService],
})
export class FamilyModule {}
