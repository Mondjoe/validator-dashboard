import { Module } from '@nestjs/common';
import { CharmIngestionService } from './charm-ingestion.service';

@Module({
  providers: [CharmIngestionService],
  exports: [CharmIngestionService]
})
export class CharmIngestionModule {}