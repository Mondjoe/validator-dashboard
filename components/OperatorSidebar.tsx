"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ICONS: any = {
  dashboard: "📊",
  mission: "🛰️",
  validators: "🧩",
  wallet: "💳",
  logs: "📜",
  terminal: "⌨️",
  settings: "⚙️",
  system: "🖥️",
  monitoring: "📡",
  tools: "🧰",
};

export function OperatorSidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setCollapsed(prev => !prev);
    window.addEventListener("toggle-sidebar", handler);
    return () => window.removeEventListener("toggle-sidebar", handler);
  }, []);

  useEffect(() => {
    const handler = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const expanded = hovering || !collapsed;

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{
        width: expanded ? "240px" : "70px",
        background: "#08080b",
        borderRight: "1px solid #1f1f28",
        height: "100vh",
        padding: "20px 10px",
        transition: "width 0.25s ease",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        boxShadow: fullscreen
          ? "0 0 25px rgba(0,255,255,0.15)"
          : "0 0 20px rgba(0,255,255,0.05)",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 999,
      }}
    >
      {/* Monitoring */}
      <SidebarSection label="Monitoring" collapsed={!expanded} icon={ICONS.monitoring} />
      <SidebarLink
        href="/dashboard"
        label="Dashboard"
        icon={ICONS.dashboard}
        active={pathname === "/dashboard"}
        collapsed={!expanded}
      />
      <SidebarLink
        href="/mission-control"
        label="Mission Control"
        icon={ICONS.mission}
        active={pathname === "/mission-control"}
        collapsed={!expanded}
      />
      <SidebarLink
        href="/validators"
        label="Validators"
        icon={ICONS.validators}
        active={pathname === "/validators"}
        collapsed={!expanded}
      />

      {/* Wallet */}
      <SidebarSection label="Wallet" collapsed={!expanded} icon={ICONS.wallet} />
      <SidebarLink
        href="/wallet"
        label="Wallet Panel"
        icon={ICONS.wallet}
        active={pathname === "/wallet"}
        collapsed={!expanded}
      />

      {/* System */}
      <SidebarSection label="System" collapsed={!expanded} icon={ICONS.system} />
      <SidebarLink
        href="/logs"
        label="Logs"
        icon={ICONS.logs}
        active={pathname === "/logs"}
        collapsed={!expanded}
      />
      <SidebarLink
        href="/terminal"
        label="Terminal"
        icon={ICONS.terminal}
        active={pathname === "/terminal"}
        collapsed={!expanded}
      />

      {/* Tools */}
      <SidebarSection label="Tools" collapsed={!expanded} icon={ICONS.tools} />
      <SidebarLink
        href="/settings"
        label="Settings"
        icon={ICONS.settings}
        active={pathname === "/settings"}
        collapsed={!expanded}
      />

      {/* Bottom Profile Panel */}
      <div
        style={{
          marginTop: "auto",
          padding: "12px 10px",
          borderTop: "1px solid #1f1f28",
          display: "flex",
          alignItems: "center",
          gap: 12,
          cursor: "pointer",
          transition: "0.2s",
          position: "relative",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(0,255,255,0.08)";
          const tooltip = e.currentTarget.querySelector(
            ".sidebar-tooltip-profile"
          ) as HTMLElement | null;
          if (tooltip && collapsed) tooltip.style.opacity = "1";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          const tooltip = e.currentTarget.querySelector(
            ".sidebar-tooltip-profile"
          ) as HTMLElement | null;
          if (tooltip) tooltip.style.opacity = "0";
        }}
      >
        {/* Dynamic Avatar */}
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #2affff, #0077ff)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            color: "#000",
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {("Charm Capsule"[0] || "C").toUpperCase()}
        </div>

        {/* Tooltip when collapsed */}
        {collapsed && (
          <div
            style={{
              position: "absolute",
              left: "80px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "#0c0c10",
              padding: "6px 10px",
              borderRadius: 6,
              color: "#2affff",
              fontSize: 12,
              whiteSpace: "nowrap",
              opacity: 0,
              pointerEvents: "none",
              transition: "opacity 0.2s",
            }}
            className="sidebar-tooltip-profile"
          >
            Charm Capsule
          </div>
        )}

        {/* Expanded info */}
        {!collapsed && (
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  color: "#2affff",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                Charm Capsule
              </span>
              <span
                style={{
                  background: "rgba(0,255,255,0.15)",
                  padding: "2px 6px",
                  borderRadius: 4,
                  fontSize: 10,
                  color: "#2affff",
                  fontWeight: 600,
                }}
              >
                OPERATOR
              </span>
            </div>

            <span style={{ color: "#888", fontSize: 12 }}>0x0000...0000</span>

            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#2aff88",
                  boxShadow: "0 0 8px #2aff88",
                }}
              />
              <span style={{ color: "#666", fontSize: 11 }}>ETH Mainnet</span>
            </div>
          </div>
        )}

        {!collapsed && (
          <div
            style={{
              marginLeft: "auto",
              fontSize: 18,
              color: "#2affff",
              cursor: "pointer",
              padding: "4px 6px",
              borderRadius: 6,
              transition: "0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,255,255,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
            onClick={() => {
              const event = new CustomEvent("open-profile-dropdown");
              window.dispatchEvent(event);
            }}
          >
            ⋮
          </div>
        )}
      </div>
    </div>
  );
}

function SidebarSection({
  label,
  collapsed,
  icon,
}: {
  label: string;
  collapsed: boolean;
  icon: string;
}) {
  return (
    <div
      style={{
        fontSize: 11,
        color: "#555",
        paddingLeft: collapsed ? 0 : 12,
        display: "flex",
        alignItems: "center",
        gap: 8,
        opacity: collapsed ? 0 : 1,
        transition: "opacity 0.2s",
      }}
    >
      <span style={{ fontSize: 14 }}>{icon}</span>
      {!collapsed && label}
    </div>
  );
}

function SidebarLink({
  href,
  label,
  icon,
  active,
  collapsed,
}: {
  href: string;
  label: string;
  icon: string;
  active: boolean;
  collapsed: boolean;
}) {
  return (
    <div style={{ position: "relative" }}>
      {collapsed && (
        <div
          style={{
            position: "absolute",
            left: "80px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "#0c0c10",
            padding: "6px 10px",
            borderRadius: 6,
            color: "#2affff",
            fontSize: 12,
            whiteSpace: "nowrap",
            opacity: 0,
            pointerEvents: "none",
            transition: "opacity 0.2s",
          }}
          className="sidebar-tooltip"
        >
          {label}
        </div>
      )}

      <Link
        href={href}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "10px 12px",
          borderRadius: 6,
          color: active ? "#2affff" : "#d0d0d0",
          textDecoration: "none",
          background: active ? "rgba(0,255,255,0.12)" : "transparent",
          transition: "0.2s",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(0,255,255,0.08)";
          e.currentTarget.style.color = "#2affff";
          const tooltip = e.currentTarget.parentElement?.querySelector(
            ".sidebar-tooltip"
          ) as HTMLElement | null;
          if (tooltip && collapsed) tooltip.style.opacity = "1";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = active
            ? "rgba(0,255,255,0.12)"
            : "transparent";
          e.currentTarget.style.color = active ? "#2affff" : "#d0d0d0";
          const tooltip = e.currentTarget.parentElement?.querySelector(
            ".sidebar-tooltip"
          ) as HTMLElement | null;
          if (tooltip) tooltip.style.opacity = "0";
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.9,
          }}
        >
          {icon}
        </div>

        {!collapsed && (
          <span style={{ fontSize: 14, fontWeight: 500 }}>{label}</span>
        )}
      </Link>
    </div>
  );
}
