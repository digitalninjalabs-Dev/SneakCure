"use client";

import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";

export const ANIM_EASE = [0.22, 1, 0.36, 1] as const;

export function FloatingParticles({ count = 12, theme = "light" }: { count?: number; theme?: "light" | "dark" }) {
  const color = theme === "dark" ? "bg-white/20" : "bg-primary-black/15";
  const items = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${8 + ((i * 17) % 84)}%`,
    top: `${10 + ((i * 23) % 80)}%`,
    size: i % 3 === 0 ? 6 : i % 3 === 1 ? 4 : 3,
    duration: 4 + (i % 5),
    delay: i * 0.3,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {items.map((p) => (
        <motion.span
          key={p.id}
          className={`absolute rounded-full ${color}`}
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ y: [0, -18, 0], opacity: [0.25, 0.7, 0.25], scale: [1, 1.3, 1] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}
    </div>
  );
}

export function AnimatedCounter({
  value,
  suffix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function PulseRing({ className = "" }: { className?: string }) {
  return (
    <motion.span
      className={`pointer-events-none absolute inline-flex rounded-full ${className}`}
      animate={{ scale: [1, 1.45, 1], opacity: [0.35, 0, 0.35] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
      aria-hidden
    />
  );
}

export function ScrollDrawLine({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.3"] });
  const pathLength = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), { stiffness: 60, damping: 20 });

  return (
    <div ref={ref} className={className}>
      <svg className="pointer-events-none w-full" viewBox="0 0 200 40" fill="none" aria-hidden>
        <motion.path
          d="M0 20 Q50 0 100 20 T200 20"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary-black/15"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}

export function RotatingIcon({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      animate={{ rotate: [0, 8, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="inline-flex"
    >
      {children}
    </motion.span>
  );
}

export function ShimmerBar({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-px overflow-hidden bg-black/8 ${className}`}>
      <motion.div
        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-primary-black/25 to-transparent"
        animate={{ x: ["-100%", "400%"] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
      />
    </div>
  );
}

export function StaggerReveal({
  children,
  className = "",
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: ANIM_EASE },
  },
};

export function AnimatedHeading({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <h2 className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="mr-[0.25em] inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: ANIM_EASE }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h2>
  );
}

export function HoverLiftCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.85, delay, ease: ANIM_EASE }}
      whileHover={{ y: -10, scale: 1.02, rotate: -0.5 }}
      className={className}
      style={{ transformPerspective: 800 }}
    >
      {children}
    </motion.div>
  );
}

export function BounceArrow() {
  return (
    <motion.span
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      className="inline-block"
      aria-hidden
    >
      ↓
    </motion.span>
  );
}

export function AnimatedDotGrid({ className = "" }: { className?: string }) {
  const id = useId();
  const patternId = `dot-grid-${id.replace(/:/g, "")}`;

  return (
    <motion.svg
      className={`pointer-events-none absolute inset-0 h-full w-full text-primary-black/[0.06] ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      aria-hidden
    >
      <defs>
        <pattern id={patternId} width="24" height="24" patternUnits="userSpaceOnUse">
          <motion.circle
            cx="1"
            cy="1"
            r="1"
            fill="currentColor"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </motion.svg>
  );
}

export function GlowOrb({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full blur-2xl ${className}`}
      animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden
    />
  );
}
