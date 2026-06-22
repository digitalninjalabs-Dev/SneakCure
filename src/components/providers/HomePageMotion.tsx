"use client";

import { PageAnimations } from "@/components/providers/PageAnimations";

export function HomePageMotion({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageAnimations />
      {children}
    </>
  );
}
