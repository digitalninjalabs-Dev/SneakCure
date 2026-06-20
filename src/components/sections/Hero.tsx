"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { prefersReducedMotion } from "@/lib/motion";

const HERO_VIDEO = "/video/herovideo.mp4";

const HERO_WORDS = ["CLEAN", "REPAIR", "RECOLOR", "RESTORE"] as const;
const HERO_LOCATIONS = ["Lucknow", "Delhi", "Kanpur"] as const;

const WORD_MS = 4200;
const LOCATION_MS = 3800;

const SMOOTH_EASE = [0.33, 1, 0.68, 1] as const;

function createCycleMotion(scale: "hero" | "location") {
  const yIn = scale === "hero" ? 14 : 8;
  const yOut = scale === "hero" ? -10 : -6;
  const blurIn = scale === "hero" ? "8px" : "4px";
  const blurOut = scale === "hero" ? "6px" : "3px";

  return {
    initial: {
      opacity: 0,
      y: yIn,
      filter: `blur(${blurIn})`,
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        opacity: { duration: 1.35, ease: SMOOTH_EASE },
        y: { duration: 1.5, ease: SMOOTH_EASE },
        filter: { duration: 1.25, ease: SMOOTH_EASE },
      },
    },
    exit: {
      opacity: 0,
      y: yOut,
      filter: `blur(${blurOut})`,
      transition: {
        opacity: { duration: 1.15, ease: SMOOTH_EASE },
        y: { duration: 1.2, ease: SMOOTH_EASE },
        filter: { duration: 1, ease: SMOOTH_EASE },
      },
    },
  };
}

const wordMotion = createCycleMotion("hero");
const locationMotion = createCycleMotion("location");

function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, [mounted]);

  if (!mounted) {
    return <div className="absolute inset-0 bg-black" aria-hidden />;
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="absolute inset-0 h-full w-full object-cover"
      suppressHydrationWarning
      aria-hidden
    >
      <source src={HERO_VIDEO} type="video/mp4" />
    </video>
  );
}

function useCycleIndex(length: number, intervalMs: number, startOffset = 0) {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [active, setActive] = useState(startOffset === 0);

  useEffect(() => {
    setReduceMotion(prefersReducedMotion());
  }, []);

  useEffect(() => {
    if (startOffset === 0) return;
    const timeout = window.setTimeout(() => setActive(true), startOffset);
    return () => window.clearTimeout(timeout);
  }, [startOffset]);

  useEffect(() => {
    if (reduceMotion || !active) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [reduceMotion, active, length, intervalMs]);

  return index;
}

function CyclingText({
  items,
  motionVariants,
  className,
  widthPlaceholder,
  intervalMs,
  startOffset = 0,
  ariaLive = "polite",
}: {
  items: readonly string[];
  motionVariants: typeof wordMotion;
  className: string;
  widthPlaceholder: string;
  intervalMs: number;
  startOffset?: number;
  ariaLive?: "off" | "polite";
}) {
  const index = useCycleIndex(items.length, intervalMs, startOffset);
  const label = items[index];

  return (
    <span className={`relative block overflow-hidden bg-transparent ${className}`} aria-live={ariaLive}>
      <span className="invisible block" aria-hidden>
        {widthPlaceholder}
      </span>
      <AnimatePresence initial={false}>
        <motion.span
          key={label}
          className="absolute left-0 top-0 block w-full bg-transparent will-change-[opacity,transform,filter]"
          variants={motionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {label}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function HeroWordCycle() {
  return (
    <h1 className="bg-transparent [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]">
      <CyclingText
        items={HERO_WORDS}
        motionVariants={wordMotion}
        widthPlaceholder="RESTORE"
        intervalMs={WORD_MS}
        className="font-display text-[clamp(2.75rem,11vw,7.5rem)] font-semibold uppercase leading-[0.92] text-white"
      />
    </h1>
  );
}

function HeroLocationCycle() {
  return (
    <div className="text-right">
      <p className="mb-1.5 bg-transparent text-[10px] font-medium uppercase tracking-[0.22em] text-white/45">
        Now serving
      </p>
      <CyclingText
        items={HERO_LOCATIONS}
        motionVariants={locationMotion}
        widthPlaceholder="Lucknow"
        intervalMs={LOCATION_MS}
        startOffset={900}
        className="font-display text-base font-medium uppercase tracking-[0.14em] text-white/80 md:text-lg"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-svh w-full overflow-hidden bg-black"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <HeroVideoBackground />
        <div className="absolute inset-0 bg-black/18" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/45"
          aria-hidden
        />
        <div className="absolute inset-0 grain opacity-15" aria-hidden />
      </div>

      <div className="relative z-10 flex min-h-svh flex-col justify-end pb-20 pt-[calc(var(--site-header-offset)+1rem)] sm:pb-16 md:justify-center md:pb-24 md:pt-32">
        <div className="site-shell">
          <div className="hero-copy">
            <p
              className="bg-transparent text-xs font-medium uppercase tracking-[0.28em] text-white/75"
              data-fade-up
            >
              Premium Sneaker Restoration
            </p>

            <div className="mt-5 bg-transparent">
              <HeroWordCycle />
            </div>

            <p
              className="mt-6 max-w-xl bg-transparent text-sm leading-relaxed text-white/85 sm:text-base md:mt-8 md:text-lg"
              data-fade-up
            >
              Crafted for iconic footwear. Museum-grade restoration for grails, runway
              samples, and everyday legends.
            </p>

            <div
              className="mt-8 flex flex-row flex-wrap items-center gap-2 sm:gap-2.5 md:mt-11"
              data-fade-up
            >
              <MagneticButton
                href="/contact"
                className="!px-4 !py-2.5 !text-[11px] sm:!px-5 sm:!py-3 sm:!text-xs"
              >
                Book Restoration
              </MagneticButton>
              <MagneticButton
                href="/services"
                variant="ghost"
                className="!px-4 !py-2.5 !text-[11px] border-white/40 bg-transparent text-white hover:bg-white/10 sm:!px-5 sm:!py-3 sm:!text-xs"
              >
                Explore Services
              </MagneticButton>
            </div>

            <div className="mt-8 md:hidden" data-fade-up>
              <HeroLocationCycle />
            </div>

            <div
              className="hero-copy mt-8 grid grid-cols-3 gap-3 border-t border-white/15 bg-transparent pt-6 text-white/55 md:hidden"
              data-fade-up
            >
              <div className="bg-transparent text-center sm:text-left">
                <p className="font-display text-lg text-white sm:text-2xl">12k+</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] sm:text-xs">Pairs Restored</p>
              </div>
              <div className="bg-transparent text-center sm:text-left">
                <p className="font-display text-lg text-white sm:text-2xl">48</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] sm:text-xs">Luxury Brands</p>
              </div>
              <div className="bg-transparent text-center sm:text-left">
                <p className="font-display text-lg text-white sm:text-2xl">99%</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] sm:text-xs">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-shell mt-14 md:mt-20">
          <div
            className="hero-copy hidden items-center gap-10 border-t border-white/15 bg-transparent pt-8 text-white/55 md:flex"
            data-fade-up
          >
            <div className="bg-transparent">
              <p className="font-display text-2xl text-white">12k+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em]">Pairs Restored</p>
            </div>
            <div className="h-10 w-px bg-white/20" aria-hidden />
            <div className="bg-transparent">
              <p className="font-display text-2xl text-white">48</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em]">Luxury Brands</p>
            </div>
            <div className="h-10 w-px bg-white/20" aria-hidden />
            <div className="bg-transparent">
              <p className="font-display text-2xl text-white">99%</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em]">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-16 z-10 hidden md:block md:bottom-24">
        <div className="site-shell justify-end">
          <div className="flex w-full max-w-[72rem] justify-end bg-transparent px-4 sm:px-5 md:px-8">
            <HeroLocationCycle />
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-[0.22em] text-white/50">
          Scroll
        </span>
        <span className="block h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
