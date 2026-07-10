import { Module } from '@nestjs/common';
import { UnifiedChainService } from './unified-chain.service';
import { CharmCommonModule } from '../charm-common/charm-common.module';

@Module({
  imports: [CharmCommonModule],
  providers: [UnifiedChainService],
  exports: [UnifiedChainService]
})
export class UnifiedChainModule {}