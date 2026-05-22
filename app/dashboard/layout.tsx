import { OperatorSidebar } from "@/components/OperatorSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <OperatorSidebar />
      <div style={{ marginLeft: 220, padding: 20, width: "100%" }}>
        {children}
      </div>
    </div>
  );
}