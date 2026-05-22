"use client";

import { BrandHeader } from "@/components/BrandHeader";
import { ChainStatus } from "@/components/ChainStatus";
import { CommandPalette } from "@/components/CommandPalette";
import { WalletActivityFeed } from "@/components/WalletActivityFeed";
import { OperatorAlerts } from "@/components/OperatorAlerts";
import { SecureCommandRunner } from "@/components/SecureCommandRunner";
import { RewardAnalytics } from "@/components/RewardAnalytics";
import { GasTracker } from "@/components/GasTracker";
import { OperatorHotkeys } from "@/components/OperatorHotkeys";
import { IncidentTimeline } from "@/components/IncidentTimeline";
import { ProfitabilityModel } from "@/components/ProfitabilityModel";
import { PriceOracle } from "@/components/PriceOracle";
import { OperatorSessionRecorder } from "@/components/OperatorSessionRecorder";
import { SyncVisualizer } from "@/components/SyncVisualizer";
import { OperatorAIAssistant } from "@/components/OperatorAIAssistant";
import { PortfolioAggregator } from "@/components/PortfolioAggregator";
import { SnapshotManager } from "@/components/SnapshotManager";
import { PeerMap } from "@/components/PeerMap";
import { ValidatorComparison } from "@/components/ValidatorComparison";
import { LogsStream } from "@/components/LogsStream";
import { OperatorTerminal } from "@/components/OperatorTerminal";
import { NodeHealthMonitor } from "@/components/NodeHealthMonitor";
import { UnifiedWalletPanel } from "@/components/UnifiedWalletPanel";
import { ValidatorMetricsPanel } from "@/components/ValidatorMetricsPanel";
import { ConnectPanel } from "@/components/ConnectPanel";
import { OperatorSidebar } from "@/components/OperatorSidebar";

export default function DashboardPage() {
  return (
    <div style={{ display: "flex" }}>
      <OperatorSidebar />
      <OperatorHotkeys />
      <OperatorSessionRecorder />

      <div style={{ padding: 20, flex: 1, marginLeft: 240 }}>
        <BrandHeader />

        <p className="neon fade-in">Your validator dashboard is running.</p>

        <ChainStatus />
        <OperatorAlerts />
        <CommandPalette />

        <RewardAnalytics />
        <GasTracker />
        <PriceOracle />
        <PortfolioAggregator />
        <ProfitabilityModel />
        <SyncVisualizer />
        <PeerMap />
        <OperatorAIAssistant />
        <SecureCommandRunner />
        <SnapshotManager />

        <WalletActivityFeed />
        <LogsStream />
        <IncidentTimeline />

        <OperatorTerminal />
        <NodeHealthMonitor />
        <UnifiedWalletPanel />
        <ValidatorMetricsPanel />
        <ConnectPanel />

        <ValidatorComparison />
      </div>
    </div>
  );
}