"use client";

import { motion } from "framer-motion";

export const GRAPHIC_EASE = [0.22, 1, 0.36, 1] as const;

export function DotGrid({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full text-primary-black/[0.06] ${className}`}
      aria-hidden
    >
      <defs>
        <pattern id="page-dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#page-dot-grid)" />
    </svg>
  );
}

export function FloatingBlob({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      animate={{ scale: [1, 1.12, 1], x: [0, 12, 0], y: [0, -8, 0] }}
      transition={{ duration: 9 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden
    />
  );
}

export function OrbitRing({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      className={`pointer-events-none absolute ${className}`}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden
      animate={{ rotate: 360 }}
      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="0.75" strokeDasharray="6 10" opacity="0.35" />
      <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.2" />
    </motion.svg>
  );
}

export function CornerFrame({ className = "" }: { className?: string }) {
  const paths = ["M0 20V0h20", "M60 0h20v20", "M80 60v20H60", "M20 80H0V60"];

  return (
    <svg className={`pointer-events-none absolute text-primary-black/15 ${className}`} viewBox="0 0 80 80" aria-hidden>
      {paths.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: GRAPHIC_EASE }}
        />
      ))}
    </svg>
  );
}

export function SectionDivider({ label }: { label?: string }) {
  return (
    <div className="relative mx-auto flex max-w-xs items-center gap-4 py-2">
      <motion.span
        className="h-px flex-1 bg-black/10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: GRAPHIC_EASE }}
        style={{ originX: 1 }}
      />
      {label ? (
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">{label}</span>
      ) : (
        <motion.svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          animate={{ rotate: [0, 90, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        >
          <rect x="5" y="0" width="2" height="12" fill="currentColor" className="text-primary-black/20" />
          <rect x="0" y="5" width="12" height="2" fill="currentColor" className="text-primary-black/20" />
        </motion.svg>
      )}
      <motion.span
        className="h-px flex-1 bg-black/10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: GRAPHIC_EASE }}
        style={{ originX: 0 }}
      />
    </div>
  );
}

export function GraphicBadge({
  children,
  variant = "light",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: GRAPHIC_EASE }}
      whileHover={{ scale: 1.05, y: -2 }}
      className={`relative inline-flex items-center gap-2 rounded-full border px-3 py-1.5 ${
        variant === "dark"
          ? "border-white/15 bg-white/5 text-white/70"
          : "border-black/8 bg-white/70 text-primary-black/60"
      } ${className}`}
    >
      <motion.span
        className="absolute inset-0 rounded-full"
        animate={{ boxShadow: ["0 0 0 0 rgba(0,0,0,0)", "0 0 0 6px rgba(0,0,0,0.04)", "0 0 0 0 rgba(0,0,0,0)"] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
        aria-hidden
      />
      {children}
    </motion.div>
  );
}

function IconBase({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function IconTraining() {
  return (
    <IconBase>
      <path d="M4 8l8-4 8 4-8 4-8-4z" />
      <path d="M12 12v8" />
      <path d="M8 20h8" />
    </IconBase>
  );
}

export function IconFranchise() {
  return (
    <IconBase>
      <path d="M3 10h18v10H3z" />
      <path d="M7 10V6h10v4" />
      <path d="M12 14v3" />
    </IconBase>
  );
}

export function IconFounder() {
  return (
    <IconBase>
      <circle cx="12" cy="8" r="3" />
      <path d="M5 20c0-3.5 3.13-6 7-6s7 2.5 7 6" />
    </IconBase>
  );
}

export function IconService() {
  return (
    <IconBase>
      <path d="M4 14c0-4 3.5-7 8-7s8 3 8 7" />
      <path d="M7 14c0-2 2.2-4 5-4s5 2 5 4" />
      <path d="M4 17h16" />
    </IconBase>
  );
}

export function IconCheck() {
  return (
    <IconBase className="h-4 w-4">
      <path d="M5 12l4 4 10-10" />
    </IconBase>
  );
}

export function IconSpark() {
  return (
    <IconBase className="h-4 w-4">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </IconBase>
  );
}

export function FloatingShapes({ theme = "light" }: { theme?: "light" | "dark" }) {
  const stroke = theme === "dark" ? "rgba(255,255,255,0.12)" : "rgba(17,17,17,0.1)";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute left-[8%] top-[18%] h-16 w-16 rounded-full border"
        style={{ borderColor: stroke }}
        animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[12%] top-[28%] h-10 w-10 rotate-45 border"
        style={{ borderColor: stroke }}
        animate={{ y: [0, 10, 0], rotate: [45, 55, 45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[22%] left-[15%] h-24 w-px"
        style={{ backgroundColor: stroke }}
        animate={{ scaleY: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[30%] right-[18%] h-20 w-20 rounded-full border border-dashed"
        style={{ borderColor: stroke }}
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export function MonogramWatermark({ className = "" }: { className?: string }) {
  return (
    <motion.span
      className={`pointer-events-none absolute select-none font-display text-[clamp(6rem,18vw,12rem)] font-bold leading-none text-primary-black/[0.03] ${className}`}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      S
    </motion.span>
  );
}

export function TimelineNode({ active = false }: { active?: boolean }) {
  return (
    <motion.span
      className={`relative flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
        active ? "border-primary-black bg-primary-black" : "border-black/15 bg-pearl"
      }`}
      whileInView={{ scale: [0.5, 1.15, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      aria-hidden
    >
      {active && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
    </motion.span>
  );
}

export function GraphicCardIcon({
  icon,
  index,
}: {
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -12 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: GRAPHIC_EASE }}
      whileHover={{ rotate: 8, scale: 1.1 }}
      className="group/icon relative mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-black/8 bg-pearl text-primary-black/70"
    >
      <motion.span
        className="absolute inset-0 rounded-2xl bg-primary-black/[0.03]"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        aria-hidden
      />
      <motion.span
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {icon}
      </motion.span>
    </motion.div>
  );
}

export function HeroGraphicStack({ variant = "light" }: { variant?: "light" | "dark" }) {
  const ringColor = variant === "dark" ? "text-white/20" : "text-primary-black/15";

  return (
    <>
      <DotGrid className="opacity-60" />
      <FloatingBlob
        className={variant === "dark" ? "-left-16 top-10 h-56 w-56 bg-white/[0.04]" : "-left-16 top-10 h-56 w-56 bg-black/[0.04]"}
      />
      <FloatingBlob
        className={variant === "dark" ? "bottom-0 right-0 h-48 w-48 bg-white/[0.03]" : "bottom-0 right-0 h-48 w-48 bg-black/[0.03]"}
        delay={2}
      />
      <FloatingShapes theme={variant} />
      <OrbitRing className={`-right-6 -top-6 h-32 w-32 ${ringColor}`} />
    </>
  );
}

export function ImageFrameGraphic() {
  return (
    <>
      <CornerFrame className="left-3 top-3 h-12 w-12" />
      <CornerFrame className="bottom-3 right-3 h-12 w-12 rotate-180" />
      <OrbitRing className="-bottom-8 -right-8 h-28 w-28 text-primary-black/10" />
    </>
  );
}

export function StatsRing({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06, rotate: 2 }}
      whileInView={{ opacity: [0, 1], scale: [0.85, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: GRAPHIC_EASE }}
      className="relative flex aspect-square w-[140px] flex-col items-center justify-center rounded-full border border-black/8 bg-white/60 p-6 text-center"
    >
      <motion.svg
        className="absolute inset-0 h-full w-full text-primary-black/10"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        aria-hidden
      >
        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 6" />
      </motion.svg>
      <motion.p
        className="relative font-display text-xl"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {value}
      </motion.p>
      <p className="relative mt-1 text-[9px] uppercase tracking-[0.16em] text-muted">{label}</p>
    </motion.div>
  );
}

export function NetworkGraphic() {
  return (
    <svg className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.07]" viewBox="0 0 400 400" aria-hidden>
      <motion.circle
        cx="200"
        cy="200"
        r="80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        animate={{ r: [80, 95, 80] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <circle cx="200" cy="120" r="6" fill="currentColor" />
      <circle cx="280" cy="200" r="6" fill="currentColor" />
      <circle cx="200" cy="280" r="6" fill="currentColor" />
      <circle cx="120" cy="200" r="6" fill="currentColor" />
      <line x1="200" y1="120" x2="280" y2="200" stroke="currentColor" strokeWidth="0.75" />
      <line x1="280" y1="200" x2="200" y2="280" stroke="currentColor" strokeWidth="0.75" />
      <line x1="200" y1="280" x2="120" y2="200" stroke="currentColor" strokeWidth="0.75" />
      <line x1="120" y1="200" x2="200" y2="120" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}
