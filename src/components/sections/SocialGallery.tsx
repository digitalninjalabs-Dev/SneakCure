"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import { motion } from "framer-motion";
import { SOCIAL_IMAGES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SocialGallery() {
  return (
    <section className="section-pad py-24 md:py-32 bg-gloss-black text-soft-white grain" aria-label="Social gallery">
      <SectionHeading
        eyebrow="@sneakcure"
        title="Follow the culture"
        titleAccent="Editorial moments daily"
        subtitle="Editorial moments from our atelier and community."
        dark
        align="center"
      />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {SOCIAL_IMAGES.map((src, i) => (
          <motion.div
            key={src}
            className={`group relative overflow-hidden rounded-xl ${
              i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
            }`}
            data-scroll-reveal
            whileHover={{ scale: 1.03 }}
          >
            <SafeImage
              src={src}
              alt={`SneakCure social gallery image ${i + 1}`}
              fill
              className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
