"use client";

import { motion } from "framer-motion";
import { useSiteReady } from "@/components/providers/SiteReadyProvider";

const ROWS = [
  ["RESTORE", "CRAFT", "PROTOCOL", "ATELIER", "QUALITY", "CULTURE"],
  ["REPAIR", "LEATHER", "PRECISION", "ARCHIVE", "REVIVE", "CARE"],
  ["RECOLOR", "PRESERVE", "SNEAKER", "LUXURY", "HANDWORK", "FINISH"],
] as const;

function MarqueeRow({
  words,
  reverse,
  duration,
}: {
  words: readonly string[];
  reverse?: boolean;
  duration: number;
}) {
  const ready = useSiteReady();
  const line = [...words, ...words, ...words, ...words];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max will-change-transform"
        animate={ready ? { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] } : { x: "0%" }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0">
            {line.map((word, i) => (
              <span
                key={`${copy}-${word}-${i}`}
                className="editorial-title px-[0.18em] text-[clamp(2.4rem,9vw,5.5rem)] font-semibold uppercase leading-[0.92] tracking-[-0.04em] text-primary-black"
              >
                {word}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function AboutWallMarquee() {
  return (
    <section
      className="relative overflow-hidden bg-white py-8 sm:py-10 md:py-12"
      aria-label="Sneakcure craft keywords"
    >
      <div className="pointer-events-none select-none" aria-hidden>
        <MarqueeRow words={ROWS[0]} duration={72} />
        <div className="mt-[-0.06em]">
          <MarqueeRow words={ROWS[1]} reverse duration={80} />
        </div>
        <div className="mt-[-0.06em]">
          <MarqueeRow words={ROWS[2]} duration={76} />
        </div>
      </div>
    </section>
  );
}
