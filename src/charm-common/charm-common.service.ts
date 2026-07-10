import { Injectable } from '@nestjs/common';
import { charmLog } from './utils';
import { SUPPORTED_CHAINS } from './constants';

@Injectable()
export class CharmCommonService {
  isSupportedChain(chain: string): boolean {
    return SUPPORTED_CHAINS.includes(chain);
  }

  normalizeAddress(address: string): string {
    return address.trim().toLowerCase();
  }

  log(message: string) {
    charmLog(message);
  }

  validatePayload(payload: any) {
    if (!payload || typeof payload !== 'object') {
      return { valid: false, reason: 'Invalid payload format' };
    }
    return { valid: true };
  }
}