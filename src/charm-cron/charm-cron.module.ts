import { Module } from '@nestjs/common';
import { CharmCronService } from './charm-cron.service';

@Module({
  providers: [CharmCronService],
  exports: [CharmCronService]
})
export class CharmCronModule {}