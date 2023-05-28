import { Controller, Get } from '@nestjs/common';
import { ConservationStatusService } from '../service/conservation-status.service';
import { ConservationStatus } from '@prisma/client';

@Controller('conservation-status')
export class ConservationStatusController {
  constructor(private conservationStatusService: ConservationStatusService) {}


  @Get()
  async getAllConservationStatuses(): Promise<ConservationStatus[]> {
    return this.conservationStatusService.conservationStatuses();
  }
}
