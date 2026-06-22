"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import { ImageReveal } from "@/components/ui/scroll-reveal";
import { COLLECTION_ITEMS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Collection() {
  return (
    <section className="section-pad py-24 md:py-36 bg-soft-white grain" aria-label="Premium collection showcase">
      <SectionHeading
        eyebrow="Archive"
        title="Restored masterpieces"
        titleAccent="From our private archive"
        subtitle="A curated selection from our private restoration archive."
        gsap
      />
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {COLLECTION_ITEMS.map((item, i) => (
          <ImageReveal
            key={item.name}
            as="article"
            className={`group relative overflow-hidden rounded-2xl gloss-black-panel ${
              i === 0 ? "md:row-span-2 md:aspect-auto aspect-[3/4]" : "aspect-[4/3]"
            }`}
            delay={i * 0.06}
            whileHover={{ scale: 1.015 }}
          >
            <SafeImage
              src={item.image}
              alt={item.name}
              fill
              className="object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted sm:text-xs">{item.tag}</p>
              <h3 className="mt-1 font-display text-lg text-soft-white sm:mt-2 sm:text-2xl">{item.name}</h3>
            </div>
          </ImageReveal>
        ))}
      </div>
    </section>
  );
}
