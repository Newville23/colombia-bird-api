import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FamilyModule } from './family/family.module';
import { PrismaService } from './prisma/prisma.service';
import { ConservationStatusModule } from './conservation-status/conservation-status.module';
import { BirdsModule } from './birds/birds.module';

@Module({
  imports: [FamilyModule, ConservationStatusModule, BirdsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
