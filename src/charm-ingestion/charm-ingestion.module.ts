import { Module } from '@nestjs/common';
import { CharmIngestionService } from './charm-ingestion.service';
import { CharmCommonModule } from '../charm-common/charm-common.module';

@Module({
  imports: [CharmCommonModule],
  providers: [CharmIngestionService],
  exports: [CharmIngestionService]
})
export class CharmIngestionModule {}