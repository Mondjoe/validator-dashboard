import { Module } from '@nestjs/common';
import { CharmCronService } from './charm-cron.service';
import { CharmIngestionModule } from '../charm-ingestion/charm-ingestion.module';
import { CharmValidatorModule } from '../charm-validator/charm-validator.module';
import { CharmCommonModule } from '../charm-common/charm-common.module';

@Module({
  imports: [
    CharmIngestionModule,
    CharmValidatorModule,
    CharmCommonModule
  ],
  providers: [CharmCronService],
  exports: [CharmCronService]
})
export class CharmCronModule {}