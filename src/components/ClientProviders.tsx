"use client";

import { ReducedMotionProvider } from "@/contexts/ReducedMotionContext";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return <ReducedMotionProvider>{children}</ReducedMotionProvider>;
}
