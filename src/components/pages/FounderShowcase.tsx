"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useSiteReady } from "@/components/providers/SiteReadyProvider";
import { MaterialIcon } from "@/components/pages/campaign-ui";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SafeImage } from "@/components/ui/SafeImage";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { REEL_VIDEOS } from "@/lib/constants";
import { FOUNDER, FOUNDER_MEDIA } from "@/lib/site-data";
import { MOTION_EASE, MOTION_VIEWPORT } from "@/lib/motion-viewport";

const BEGINNING_QUOTE =
  "True restoration isn't about hiding the marks of time; it's about preserving the character, craftsmanship, and story that make every piece worth carrying forward.";

const FIRST_RESTORATION_BODY =
  "In 2020, Ajit Yadav began with a modest workshop in Gomti Nagar, Lucknow equipped with a single workbench, handcrafted tools, and an unwavering commitment to quality. Every restored pair earned trust through exceptional craftsmanship. As satisfied clients returned with more treasured pieces, Sneakcure evolved from a passion-driven atelier into a respected destination for luxury footwear and leather restoration.";

const PROCESS_STEPS = [
  {
    n: "01",
    label: "ASSESS",
    body: "Detailed inspection of leather condition, construction, and restoration requirements.",
  },
  {
    n: "02",
    label: "RESTORE",
    body: "Expert craftsmanship using premium materials, precision techniques, and refined finishing.",
  },
  {
    n: "03",
    label: "PRESERVE",
    body: "Protective conditioning, color balancing, and texture preservation for lasting performance.",
  },
  {
    n: "04",
    label: "RETURN",
    body: "Carefully packaged and delivered with atelier-level quality assurance and presentation.",
  },
] as const;

const FAQ_ITEMS = [
  {
    q: "Why Sneakcure?",
    a: "Luxury deserves preservation, not replacement. Sneakcure was built on the belief that exceptional craftsmanship can extend the life of cherished footwear and leather goods while protecting their character, value, and legacy.",
  },
  {
    q: "What evolved?",
    a: "We moved beyond conventional repairs to create a dedicated restoration atelier. Every process is guided by precision, premium materials, and techniques designed to preserve not simply improve the original piece.",
  },
  {
    q: "What inspires you?",
    a: "The greatest reward is seeing a client reconnect with something they thought was beyond saving. Restoring treasured possessions and the stories they carry is what continues to inspire every project we undertake.",
  },
] as const;

function FounderReveal({
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
      transition={{ duration: 0.75, delay, ease: MOTION_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FounderLabel({ children }: { children: React.ReactNode }) {
  return <p className="founder-label text-primary-black/60 tracking-[0.2em]">{children}</p>;
}

function FounderReelCard({
  src,
  label,
  className = "",
  poster,
  showLabel = true,
}: {
  src: string;
  label: string;
  className?: string;
  poster?: string;
  showLabel?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <article
      className={`group relative h-full w-full shrink-0 overflow-hidden rounded-lg bg-primary-black ring-1 ring-primary-black/10 ${className}`}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        suppressHydrationWarning
        aria-label={label}
      />
      {showLabel ? (
        <>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
          <span className="founder-label absolute bottom-2.5 left-2.5 right-2.5 text-[9px] tracking-[0.16em] text-white">
            {label}
          </span>
        </>
      ) : null}
    </article>
  );
}

const FOUNDER_BEGINNING_REELS = [
  { src: FOUNDER_MEDIA.reel, label: `${FOUNDER.name} · Founder`, poster: FOUNDER_MEDIA.portrait },
  ...REEL_VIDEOS.map((src, i) => ({
    src,
    label: `Atelier ${String(i + 1).padStart(2, "0")}`,
  })),
] as const;

function FounderBeginningReels({
  reelClassName = "founder-beginning-reel",
}: {
  reelClassName?: string;
}) {
  return (
    <>
      {FOUNDER_BEGINNING_REELS.map((reel, i) => (
        <FounderReelCard
          key={reel.src}
          src={reel.src}
          label={reel.label}
          poster={"poster" in reel ? reel.poster : undefined}
          showLabel={i === 0}
          className={reelClassName}
        />
      ))}
    </>
  );
}

function FounderBeginningMobile() {
  return (
    <section className="founder-beginning lg:hidden" aria-label="The beginning">
      <div className="founder-pad founder-container overflow-x-hidden">
        <FounderReveal className="founder-beginning-copy-mobile">
          <p className="founder-label text-primary-black/50">The beginning</p>
          <blockquote className="mt-4">
            <p className="founder-beginning-quote-text-mobile">
              &ldquo;{BEGINNING_QUOTE}&rdquo;
            </p>
            <footer className="founder-beginning-quote-by">{FOUNDER.name.toUpperCase()}</footer>
          </blockquote>
        </FounderReveal>

        <FounderReveal className="mt-8 min-w-0" delay={0.08}>
          <div className="founder-beginning-reels-mobile scrollbar-hide">
            <FounderBeginningReels reelClassName="founder-beginning-reel-mobile" />
          </div>
        </FounderReveal>
      </div>
    </section>
  );
}

function FounderBeginningDesktop() {
  return (
    <section className="founder-beginning hidden lg:block" aria-label="The beginning">
      <div className="founder-pad founder-container">
        <div className="founder-beginning-grid">
          <FounderReveal className="founder-beginning-copy">
            <p className="founder-label text-primary-black/50">The beginning</p>
            <blockquote className="founder-beginning-quote">
              <p className="founder-beginning-quote-text">
                &ldquo;{BEGINNING_QUOTE}&rdquo;
              </p>
              <footer className="founder-beginning-quote-by">{FOUNDER.name.toUpperCase()}</footer>
            </blockquote>
          </FounderReveal>

          <FounderReveal className="founder-beginning-reels-wrap min-w-0" delay={0.08}>
            <div className="founder-beginning-reels founder-reels-mosaic scrollbar-hide">
              <FounderBeginningReels />
            </div>
          </FounderReveal>
        </div>
      </div>
    </section>
  );
}

function FounderReel() {
  return (
    <FounderReelCard
      src={FOUNDER_MEDIA.reel}
      poster={FOUNDER_MEDIA.process}
      label={`${FOUNDER.name} · Founder`}
      showLabel
      className="founder-reel-feature aspect-[9/16] w-[min(78vw,300px)] sm:w-[min(70vw,320px)] md:w-[min(22vw,300px)] lg:w-[300px]"
    />
  );
}

export function FounderShowcase() {
  return (
    <div className="founder-page overflow-x-hidden">
      {/* 1. Introduction */}
      <section
        className="founder-hero founder-pad founder-container flex flex-col items-center gap-8 pb-16 md:flex-row md:gap-12 md:pb-20"
        id="intro"
      >
        <FounderReveal className="flex w-full justify-center md:w-1/2">
          <div className="group relative w-full max-w-md">
            <div className="founder-asymmetric-shadow relative mx-auto w-[85%] overflow-hidden rounded-lg">
              <SafeImage
                src={FOUNDER_MEDIA.portrait}
                alt={`${FOUNDER.name} editorial portrait`}
                width={600}
                height={750}
                priority
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width:768px) 85vw, 40vw"
              />
            </div>
            <div className="absolute -bottom-4 right-0 flex h-24 w-24 items-center justify-center rounded-lg border border-black/10 bg-[#f1edec] p-3 shadow-lg sm:h-32 sm:w-32 sm:p-4 md:-bottom-6 md:-right-6">
              <span className="founder-label text-center text-[10px] leading-tight">
                EST. 2020
                <br />
                SNEAKCURE
              </span>
            </div>
          </div>
        </FounderReveal>

        <FounderReveal className="w-full space-y-8 md:w-1/2" delay={0.12}>
          <div className="space-y-4">
            <FounderLabel>Founder profile</FounderLabel>
            <SplitTitle
              title={FOUNDER.name}
              accent={FOUNDER.title}
              as="h1"
              size="campaign"
            />
            <p className="founder-body-lg max-w-md text-primary-black/65">
              {FOUNDER.intro}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-8">
            <div>
              <p className="founder-label mb-1 text-[10px] text-muted">Founded</p>
              <p className="founder-headline">Sneakcure</p>
            </div>
            <div>
              <p className="founder-label mb-1 text-[10px] text-muted">Location</p>
              <p className="founder-headline">Delhi, India</p>
            </div>
          </div>

          <a href="#founder-reel" className="group flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-black transition-all group-hover:bg-primary-black group-hover:text-soft-white">
              <MaterialIcon name="play_arrow" filled />
            </span>
            <span className="founder-label">Watch story</span>
          </a>
        </FounderReveal>
      </section>

      <FounderBeginningMobile />
      <FounderBeginningDesktop />

      {/* 3. The Turning Point */}
      <section className="founder-pad founder-container flex flex-col items-center gap-10 py-20 md:flex-row md:gap-12 md:py-24">
        <FounderReveal className="w-full md:w-[65%]">
          <div className="founder-asymmetric-shadow overflow-hidden rounded-xl">
            <SafeImage
              src={FOUNDER_MEDIA.workspace}
              alt="Studio workspace"
              width={900}
              height={600}
              className="h-auto w-full object-cover"
              sizes="(max-width:768px) 100vw, 65vw"
            />
          </div>
        </FounderReveal>
        <FounderReveal className="w-full space-y-6 md:w-[35%]" delay={0.12}>
          <SplitTitle
            title="The first restoration"
            accent="Where craftsmanship found its purpose"
            as="h2"
            size="md"
          />
          <p className="text-base leading-relaxed text-primary-black/65">{FIRST_RESTORATION_BODY}</p>
          <Link
            href="/services"
            className="founder-label inline-block border-b border-primary-black pb-1 transition-opacity hover:opacity-60"
          >
            Explore our services
          </Link>
        </FounderReveal>
      </section>

      {/* 4. Video + FAQ */}
      <section id="founder-reel" className="bg-gloss-black py-16 text-soft-white md:py-20">
        <div className="founder-pad founder-container flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-12 lg:gap-16">
          <FounderReveal className="flex shrink-0 justify-center">
            <FounderReel />
          </FounderReveal>

          <FounderReveal className="w-full max-w-md md:max-w-lg" delay={0.12}>
            <div className="founder-accordion space-y-0">
              {FAQ_ITEMS.map((item, i) => (
                <details
                  key={item.q}
                  className="group cursor-pointer border-b border-white/10 pb-6"
                  open={i === 0}
                >
                  <summary className="founder-headline flex list-none items-center justify-between text-soft-white">
                    {item.q}
                    <MaterialIcon
                      name="expand_more"
                      className="transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-4 text-base leading-relaxed text-white/55">{item.a}</p>
                </details>
              ))}
            </div>
          </FounderReveal>
        </div>
      </section>

      {/* 5. Process */}
      <section className="founder-pad founder-container py-20 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <FounderReveal className="md:col-span-7">
            <div className="founder-asymmetric-shadow relative h-[420px] overflow-hidden rounded-xl md:h-[600px]">
              <SafeImage
                src={FOUNDER_MEDIA.process}
                alt="Restoration process"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 58vw"
              />
            </div>
          </FounderReveal>
          <FounderReveal className="flex flex-col justify-center space-y-10 md:col-span-5" delay={0.12}>
            {PROCESS_STEPS.map((step) => (
              <div key={step.n} className="flex items-start gap-6">
                <span className="founder-display-md opacity-10">{step.n}</span>
                <div>
                  <h3 className="founder-label mb-2">{step.label}</h3>
                  <p className="text-primary-black/65">{step.body}</p>
                </div>
              </div>
            ))}
          </FounderReveal>
        </div>
      </section>

      {/* 6. Vision 2030 */}
      <section className="overflow-hidden py-24 md:py-32">
        <div className="founder-pad founder-container relative">
          <FounderReveal className="flex justify-end">
            <div className="founder-asymmetric-shadow relative h-[480px] w-full overflow-hidden rounded-xl md:h-[700px] md:w-[60%]">
              <SafeImage
                src={FOUNDER_MEDIA.process}
                alt="Ajit Yadav working in the Sneakcure atelier"
                fill
                className="object-cover"
                sizes="60vw"
              />
            </div>
          </FounderReveal>
          <FounderReveal
            className="founder-asymmetric-shadow relative z-20 mt-10 w-full rounded-lg border border-black/10 bg-white p-8 md:absolute md:left-0 md:top-24 md:mt-0 md:w-1/2 md:p-12"
            delay={0.12}
          >
            <FounderLabel>Vision 2030</FounderLabel>
            <SplitTitle
              title="Crafted to endure"
              accent="Preserved for generations"
              as="h2"
              size="md"
              className="mb-8 mt-6"
            />
            <p className="founder-body-lg mb-8 text-primary-black/65">
              Sneakcure is more than a restoration atelier. We are creating a destination where
              exceptional craftsmanship, timeless preservation, and luxury care come together. Our
              vision is to redefine leather restoration through innovation, education, and an
              uncompromising commitment to preserving what truly matters.
            </p>
            <MagneticButton href="/about">Explore our vision</MagneticButton>
          </FounderReveal>
        </div>
      </section>

      {/* 7. Personal Note */}
      <section className="founder-pad founder-container flex flex-col gap-10 py-24 md:flex-row md:gap-12 md:py-32">
        <FounderReveal className="w-full md:w-1/2">
          <SafeImage
            src={FOUNDER_MEDIA.portrait}
            alt={`${FOUNDER.name} portrait`}
            width={700}
            height={900}
            className="h-auto w-full rounded-lg object-cover"
            sizes="50vw"
          />
        </FounderReveal>
        <FounderReveal className="flex w-full flex-col justify-center md:w-1/2" delay={0.12}>
          <div className="max-w-md space-y-8">
            <h3 className="founder-headline italic">A personal note,</h3>
            <p className="founder-body-lg leading-relaxed text-primary-black/65">
              Thank you for taking the time to discover the story behind Sneakcure. What began as a
              passion for preserving exceptional craftsmanship has become a lifelong commitment to
              restoring what truly matters. I invite you to be part of a future where luxury is
              cared for, protected, and passed on with pride.
            </p>
            <div className="pt-4">
              <p className="founder-headline">{FOUNDER.name}</p>
              <p className="founder-label mt-2 text-primary-black/50">Founder, Sneakcure</p>
            </div>
          </div>
        </FounderReveal>
      </section>

      {/* 8. Exit */}
      <section className="border-t border-black/10 py-24 text-center md:py-32">
        <FounderReveal>
          <SplitTitle
            title="Begin your restoration journey"
            accent="With Sneakcure"
            as="h2"
            size="campaign"
            align="center"
            className="mb-12"
          />
          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton href="/services">Explore our services</MagneticButton>
            <MagneticButton href="/contact" variant="ghost">
              Start your restoration
            </MagneticButton>
          </div>
        </FounderReveal>
      </section>
    </div>
  );
}
