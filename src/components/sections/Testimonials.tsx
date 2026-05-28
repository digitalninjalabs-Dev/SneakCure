"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section id="reviews" className="section-pad py-24 md:py-36" aria-label="Testimonials">
      <SectionHeading
        eyebrow="Voices"
        title="What our clients say."
        align="center"
      />
      <div className="mx-auto grid max-w-6xl gap-4 sm:gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <motion.blockquote
            key={t.name}
            className="glass-card rounded-2xl p-6 sm:p-8 md:p-10"
            data-scroll-reveal
            whileHover={{ y: -4, boxShadow: "0 30px 60px rgba(0,0,0,0.08)" }}
          >
            <p className="text-base leading-relaxed text-primary-black/90 sm:text-lg">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-8">
              <cite className="not-italic font-medium text-primary-black">{t.name}</cite>
              <p className="mt-1 text-sm text-muted">{t.role}</p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
