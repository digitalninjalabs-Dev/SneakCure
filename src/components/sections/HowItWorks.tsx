"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { FadeIn } from "@/components/ui/scroll-reveal";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { serviceImage } from "@/lib/constants";

const FIXING_VIDEO = "/video/fixing.mov";

const PARAGRAPHS = [
  "Every pair that enters Sneakcure is treated as a collectible — not a commodity. We document condition, map materials, and build a restoration protocol before a single brush touches the upper.",
  "Our technicians work in controlled stages: deep cleanse, structural repair, color restoration, and archival finishing. Each phase is inspected under studio lighting before the next begins.",
  "From oxidized soles to distressed suede and custom paint layers, we preserve the original character of the shoe while returning it to its intended form — factory-fresh where it matters, authentic everywhere else.",
  "The result is not a quick clean. It is a revival — returned in museum-grade presentation, ready to wear or display with confidence.",
] as const;

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="overflow-hidden bg-soft-white grain"
      aria-label="How Sneakcure restoration works"
    >
      <div className="grid lg:grid-cols-2">
        <FadeIn
          className="section-pad flex flex-col justify-center py-16 sm:py-20 md:py-24 lg:py-28 lg:pr-10 xl:pr-16"
        >
          <div className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-lg xl:max-w-xl">
            <div className="flex gap-5 md:gap-6">
              <div
                className="mt-1 w-px shrink-0 self-stretch bg-primary-black/75"
                aria-hidden
              />
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-muted">
                  How It Works
                </p>
                <SplitTitle title="The Craft" accent="Preservation, not repair" as="h2" size="md" />
              </div>
            </div>

            <p
              className="mt-8 text-lg leading-relaxed text-primary-black/85 md:text-xl"
              data-blade
            >
              Restoration is not repair. It is preservation.
            </p>

            <div className="mt-6 space-y-4 text-sm leading-[1.75] text-muted sm:mt-8 sm:space-y-5 sm:text-base md:text-[1.05rem]">
              {PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} data-fade-up>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 md:mt-12" data-fade-up>
              <MagneticButton href="/contact">
                Get In Touch →
              </MagneticButton>
            </div>
          </div>
        </FadeIn>

        <FadeIn
          className="relative min-h-[50vh] sm:min-h-[55vh] lg:min-h-[min(88vh,820px)]"
          delay={0.08}
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={serviceImage(0)}
            suppressHydrationWarning
            aria-label="Sneakcure restoration process in the atelier"
          >
            <source src={FIXING_VIDEO} type="video/quicktime" />
            <source src={FIXING_VIDEO} type="video/mp4" />
          </video>
        </FadeIn>
      </div>
    </section>
  );
}
