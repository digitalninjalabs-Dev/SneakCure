"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import { ImageReveal } from "@/components/ui/scroll-reveal";
import { SHOWCASE_SNEAKERS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SneakerShowcase() {
  return (
    <section
      className="section-pad overflow-hidden bg-pearl py-24 md:py-32"
      aria-label="Floating sneaker showcase"
    >
      <SectionHeading
        eyebrow="Curated Gallery"
        title="Icons. Restored."
        subtitle="Floating editorial compositions of grails returned to their original glory."
      />
      <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide md:gap-8">
        {SHOWCASE_SNEAKERS.map((sneaker, i) => (
          <ImageReveal
            key={sneaker.name}
            className="group relative min-w-[280px] flex-shrink-0 snap-center md:min-w-[340px]"
            delay={i * 0.05}
            whileHover={{ scale: 1.03, y: -6 }}
            style={{ marginTop: i % 2 === 0 ? 0 : 40 }}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-pearl shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <SafeImage
                src={sneaker.image}
                alt={sneaker.name}
                fill
                className="object-cover object-center scale-[1.08] transition-transform duration-700 group-hover:scale-[1.14]"
                sizes="340px"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 font-display text-xl text-soft-white">
                {sneaker.name}
              </p>
            </div>
          </ImageReveal>
        ))}
      </div>
    </section>
  );
}
