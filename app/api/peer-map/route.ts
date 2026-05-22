export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const chain = searchParams.get("chain");

  const peersRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/peers?chain=${chain}`
  );
  const peers = await peersRes.json();

  if (peers.error) return Response.json(peers);

  const results = [];

  for (const p of peers.peers) {
    const ip =
      p.network?.remoteAddress?.split(":")[0] ||
      p.address ||
      p.ip ||
      null;

    if (!ip) continue;

    const geoRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/geo`,
      {
        method: "POST",
        body: JSON.stringify({ ip })
      }
    );

    const geo = await geoRes.json();
    results.push(geo);
  }

  return Response.json({ peers: results });
}