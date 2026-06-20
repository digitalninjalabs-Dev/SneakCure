"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";

const EASE = [0.25, 0.1, 0.25, 1] as const;

/** Slow zoom + drift — feels alive without video weight */
export function KenBurnsImage({
  src,
  alt,
  sizes = "100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <motion.div
      className="absolute inset-[-8%]"
      animate={{
        scale: [1, 1.1],
        x: ["0%", "-3%"],
        y: ["0%", "-2%"],
      }}
      transition={{
        duration: 22,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
    >
      <SafeImage src={src} alt={alt} fill className="object-cover" sizes={sizes} priority={priority} />
    </motion.div>
  );
}

/** Crossfades through stills on an interval */
export function ImageCycle({
  images,
  alt,
  intervalMs = 3800,
  sizes = "240px",
}: {
  images: string[];
  alt: string;
  intervalMs?: number;
  sizes?: string;
}) {
  const slides = images.filter(Boolean);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [slides.length, intervalMs]);

  if (slides.length === 0) return null;
  const current = slides[index]!;

  return (
    <div className="relative h-full w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.85, ease: EASE }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute inset-[-6%]"
            animate={{ scale: [1, 1.08] }}
            transition={{ duration: intervalMs / 1000, ease: "linear" }}
          >
            <SafeImage src={current} alt={alt} fill className="object-cover" sizes={sizes} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
