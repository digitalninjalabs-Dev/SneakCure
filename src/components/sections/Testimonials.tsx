"use client";

import { FadeIn } from "@/components/ui/scroll-reveal";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="section-pad bg-black py-24 text-soft-white md:py-36"
      aria-label="Testimonials"
    >
      <SectionHeading
        eyebrow="Voices"
        title="Trusted by those who value true craftsmanship"
        titleAccent="Every review tells a story"
        align="center"
        dark
        gsap
      />
      <div className="mx-auto grid max-w-6xl gap-4 sm:gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <FadeIn
            key={t.role}
            as="blockquote"
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8 md:p-10"
            delay={i * 0.05}
            whileHover={{ y: -4, boxShadow: "0 30px 60px rgba(0,0,0,0.35)" }}
          >
            <p className="text-sm tracking-[0.2em] text-amber-300/90" aria-label="5 out of 5 stars">
              ★★★★★
            </p>
            <p className="mt-4 text-base leading-relaxed text-soft-white/90 sm:text-lg">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-8">
              <cite className="not-italic font-medium text-soft-white">{t.name}</cite>
              <p className="mt-1 text-sm text-muted">{t.role}</p>
            </footer>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
