"use client";

import { PageAnimations } from "@/components/providers/PageAnimations";

export function HomeMotionProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageAnimations />
      {children}
    </>
  );
}
