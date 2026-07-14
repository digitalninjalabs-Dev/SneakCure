"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { prefersReducedMotion } from "@/lib/motion";
import { SERVICE_CITIES } from "@/lib/site-data";

const HERO_VIDEO = "/video/sneakhero.mp4";
const LOCATION_MS = 3800;

function HeroLocationCycle() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const label = SERVICE_CITIES[index]!;

  useEffect(() => {
    setReduceMotion(prefersReducedMotion());
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SERVICE_CITIES.length);
    }, LOCATION_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="text-right">
      <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white/45">
        Now serving
      </p>
      <span className="relative block h-[1.35em] overflow-hidden">
        <span className="invisible font-display text-base font-medium uppercase tracking-[0.14em] md:text-lg">
          Lucknow
        </span>
        <AnimatePresence initial={false}>
          <motion.span
            key={label}
            className="absolute right-0 top-0 font-display text-base font-medium uppercase tracking-[0.14em] text-white/85 md:text-lg"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
          >
            {label}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
}

function HeroVideoBackground({ paused }: { paused: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (paused) {
      video.pause();
      return;
    }
    video.play().catch(() => {});
  }, [mounted, paused]);

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
      preload="none"
      className="absolute inset-0 h-full w-full object-cover"
      suppressHydrationWarning
      aria-hidden
    >
      <source src={HERO_VIDEO} type="video/mp4" />
    </video>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [heroInView, setHeroInView] = useState(true);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry?.isIntersecting ?? false),
      { rootMargin: "0px", threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-svh w-full overflow-hidden bg-black"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <HeroVideoBackground paused={!heroInView} />
        {/* Center stays almost clear so in-video CLEAN / REPAIR / RESTORE dominates */}
        <div
          className="absolute inset-x-0 top-0 h-[28%] bg-gradient-to-b from-black/40 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-black/85 via-black/45 to-transparent"
          aria-hidden
        />
      </div>

      {/* Top-right locations */}
      <div className="pointer-events-none absolute inset-x-0 top-[calc(var(--site-header-offset)+0.5rem)] z-10">
        <div className="site-shell">
          <div className="hero-copy flex justify-end">
            <HeroLocationCycle />
          </div>
        </div>
      </div>

      {/* Slim bottom bar — only brand + actions + stats */}
      <div className="absolute inset-x-0 bottom-0 z-10 pb-[max(1rem,env(safe-area-inset-bottom))] pt-16">
        <div className="site-shell">
          <div className="hero-copy">
            <div
              className="flex flex-col gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:pt-6"
              data-fade-up
            >
              <div className="min-w-0 flex-1">
                <h1 className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white sm:text-base">
                  Sneakcure
                </h1>
                <p className="mt-1 max-w-xs text-xs leading-relaxed text-white/65 sm:text-sm">
                  Premium sneaker &amp; leather restoration
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3">
                <MagneticButton
                  href="/contact"
                  className="!min-h-10 !w-full !px-5 !py-2.5 !text-[11px] sm:!w-auto"
                >
                  Book Restoration
                </MagneticButton>
                <Link
                  href="/services"
                  className="inline-flex min-h-10 items-center justify-center px-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white sm:justify-start"
                >
                  Explore Services →
                </Link>
              </div>

              <div className="hidden items-center gap-6 text-white/50 lg:flex">
                <div>
                  <p className="font-display text-lg text-white">12k+</p>
                  <p className="text-[10px] uppercase tracking-[0.16em]">Restored</p>
                </div>
                <div className="h-8 w-px bg-white/15" aria-hidden />
                <div>
                  <p className="font-display text-lg text-white">48</p>
                  <p className="text-[10px] uppercase tracking-[0.16em]">Brands</p>
                </div>
                <div className="h-8 w-px bg-white/15" aria-hidden />
                <div>
                  <p className="font-display text-lg text-white">99%</p>
                  <p className="text-[10px] uppercase tracking-[0.16em]">Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center text-white/50 lg:hidden">
              <div>
                <p className="font-display text-base text-white">12k+</p>
                <p className="text-[9px] uppercase tracking-[0.14em]">Restored</p>
              </div>
              <div>
                <p className="font-display text-base text-white">48</p>
                <p className="text-[9px] uppercase tracking-[0.14em]">Brands</p>
              </div>
              <div>
                <p className="font-display text-base text-white">99%</p>
                <p className="text-[9px] uppercase tracking-[0.14em]">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
