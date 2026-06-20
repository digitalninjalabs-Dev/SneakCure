"use client";

import dynamic from "next/dynamic";
import { MotionConfig } from "framer-motion";
import { SiteReadyProvider } from "@/components/providers/SiteReadyProvider";
import { MOTION_EASE } from "@/lib/motion-viewport";

const SiteLoader = dynamic(
  () => import("@/components/ui/SiteLoader").then((mod) => mod.SiteLoader),
  { ssr: false }
);

const RouteChangeHandler = dynamic(
  () =>
    import("@/components/providers/RouteChangeHandler").then((mod) => mod.RouteChangeHandler),
  { ssr: false }
);

export function ClientBootstraps({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.55, ease: MOTION_EASE }}>
      <SiteReadyProvider>
        <SiteLoader />
        <RouteChangeHandler />
        {children}
      </SiteReadyProvider>
    </MotionConfig>
  );
}
