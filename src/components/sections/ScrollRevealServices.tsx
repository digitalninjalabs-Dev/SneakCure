"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SERVICE_PAGES } from "@/lib/site-data";

const COUNT = SERVICE_PAGES.length;

const PANEL_START = 0.1;
const PANEL_END = 0.2;
const SERVICES_START = 0.24;
const SERVICES_END = 0.96;

const SERVICE_DISPLAY = [
  { lines: ["SNEAKER", "RESTORE"], accent: "#E8C9A8" },
  { lines: ["BAGS", "CARE"], accent: "#D4C4B0" },
  { lines: ["LEATHER", "JACKET"], accent: "#C9A27A" },
  { lines: ["SOFA", "RESTORE"], accent: "#B8A898" },
  { lines: ["CAR", "INTERIOR"], accent: "#A89078" },
  { lines: ["PATINA", "ART"], accent: "#D8BC94" },
] as const;

const INTRO_WORDS = ["CLEAN", "REPAIR", "RECOLOR", "RESTORE"] as const;

function RevealWord({
  word,
  index,
  total,
  scrollYProgress,
}: {
  word: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const slice = PANEL_START / total;
  const start = index * slice;
  const peak = start + slice * 0.72;
  const opacity = useTransform(scrollYProgress, [start, peak], [0.12, 1]);
  const y = useTransform(scrollYProgress, [start, peak], [24, 0]);

  return (
    <motion.li
      style={{ opacity, y }}
      className="font-display text-[clamp(2.75rem,10vw,5.5rem)] font-bold uppercase leading-[0.92] tracking-tight text-white"
    >
      {word}
    </motion.li>
  );
}

function ServiceIndexRail({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <nav
      className="services-index-rail hidden flex-col justify-center border-r border-black/8 md:flex"
      aria-label="Service index"
    >
      {SERVICE_PAGES.map((service, i) => {
        const active = i === activeIndex;
        return (
          <button
            key={service.slug}
            type="button"
            onClick={() => onSelect(i)}
            className={`group relative flex h-11 w-full items-center justify-center transition-colors ${
              active ? "text-primary-black" : "text-primary-black/25 hover:text-primary-black/50"
            }`}
            aria-current={active ? "true" : undefined}
            aria-label={service.title}
          >
            <span
              className={`font-display text-[10px] tabular-nums tracking-[0.18em] transition-transform duration-300 ${
                active ? "scale-110" : "group-hover:scale-105"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {active && <span className="absolute inset-y-3 -right-px w-px bg-primary-black" />}
          </button>
        );
      })}
    </nav>
  );
}

function MobileServiceTabs({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {SERVICE_PAGES.map((service, i) => (
        <button
          key={service.slug}
          type="button"
          onClick={() => onSelect(i)}
          className={`flex min-h-11 shrink-0 items-center justify-center rounded-full border px-4 text-[10px] uppercase tracking-[0.14em] transition-colors ${
            i === activeIndex
              ? "border-primary-black/25 bg-primary-black/5 text-primary-black"
              : "border-primary-black/10 text-primary-black/35"
          }`}
          aria-current={i === activeIndex ? "true" : undefined}
          aria-label={service.title}
        >
          {String(i + 1).padStart(2, "0")}
        </button>
      ))}
    </div>
  );
}

function ServiceDetailPanel({
  activeIndex,
  variant = "desktop",
}: {
  activeIndex: number;
  variant?: "desktop" | "mobile";
}) {
  const active = SERVICE_PAGES[activeIndex]!;
  const indexLabel = String(activeIndex + 1).padStart(2, "0");
  const isMobile = variant === "mobile";

  return (
    <>
      <div className="relative min-h-[8rem]">
        {!isMobile && (
          <span
            className="pointer-events-none absolute -left-1 top-0 font-display text-[clamp(4rem,12vw,7rem)] font-bold leading-none tracking-tight text-primary-black/[0.05]"
            aria-hidden
          >
            {indexLabel}
          </span>
        )}

        <div key={active.slug} className="relative animate-[service-fade-in_0.35s_ease-out]">
          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-primary-black/40">
            {indexLabel} — Signature treatment
          </p>
          <h3 className="editorial-title mt-3 max-w-md text-xl font-semibold leading-tight text-primary-black sm:text-2xl md:text-[1.85rem]">
            {active.title}
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-black/60">{active.tagline}</p>
          <p className="mt-2 text-sm leading-relaxed text-primary-black/40">{active.shortDesc}</p>
        </div>
      </div>

      {!isMobile && (
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <MagneticButton href={`/services/${active.slug}`} className="!min-h-11 !w-full !text-xs sm:!w-auto">
            View Service
          </MagneticButton>
          <Link
            href="/services"
            className="inline-flex min-h-11 items-center text-[10px] font-medium uppercase tracking-[0.2em] text-primary-black/40 transition-colors hover:text-primary-black"
          >
            All services →
          </Link>
        </div>
      )}
    </>
  );
}

function MobileWordShowcase({
  index,
  accent,
  lines,
}: {
  index: number;
  accent: string;
  lines: readonly [string, string];
}) {
  const indexLabel = String(index + 1).padStart(2, "0");
  const service = SERVICE_PAGES[index]!;

  return (
    <div className="relative overflow-hidden bg-[#0a0a0a] px-4 py-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 70% 30%, ${accent}55 0%, transparent 65%)`,
        }}
        aria-hidden
      />

      <p className="relative text-[10px] font-medium uppercase tracking-[0.34em] text-white/35">
        {indexLabel} / {String(COUNT).padStart(2, "0")}
      </p>

      <div className="relative mt-6">
        {lines.map((line, i) => (
          <h3
            key={line}
            className="font-display text-[clamp(1.5rem,9vw,2.25rem)] font-bold uppercase leading-[0.92] tracking-tight text-white"
            style={{ opacity: i === 0 ? 1 : 0.72 }}
          >
            {line}
          </h3>
        ))}
      </div>

      <ul className="relative mt-6 space-y-2.5 border-t border-white/10 pt-5">
        {service.process.map((step, i) => (
          <li key={step} className="flex items-start gap-3">
            <span className="font-display shrink-0 pt-0.5 text-[10px] tabular-nums tracking-[0.2em] text-white/25">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="min-w-0 text-[11px] uppercase leading-snug tracking-[0.14em] text-white/55">
              {step}
            </span>
          </li>
        ))}
      </ul>

      <p className="relative mt-5 text-sm leading-relaxed text-white/40">{service.overview.slice(0, 140)}…</p>
    </div>
  );
}

function WordShowcase({
  index,
  accent,
  lines,
}: {
  index: number;
  accent: string;
  lines: readonly [string, string];
}) {
  const indexLabel = String(index + 1).padStart(2, "0");
  const service = SERVICE_PAGES[index]!;

  return (
    <div className="relative flex min-h-[20rem] flex-col justify-between overflow-hidden px-4 py-8 sm:px-6 sm:py-10 md:h-full md:min-h-0 md:px-12 md:py-12 lg:px-16 lg:py-14">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 70% 30%, ${accent}55 0%, transparent 65%)`,
        }}
        aria-hidden
      />

      <p className="relative text-[10px] font-medium uppercase tracking-[0.34em] text-white/35">
        {indexLabel} / {String(COUNT).padStart(2, "0")}
      </p>

      <div className="relative flex flex-1 flex-col justify-center py-6">
        {lines.map((line, i) => (
          <h3
            key={line}
            className="font-display break-words text-[clamp(1.75rem,11vw,7.5rem)] font-bold uppercase leading-[0.88] tracking-tight text-white"
            style={{ marginLeft: i === 1 ? "0.12em" : 0, opacity: i === 0 ? 1 : 0.72 }}
          >
            {line}
          </h3>
        ))}

        <ul className="relative mt-8 space-y-3 border-t border-white/10 pt-6 md:mt-10 md:pt-8">
          {service.process.map((step, i) => (
            <li key={step} className="flex items-baseline gap-3 sm:gap-4">
              <span className="font-display shrink-0 text-[10px] tabular-nums tracking-[0.2em] text-white/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[11px] uppercase tracking-[0.16em] text-white/55 sm:text-xs">{step}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="relative max-w-sm text-sm leading-relaxed text-white/40">{service.overview.slice(0, 140)}…</p>
    </div>
  );
}

function ServicesMobileShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const display = SERVICE_DISPLAY[activeIndex]!;
  const active = SERVICE_PAGES[activeIndex]!;
  const indexLabel = String(activeIndex + 1).padStart(2, "0");

  return (
    <section className="services-premium-section overflow-x-hidden bg-black" aria-label="Services">
      <div className="bg-[#F6F4F1] px-4 py-10">
        <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-primary-black/45">Services</p>
        <h2 className="editorial-title mt-4 text-[clamp(1.65rem,7vw,2.25rem)] font-semibold leading-[1.05] text-primary-black">
          Every surface.
          <br />
          Every material.
          <br />
          <span className="text-primary-black/45">Perfected.</span>
        </h2>

        <div className="mt-8 -mx-1 px-1">
          <MobileServiceTabs activeIndex={activeIndex} onSelect={setActiveIndex} />
          <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-primary-black/35">
            Tap to explore · {indexLabel}/{String(COUNT).padStart(2, "0")}
          </p>
        </div>

        <div className="mt-8">
          <ServiceDetailPanel activeIndex={activeIndex} variant="mobile" />
        </div>
      </div>

      <MobileWordShowcase
        key={display.lines.join("-")}
        index={activeIndex}
        accent={display.accent}
        lines={display.lines}
      />

      <div className="bg-[#F6F4F1] px-4 pb-10 pt-2">
        <MagneticButton href={`/services/${active.slug}`} className="!min-h-11 !w-full !text-xs">
          View Service
        </MagneticButton>
        <Link
          href="/services"
          className="mt-3 inline-flex min-h-11 w-full items-center justify-center text-[10px] font-medium uppercase tracking-[0.2em] text-primary-black/40 transition-colors hover:text-primary-black"
        >
          All services →
        </Link>
      </div>
    </section>
  );
}

function ServicesDesktopScroll() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndexRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    let nextIndex = 0;
    if (v >= SERVICES_START) {
      const t = Math.min(1, (v - SERVICES_START) / (SERVICES_END - SERVICES_START));
      nextIndex = Math.min(COUNT - 1, Math.floor(t * COUNT));
    }

    if (nextIndex !== lastIndexRef.current) {
      lastIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
    }
  });

  const scrollToService = useCallback((index: number) => {
    const el = containerRef.current;
    if (!el) return;

    const scrollTop = window.scrollY + el.getBoundingClientRect().top;
    const scrollable = el.offsetHeight - window.innerHeight;
    const span = (SERVICES_END - SERVICES_START) / COUNT;
    const targetProgress = SERVICES_START + index * span + span * 0.15;

    window.scrollTo({
      top: scrollTop + targetProgress * scrollable,
      behavior: "smooth",
    });
  }, []);

  const wordsOpacity = useTransform(scrollYProgress, [PANEL_START, PANEL_START + 0.06], [1, 0]);
  const panelY = useTransform(scrollYProgress, [PANEL_START, PANEL_END], ["100%", "0%"]);
  const progressScale = useTransform(scrollYProgress, (v) => {
    if (v < SERVICES_START) return 0;
    const t = Math.min(1, (v - SERVICES_START) / (SERVICES_END - SERVICES_START));
    return t;
  });

  const display = SERVICE_DISPLAY[activeIndex]!;
  const indexLabel = String(activeIndex + 1).padStart(2, "0");

  return (
    <section
      ref={containerRef}
      className="services-premium-section relative h-[280vh] bg-black md:h-[320vh]"
      aria-label="Services"
    >
      <div className="sticky top-0 h-svh overflow-hidden bg-black [contain:layout_paint]">
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black px-4"
          style={{ opacity: wordsOpacity }}
        >
          <ul className="flex flex-col items-center gap-1 text-center">
            {INTRO_WORDS.map((word, i) => (
              <RevealWord
                key={word}
                word={word}
                index={i}
                total={INTRO_WORDS.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="absolute inset-0 z-20 grid min-h-0 md:grid-cols-[3.75rem_1fr_1fr]"
          style={{ y: panelY }}
        >
          <ServiceIndexRail activeIndex={activeIndex} onSelect={scrollToService} />

          <div className="relative flex flex-col justify-between bg-[#F6F4F1] px-6 py-10 sm:px-8 md:px-10 md:py-12 lg:px-14 lg:py-14">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-primary-black/45">Services</p>
              <h2 className="editorial-title mt-4 max-w-md text-[clamp(1.85rem,4vw,2.75rem)] font-semibold leading-[1.05] text-primary-black">
                Every surface.
                <br />
                Every material.
                <br />
                <span className="text-primary-black/45">Perfected.</span>
              </h2>
            </div>

            <div className="mt-8 md:mt-0">
              <ServiceDetailPanel activeIndex={activeIndex} />

              <div className="mt-8 hidden items-center gap-4 md:flex">
                <div className="relative h-px flex-1 overflow-hidden bg-primary-black/10">
                  <motion.div
                    className="absolute inset-y-0 left-0 w-full origin-left bg-primary-black"
                    style={{ scaleX: progressScale }}
                  />
                </div>
                <span className="font-display text-[10px] tabular-nums tracking-[0.22em] text-primary-black/45">
                  {indexLabel} / {String(COUNT).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-0 bg-[#0a0a0a] md:block">
            <div className="absolute inset-y-0 left-0 w-px bg-white/10" aria-hidden />
            <WordShowcase
              key={display.lines.join("-")}
              index={activeIndex}
              accent={display.accent}
              lines={display.lines}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ScrollRevealServices() {
  return (
    <div id="services">
      <div className="md:hidden">
        <ServicesMobileShowcase />
      </div>
      <div className="hidden md:block">
        <ServicesDesktopScroll />
      </div>
    </div>
  );
}
