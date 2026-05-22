import { VALIDATORS } from "@/lib/validators";

export async function GET() {
  const results = [];

  for (const v of VALIDATORS) {
    const rewardsRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/rewards?chain=${v.chain}&pubkey=${v.pubkey}`
    );
    const rewards = await rewardsRes.json();

    const uptimeRes = await fetch(
      `https://beaconcha.in/api/v1/validator/${v.pubkey}/attestationefficiency`
    );
    const uptime = await uptimeRes.json();

    const performanceRes = await fetch(
      `https://beaconcha.in/api/v1/validator/${v.pubkey}/performance`
    );
    const performance = await performanceRes.json();

    results.push({
      id: v.id,
      chain: v.chain,
      pubkey: v.pubkey,
      rewards,
      uptime: uptime.data?.efficiency || 0,
      performance: performance.data || {}
    });
  }

  return Response.json({ validators: results });
}