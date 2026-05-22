export async function rpcRequest(chain: string, body: any) {
  const providers = RPC_PROVIDERS[chain];
  if (!providers) throw new Error("Unknown chain");

  for (const url of providers) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) continue;

      const data = await res.json();
      if (data.error) continue;

      return { ok: true, provider: url, data };
    } catch {
      continue;
    }
  }

  return { ok: false, provider: null, data: null };
}