"use client";

import { OperatorFullscreen } from "@/components/OperatorFullscreen";
import { RewardAnalytics } from "@/components/RewardAnalytics";
import { GasTracker } from "@/components/GasTracker";
import { SyncVisualizer } from "@/components/SyncVisualizer";
import { PeerMap } from "@/components/PeerMap";
import { PortfolioAggregator } from "@/components/PortfolioAggregator";
import { OperatorAIAssistant } from "@/components/OperatorAIAssistant";
import { IncidentTimeline } from "@/components/IncidentTimeline";
import { SnapshotManager } from "@/components/SnapshotManager";

export default function MissionControl() {
  const validator = {
    id: "main",
    chain: "ETH",
    pubkey: "0x0000000000000000000000000000000000000000"
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "auto",
        background: "#050507",
        padding: 20,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
        gap: 20
      }}
    >
      <OperatorFullscreen />

      <RewardAnalytics validator={validator} />
      <GasTracker validator={validator} />
      <PortfolioAggregator validator={validator} />
      <OperatorAIAssistant validator={validator} />
      <SyncVisualizer validator={validator} />
      <PeerMap validator={validator} />
      <IncidentTimeline />
      <SnapshotManager validator={validator} />
    </div>
  );
}