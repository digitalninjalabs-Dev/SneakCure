"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { useSiteReady } from "@/components/providers/SiteReadyProvider";
import { LoopVideo } from "@/components/services/LoopVideo";
import { SERVICES_HERO_VIDEO } from "@/components/services/service-media";
import { PROCESS_STEPS } from "@/lib/constants";
import { SERVICE_PAGES } from "@/lib/site-data";
import { prefersReducedMotion } from "@/lib/motion";
import { MOTION_EASE, MOTION_VIEWPORT } from "@/lib/motion-viewport";
import { gsap, registerGsap, useGSAP } from "@/lib/gsap-client";

function FadeUp({
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={ready ? { opacity: 1, y: 0 } : undefined}
      viewport={MOTION_VIEWPORT}
      transition={{ duration: 0.55, delay, ease: MOTION_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MarqueeBand() {
  const ready = useSiteReady();
  const lineTop = Array.from({ length: 8 }, () => "SNEAKCURE");
  const lineBottom = Array.from({ length: 8 }, () => "ATELIER");
  const stampCopy = "SAY HELLO • LET'S TALK • SAY HELLO • LET'S TALK • ";

  return (
    <section
      className="services-stamp-marquee relative overflow-hidden bg-white py-12 sm:py-14 md:py-16"
      aria-label="Get in touch"
    >
      <div className="pointer-events-none select-none" aria-hidden>
        <div className="overflow-hidden">
          <motion.div
            className="flex w-max will-change-transform"
            animate={ready ? { x: ["0%", "-50%"] } : { x: "0%" }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          >
            {[0, 1].map((copy) => (
              <div key={`top-${copy}`} className="flex shrink-0">
                {lineTop.map((word, i) => (
                  <span
                    key={`${copy}-${word}-${i}`}
                    className="editorial-title px-[0.12em] text-[clamp(3.5rem,14vw,9rem)] font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-primary-black"
                  >
                    {word}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-[-0.08em] overflow-hidden">
          <motion.div
            className="flex w-max will-change-transform"
            animate={ready ? { x: ["-50%", "0%"] } : { x: "0%" }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          >
            {[0, 1].map((copy) => (
              <div key={`bot-${copy}`} className="flex shrink-0">
                {lineBottom.map((word, i) => (
                  <span
                    key={`${copy}-${word}-${i}`}
                    className="editorial-title px-[0.12em] text-[clamp(3.5rem,14vw,9rem)] font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-primary-black/35"
                  >
                    {word}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Link
          href="/contact"
          className="services-stamp-btn pointer-events-auto relative flex h-36 w-36 items-center justify-center rounded-full bg-primary-black text-white shadow-[0_16px_40px_rgba(0,0,0,0.18)] ring-1 ring-black/10 transition-transform duration-300 hover:scale-105 sm:h-44 sm:w-44 md:h-48 md:w-48"
          aria-label="Say hello — contact Sneakcure"
        >
          <svg viewBox="0 0 100 100" className="services-stamp-ring absolute inset-[5%] h-auto w-[90%]" aria-hidden>
            <defs>
              <path
                id="services-stamp-circle"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="fill-white/90 text-[7.2px] font-semibold uppercase tracking-[0.22em]">
              <textPath href="#services-stamp-circle" startOffset="0%">
                {stampCopy}
              </textPath>
            </text>
          </svg>
          <span className="relative z-10 text-3xl leading-none text-white sm:text-4xl" aria-hidden>
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}

function Hero() {
  const ready = useSiteReady();
  const stageRef = useRef<HTMLDivElement>(null);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(prefersReducedMotion());
  }, []);

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start 0.92", "center 0.4"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0.88, 1.12]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [28, 28] : [36, 10]
  );

  return (
    <section className="relative overflow-x-clip bg-white pt-28 md:pt-32">
      {/* Header — title left, copy + crumbs right */}
      <div className="section-pad mx-auto max-w-7xl pb-8 md:pb-10 lg:pb-12">
        <div className="grid items-end gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-12 lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.7, ease: MOTION_EASE }}
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-black/45"
            >
              Our services
            </motion.p>
            <div className="mt-4">
              <SplitTitle title="Six lines" accent="One standard" as="h1" size="hero" delay={0.06} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.75, delay: 0.12, ease: MOTION_EASE }}
            className="md:pb-1"
          >
            <p className="max-w-sm text-sm font-medium leading-relaxed text-primary-black/55 sm:text-[15px] md:ml-auto md:text-right">
              From grail sneakers to leather interiors — every piece gets a bespoke protocol,
              documented under studio lighting.
            </p>
            <nav
              aria-label="Breadcrumb"
              className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.16em] md:justify-end"
            >
              <Link href="/" className="text-primary-black transition-opacity hover:opacity-60">
                Home
              </Link>
              <span className="text-primary-black/30" aria-hidden>
                /
              </span>
              <span className="text-primary-black/45">Services</span>
            </nav>
          </motion.div>
        </div>
      </div>

      {/* Full-width video stage — grows on scroll */}
      <div ref={stageRef} className="relative pb-14 md:pb-20 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.85, delay: 0.18, ease: MOTION_EASE }}
          style={{ scale, borderRadius }}
          className="relative mx-auto w-[min(100%,80rem)] origin-center overflow-hidden bg-[#f3f3f3] will-change-transform"
        >
          <div className="relative aspect-[16/10] w-full sm:aspect-[16/9] md:aspect-[2.2/1]">
            <LoopVideo
              src={SERVICES_HERO_VIDEO}
              poster="/video/sneakhero-poster.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3 sm:bottom-5 sm:left-5 sm:right-5 md:bottom-6 md:left-6 md:right-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-black shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:px-4">
              <span className="franchise-ad-live-dot inline-block h-1.5 w-1.5 shrink-0 rounded-full" />
              Atelier craft
            </span>
            <MagneticButton href="#services-list">Browse lines ↓</MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceLineCard({ index, active }: { index: number; active: boolean }) {
  const service = SERVICE_PAGES[index]!;

  return (
    <motion.article
      data-line-index={index}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.04, ease: MOTION_EASE }}
      className={`rounded-2xl border px-5 py-5 transition-colors duration-300 sm:px-6 sm:py-6 ${
        active
          ? "border-primary-black/15 bg-[#f3f3f3]"
          : "border-primary-black/8 bg-white hover:border-primary-black/12 hover:bg-[#f7f7f7]"
      }`}
    >
      <div className="flex items-start gap-4">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold tabular-nums tracking-wide ${
            active ? "bg-primary-black text-white" : "bg-primary-black/8 text-primary-black/55"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="editorial-title text-lg font-semibold tracking-[-0.02em] text-primary-black sm:text-xl">
            {service.title}
          </h3>
          <p className="mt-2 text-sm font-medium leading-relaxed text-primary-black/55 sm:text-[15px]">
            {service.shortDesc}
          </p>
          <Link
            href={`/services/${service.slug}`}
            className="mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-black/70 transition-colors hover:text-primary-black"
          >
            View more →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function SnapCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const cards = document.querySelectorAll("[data-line-index]");
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number(entry.target.getAttribute("data-line-index"));
          if (!Number.isNaN(idx)) setActive(idx);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services-list" className="bg-white text-primary-black" aria-label="All service lines">
      <div className="section-pad mx-auto grid max-w-7xl gap-10 py-16 md:gap-12 md:py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:py-24 xl:gap-20">
        {/* Sticky intro */}
        <div className="lg:sticky lg:top-[calc(var(--site-header-offset)+2rem)] lg:self-start">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-black/45">
            All lines
          </p>
          <h2 className="editorial-title mt-4 text-[clamp(1.85rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-primary-black">
            Six ways we restore
            <span className="mt-1 block italic text-primary-black/45">One atelier standard.</span>
          </h2>
          <p className="mt-5 max-w-sm text-sm font-medium leading-relaxed text-primary-black/55 sm:text-[15px]">
            From grail sneakers to leather interiors — every piece gets a bespoke protocol under
            one Sneakcure standard.
          </p>
          <div className="mt-8">
            <MagneticButton href="/contact">Schedule a consultation</MagneticButton>
          </div>
        </div>

        {/* Scrolling line cards */}
        <ul className="flex flex-col gap-3 sm:gap-4">
          {SERVICE_PAGES.map((service, i) => (
            <li key={service.slug}>
              <ServiceLineCard index={i} active={active === i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const SERVICE_CARD_LABELS = [
  "Sneaker",
  "Bags & Wallets Care",
  "Jacket & Accessories",
  "Sofa Cleaning",
  "Customization/Patina Artwork",
  "Leather Care",
] as const;

function ServiceWhyCard({ index }: { index: number }) {
  const service = SERVICE_PAGES[index]!;
  const left = index % 2 === 0;
  const shortTitle = SERVICE_CARD_LABELS[index] ?? service.title;
  const blurb =
    service.shortDesc.length > 110
      ? `${service.shortDesc.slice(0, 107).replace(/\s+\S*$/, "")}…`
      : service.shortDesc;

  return (
    <article
      data-why-card
      data-service-index={index}
      className={`relative w-full max-w-xl overflow-hidden rounded-[1.35rem] bg-[#f0f0f0] sm:max-w-2xl md:max-w-3xl ${
        left ? "mr-auto" : "ml-auto"
      }`}
    >
      <div className="grid sm:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)]">
        <div className="relative aspect-[4/5] min-h-[14rem] overflow-hidden bg-neutral-200 sm:aspect-auto sm:min-h-[17rem] md:min-h-[19rem]">
          <SafeImage
            src={service.image}
            alt={service.title}
            fill
            loading="lazy"
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 40vw"
          />
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-8 md:p-9">
          <p className="editorial-title text-[clamp(1.15rem,2.4vw,1.65rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-primary-black">
            {String(index + 1).padStart(2, "0")} — {shortTitle}
          </p>
          <p className="mt-8 max-w-[32ch] text-sm font-medium leading-relaxed text-primary-black sm:mt-10 sm:text-[15px] md:mt-12">
            {blurb}
          </p>
          <Link
            href={`/services/${service.slug}`}
            className="mt-6 inline-flex text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-black transition-opacity hover:opacity-60"
          >
            View line →
          </Link>
        </div>
      </div>
    </article>
  );
}

function ServiceIndexScroll() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const root = rootRef.current;
      if (!root || prefersReducedMotion()) return;

      const cards = gsap.utils.toArray<HTMLElement>("[data-why-card]", root);
      cards.forEach((card, i) => {
        const fromX = i % 2 === 0 ? -64 : 64;
        gsap.fromTo(
          card,
          { x: fromX, y: 48, opacity: 0.25 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              end: "top 42%",
              scrub: 1.15,
            },
          }
        );
      });

      gsap.fromTo(
        "[data-why-bg]",
        { yPercent: 12, scale: 0.96 },
        {
          yPercent: -18,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
          },
        }
      );
    },
    { scope: rootRef }
  );

  return (
    <section ref={rootRef} className="relative bg-white" aria-label="Why Sneakcure services">
      {/* Sticky giant word */}
      <div className="pointer-events-none sticky top-0 z-0 flex h-[100svh] items-center justify-center overflow-hidden">
        <p
          data-why-bg
          className="editorial-title select-none text-center text-[clamp(3.5rem,16vw,11rem)] font-semibold uppercase leading-none tracking-[-0.05em] text-primary-black/20 will-change-transform"
        >
          Sneakcure
        </p>
      </div>

      {/* Overlapping cards */}
      <div className="relative z-10 -mt-[88svh] pb-24 md:pb-32">
        <div className="section-pad mx-auto max-w-6xl">
          <div className="mb-14 max-w-xl md:mb-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-black/45">
              Services
            </p>
            <h2 className="editorial-title mt-4 text-[clamp(1.85rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-primary-black">
              Why Sneakcure
              <span className="mt-1 block italic text-primary-black/45">Six lines of craft.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-14 sm:gap-20 md:gap-28 lg:gap-32">
            {SERVICE_PAGES.map((service, i) => (
              <ServiceWhyCard key={service.slug} index={i} />
            ))}
          </div>
        </div>

        <div className="section-pad mx-auto mt-16 flex max-w-6xl justify-end md:mt-20">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center gap-8 rounded-md bg-primary-black px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-transform hover:scale-[1.02] sm:gap-12 sm:px-6"
          >
            <span>Book now</span>
            <span aria-hidden className="text-base leading-none">
              +
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProcessStepCard({
  step,
  index,
  active,
}: {
  step: (typeof PROCESS_STEPS)[number];
  index: number;
  active: boolean;
}) {
  return (
    <motion.article
      data-process-index={index}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: MOTION_EASE }}
      className={`rounded-2xl border px-5 py-5 transition-colors duration-300 sm:px-6 sm:py-6 ${
        active
          ? "border-primary-black/15 bg-[#f3f3f3]"
          : "border-primary-black/8 bg-white hover:border-primary-black/12 hover:bg-[#f7f7f7]"
      }`}
    >
      <div className="flex items-start gap-4">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold tabular-nums ${
            active ? "bg-primary-black text-white" : "bg-primary-black/8 text-primary-black/55"
          }`}
        >
          {step.step}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="editorial-title text-lg font-semibold tracking-[-0.02em] text-primary-black sm:text-xl">
            {step.title}
          </h3>
          <p className="mt-2 text-sm font-medium leading-relaxed text-primary-black/55 sm:text-[15px]">
            {step.desc}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function ProcessRow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const cards = document.querySelectorAll("[data-process-index]");
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number(entry.target.getAttribute("data-process-index"));
          if (!Number.isNaN(idx)) setActive(idx);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#f3f3f3] text-primary-black" aria-label="Our process">
      <div className="section-pad mx-auto grid max-w-7xl gap-10 py-16 md:gap-12 md:py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:py-24 xl:gap-20">
        <div className="lg:sticky lg:top-[calc(var(--site-header-offset)+2rem)] lg:self-start">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-black/45">
            How it works
          </p>
          <h2 className="editorial-title mt-4 text-[clamp(1.85rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-primary-black">
            Our process
            <span className="mt-1 block italic text-primary-black/45">Six clear steps.</span>
          </h2>
          <p className="mt-5 max-w-sm text-sm font-medium leading-relaxed text-primary-black/55 sm:text-[15px]">
            Our six-step process keeps you involved at every stage — from pickup to return —
            with atelier craft and clear communication throughout.
          </p>
          <div className="mt-8">
            <MagneticButton href="/contact">Schedule a consultation</MagneticButton>
          </div>
        </div>

        <ul className="flex flex-col gap-3 sm:gap-4">
          {PROCESS_STEPS.map((step, i) => (
            <li key={step.step}>
              <ProcessStepCard step={step} index={i} active={active === i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-pad mx-auto max-w-7xl">
        <FadeUp className="rounded-[1.75rem] border border-primary-black/8 bg-white px-6 py-14 text-center sm:rounded-[2rem] sm:px-10 sm:py-16 md:px-16 md:py-20">
          <SplitTitle
            title="Not sure which line fits"
            accent="We will match the protocol"
            as="h2"
            size="section"
            align="center"
            className="mx-auto max-w-2xl text-balance"
          />
          <p className="mx-auto mt-4 max-w-md text-[0.95rem] leading-relaxed text-primary-black/45 sm:text-base">
            Tell us about your piece — we&apos;ll match the right protocol and timeline.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary-black px-8 py-3.5 text-[0.8rem] font-semibold tracking-wide text-white transition-opacity hover:opacity-85 sm:px-10"
            >
              Get started
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-primary-black/15 bg-transparent px-7 py-3.5 text-[0.8rem] font-semibold tracking-wide text-primary-black transition-colors hover:border-primary-black/30 hover:bg-[#f5f5f5] sm:px-8"
            >
              Book consultation
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export function ServicesShowcase() {
  return (
    <div className="services-showcase">
      <Hero />
      <MarqueeBand />
      <SnapCarousel />
      <ServiceIndexScroll />
      <ProcessRow />
      <CTA />
    </div>
  );
}
