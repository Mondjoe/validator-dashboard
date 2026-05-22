"use client";

import { ThemeProvider } from '@/contexts/ThemeContext'
import { TooltipProvider } from '@/components/ui/tooltip'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <TooltipProvider>
        {children}
      </TooltipProvider>
    </ThemeProvider>
  )
}
