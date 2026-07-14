import { Injectable } from '@nestjs/common';
import { UnifiedCsvService } from '../unified-csv/unified-csv.service';
import { UnifiedChainService } from '../unified-chain/unified-chain.service';
import { CharmIngestionService } from '../charm-ingestion/charm-ingestion.service';
import { CharmCommonService } from '../charm-common/charm-common.service';

@Injectable()
export class UnifiedIngestionService {
  constructor(
    private readonly csv: UnifiedCsvService,
    private readonly chain: UnifiedChainService,
    private readonly ingestion: CharmIngestionService,
    private readonly common: CharmCommonService
  ) {}

  async ingestCsvValidators(path: string) {
    this.common.log(`Unified ingestion: CSV validators from ${path}`);

    const structured = await this.csv.processCsv(path);
    const results = [];

    for (const row of structured.data) {
      const profile = this.chain.buildChainProfile(row.chain);
      if (!profile.supported) continue;

      const res = await this.ingestion.ingestValidatorData(row.address);

      results.push({
        row,
        chain: profile,
        ingestion: res
      });
    }

    return {
      total: structured.total,
      valid: structured.valid,
      final: structured.final,
      results
    };
  }
}