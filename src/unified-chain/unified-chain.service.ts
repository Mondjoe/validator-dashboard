import { Injectable } from '@nestjs/common';
import { CharmCommonService } from '../charm-common/charm-common.service';
import { RPC_ENDPOINTS, SUPPORTED_CHAINS } from '../charm-common/constants';

@Injectable()
export class UnifiedChainService {
  constructor(private readonly common: CharmCommonService) {}

  getSupportedChains() {
    return SUPPORTED_CHAINS;
  }

  getRpcEndpoint(chain: string) {
    if (!this.common.isSupportedChain(chain)) {
      return null;
    }
    return RPC_ENDPOINTS[chain];
  }

  buildChainProfile(chain: string) {
    const supported = this.common.isSupportedChain(chain);

    return {
      chain,
      supported,
      rpc: supported ? RPC_ENDPOINTS[chain] : null,
      org: 'Charm_Capsule'
    };
  }
}