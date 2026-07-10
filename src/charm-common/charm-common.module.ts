import { Module } from '@nestjs/common';
import { CharmCommonService } from './charm-common.service';

@Module({
  providers: [CharmCommonService],
  exports: [CharmCommonService]
})
export class CharmCommonModule {}