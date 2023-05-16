import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BirdsController } from './birds/birds.controller';
import { AppService } from './app.service';
import { BirdsService } from './birds/service/birds.service';

@Module({
  imports: [],
  controllers: [AppController, BirdsController],
  providers: [AppService, BirdsService],
})
export class AppModule {}
