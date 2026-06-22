"use client";

import { MotionConfig } from "framer-motion";
import { SiteReadyProvider } from "@/components/providers/SiteReadyProvider";
import { SiteLoader } from "@/components/ui/SiteLoader";
import { MOTION_EASE } from "@/lib/motion-viewport";
import dynamic from "next/dynamic";

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
