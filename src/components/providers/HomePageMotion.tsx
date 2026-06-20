"use client";

import dynamic from "next/dynamic";

const HomeMotionProviders = dynamic(
  () =>
    import("@/components/providers/HomeMotionProviders").then((mod) => mod.HomeMotionProviders),
  { ssr: false }
);

export function HomePageMotion({ children }: { children: React.ReactNode }) {
  return <HomeMotionProviders>{children}</HomeMotionProviders>;
}
