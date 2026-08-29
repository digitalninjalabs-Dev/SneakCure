"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;
const PROCESS_VIDEO = "/reel/reel-01.mp4";

const STEP_ICONS = [
  // Pickup
  <path
    key="pickup"
    d="M3 7h11v9H3V7zm11 3h3.5L20 13v3h-6v-6zM7 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinejoin="round"
    fill="none"
  />,
  // Assessment
  <g key="assessment" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 3.5 3.5" />
  </g>,
  // Deep Cleaning
  <g key="cleaning" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    <circle cx="12" cy="12" r="3.2" />
  </g>,
  // Restoration
  <g key="restoration" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 4.5 19 9l-8.5 8.5H6v-4.5L14.5 4.5z" />
    <path d="m12.5 6.5 4 4" />
  </g>,
  // Quality Review
  <g key="quality" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8" />
    <path d="m8.5 12.2 2.3 2.3 4.7-5" />
  </g>,
  // Return Delivery
  <g key="delivery" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12h12M12 7l5 5-5 5" />
    <path d="M4 7v10" />
  </g>,
] as const;

function StepIcon({ index, className = "" }: { index: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      {STEP_ICONS[index] ?? null}
    </svg>
  );
}

function ProcessVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      src={PROCESS_VIDEO}
      muted
      loop
      playsInline
      preload="metadata"
      suppressHydrationWarning
      aria-label="Sneakcure restoration process"
    />
  );
}

export function Process() {
  const [active, setActive] = useState(0);
  const current = PROCESS_STEPS[active]!;

  return (
    <section
      className="section-pad bg-white py-12 text-primary-black sm:py-14 md:py-16"
      aria-label="Restoration process"
    >
      <div className="mx-auto grid max-w-7xl items-stretch gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)] lg:gap-4 xl:gap-5">
        {/* Left panel — stretches to match reel height */}
        <motion.div
          className="flex min-h-0 min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-primary-black/10 bg-white sm:rounded-[1.75rem] lg:h-full"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <div className="shrink-0 bg-primary-black px-6 py-6 text-white sm:px-8 sm:py-7 md:px-9 md:py-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
              + Our process
            </p>
            <h2 className="editorial-title mt-3 text-[clamp(1.85rem,3.8vw,2.85rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
              Six steps to perfection
            </h2>
            <p className="mt-3 max-w-lg text-sm font-medium leading-relaxed text-white/60 sm:text-[15px] md:text-base">
              From collection to completion — a clear path for every restoration, with craft at
              every stage.
            </p>
          </div>

          <ol className="flex min-h-0 flex-1 flex-col bg-white">
            {PROCESS_STEPS.map((step, i) => {
              const isActive = i === active;
              return (
                <li
                  key={step.step}
                  className="flex min-h-0 flex-1 border-t border-primary-black/8 first:border-t-0"
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`group relative flex w-full items-center gap-3.5 px-5 py-3 text-left transition-all duration-300 sm:gap-4 sm:px-6 sm:py-3.5 md:px-8 ${
                      isActive
                        ? "bg-primary-black/[0.04] text-primary-black"
                        : "bg-transparent text-primary-black hover:bg-primary-black/[0.025]"
                    }`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {/* Active indicator */}
                    <span
                      className={`absolute inset-y-2 left-0 w-[3px] rounded-full bg-primary-black transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                      }`}
                      aria-hidden
                    />

                    <span
                      className={`editorial-title w-8 shrink-0 text-sm font-semibold tabular-nums sm:w-9 sm:text-base ${
                        isActive ? "text-primary-black" : "text-primary-black/35"
                      }`}
                    >
                      {step.step}
                    </span>

                    <span
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-11 sm:w-11 ${
                        isActive
                          ? "border-primary-black bg-primary-black text-white shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
                          : "border-primary-black/15 bg-white text-primary-black group-hover:border-primary-black/35"
                      }`}
                    >
                      <StepIcon index={i} className="h-[18px] w-[18px]" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-[15px] font-semibold leading-tight tracking-[-0.01em] transition-colors sm:text-base md:text-[17px] ${
                          isActive ? "text-primary-black" : "text-primary-black/80"
                        }`}
                      >
                        {step.title}
                      </span>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.span
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.22 }}
                            className="mt-1 block overflow-hidden text-[13px] font-medium leading-snug text-primary-black/50 sm:text-sm"
                          >
                            {step.desc}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-10 sm:w-10 ${
                        isActive
                          ? "border-primary-black bg-primary-black text-white"
                          : "border-primary-black/10 bg-transparent text-primary-black/40 group-hover:border-primary-black/25 group-hover:text-primary-black"
                      }`}
                      aria-hidden
                    >
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </motion.div>

        {/* Reel — 9:16, defines row height on desktop */}
        <motion.div
          className="relative mx-auto w-full max-w-[26rem] overflow-hidden rounded-[1.5rem] bg-black sm:max-w-[28rem] sm:rounded-[1.75rem] lg:mx-0 lg:ml-auto lg:max-w-none lg:w-full"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.06 }}
        >
          <div className="relative aspect-[9/16] w-full">
            <ProcessVideo />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/90 via-black/40 to-transparent"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6 md:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
                Step {current.step}
              </p>
              <p className="editorial-title mt-2 text-[clamp(1.5rem,3vw,2.15rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white">
                {current.title}
              </p>
              <p className="mt-2 max-w-sm text-sm font-medium leading-relaxed text-white/60 sm:text-[15px]">
                {current.desc}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
