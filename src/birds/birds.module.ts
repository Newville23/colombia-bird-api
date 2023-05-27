import { Module } from '@nestjs/common';
import { BirdsController } from './birds.controller';
import { BirdsService } from './service/birds.service';

@Module({
  providers: [BirdsService],
  controllers: [BirdsController],
})
export class BirdsModule {}
