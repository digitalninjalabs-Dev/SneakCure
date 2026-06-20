"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  FloatingBlob,
  HeroGraphicStack,
  ImageFrameGraphic,
  MonogramWatermark,
  OrbitRing,
} from "@/components/pages/PageGraphics";
import { FloatingParticles, GlowOrb, ShimmerBar } from "@/components/pages/page-animations";
import { SafeImage } from "@/components/ui/SafeImage";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { TitleReveal } from "@/components/ui/TitleReveal";

export const PAGE_EASE = [0.22, 1, 0.36, 1] as const;

export function RevealLine({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <TitleReveal className={className} delay={delay}>
      {children}
    </TitleReveal>
  );
}

export function FadeUp({
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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay, ease: PAGE_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MarqueeBand({ words }: { words: readonly string[] }) {
  return (
    <div className="overflow-hidden border-y border-black/8 bg-white py-4">
      <motion.div
        className="flex w-max gap-12 whitespace-nowrap md:gap-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...words, ...words, ...words].map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            animate={{ opacity: [0.12, 0.22, 0.12] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: (i % words.length) * 0.4 }}
            className="font-display text-sm uppercase tracking-[0.38em] text-primary-black/15 md:text-base"
          >
            {word}
            <span className="mx-10 text-primary-black/8 md:mx-14">·</span>
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export function SplitHero({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  image,
  imageAlt,
  badge,
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  badge?: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-pearl pt-28 grain md:pt-36">
      <HeroGraphicStack variant="light" />
      <FloatingParticles count={10} />
      <MonogramWatermark className="right-[5%] top-[20%]" />

      <div className="section-pad relative z-10 mx-auto grid max-w-7xl items-center gap-12 pb-20 md:grid-cols-2 md:gap-16 md:pb-28">
        <motion.div style={{ y: textY }}>
          {badge && (
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: PAGE_EASE }}
              className="mb-4"
            >
              {badge}
            </motion.div>
          )}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: PAGE_EASE }}
            className="text-xs uppercase tracking-[0.36em] text-muted"
          >
            {eyebrow}
          </motion.p>
          <SplitTitle
            title={title}
            accent={titleAccent}
            as="h1"
            size="hero"
            className="mt-5"
            delay={0.06}
          />
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: PAGE_EASE }}
            className="mt-6 max-w-md text-base leading-relaxed text-primary-black/65 md:text-lg"
          >
            {subtitle}
          </motion.p>
          <ShimmerBar className="mt-8 max-w-xs" />
        </motion.div>

        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.12, ease: PAGE_EASE }}
          className="relative aspect-[4/5] overflow-visible md:aspect-[3/4]"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] ring-1 ring-black/8 shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
            <ImageFrameGraphic />
            <motion.div
              className="absolute inset-0"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
              <SafeImage src={image} alt={imageAlt} fill priority className="object-cover" sizes="50vw" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function StepTimeline({ steps }: { steps: readonly string[] }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end center"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="section-pad py-20 md:py-28">
      <ol className="relative mx-auto max-w-2xl space-y-5">
        <div className="absolute bottom-0 left-[1.35rem] top-0 w-px bg-black/8 md:left-6">
          <motion.div className="w-full bg-primary-black/25" style={{ height: lineHeight }} />
        </div>
        {steps.map((step, i) => (
          <motion.li
            key={step}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75, delay: i * 0.08, ease: PAGE_EASE }}
            whileHover={{ x: 6 }}
            className="relative flex gap-5 rounded-2xl border border-black/6 bg-white/70 p-5 pl-14 backdrop-blur-sm md:pl-16"
          >
            <motion.span
              className="absolute left-4 top-5 flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-pearl font-mono text-[10px] text-muted md:left-5"
              whileInView={{ scale: [0.6, 1.15, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {String(i + 1).padStart(2, "0")}
            </motion.span>
            <p className="pt-0.5 text-primary-black/85">{step}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

export function DarkCTA({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  primaryLabel,
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);

  return (
    <section ref={ref} className="section-pad bg-pearl py-20 md:py-28">
      <motion.div
        style={{ scale }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-gloss-black px-8 py-14 text-center ring-1 ring-white/10 md:px-14 md:py-16"
      >
        <OrbitRing className="left-4 top-4 h-24 w-24 text-white/10" />
        <FloatingBlob className="right-0 top-0 h-40 w-40 bg-white/[0.04]" />
        <GlowOrb className="bottom-0 left-1/4 h-32 w-32 bg-white/[0.06]" delay={1} />
        <FloatingParticles count={8} theme="dark" />
        {eyebrow && (
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.36em] text-white/35">{eyebrow}</p>
          </FadeUp>
        )}
        <SplitTitle
          title={title}
          accent={titleAccent}
          as="h2"
          size="cta"
          align="center"
          dark
          className="mt-4"
          delay={0.06}
        />
        {subtitle && (
          <FadeUp className="mx-auto mt-5 max-w-xl text-white/50" delay={0.12}>
            {subtitle}
          </FadeUp>
        )}
        <FadeUp className="mt-9 flex flex-wrap justify-center gap-3" delay={0.2}>
          <MagneticButton href={primaryHref}>{primaryLabel}</MagneticButton>
          {secondaryLabel && secondaryHref && (
            <MagneticButton href={secondaryHref} variant="ghost">
              {secondaryLabel}
            </MagneticButton>
          )}
        </FadeUp>
      </motion.div>
    </section>
  );
}
