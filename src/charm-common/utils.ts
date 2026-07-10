export function charmLog(message: string) {
  const timestamp = new Date().toISOString();
  console.log(`[Charm_Capsule] ${timestamp} — ${message}`);
}

export function toChecksum(address: string) {
  return address.trim().toLowerCase();
}