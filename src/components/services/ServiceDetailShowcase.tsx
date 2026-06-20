"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { FAQBlock } from "@/components/pages/FAQBlock";
import { useSiteReady } from "@/components/providers/SiteReadyProvider";
import { serviceGallery } from "@/components/services/service-media";
import type { ServicePage } from "@/lib/site-data";
import { SERVICE_PAGES } from "@/lib/site-data";
import { MOTION_EASE, MOTION_VIEWPORT } from "@/lib/motion-viewport";

type Props = { service: ServicePage };

function Fade({
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

function DetailHero({ service, index }: { service: ServicePage; index: number }) {
  const ready = useSiteReady();
  const gallery = serviceGallery(index);

  return (
    <section className="relative overflow-hidden bg-pearl pt-28 grain md:pt-36">
      <div className="section-pad mx-auto max-w-7xl pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, ease: MOTION_EASE }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted transition-colors hover:text-primary-black"
          >
            ← All services
          </Link>
          <p className="mt-8 text-xs uppercase tracking-[0.32em] text-muted">
            Line {String(index + 1).padStart(2, "0")} · {String(SERVICE_PAGES.length).padStart(2, "0")} protocols
          </p>
        </motion.div>

        <div className="mt-6 grid items-end gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div>
            <SplitTitle
              title={service.title}
              accent={service.tagline}
              as="h1"
              size="hero"
              delay={0.06}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.85, delay: 0.22, ease: MOTION_EASE }}
              className="mt-6 max-w-lg text-lg italic text-muted md:text-xl"
            >
              {service.tagline}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.85, delay: 0.32, ease: MOTION_EASE }}
              className="mt-5 max-w-md text-base leading-relaxed text-primary-black/70"
            >
              {service.shortDesc}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.8, delay: 0.42, ease: MOTION_EASE }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <MagneticButton href="/contact">Book this service</MagneticButton>
              <span className="rounded-full border border-black/10 px-4 py-2 text-sm text-muted">
                From {service.pricing[0]?.price ?? "Custom"}
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: MOTION_EASE }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] ring-1 ring-black/8 md:aspect-[3/4] lg:min-h-[520px]"
          >
            <SafeImage
              src={gallery[0] ?? service.image}
              alt={service.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-full border border-white/25 bg-black/35 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white/85 backdrop-blur-md">
              Atelier documented
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProtocolStrip({ steps }: { steps: readonly string[] }) {
  return (
    <section className="border-y border-black/8 bg-white py-8 md:py-10">
      <div className="section-pad mx-auto max-w-7xl">
        <Fade>
          <p className="text-xs uppercase tracking-[0.32em] text-muted">The protocol</p>
        </Fade>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2 scrollbar-hide md:grid md:grid-cols-5 md:gap-5 md:overflow-visible">
          {steps.map((step, i) => (
            <Fade key={step} delay={i * 0.05} className="min-w-[200px] shrink-0 md:min-w-0">
              <div className="rounded-2xl bg-pearl px-5 py-5 ring-1 ring-black/[0.05] md:px-6 md:py-6">
                <p className="font-mono text-[10px] text-primary-black/30">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-2 font-display text-base leading-snug md:text-lg">{step}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

function OverviewSection({ service }: { service: ServicePage }) {
  return (
    <section className="bg-soft-white py-20 md:py-28">
      <div className="section-pad mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16 lg:gap-20">
        <Fade>
          <p className="text-xs uppercase tracking-[0.32em] text-muted">Overview</p>
          <SplitTitle title="What we restore" accent="Every detail matters" as="h2" size="md" className="mt-4" />
        </Fade>
        <Fade delay={0.08}>
          <p className="text-xl leading-[1.85] text-primary-black/80 md:text-2xl md:leading-[1.75]">
            {service.overview}
          </p>
          <p className="mt-8 text-base leading-relaxed text-muted md:text-lg">{service.shortDesc}</p>
        </Fade>
      </div>
    </section>
  );
}

function ProcessSection({ steps, index }: { steps: readonly string[]; index: number }) {
  const gallery = serviceGallery(index);

  return (
    <section className="border-y border-black/8 bg-pearl py-20 md:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <Fade className="mb-14">
          <p className="text-xs uppercase tracking-[0.32em] text-muted">Step by step</p>
          <SplitTitle title="How it works" accent="Step by step" as="h2" size="md" className="mt-4" />
          <div className="mt-6 h-px max-w-md bg-primary-black/15" />
        </Fade>

        <div className="flex flex-col gap-8 md:gap-10">
          {steps.map((step, i) => (
            <Fade key={step} delay={i * 0.06}>
              <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_16px_48px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.05] md:rounded-[2rem]">
                <div
                  className={`grid items-stretch md:grid-cols-2 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="flex flex-col justify-center px-8 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16">
                    <p className="font-mono text-xs tracking-[0.2em] text-muted">
                      Step {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="editorial-title mt-4 text-2xl md:text-3xl">{step}</h3>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted md:text-base">
                      Every stage is documented under studio lighting with material-specific protocols.
                    </p>
                  </div>
                  <div className="relative min-h-[260px] md:min-h-[320px]">
                    <SafeImage
                      src={gallery[i % gallery.length]!}
                      alt=""
                      fill
                      loading="lazy"
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection({ tiers }: { tiers: ServicePage["pricing"] }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <Fade className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-muted">Investment</p>
          <SplitTitle title="Starting from" accent="Transparent tiers" as="h2" size="md" align="center" className="mt-4" />
          <p className="mx-auto mt-4 max-w-md text-muted">Final pricing depends on material, condition, and scope.</p>
        </Fade>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 md:gap-5">
          {tiers.map((tier, i) => (
            <Fade key={tier.tier} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col rounded-[1.75rem] px-8 py-10 text-center ring-1 md:rounded-[2rem] md:px-10 md:py-12 ${
                  i === 1
                    ? "bg-gloss-black text-soft-white ring-primary-black shadow-[0_28px_64px_rgba(0,0,0,0.2)]"
                    : "bg-pearl ring-black/[0.06]"
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.28em] opacity-60">{tier.tier}</p>
                <p className="editorial-title mt-6 text-4xl md:text-[2.75rem]">{tier.price}</p>
                <p className="mt-3 text-sm opacity-70">{tier.note}</p>
                <div className="mt-auto pt-8">
                  <MagneticButton href="/contact" variant={i === 1 ? "ghost" : "black"} className="w-full">
                    Get a quote
                  </MagneticButton>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultsSection() {
  return (
    <section className="border-y border-black/8 bg-soft-white py-20 md:py-28">
      <Fade className="section-pad mx-auto mb-10 max-w-5xl text-center">
        <p className="text-xs uppercase tracking-[0.32em] text-muted">Results</p>
        <SplitTitle title="Before & after" accent="Witness the revival" as="h2" size="md" align="center" className="mt-4" />
      </Fade>
      <div className="section-pad mx-auto max-w-5xl">
        <BeforeAfterSlider />
      </div>
    </section>
  );
}

function MoreServices({ currentSlug }: { currentSlug: string }) {
  const others = SERVICE_PAGES.filter((s) => s.slug !== currentSlug);

  return (
    <section className="bg-pearl py-20 md:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <Fade className="mb-10">
          <p className="text-xs uppercase tracking-[0.32em] text-muted">Explore more</p>
          <SplitTitle title="Other protocols" accent="Explore more lines" as="h2" size="md" className="mt-4" />
        </Fade>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {others.map((s, i) => (
            <Fade key={s.slug} delay={i * 0.05}>
              <Link
                href={`/services/${s.slug}`}
                prefetch
                className="group block overflow-hidden rounded-[1.75rem] bg-white shadow-[0_16px_40px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.05] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(0,0,0,0.09)] md:rounded-[2rem]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <SafeImage
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <p className="absolute bottom-5 left-5 right-5 font-display text-lg text-white md:text-xl">
                    {s.title}
                  </p>
                </div>
                <div className="px-6 py-5 md:px-7 md:py-6">
                  <p className="text-sm italic text-muted">{s.tagline}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-primary-black/40 transition-colors group-hover:text-primary-black">
                    View protocol →
                  </p>
                </div>
              </Link>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

function DetailCTA({ title }: { title: string }) {
  return (
    <section className="section-pad bg-pearl pb-20 md:pb-28">
      <Fade className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] bg-gloss-black px-8 py-14 text-center ring-1 ring-white/10 md:px-14 md:py-16">
        <p className="text-xs uppercase tracking-[0.36em] text-white/35">Start here</p>
        <SplitTitle title={title} accent="Start your restoration" as="h2" size="cta" dark align="center" className="mt-4" delay={0.06} />
        <p className="mx-auto mt-5 max-w-md text-white/50">
          Share photos of your piece — we&apos;ll confirm the right protocol and timeline.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <MagneticButton href="/contact">Get in touch</MagneticButton>
          <MagneticButton href="/contact" variant="ghost">
            Book consultation
          </MagneticButton>
        </div>
      </Fade>
    </section>
  );
}

export function ServiceDetailShowcase({ service }: Props) {
  const index = Math.max(0, SERVICE_PAGES.findIndex((s) => s.slug === service.slug));

  return (
    <div className="service-detail">
      <DetailHero service={service} index={index} />
      <ProtocolStrip steps={service.process} />
      <OverviewSection service={service} />
      <ProcessSection steps={service.process} index={index} />
      <PricingSection tiers={service.pricing} />
      <ResultsSection />
      <FAQBlock items={service.faqs} title="Common questions." />
      <MoreServices currentSlug={service.slug} />
      <DetailCTA title={`Ready to book ${service.title}?`} />
    </div>
  );
}
