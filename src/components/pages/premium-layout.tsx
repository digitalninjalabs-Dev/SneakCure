"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useSiteReady } from "@/components/providers/SiteReadyProvider";
import { SafeImage } from "@/components/ui/SafeImage";
import { TitleReveal } from "@/components/ui/TitleReveal";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { MOTION_VIEWPORT } from "@/lib/motion-viewport";

export const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

export function Fade({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ready = useSiteReady();

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={ready ? { opacity: 1, y: 0 } : undefined}
      viewport={MOTION_VIEWPORT}
      transition={{ duration: 0.55, delay, ease: PREMIUM_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({
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

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`text-[11px] uppercase tracking-[0.42em] ${dark ? "text-white/40" : "text-muted"}`}>
      {children}
    </p>
  );
}

export function Hairline({ className = "" }: { className?: string }) {
  return <div className={`h-px w-full bg-black/[0.08] ${className}`} aria-hidden />;
}

export function PremiumHero({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  image,
  imageAlt,
  dark = false,
  children,
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  dark?: boolean;
  children?: React.ReactNode;
}) {
  const ready = useSiteReady();

  return (
    <section
      className={`relative overflow-hidden pt-28 md:pt-36 ${dark ? "bg-deep-black text-soft-white" : "bg-pearl"}`}
    >
      <div className="section-pad mx-auto grid max-w-7xl items-end gap-14 pb-24 md:grid-cols-[1.05fr_0.95fr] md:gap-20 md:pb-32">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, ease: PREMIUM_EASE }}
          >
            <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
            <SplitTitle
              title={title}
              accent={titleAccent}
              as="h1"
              size="hero"
              dark={dark}
              className="mt-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.65, delay: 0.2, ease: PREMIUM_EASE }}
              className={`mt-8 max-w-md text-base leading-[1.75] md:text-[1.05rem] ${
                dark ? "text-white/55" : "text-primary-black/60"
              }`}
            >
              {subtitle}
            </motion.p>
            {children}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: PREMIUM_EASE }}
          className="relative aspect-[3/4] w-full max-w-lg justify-self-end md:max-w-none"
        >
          <div
            className={`relative h-full w-full overflow-hidden ${
              dark ? "ring-1 ring-white/10" : "ring-1 ring-black/[0.06]"
            }`}
          >
            <SafeImage src={image} alt={imageAlt} fill priority className="object-cover" sizes="(max-width:768px) 100vw, 45vw" />
            <div className={`absolute inset-0 ${dark ? "bg-gradient-to-t from-black/50 via-transparent to-transparent" : "bg-gradient-to-t from-black/15 via-transparent to-transparent"}`} />
          </div>
        </motion.div>
      </div>
      <Hairline className={dark ? "bg-white/10" : undefined} />
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  const alignClass = align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <Fade className={alignClass}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <SplitTitle
        title={title}
        accent={titleAccent}
        as="h2"
        size="md"
        align={align}
        dark={dark}
        className="mt-5"
      />
      {subtitle && (
        <p className={`mt-5 text-base leading-[1.75] md:text-lg ${dark ? "text-white/50" : "text-muted"}`}>
          {subtitle}
        </p>
      )}
    </Fade>
  );
}

export function StatRow({
  stats,
  dark = false,
}: {
  stats: readonly { value: string; label: string }[];
  dark?: boolean;
}) {
  return (
    <div className={`grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12 ${dark ? "text-soft-white" : ""}`}>
      {stats.map((s, i) => (
        <Fade key={s.label} delay={i * 0.06}>
          <div className="hover-stat">
          <p className="font-display text-3xl tracking-tight md:text-4xl">{s.value}</p>
          <p className={`mt-2 text-[11px] uppercase tracking-[0.28em] ${dark ? "text-white/40" : "text-muted"}`}>
            {s.label}
          </p>
          </div>
        </Fade>
      ))}
    </div>
  );
}

export function NumberedList({
  items,
  start = 1,
}: {
  items: readonly string[];
  start?: number;
}) {
  return (
    <ol className="divide-y divide-black/[0.06] border-y border-black/[0.06]">
      {items.map((item, i) => (
        <Fade key={item} delay={i * 0.05}>
          <li className="hover-row flex gap-6 py-5 md:gap-10 md:py-6">
            <span className="shrink-0 font-mono text-[11px] tabular-nums text-muted">
              {String(start + i).padStart(2, "0")}
            </span>
            <span className="text-base leading-relaxed text-primary-black/80 md:text-[1.05rem]">{item}</span>
          </li>
        </Fade>
      ))}
    </ol>
  );
}

export function PremiumCard({
  index,
  eyebrow,
  title,
  body,
  footer,
}: {
  index: number;
  eyebrow?: string;
  title: string;
  body: string;
  footer?: string;
}) {
  return (
    <Fade delay={index * 0.08}>
      <article className="group hover-lift flex h-full flex-col border border-black/[0.06] bg-white p-8 md:p-10">
        <span className="font-mono text-[11px] text-muted">{String(index + 1).padStart(2, "0")}</span>
        {eyebrow && (
          <p className="mt-6 text-[11px] uppercase tracking-[0.32em] text-muted">{eyebrow}</p>
        )}
        <h3 className="mt-3 font-display text-xl md:text-2xl">{title}</h3>
        <p className="mt-4 flex-1 leading-[1.75] text-muted">{body}</p>
        {footer && (
          <p className="mt-8 text-[11px] uppercase tracking-[0.24em] text-primary-black/35 transition-colors group-hover:text-primary-black/60">
            {footer}
          </p>
        )}
      </article>
    </Fade>
  );
}

export function PremiumQuote({ quote, attribution }: { quote: string; attribution: string }) {
  return (
    <section className="gloss-black-panel section-pad py-24 md:py-32">
      <Fade className="mx-auto max-w-4xl text-center">
        <Reveal delay={0.06}>
          <blockquote className="editorial-title text-2xl leading-snug text-soft-white md:text-4xl">
            &ldquo;{quote}&rdquo;
          </blockquote>
        </Reveal>
        <p className="mt-8 text-[11px] uppercase tracking-[0.32em] text-white/35">{attribution}</p>
      </Fade>
    </section>
  );
}

export function PremiumCTA({
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
  return (
    <section className="section-pad bg-pearl py-24 md:py-32">
      <Fade className="gloss-black-panel hover-lift mx-auto max-w-4xl px-8 py-16 text-center md:px-16 md:py-20">
        {eyebrow && <Eyebrow dark>{eyebrow}</Eyebrow>}
        <SplitTitle
          title={title}
          accent={titleAccent}
          as="h2"
          size="cta"
          align="center"
          dark
          className={eyebrow ? "mt-5" : ""}
        />
        {subtitle && <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/45">{subtitle}</p>}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <MagneticButton href={primaryHref}>{primaryLabel}</MagneticButton>
          {secondaryLabel && secondaryHref && (
            <MagneticButton href={secondaryHref} variant="ghost">
              {secondaryLabel}
            </MagneticButton>
          )}
        </div>
      </Fade>
    </section>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="hover-slide-link group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-primary-black/50 transition-colors hover:text-primary-black"
    >
      {children}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </Link>
  );
}

export function GalleryCell({
  src,
  index,
  large = false,
  alt = "",
}: {
  src: string;
  index: number;
  large?: boolean;
  alt?: string;
}) {
  return (
    <Fade delay={index * 0.05}>
      <div
        className={`relative overflow-hidden ring-1 ring-black/[0.05] ${
          large ? "col-span-2 aspect-[16/9] md:col-span-1 md:aspect-[3/4]" : "aspect-[3/4]"
        }`}
      >
        <SafeImage src={src} alt={alt} fill loading="lazy" className="object-cover" sizes="(max-width:768px) 50vw, 25vw" />
      </div>
    </Fade>
  );
}
