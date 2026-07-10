import { Module } from '@nestjs/common';
import { CharmValidatorService } from './charm-validator.service';
import { CharmValidatorController } from './charm-validator.controller';

@Module({
  controllers: [CharmValidatorController],
  providers: [CharmValidatorService],
  exports: [CharmValidatorService]
})
export class CharmValidatorModule {}