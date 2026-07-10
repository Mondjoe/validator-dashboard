import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class CharmCronService {
  private readonly logger = new Logger(CharmCronService.name);

  @Cron(CronExpression.EVERY_MINUTE)
  handleValidatorSync() {
    this.logger.log('Running validator sync (Charm_Capsule)…');
  }

  @Cron('*/30 * * * * *') // every 30 seconds
  handleStakeSync() {
    this.logger.log('Running stake sync (Charm_Capsule)…');
  }

  @Cron('0 */2 * * * *') // every 2 minutes
  handleRewardsSync() {
    this.logger.log('Running rewards sync (Charm_Capsule)…');
  }
}