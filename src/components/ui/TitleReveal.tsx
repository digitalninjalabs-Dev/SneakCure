"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useSiteReady } from "@/components/providers/SiteReadyProvider";
import { MOTION_EASE, MOTION_VIEWPORT } from "@/lib/motion-viewport";

export function TitleReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ready = useSiteReady();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, MOTION_VIEWPORT);
  const revealed = ready && inView;

  return (
    <div ref={ref} className={`reveal-y-clip pb-[0.08em] ${className}`}>
      <motion.div
        className="will-change-transform"
        initial={{ y: "110%" }}
        animate={revealed ? { y: 0 } : { y: "110%" }}
        transition={{ duration: 0.7, delay, ease: MOTION_EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
}
