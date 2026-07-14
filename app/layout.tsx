import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Operator Dashboard",
  description: "Validator, Wallet, Multichain, Liquidity, Identity, DAO Governance",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-6 space-y-8">
          {children}
        </main>
      </body>
    </html>
  );
}