"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { useSiteReady } from "@/components/providers/SiteReadyProvider";
import { MOSAIC_IMAGES, serviceGallery } from "@/components/services/service-media";
import { SERVICE_PAGES } from "@/lib/site-data";
import { STATS } from "@/lib/constants";
import { MOTION_EASE, MOTION_VIEWPORT } from "@/lib/motion-viewport";

const COUNT = SERVICE_PAGES.length;
const MARQUEE = ["RESTORE", "CLEAN", "REPAIR", "RECOLOR", "PRESERVE", "REVIVE"] as const;

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

  return (
    <div className="overflow-hidden border-y border-black/8 bg-white py-4">
      <motion.div
        className="flex w-max gap-12 whitespace-nowrap md:gap-16"
        animate={ready ? { x: ["0%", "-50%"] } : { x: "0%" }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {[...MARQUEE, ...MARQUEE, ...MARQUEE].map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="font-display text-sm uppercase tracking-[0.38em] text-primary-black/15 md:text-base"
          >
            {word}
            <span className="mx-10 text-primary-black/8 md:mx-14">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Hero() {
  const ready = useSiteReady();

  return (
    <section className="relative overflow-hidden bg-pearl pt-28 grain md:pt-36">
      <div className="section-pad mx-auto grid max-w-7xl items-center gap-12 pb-20 md:grid-cols-2 md:gap-16 md:pb-28 lg:pb-32">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.8, ease: MOTION_EASE }}
            className="text-xs uppercase tracking-[0.36em] text-muted"
          >
            Our services
          </motion.p>

          <SplitTitle title="Six lines" accent="One standard" as="h1" size="hero" className="mt-5" delay={0.06} />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.85, delay: 0.28, ease: MOTION_EASE }}
            className="mt-6 max-w-md text-base leading-relaxed text-primary-black/65 md:text-lg"
          >
            From grail sneakers to leather interiors — every piece gets a bespoke protocol,
            documented under studio lighting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.8, delay: 0.38, ease: MOTION_EASE }}
            className="mt-9"
          >
            <MagneticButton href="#services-list">Browse lines ↓</MagneticButton>
          </motion.div>

          <div className="mt-10 h-px max-w-xs bg-black/15" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: MOTION_EASE }}
            className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.65, delay: 0.55 + i * 0.07, ease: MOTION_EASE }}
              >
                <p className="font-display text-xl md:text-2xl">
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: MOTION_EASE }}
          className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-black/8 shadow-[0_40px_100px_rgba(0,0,0,0.08)] md:aspect-[3/4]"
        >
          <SafeImage
            src={SERVICE_PAGES[0]!.image}
            alt="Premium restoration"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          <div className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white/80 backdrop-blur-md">
            Atelier craft
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CarouselCard({ index }: { index: number }) {
  const service = SERVICE_PAGES[index]!;
  const gallery = serviceGallery(index);

  return (
    <article className="group relative w-[78vw] shrink-0 overflow-x-visible overflow-y-clip rounded-2xl bg-gloss-black ring-1 ring-black/10 transition-transform duration-300 ease-out hover:-translate-y-1.5 sm:w-[340px] md:w-[380px]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <SafeImage
          src={gallery[0] ?? service.image}
          alt={service.title}
          fill
          loading={index < 2 ? undefined : "lazy"}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="380px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-[10px] uppercase tracking-[0.28em] text-white/45">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-2 font-display text-xl text-white">{service.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-white/50">{service.tagline}</p>
        <div className="mt-5">
          <MagneticButton href={`/services/${service.slug}`}>View more</MagneticButton>
        </div>
      </div>
    </article>
  );
}

function SnapCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const maxShiftRef = useRef(0);
  const [ready, setReady] = useState(false);

  const measure = useCallback(() => {
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    const shift = Math.max(0, track.scrollWidth - window.innerWidth + 48);
    maxShiftRef.current = shift;
    section.style.height = `${shift + window.innerHeight}px`;
    setReady(true);
  }, []);

  useLayoutEffect(() => {
    measure();

    const onResize = () => measure();
    window.addEventListener("resize", onResize, { passive: true });

    const track = trackRef.current;
    const observer = track ? new ResizeObserver(onResize) : null;
    if (track) observer?.observe(track);

    const imgs = track?.querySelectorAll("img") ?? [];
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", measure, { once: true });
    });

    return () => {
      window.removeEventListener("resize", onResize);
      observer?.disconnect();
    };
  }, [measure]);

  useEffect(() => {
    if (!ready) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const start = section.offsetTop;
      const end = start + section.offsetHeight - window.innerHeight;
      const range = Math.max(1, end - start);
      const progress = Math.min(1, Math.max(0, (window.scrollY - start) / range));
      track.style.transform = `translate3d(${-progress * maxShiftRef.current}px, 0, 0)`;
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [ready]);

  return (
    <section ref={sectionRef} className="border-y border-black/8 bg-soft-white min-h-screen">
      <div className="sticky top-[var(--site-header-offset)] flex min-h-[calc(100vh-var(--site-header-offset))] flex-col justify-center overflow-hidden py-14 md:py-16">
        <div className="section-pad mx-auto mb-10 max-w-7xl md:mb-12">
          <p className="text-xs uppercase tracking-[0.32em] text-muted">All lines</p>
          <SplitTitle title="Six ways we restore" accent="One atelier standard" as="h2" size="md" className="mt-3" />
          <p className="mt-4 max-w-md text-base italic leading-relaxed text-primary-black/55 md:text-lg">
            From grail sneakers to leather interiors — one atelier, one standard.
          </p>
        </div>

        <div
          ref={trackRef}
          className="flex w-max gap-4 px-[max(1rem,env(safe-area-inset-left))] pb-2 will-change-transform md:gap-5"
          style={{ transform: "translate3d(0, 0, 0)" }}
        >
          {SERVICE_PAGES.map((service, index) => (
            <CarouselCard key={service.slug} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicePanel({ index }: { index: number }) {
  const service = SERVICE_PAGES[index]!;
  const gallery = serviceGallery(index);
  const flip = index % 2 === 1;

  return (
    <motion.article
      id={index === 0 ? "services-list" : undefined}
      data-service-index={index}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={MOTION_VIEWPORT}
      transition={{ duration: 0.8, delay: index * 0.04, ease: MOTION_EASE }}
      whileHover={{ y: -4, boxShadow: "0 32px 72px rgba(0,0,0,0.1)" }}
      className="rounded-[1.75rem] bg-white shadow-[0_20px_56px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.05] md:rounded-[2.25rem]"
    >
      <div className="grid md:grid-cols-2 md:items-stretch">
        <motion.div
          initial={{ opacity: 0, x: flip ? 32 : -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={MOTION_VIEWPORT}
          transition={{ duration: 0.75, delay: 0.1, ease: MOTION_EASE }}
          className={`flex min-w-0 w-full flex-col justify-center overflow-visible px-7 py-8 sm:px-9 sm:py-9 md:px-10 md:py-10 lg:px-12 lg:py-11 ${
            flip ? "md:order-2" : ""
          }`}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={MOTION_VIEWPORT}
            transition={{ duration: 0.55, delay: 0.12, ease: MOTION_EASE }}
            className="text-xs uppercase tracking-[0.32em] text-muted"
          >
            Line {String(index + 1).padStart(2, "0")}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={MOTION_VIEWPORT}
            transition={{ duration: 0.7, delay: 0.16, ease: MOTION_EASE }}
            className="editorial-title mt-3 max-w-full break-words text-[1.75rem] leading-[1.1] sm:text-3xl md:text-[2.35rem] lg:text-[2.65rem]"
          >
            {service.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={MOTION_VIEWPORT}
            transition={{ duration: 0.65, delay: 0.2, ease: MOTION_EASE }}
            className="mt-3 text-base italic text-muted md:text-lg"
          >
            {service.tagline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={MOTION_VIEWPORT}
            transition={{ duration: 0.65, delay: 0.24, ease: MOTION_EASE }}
            className="mt-4 max-w-md text-sm leading-relaxed text-primary-black/70 md:text-base"
          >
            {service.shortDesc}
          </motion.p>

          <ul className="mt-6 space-y-2">
            {service.process.slice(0, 3).map((step, i) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={MOTION_VIEWPORT}
                transition={{ duration: 0.55, delay: 0.28 + i * 0.07, ease: MOTION_EASE }}
                className="flex gap-3 text-sm text-muted"
              >
                <span className="font-mono text-[10px] text-primary-black/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={MOTION_VIEWPORT}
            transition={{ duration: 0.65, delay: 0.52, ease: MOTION_EASE }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href={`/services/${service.slug}`}>View more</MagneticButton>
            <span className="rounded-full border border-black/10 px-4 py-2 text-sm text-muted">
              {service.pricing[0]?.price}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={MOTION_VIEWPORT}
          transition={{ duration: 0.85, delay: 0.14, ease: MOTION_EASE }}
          className={`group/image relative min-h-[240px] w-full overflow-hidden sm:min-h-[280px] md:min-h-0 md:h-full ${
            flip ? "md:order-1 md:rounded-l-[2.25rem]" : "md:rounded-r-[2.25rem]"
          } rounded-b-[1.75rem] md:rounded-b-none`}
        >
          <motion.div
            className="absolute inset-0 h-full w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7, ease: MOTION_EASE }}
          >
            <SafeImage
              src={gallery[1] ?? service.image}
              alt={service.title}
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/image:opacity-100" />
        </motion.div>
      </div>
    </motion.article>
  );
}

function NavItem({
  index,
  active,
  onSelect,
}: {
  index: number;
  active: number;
  onSelect: (i: number) => void;
}) {
  const service = SERVICE_PAGES[index]!;
  const isActive = active === index;

  return (
    <li>
      <motion.button
        type="button"
        onClick={() => onSelect(index)}
        className="group relative flex w-full items-baseline gap-3 py-2.5 text-left"
        animate={{ opacity: isActive ? 1 : 0.38 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: MOTION_EASE }}
      >
        {isActive && (
          <motion.span
            layoutId="service-nav-active"
            className="absolute -left-3 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-primary-black"
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
          />
        )}
        <span className="font-mono text-[10px] text-muted">{String(index + 1).padStart(2, "0")}</span>
        <span className={`text-sm ${isActive ? "font-medium text-primary-black" : "text-primary-black/70"}`}>
          {service.title.replace(" & ", " · ").split(" ").slice(0, 3).join(" ")}
          {service.title.split(" ").length > 3 ? "…" : ""}
        </span>
      </motion.button>
    </li>
  );
}

function ServiceIndexScroll() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panels = document.querySelectorAll("[data-service-index]");
    if (!panels.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-service-index"));
            if (!Number.isNaN(idx)) setActive(idx);
          }
        });
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 }
    );

    panels.forEach((panel) => observer.observe(panel));
    return () => observer.disconnect();
  }, []);

  const scrollToService = (index: number) => {
    const panel = document.querySelector(`[data-service-index="${index}"]`);
    panel?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section ref={containerRef} className="bg-pearl py-20 md:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <FadeUp className="mb-14 lg:hidden">
          <p className="text-xs uppercase tracking-[0.32em] text-muted">All lines</p>
          <SplitTitle title="Explore each protocol" accent="Line by line" as="h2" size="md" className="mt-3" />
        </FadeUp>

        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-14">
          <nav className="hidden lg:block">
            <div className="sticky top-[calc(var(--site-header-offset)+1.5rem)]">
              <FadeUp>
                <p className="text-xs uppercase tracking-[0.32em] text-muted">Services</p>
              </FadeUp>
              <ul className="mt-6 space-y-1">
                {SERVICE_PAGES.map((service, i) => (
                  <NavItem key={service.slug} index={i} active={active} onSelect={scrollToService} />
                ))}
              </ul>
              <motion.div className="mt-6 h-px overflow-hidden bg-black/10">
                <motion.div
                  className="h-full bg-primary-black/30"
                  animate={{ width: `${((active + 1) / COUNT) * 100}%` }}
                  transition={{ duration: 0.5, ease: MOTION_EASE }}
                />
              </motion.div>
            </div>
          </nav>

          <div className="flex flex-col gap-6 md:gap-8">
            {SERVICE_PAGES.map((service, i) => (
              <ServicePanel key={service.slug} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  index,
}: {
  step: { n: string; label: string };
  index: number;
}) {
  return (
    <FadeUp delay={index * 0.06}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.35, ease: MOTION_EASE }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={MOTION_VIEWPORT}
          transition={{ duration: 0.55, delay: index * 0.08, ease: MOTION_EASE }}
          className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-pearl"
        >
          <span className="font-mono text-[10px] text-muted">{step.n}</span>
        </motion.div>
        <p className="font-display text-lg">{step.label}</p>
      </motion.div>
    </FadeUp>
  );
}

function ProcessRow() {
  const steps = [
    { n: "01", label: "Intake" },
    { n: "02", label: "Protocol" },
    { n: "03", label: "Atelier" },
    { n: "04", label: "Return" },
  ];

  return (
    <section className="border-y border-black/8 bg-white py-16 md:py-20">
      <div className="section-pad mx-auto max-w-7xl">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.32em] text-muted">How it works</p>
        </FadeUp>
        <div className="mt-8 h-px bg-primary-black/15" />
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          {steps.map((step, i) => (
            <ProcessStep key={step.n} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ src, index }: { src: string; index: number }) {
  return (
    <FadeUp delay={index * 0.05}>
      <div
        className={`relative shrink-0 overflow-hidden rounded-2xl ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 ${
          index % 3 === 0 ? "h-[360px] w-[260px] md:h-[420px] md:w-[300px]" : "h-[300px] w-[220px] md:h-[360px] md:w-[260px]"
        }`}
      >
        <SafeImage src={src} alt="" fill loading="lazy" className="object-cover" sizes="300px" />
      </div>
    </FadeUp>
  );
}

function GalleryStrip() {
  return (
    <section className="overflow-hidden bg-soft-white py-20 md:py-24">
      <FadeUp className="section-pad mx-auto mb-10 max-w-7xl">
        <p className="text-xs uppercase tracking-[0.28em] text-muted">The atelier</p>
        <SplitTitle title="Craft in stills" accent="The atelier revealed" as="h2" size="md" className="mt-3" />
      </FadeUp>

      <div className="flex gap-3 overflow-x-auto px-[max(1rem,env(safe-area-inset-left))] pb-2 md:gap-4">
        {MOSAIC_IMAGES.slice(0, 7).map((src, i) => (
          <GalleryItem key={src} src={src} index={i} />
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section-pad bg-pearl py-20 md:py-28">
      <FadeUp className="reveal-y-clip relative mx-auto max-w-3xl rounded-[2rem] bg-gloss-black px-8 py-14 text-center ring-1 ring-white/10 md:px-14 md:py-16">
        <p className="text-xs uppercase tracking-[0.36em] text-white/35">Start here</p>
        <SplitTitle
          title="Not sure which line fits"
          accent="We will match the protocol"
          as="h2"
          size="cta"
          dark
          align="center"
          className="mt-4"
          delay={0.06}
        />
        <p className="mx-auto mt-5 max-w-md text-white/50">
          Tell us about your piece — we&apos;ll match the right protocol and timeline.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <MagneticButton href="/contact">Get in touch</MagneticButton>
          <MagneticButton href="/contact" variant="ghost">
            Book consultation
          </MagneticButton>
        </div>
      </FadeUp>
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
      <GalleryStrip />
      <CTA />
    </div>
  );
}
