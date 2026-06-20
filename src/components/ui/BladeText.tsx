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
          initial={{ opacity: 0, y: 80, filter: "blur(14px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.3, delay: 0.2 + i * 0.14, ease: LINE_EASE }}
        >
          <span className="block">{line}</span>
        </motion.span>
      ))}
    </MotionTag>
  );
}
