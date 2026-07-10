import { Module } from '@nestjs/common';
import { CharmValidatorService } from './charm-validator.service';
import { CharmValidatorController } from './charm-validator.controller';
import { CharmIngestionModule } from '../charm-ingestion/charm-ingestion.module';
import { CharmCommonModule } from '../charm-common/charm-common.module';

@Module({
  imports: [CharmIngestionModule, CharmCommonModule],
  controllers: [CharmValidatorController],
  providers: [CharmValidatorService],
  exports: [CharmValidatorService]
})
export class CharmValidatorModule {}