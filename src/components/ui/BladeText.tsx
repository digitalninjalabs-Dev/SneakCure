"use client";

import { motion } from "framer-motion";

type BladeTextProps = {
  lines: string[];
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  accentIndex?: number;
};

const MOTION_TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
} as const;

const LINE_EASE = [0.76, 0, 0.24, 1] as const;

export function BladeText({
  lines,
  className = "",
  as: Tag = "h1",
  accentIndex,
}: BladeTextProps) {
  const MotionTag = MOTION_TAGS[Tag];

  return (
    <MotionTag className={className}>
      {lines.map((line, i) => (
        <motion.span
          key={line}
          className={`block overflow-hidden ${i === accentIndex ? "text-gloss-black italic" : ""}`}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, delay: 0.12 + i * 0.1, ease: LINE_EASE }}
        >
          <span className="block">{line}</span>
        </motion.span>
      ))}
    </MotionTag>
  );
}
