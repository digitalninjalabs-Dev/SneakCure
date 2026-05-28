"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import { serviceImage } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

const WORDS = ["CLEAN", "REPAIR", "RECOLOR", "RESTORE"] as const;

const SCROLL_SERVICES = [
  {
    title: "Sneaker Cleaning",
    bg: "#E8C9A8",
    image: serviceImage(0),
  },
  {
    title: "Sole Whitening",
    bg: "#D8BC94",
    image: serviceImage(1),
  },
  {
    title: "Leather Restoration",
    bg: "#C9A27A",
    image: serviceImage(2),
  },
  {
    title: "Suede Restoration",
    bg: "#E5D0B4",
    image: serviceImage(3),
  },
  {
    title: "Repainting",
    bg: "#2C211C",
    image: serviceImage(4),
  },
] as const;

type ScrollService = (typeof SCROLL_SERVICES)[number];

const TEXT_PHASE_END = 0.48;
const PANEL_START = 0.4;
const DECK_ENTER_START = 0.48;
const STRAIGHTEN_START = 0.54;
const STRAIGHTEN_END = 0.7;
const SHUFFLE_START = 0.72;

/** Phase 1 — fanned / tilted deck (reference style) */
const TILTED_LAYOUT = [
  { x: 6, y: 0, rotate: -4, scale: 1 },
  { x: -34, y: 18, rotate: -14, scale: 0.97 },
  { x: -62, y: 32, rotate: -22, scale: 0.94 },
] as const;

/** Phase 2 — aligned stack (offset upward so labels don’t stack below) */
const STRAIGHT_LAYOUT = [
  { x: 0, y: 0, rotate: 0, scale: 1 },
  { x: -10, y: -8, rotate: -4, scale: 0.98 },
  { x: -18, y: -14, rotate: -7, scale: 0.96 },
] as const;

const SHUFFLE_MS = 950;

const SMOOTH_SPRING = {
  type: "spring" as const,
  stiffness: 118,
  damping: 34,
  mass: 1.15,
};

const SHUFFLE_EXIT = {
  duration: SHUFFLE_MS / 1000,
  ease: [0.33, 1, 0.68, 1] as const,
};

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
  const slice = TEXT_PHASE_END / total;
  const start = index * slice;
  const peak = start + slice * 0.68;
  const opacity = useTransform(scrollYProgress, [start, peak], [0.14, 1]);

  return (
    <motion.li
      style={{ opacity }}
      className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
    >
      {word}
    </motion.li>
  );
}

function ServiceCardFace({
  service,
  showLabel = true,
}: {
  service: ScrollService;
  showLabel?: boolean;
}) {
  return (
    <div
      className="overflow-hidden rounded-[1.75rem]"
      style={{ backgroundColor: service.bg }}
    >
      <div className="relative aspect-[3/4] w-full">
        <SafeImage
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="240px"
        />
      </div>
      {showLabel && (
        <div className="bg-[#EDE0CE] px-4 py-3.5 text-center">
          <p className="text-sm font-medium tracking-wide text-[#2A211C]">
            {service.title}
          </p>
        </div>
      )}
    </div>
  );
}

function DeckStackCard({
  service,
  stackPos,
  straightenProgress,
  zIndex,
  shuffleMode,
}: {
  service: ScrollService;
  stackPos: number;
  straightenProgress: MotionValue<number>;
  zIndex: number;
  shuffleMode: boolean;
}) {
  const tilt = TILTED_LAYOUT[stackPos] ?? TILTED_LAYOUT[0];
  const straight = STRAIGHT_LAYOUT[stackPos] ?? STRAIGHT_LAYOUT[0];

  const scrollX = useTransform(
    straightenProgress,
    [0, 1],
    [tilt.x, straight.x]
  );
  const scrollY = useTransform(
    straightenProgress,
    [0, 1],
    [tilt.y, straight.y]
  );
  const scrollRotate = useTransform(
    straightenProgress,
    [0, 1],
    [tilt.rotate, straight.rotate]
  );
  const scrollScale = useTransform(
    straightenProgress,
    [0, 1],
    [tilt.scale, straight.scale]
  );

  if (shuffleMode) {
    const layout = STRAIGHT_LAYOUT[stackPos] ?? STRAIGHT_LAYOUT[0];
    return (
      <motion.div
        className="absolute inset-0 origin-center"
        initial={false}
        animate={{
          x: layout.x,
          y: layout.y,
          rotate: layout.rotate,
          scale: layout.scale,
          zIndex,
        }}
        transition={SMOOTH_SPRING}
      >
        <ServiceCardFace service={service} showLabel={stackPos === 0} />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="absolute inset-0 origin-center"
      style={{
        x: scrollX,
        y: scrollY,
        rotate: scrollRotate,
        scale: scrollScale,
        zIndex,
      }}
    >
      <ServiceCardFace service={service} showLabel={stackPos === 0} />
    </motion.div>
  );
}

function ScrollServiceDeck({
  scrollYProgress,
  straightenProgress,
  deckEnterProgress,
}: {
  scrollYProgress: MotionValue<number>;
  straightenProgress: MotionValue<number>;
  deckEnterProgress: MotionValue<number>;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [exitingCard, setExitingCard] = useState<ScrollService | null>(null);
  const [shuffleMode, setShuffleMode] = useState(false);
  const lastIndexRef = useRef(0);
  const isShufflingRef = useRef(false);
  const count = SCROLL_SERVICES.length;

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const isStraight = v >= STRAIGHTEN_END - 0.02;
    setShuffleMode(isStraight);

    if (v < SHUFFLE_START || isShufflingRef.current || !isStraight) return;

    const range = 1 - SHUFFLE_START;
    const segment = range / count;
    const local = v - SHUFFLE_START;
    const idx = Math.min(count - 1, Math.floor(local / segment));
    if (idx === lastIndexRef.current) return;

    const prev = lastIndexRef.current;
    if (idx > prev) {
      isShufflingRef.current = true;
      setExitingCard(SCROLL_SERVICES[prev]);
      window.setTimeout(() => {
        isShufflingRef.current = false;
      }, SHUFFLE_MS);
    }
    lastIndexRef.current = idx;
    setActiveIndex(idx);
  });

  useEffect(() => {
    if (!exitingCard) return;
    const timer = window.setTimeout(() => setExitingCard(null), SHUFFLE_MS);
    return () => window.clearTimeout(timer);
  }, [exitingCard]);

  const deckY = useTransform(deckEnterProgress, [0, 1], [90, 0]);

  const visibleStack = [0, 1, 2].map(
    (offset) => SCROLL_SERVICES[(activeIndex + offset) % count]
  );

  return (
    <div className="relative mx-auto h-[min(72vw,340px)] w-full max-w-[280px] sm:h-[380px] sm:max-w-[320px] md:h-[420px] md:max-w-[400px]">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[min(72vw,340px)] w-[min(46vw,200px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden sm:h-[380px] sm:w-[220px] md:h-[420px] md:w-[240px]"
        style={{ y: deckY }}
      >
        {[2, 1, 0].map((stackPos) => (
          <DeckStackCard
            key={`${visibleStack[stackPos].title}-${stackPos}`}
            service={visibleStack[stackPos]}
            stackPos={stackPos}
            straightenProgress={straightenProgress}
            zIndex={12 - stackPos}
            shuffleMode={shuffleMode}
          />
        ))}

        <AnimatePresence>
          {exitingCard && shuffleMode && (
            <motion.div
              key={`exit-${exitingCard.title}-${activeIndex}`}
              className="pointer-events-none absolute inset-0 z-30 origin-center"
              initial={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }}
              animate={{
                x: "-115%",
                y: -18,
                rotate: -14,
                opacity: 0,
                scale: 0.94,
              }}
              exit={{ opacity: 0 }}
              transition={SHUFFLE_EXIT}
            >
              <ServiceCardFace service={exitingCard} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div
        className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 gap-1.5"
        role="tablist"
        aria-label="Service preview"
      >
        {SCROLL_SERVICES.map((service, i) => (
          <span
            key={service.title}
            role="tab"
            aria-selected={i === activeIndex}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === activeIndex ? "w-6 bg-[#1A1A1A]" : "w-1.5 bg-[#1A1A1A]/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function ScrollRevealServices() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const deckEnterProgress = useTransform(
    scrollYProgress,
    [DECK_ENTER_START, DECK_ENTER_START + 0.08],
    [0, 1]
  );

  const straightenProgress = useTransform(
    scrollYProgress,
    [STRAIGHTEN_START, STRAIGHTEN_END],
    [0, 1]
  );

  const panelY = useTransform(
    scrollYProgress,
    [PANEL_START, PANEL_START + 0.18],
    ["105%", "0%"]
  );

  const headingOpacity = useTransform(
    scrollYProgress,
    [DECK_ENTER_START, DECK_ENTER_START + 0.12],
    [0, 1]
  );

  const wordsDim = useTransform(
    scrollYProgress,
    [PANEL_START, PANEL_START + 0.2],
    [1, 0.35]
  );

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-black h-[400vh] sm:h-[460vh] md:h-[520vh]"
      aria-label="Services"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="relative z-10 flex h-full min-h-0 flex-col px-4 pb-[38vh] pt-[5.5rem] sm:px-6 sm:pt-[6.6rem] sm:pb-[40vh] md:pt-[7.8rem]"
          style={{ opacity: wordsDim }}
        >
          <ul className="flex flex-col items-center gap-0.5 md:gap-1">
            {WORDS.map((word, i) => (
              <RevealWord
                key={word}
                word={word}
                index={i}
                total={WORDS.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="absolute inset-x-0 bottom-0 z-30 flex h-[min(62vh,480px)] min-h-[300px] items-center overflow-hidden rounded-t-[1.75rem] bg-[#F6F4F1] px-4 pb-6 pt-8 shadow-[0_-24px_80px_rgba(0,0,0,0.35)] sm:min-h-[360px] sm:rounded-t-[2.5rem] sm:px-6 sm:pb-8 sm:pt-10 md:min-h-[440px] md:h-[min(58vh,520px)] md:px-12 lg:px-16"
          style={{ y: panelY }}
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col items-stretch gap-8 sm:gap-10 md:flex-row md:items-center md:gap-16">
            <motion.div
              className="md:w-[42%] lg:max-w-md"
              style={{ opacity: headingOpacity }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#1A1A1A]/45">
                Services
              </p>
              <h2 className="mt-3 font-display text-2xl leading-snug text-[#1A1A1A] sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                Every surface. Every material. Perfected.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#1A1A1A]/55 md:text-base">
                Seven signature treatments engineered for luxury footwear.
              </p>
            </motion.div>

            <div className="relative flex flex-1 items-center justify-center overflow-hidden pb-4 md:justify-end md:pb-0">
              <ScrollServiceDeck
                scrollYProgress={scrollYProgress}
                straightenProgress={straightenProgress}
                deckEnterProgress={deckEnterProgress}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ScrollRevealServices;
