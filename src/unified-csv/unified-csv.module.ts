import { Module } from '@nestjs/common';
import { UnifiedCsvService } from './unified-csv.service';
import { CharmCommonModule } from '../charm-common/charm-common.module';

@Module({
  imports: [CharmCommonModule],
  providers: [UnifiedCsvService],
  exports: [UnifiedCsvService]
})
export class UnifiedCsvModule {}