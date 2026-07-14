import { Module } from '@nestjs/common';

import { CharmValidatorModule } from './charm-validator/charm-validator.module';
import { CharmCronModule } from './charm-cron/charm-cron.module';
import { CharmIngestionModule } from './charm-ingestion/charm-ingestion.module';
import { CharmCommonModule } from './charm-common/charm-common.module';

@Module({
  imports: [
    CharmValidatorModule,
    CharmCronModule,
    CharmIngestionModule,
    CharmCommonModule
  ],
})
export class AppModule {}