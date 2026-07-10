import { Injectable } from '@nestjs/common';

@Injectable()
export class CharmValidatorService {
  getAllValidators() {
    return { message: 'All validators fetched (Charm_Capsule)' };
  }

  getValidatorById(id: string) {
    return { message: `Validator ${id} fetched (Charm_Capsule)` };
  }

  createValidator(data: any) {
    return { message: 'Validator created (Charm_Capsule)', payload: data };
  }

  updateValidator(id: string, data: any) {
    return { message: `Validator ${id} updated (Charm_Capsule)`, payload: data };
  }
}