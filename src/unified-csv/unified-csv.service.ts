import { Injectable } from '@nestjs/common';
import { CharmCommonService } from '../charm-common/charm-common.service';
import * as fs from 'fs';
import * as csv from 'csv-parser';

@Injectable()
export class UnifiedCsvService {
  constructor(private readonly common: CharmCommonService) {}

  async loadCsv(path: string): Promise<any[]> {
    this.common.log(`Loading CSV: ${path}`);

    return new Promise((resolve) => {
      const rows = [];
      fs.createReadStream(path)
        .pipe(csv())
        .on('data', (row) => rows.push(row))
        .on('end', () => resolve(rows));
    });
  }

  validateRow(row: any) {
    if (!row.address || !row.chain || !row.timestamp) {
      return { valid: false, reason: 'Missing required fields' };
    }
    return { valid: true };
  }

  normalizeRow(row: any) {
    return {
      address: this.common.normalizeAddress(row.address),
      chain: row.chain.toLowerCase(),
      timestamp: Number(row.timestamp),
      raw: row
    };
  }

  dedupe(rows: any[]) {
    const seen = new Set();
    const result = [];

    for (const row of rows) {
      const key = `${row.address}-${row.chain}-${row.timestamp}`;
      if (!seen.has(key)) {
        seen.add(key);
        result.push(row);
      }
    }

    return result;
  }

  async processCsv(path: string) {
    const loaded = await this.loadCsv(path);

    const validated = loaded.filter((row) => this.validateRow(row).valid);

    const normalized = validated.map((row) => this.normalizeRow(row));

    const deduped = this.dedupe(normalized);

    return {
      total: loaded.length,
      valid: validated.length,
      final: deduped.length,
      data: deduped
    };
  }
}