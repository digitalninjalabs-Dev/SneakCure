"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import { productImage, serviceImage } from "@/lib/constants";
import { prefersReducedMotion } from "@/lib/motion";

const HOVER_TRANSITION = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

const AVATARS = [
  { src: productImage(0), alt: "Restored sneakers" },
  { src: productImage(1), alt: "Premium sneaker care" },
  { src: productImage(2), alt: "Leather restoration" },
  { src: productImage(3), alt: "Bag restoration" },
] as const;

/** Trimmed line — Canvasly-style scroll reveal */
const LINE_2 = ["premium", "craft", "with"] as const;
const LINE_3 = ["lasting", "care."] as const;

const ALL_WORDS = [...LINE_2, ...LINE_3] as const;

const CRAFT_CARDS = [
  {
    type: "image" as const,
    src: serviceImage(0),
    alt: "Sneaker restoration atelier",
    rotate: -7,
  },
  {
    type: "stat" as const,
    value: "12k+",
    title: "Restorations",
    note: "Pairs brought back",
    rotate: 5,
    tone: "light" as const,
  },
  {
    type: "image" as const,
    src: productImage(2),
    alt: "Leather detail craft",
    rotate: -3,
  },
  {
    type: "stat" as const,
    value: "48+",
    title: "Luxury brands",
    note: "Trusted craft standard",
    rotate: 6,
    tone: "dark" as const,
  },
  {
    type: "image" as const,
    src: serviceImage(1),
    alt: "Bag and wallet care",
    rotate: -5,
  },
] as const;

function InlineAvatars({
  hovered,
  setHovered,
  reduce,
}: {
  hovered: number | null;
  setHovered: (i: number | null) => void;
  reduce: boolean;
}) {
  return (
    <span
      className="mx-[0.12em] inline-flex translate-y-[0.08em] items-end align-middle"
      onMouseLeave={() => setHovered(null)}
    >
      {AVATARS.map((avatar, i) => {
        const isHot = hovered === i;
        const anyHot = hovered !== null;

        return (
          <motion.span
            key={avatar.src}
            className="relative inline-block origin-bottom overflow-hidden bg-neutral-200 ring-[3px] ring-white"
            style={{ zIndex: isHot ? 20 : i + 1 }}
            initial={false}
            animate={
              reduce
                ? {
                    width: "0.78em",
                    height: "0.78em",
                    borderRadius: 999,
                    marginLeft: i === 0 ? 0 : "-0.22em",
                    y: 0,
                    scale: 1,
                  }
                : {
                    width: isHot ? "0.95em" : "0.78em",
                    height: isHot ? "1.15em" : "0.78em",
                    borderRadius: isHot ? "0.28em" : 999,
                    marginLeft: i === 0 ? 0 : anyHot ? "-0.12em" : "-0.22em",
                    y: isHot ? -4 : 0,
                    scale: isHot ? 1.06 : 1,
                  }
            }
            transition={HOVER_TRANSITION}
            onMouseEnter={() => setHovered(i)}
          >
            <SafeImage
              src={avatar.src}
              alt={avatar.alt}
              fill
              className="object-cover"
              sizes="64px"
              loading="lazy"
            />
          </motion.span>
        );
      })}
    </span>
  );
}

function RevealWord({
  word,
  index,
  total,
  progress,
  italic,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  italic?: boolean;
}) {
  const start = index / total;
  const end = Math.min(1, (index + 1.25) / total);
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  const color = useTransform(progress, [start, end], [
    "rgba(17,17,17,0.18)",
    "rgba(17,17,17,1)",
  ]);

  return (
    <motion.span
      style={{ opacity, color }}
      className={`inline-block ${italic ? "italic" : ""}`}
    >
      {word}
      {index < total - 1 ? "\u00A0" : ""}
    </motion.span>
  );
}

function CraftFanGallery({ reduce }: { reduce: boolean }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className="relative mt-8 w-full overflow-x-clip pb-6 pt-2 sm:mt-10 sm:pb-8 md:mt-12 md:pb-10"
      onMouseLeave={() => setHovered(null)}
    >
      <div className="mx-auto flex max-w-5xl items-end justify-center px-4 sm:px-6">
        {CRAFT_CARDS.map((card, i) => {
          const isHot = hovered === i;
          const anyHot = hovered !== null;

          return (
            <motion.div
              key={card.type === "image" ? card.src : card.value}
              role="img"
              aria-label={card.type === "image" ? card.alt : `${card.value} ${card.title}`}
              className="relative aspect-[3/4] w-[min(38vw,11.5rem)] shrink-0 cursor-pointer overflow-hidden rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.14)] will-change-transform sm:w-[12.5rem] sm:rounded-[1.75rem] md:w-[14rem] md:rounded-[2rem] lg:w-[15rem]"
              style={{
                zIndex: isHot ? 30 : 10 + i,
                transformOrigin: "50% 85%",
              }}
              initial={false}
              animate={
                reduce
                  ? {
                      rotate: 0,
                      y: 0,
                      scale: 1,
                      marginLeft: i === 0 ? 0 : -36,
                    }
                  : {
                      rotate: isHot ? 0 : card.rotate,
                      y: isHot ? -28 : 0,
                      scale: isHot ? 1.07 : 1,
                      marginLeft: i === 0 ? 0 : anyHot ? -28 : -48,
                    }
              }
              transition={HOVER_TRANSITION}
              onMouseEnter={() => setHovered(i)}
            >
              {card.type === "image" ? (
                <SafeImage
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  sizes="240px"
                  loading="lazy"
                />
              ) : (
                <div
                  className={`flex h-full flex-col justify-between p-5 sm:p-6 ${
                    card.tone === "dark"
                      ? "bg-[#2f2f2f] text-white"
                      : "bg-[#d7dde8] text-primary-black"
                  }`}
                >
                  <p className="editorial-title text-[clamp(1.85rem,4.2vw,2.65rem)] leading-none tracking-tight">
                    {card.value}
                  </p>
                  <div>
                    <p className="text-[14px] font-semibold leading-tight sm:text-[15px]">{card.title}</p>
                    <div
                      className={`my-2 h-px w-11 ${
                        card.tone === "dark" ? "bg-white/25" : "bg-primary-black/20"
                      }`}
                    />
                    <p
                      className={`text-[11px] leading-snug sm:text-xs ${
                        card.tone === "dark" ? "text-white/60" : "text-primary-black/55"
                      }`}
                    >
                      {card.note}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(prefersReducedMotion());
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.75", "center 0.35"],
  });

  const subOpacity = useTransform(scrollYProgress, [0.55, 1], [0.25, 1]);
  const subColor = useTransform(
    scrollYProgress,
    [0.55, 1],
    ["rgba(17,17,17,0.35)", "rgba(17,17,17,0.7)"]
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-x-hidden bg-white pt-12 pb-6 sm:pt-14 sm:pb-8 md:pt-16 md:pb-8"
      aria-label="About Sneakcure"
    >
      <div className="section-pad mx-auto max-w-4xl text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary-black/45">
          · Our craft
        </p>

        <h2 className="editorial-title mx-auto mt-8 text-[clamp(2.1rem,7vw,4.25rem)] font-semibold leading-[1.12] tracking-[-0.035em] text-primary-black">
          <span className="block">
            <span className="text-primary-black">We</span>
            <InlineAvatars hovered={hovered} setHovered={setHovered} reduce={reduce} />
            <span className="text-primary-black">restore</span>
          </span>

          <span className="mt-[0.12em] block">
            {reduce
              ? LINE_2.map((w, i) => (
                  <span key={w} className="inline-block text-primary-black">
                    {w}
                    {i < LINE_2.length - 1 ? "\u00A0" : ""}
                  </span>
                ))
              : LINE_2.map((word, i) => (
                  <RevealWord
                    key={word}
                    word={word}
                    index={i}
                    total={ALL_WORDS.length}
                    progress={scrollYProgress}
                  />
                ))}
          </span>

          <span className="mt-[0.12em] block">
            {reduce
              ? LINE_3.map((w, i) => (
                  <span
                    key={w}
                    className={`inline-block ${w === "care." ? "italic text-primary-black" : "text-primary-black"}`}
                  >
                    {w}
                    {i < LINE_3.length - 1 ? "\u00A0" : ""}
                  </span>
                ))
              : LINE_3.map((word, i) => (
                  <RevealWord
                    key={word}
                    word={word}
                    index={LINE_2.length + i}
                    total={ALL_WORDS.length}
                    progress={scrollYProgress}
                    italic={word === "care."}
                  />
                ))}
          </span>
        </h2>

        <motion.p
          className="mx-auto mt-10 max-w-md text-sm font-medium leading-relaxed sm:text-base"
          style={reduce ? { color: "rgba(17,17,17,0.55)" } : { opacity: subOpacity, color: subColor }}
        >
          Craftsmanship. Consistent results. Every pair restored with precision.
        </motion.p>
      </div>

      <CraftFanGallery reduce={reduce} />
    </section>
  );
}
