"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactNode } from "react";
import { useSiteReady } from "@/components/providers/SiteReadyProvider";
import { TitleReveal } from "@/components/ui/TitleReveal";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { MOTION_EASE, MOTION_VIEWPORT } from "@/lib/motion-viewport";

export const CAMPAIGN_EASE = MOTION_EASE;

export function CampaignReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ready = useSiteReady();

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={ready ? { opacity: 1, y: 0 } : undefined}
      viewport={MOTION_VIEWPORT}
      transition={{ duration: 0.55, delay, ease: CAMPAIGN_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CampaignRevealClip({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <TitleReveal className={className} delay={delay}>
      {children}
    </TitleReveal>
  );
}

export function CampaignSplitTitle({
  title,
  accent,
  className = "",
  delay = 0,
  size = "campaign" as const,
  as = "h2",
  dark = false,
  align = "left",
}: {
  title: string;
  accent?: string;
  className?: string;
  delay?: number;
  size?: "campaign" | "display" | "md";
  as?: "h1" | "h2" | "h3";
  dark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <SplitTitle
      title={title}
      accent={accent}
      as={as}
      size={size}
      delay={delay}
      dark={dark}
      align={align}
      className={className}
    />
  );
}

export function CampaignSlide({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "left" | "right";
}) {
  return (
    <CampaignReveal className={className} delay={delay}>
      {children}
    </CampaignReveal>
  );
}

export function CampaignScale({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <CampaignReveal className={className} delay={delay}>
      {children}
    </CampaignReveal>
  );
}

export function CampaignMarquee({ text }: { text: string }) {
  const doubled = `${text}  •  ${text}  •  `;
  return (
    <div className="campaign-marquee overflow-hidden border-y border-black/8 bg-pearl py-8">
      <div className="campaign-marquee-track editorial-title whitespace-nowrap text-[clamp(1.5rem,4vw,3rem)] uppercase tracking-[0.2em] text-primary-black/5">
        {doubled.repeat(4)}
      </div>
    </div>
  );
}

export function CampaignBtn({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-10 py-5 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 sm:text-sm";
  const styles =
    variant === "primary"
      ? "bg-gloss-black text-soft-white hover:opacity-90"
      : "border border-black/10 bg-white/50 text-primary-black backdrop-blur-sm hover:bg-gloss-black hover:text-soft-white";

  const cls = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function MaterialIcon({
  name,
  filled = false,
  className = "",
}: {
  name: string;
  filled?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 300, 'GRAD' 0, 'opsz' 24`,
      }}
    >
      {name}
    </span>
  );
}

export function ParallaxImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
    </div>
  );
}

export function CampaignScrollImage({
  src,
  alt,
  className = "",
  imgClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  const ready = useSiteReady();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={ready ? { opacity: 1 } : undefined}
      viewport={MOTION_VIEWPORT}
      transition={{ duration: 0.55, ease: CAMPAIGN_EASE }}
      className={`overflow-hidden ${className}`}
    >
      <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${imgClassName}`} />
    </motion.div>
  );
}

export function CampaignHeroParallax({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function CampaignGrayscaleImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover grayscale-[0.35] transition-[filter] duration-700 hover:grayscale-0" />
    </div>
  );
}

export function CampaignTimelineLine({ className = "", horizontal = false }: { className?: string; horizontal?: boolean }) {
  return (
    <div
      className={`${horizontal ? "h-px w-full bg-primary-black/15" : "h-full w-px bg-primary-black/15"} ${className}`}
      aria-hidden
    />
  );
}

export function CampaignEyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`mb-6 block text-[11px] uppercase tracking-[0.32em] ${
        dark ? "text-white/40" : "text-muted"
      }`}
    >
      {children}
    </span>
  );
}

export function CampaignLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">{children}</span>
  );
}
