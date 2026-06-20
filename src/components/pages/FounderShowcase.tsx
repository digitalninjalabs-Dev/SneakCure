"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useSiteReady } from "@/components/providers/SiteReadyProvider";
import { MaterialIcon } from "@/components/pages/campaign-ui";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SafeImage } from "@/components/ui/SafeImage";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { FOUNDER, FOUNDER_MEDIA, FOUNDER_STORY } from "@/lib/site-data";
import { MOTION_EASE, MOTION_VIEWPORT } from "@/lib/motion-viewport";

const PROCESS_STEPS = [
  { n: "01", label: "OBSERVE", body: "Analysis of material degradation and structural integrity." },
  { n: "02", label: "RESTORE", body: "Hand-stitched precision and pigment matching." },
  { n: "03", label: "REFINE", body: "Preservation coating and texture realignment." },
  { n: "04", label: "DELIVER", body: "Returned in custom archival packaging." },
] as const;

const FAQ_ITEMS = [
  {
    q: "Why SneakCure?",
    a: "Because modern luxury is about preservation. We live in a disposable world; I wanted to build something that lasts.",
  },
  {
    q: "What changed?",
    a: "The shift from service to studio. We stopped being a repair shop and started being a restorative lab.",
  },
  {
    q: "What drives you?",
    a: "The look on a client's face when they see a piece of their past returned to its former glory. It's magic.",
  },
] as const;

const JOURNAL = [
  {
    type: "note" as const,
    text: "Tuesday. The humidity today is perfect for leather hydration. Working on a pair of 1994 high-tops.",
    date: "14.03.2024",
  },
  { type: "image" as const, src: FOUNDER_MEDIA.workspace, alt: "Atelier detail" },
  {
    type: "article" as const,
    title: "On Materiality",
    body: "Synthetic polymers never age like natural hides. The challenge is making the new blend with the vintage soul.",
  },
  { type: "image" as const, src: FOUNDER_MEDIA.process, alt: "Restoration process" },
  { type: "quote" as const, text: "Detail is not a luxury, it's a necessity." },
  { type: "image" as const, src: FOUNDER_MEDIA.portrait, alt: FOUNDER.name, grayscale: true },
] as const;

const VALUES = [
  { word: "CARE", opacity: "opacity-10", offset: "" },
  { word: "DETAIL", opacity: "opacity-20", offset: "translate-x-6 md:translate-x-12" },
  { word: "PATIENCE", opacity: "opacity-40", offset: "translate-x-12 md:translate-x-24" },
  { word: "TRUST", opacity: "", offset: "translate-x-[4.5rem] md:translate-x-36" },
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

export function FounderShowcase() {
  const nameParts = FOUNDER.name.split(" ");
  const firstName = nameParts[0] ?? FOUNDER.name;
  const lastName = nameParts.slice(1).join(" ");

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
            <div className="absolute -bottom-6 -right-2 flex h-32 w-32 items-center justify-center rounded-lg border border-black/10 bg-[#f1edec] p-4 shadow-lg md:-right-6">
              <span className="founder-label text-center text-[10px] leading-tight">
                EST. 2018
                <br />
                SNKCURE STUDIO
              </span>
            </div>
          </div>
        </FounderReveal>

        <FounderReveal className="w-full space-y-8 md:w-1/2" delay={0.12}>
          <div className="space-y-4">
            <FounderLabel>Founder profile</FounderLabel>
            <SplitTitle
              title={`Hi, I'm ${firstName}`}
              accent={lastName || FOUNDER.title}
              as="h1"
              size="campaign"
            />
            <p className="founder-body-lg max-w-md text-primary-black/65">
              The intersection of technical precision and artistic intuition. My mission is to redefine
              restoration as a form of archaeology.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-8">
            <div>
              <p className="founder-label mb-1 text-[10px] text-muted">Founded</p>
              <p className="founder-headline">SneakCure</p>
            </div>
            <div>
              <p className="founder-label mb-1 text-[10px] text-muted">Location</p>
              <p className="founder-headline">{FOUNDER.location}</p>
            </div>
          </div>

          <button type="button" className="group flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-black transition-all group-hover:bg-primary-black group-hover:text-soft-white">
              <MaterialIcon name="play_arrow" filled />
            </span>
            <span className="founder-label">Watch story</span>
          </button>
        </FounderReveal>
      </section>

      {/* 2. The Beginning */}
      <section className="border-y border-black/[0.06] bg-[#f1edec] py-20 md:py-24">
        <div className="founder-pad founder-container flex flex-col gap-10 md:flex-row md:gap-12">
          <div className="w-full md:w-[35%]">
            <div className="md:sticky md:top-[calc(var(--site-header-offset)+2rem)]">
              <span className="founder-label inline-block origin-left rotate-90 whitespace-nowrap text-primary-black/40">
                The beginning
              </span>
            </div>
          </div>
          <FounderReveal className="w-full space-y-12 md:w-[65%]" delay={0.1}>
            <p className="founder-display-md text-primary-black">
              It wasn&apos;t about shoes; it was about history. Every crease tells a story of where we&apos;ve
              been. I wanted to protect those chapters.
            </p>
            <div className="founder-paper founder-asymmetric-shadow flex flex-col items-center gap-8 rounded-lg border border-black/10 p-8 md:flex-row md:p-12">
              <blockquote className="founder-headline flex-1 italic text-primary-black/80">
                &ldquo;Restoration is not about making something look new; it&apos;s about honoring the life it
                has lived while giving it a second chance.&rdquo;
              </blockquote>
              <div className="h-64 w-48 shrink-0 rotate-3 overflow-hidden rounded-lg shadow-xl">
                <SafeImage
                  src={FOUNDER_MEDIA.workspace}
                  alt="Workspace detail"
                  width={192}
                  height={256}
                  className="h-full w-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
                  sizes="192px"
                />
              </div>
            </div>
          </FounderReveal>
        </div>
      </section>

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
          <SplitTitle title="The first restoration" accent="Where it all began" as="h2" size="md" />
          <p className="text-base leading-relaxed text-primary-black/65">
            {FOUNDER_STORY[1]?.body ??
              "It was a pair of oxidized Air Jordans. Not just leather and foam, but a legacy. The hours spent reviving them changed everything."}
          </p>
          <Link
            href="/services"
            className="founder-label inline-block border-b border-primary-black pb-1 transition-opacity hover:opacity-60"
          >
            Explore our services
          </Link>
        </FounderReveal>
      </section>

      {/* 4. Video + FAQ */}
      <section className="bg-gloss-black py-20 text-soft-white md:py-24">
        <div className="founder-pad founder-container flex flex-col items-center gap-10 md:flex-row md:gap-12">
          <FounderReveal className="w-full md:w-1/2">
            <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-lg bg-[#f7f3f2]">
              <SafeImage
                src={FOUNDER_MEDIA.studio}
                alt="Founder story video"
                fill
                className="object-cover opacity-50 blur-sm"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-neutral-900/40" />
              <div className="relative z-10 flex flex-col items-center">
                <button
                  type="button"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary-black shadow-2xl transition-transform hover:scale-110"
                  aria-label="Play founder story"
                >
                  <MaterialIcon name="play_arrow" filled className="text-3xl" />
                </button>
                <span className="founder-label mt-4 text-white/60">Autoplay muted</span>
              </div>
            </div>
          </FounderReveal>

          <FounderReveal className="w-full space-y-2 md:w-1/2" delay={0.12}>
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

      {/* 6. Values */}
      <section className="bg-soft-white py-20 md:py-24">
        <div className="founder-pad founder-container flex flex-col gap-12 md:flex-row md:gap-12">
          <FounderReveal className="w-full space-y-1 md:w-1/2">
            {VALUES.map((v) => (
              <h2
                key={v.word}
                className={`founder-values-word text-primary-black ${v.opacity} ${v.offset}`}
              >
                {v.word}
              </h2>
            ))}
          </FounderReveal>
          <FounderReveal className="relative flex w-full justify-end md:w-1/2" delay={0.15}>
            <div className="w-full space-y-8 md:w-3/4">
              <div className="founder-asymmetric-shadow overflow-hidden rounded-lg">
                <SafeImage
                  src={FOUNDER_MEDIA.studio}
                  alt={FOUNDER.name}
                  width={500}
                  height={650}
                  className="h-auto w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  sizes="40vw"
                />
              </div>
              <p className="founder-body-lg italic text-primary-black/65">
                &ldquo;In the studio, time moves differently. You can&apos;t rush the cure.&rdquo;
              </p>
            </div>
          </FounderReveal>
        </div>
      </section>

      {/* 7. The Now */}
      <section className="overflow-hidden py-24 md:py-32">
        <div className="founder-pad founder-container relative">
          <FounderReveal className="flex justify-end">
            <div className="founder-asymmetric-shadow relative h-[480px] w-full overflow-hidden rounded-xl md:h-[700px] md:w-[60%]">
              <SafeImage
                src={FOUNDER_MEDIA.studio}
                alt={`${FOUNDER.name} in the atelier`}
                fill
                className="object-cover"
                sizes="60vw"
              />
            </div>
          </FounderReveal>
          <FounderReveal
            className="founder-paper founder-asymmetric-shadow relative z-20 mt-10 w-full rounded-lg border border-black/10 p-8 md:absolute md:left-0 md:top-24 md:mt-0 md:w-1/2 md:p-12"
            delay={0.12}
          >
            <FounderLabel>Vision 2024</FounderLabel>
            <SplitTitle
              title="Quiet luxury"
              accent="Curated longevity"
              as="h2"
              size="md"
              className="mb-8 mt-6"
            />
            <p className="founder-body-lg mb-8 text-primary-black/65">
              We are building more than a service. We are building a permanent archive for the modern
              collector. Our upcoming physical space will be as much a gallery as it is a studio.
            </p>
            <MagneticButton href="/about">The vision</MagneticButton>
          </FounderReveal>
        </div>
      </section>

      {/* 8. Studio Notes */}
      <section className="founder-pad founder-container py-20 md:py-24">
        <p className="founder-label mb-12 text-center tracking-[0.3em]">Studio notes</p>
        <FounderReveal>
          <div className="columns-1 gap-8 space-y-8 md:columns-3">
            {JOURNAL.map((item, i) => {
              if (item.type === "note") {
                return (
                  <div
                    key={i}
                    className="founder-paper founder-asymmetric-shadow break-inside-avoid rounded-lg border border-black/10 p-8"
                  >
                    <p className="mb-4 italic text-primary-black/65">&ldquo;{item.text}&rdquo;</p>
                    <span className="founder-label text-[10px]">{item.date}</span>
                  </div>
                );
              }
              if (item.type === "article") {
                return (
                  <div
                    key={i}
                    className="founder-paper founder-asymmetric-shadow break-inside-avoid rounded-lg border border-black/10 p-8"
                  >
                    <h4 className="founder-headline mb-4">{item.title}</h4>
                    <p className="text-primary-black/65">{item.body}</p>
                  </div>
                );
              }
              if (item.type === "quote") {
                return (
                  <div
                    key={i}
                    className="founder-asymmetric-shadow break-inside-avoid rounded-lg bg-gloss-black p-8 text-soft-white"
                  >
                    <p className="founder-headline">&ldquo;{item.text}&rdquo;</p>
                  </div>
                );
              }
              return (
                <div key={i} className="founder-asymmetric-shadow break-inside-avoid overflow-hidden rounded-lg">
                  <SafeImage
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={500}
                    className={`w-full ${"grayscale" in item && item.grayscale ? "grayscale" : ""}`}
                    sizes="33vw"
                  />
                </div>
              );
            })}
          </div>
        </FounderReveal>
      </section>

      {/* 9. Personal Note */}
      <section className="founder-pad founder-container flex flex-col gap-10 py-24 md:flex-row md:gap-12 md:py-32">
        <FounderReveal className="w-full md:w-1/2">
          <SafeImage
            src={FOUNDER_MEDIA.portrait}
            alt={`${FOUNDER.name} portrait`}
            width={700}
            height={900}
            className="h-auto w-full rounded-lg grayscale opacity-80"
            sizes="50vw"
          />
        </FounderReveal>
        <FounderReveal className="flex w-full flex-col justify-center md:w-1/2" delay={0.12}>
          <div className="max-w-md space-y-8">
            <h3 className="founder-headline italic">A personal note,</h3>
            <p className="founder-body-lg leading-relaxed text-primary-black/65">
              Thank you for taking the time to see into my world. SneakCure is a labor of love, a testament
              to the belief that some things are worth saving. I invite you to join us in this journey of
              preservation.
            </p>
            <div className="pt-4">
              <p className="founder-headline">{FOUNDER.name}</p>
              <p className="founder-label mt-2 text-primary-black/50">Founder, SneakCure</p>
            </div>
          </div>
        </FounderReveal>
      </section>

      {/* 10. Exit */}
      <section className="border-t border-black/10 py-24 text-center md:py-32">
        <FounderReveal>
          <SplitTitle
            title="See you inside"
            accent="SneakCure"
            as="h2"
            size="campaign"
            align="center"
            className="mb-12"
          />
          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton href="/services">Explore the archive</MagneticButton>
            <MagneticButton href="/contact" variant="ghost">
              Studio inquiry
            </MagneticButton>
          </div>
        </FounderReveal>
      </section>
    </div>
  );
}
