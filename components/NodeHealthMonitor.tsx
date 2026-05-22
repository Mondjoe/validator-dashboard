"use client";

import { useEffect, useState } from "react";
import { getEthNodeHealth } from "@/lib/nodeHealthEth";
import { getTonNodeHealth } from "@/lib/nodeHealthTon";
import { getTronNodeHealth } from "@/lib/nodeHealthTron";

export function NodeHealthMonitor() {
  const [eth, setEth] = useState(null);
  const [ton, setTon] = useState(null);
  const [tron, setTron] = useState(null);

  async function load() {
    try { setEth(await getEthNodeHealth()); } catch {}
    try { setTon(await getTonNodeHealth()); } catch {}
    try { setTron(await getTronNodeHealth()); } catch {}
  }

  useEffect(() => {
    load();
    const interval = setInterval(load, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="panel">
      <h2>Node Health Monitor</h2>

      {/* ETH */}
      <div className="panel" style={{ background: "var(--bg-panel-alt)" }}>
        <h3>Ethereum Node</h3>
        <pre>{JSON.stringify(eth, null, 2)}</pre>
      </div>

      {/* TON */}
      <div className="panel" style={{ background: "var(--bg-panel-alt)" }}>
        <h3>TON Node</h3>
        <pre>{JSON.stringify(ton, null, 2)}</pre>
      </div>

      {/* TRON */}
      <div className="panel" style={{ background: "var(--bg-panel-alt)" }}>
        <h3>TRON Node</h3>
        <pre>{JSON.stringify(tron, null, 2)}</pre>
      </div>
    </div>
  );
}