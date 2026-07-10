import { Injectable, Logger } from '@nestjs/common';
import { CharmIngestionService } from '../charm-ingestion/charm-ingestion.service';
import { charmLog } from '../charm-common/utils';
import { SUPPORTED_CHAINS } from '../charm-common/constants';

@Injectable()
export class CharmValidatorService {
  private readonly logger = new Logger(CharmValidatorService.name);

  constructor(
    private readonly ingestion: CharmIngestionService
  ) {}

  async getAllValidators() {
    charmLog('Fetching all validators');
    return { message: 'All validators fetched (Charm_Capsule)' };
  }

  async getValidatorById(id: string) {
    charmLog(`Fetching validator ${id}`);
    return { message: `Validator ${id} fetched (Charm_Capsule)` };
  }

  async createValidator(data: any) {
    charmLog('Creating validator');

    // Auto-ingest validator data from chain
    if (SUPPORTED_CHAINS.includes(data.network)) {
      await this.ingestion.ingestValidatorData(data.address);
    }

    return {
      message: 'Validator created (Charm_Capsule)',
      payload: data
    };
  }

  async updateValidator(id: string, data: any) {
    charmLog(`Updating validator ${id}`);

    return {
      message: `Validator ${id} updated (Charm_Capsule)`,
      payload: data
    };
  }

  async syncValidatorFromChain(address: string, chain: string) {
    charmLog(`Syncing validator ${address} from ${chain}`);

    if (!SUPPORTED_CHAINS.includes(chain)) {
      return {
        error: true,
        message: `Chain ${chain} not supported (Charm_Capsule)`
      };
    }

    return this.ingestion.ingestValidatorData(address);
  }
}