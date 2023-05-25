import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BirdsController } from './birds/birds.controller';
import { AppService } from './app.service';
import { BirdsService } from './birds/service/birds.service';
import { FamilyModule } from './family/family.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [FamilyModule],
  controllers: [AppController, BirdsController],
  providers: [AppService, BirdsService, PrismaService],
})
export class AppModule {}
