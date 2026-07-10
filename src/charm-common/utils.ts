export function charmLog(message: string) {
  const timestamp = new Date().toISOString();
  console.log(`[Charm_Capsule] ${timestamp} — ${message}`);
}

export function toChecksum(address: string) {
  return address.trim().toLowerCase();
}

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function safeJSON(input: any) {
  try {
    return JSON.stringify(input, null, 2);
  } catch {
    return '{}';
  }
}