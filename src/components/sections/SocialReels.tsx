"use client";

import { REEL_VIDEOS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SocialReels() {
  return (
    <section
      id="reels"
      className="section-pad bg-pearl py-20 sm:py-24 md:py-32 grain"
      aria-label="SneakCure social media reels"
    >
      <SectionHeading
        eyebrow="@sneakcure"
        title="From the atelier"
        titleAccent="Behind the bench"
        subtitle="Restorations, transformations, and behind-the-scenes — straight from our reels."
        gsap
        align="center"
      />

      <div
        className="mx-auto grid max-w-6xl grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-4 md:grid-cols-4 md:gap-5"
        data-scroll-reveal
      >
        {REEL_VIDEOS.map((src, i) => (
          <article
            key={src}
            className="group relative aspect-[9/16] overflow-hidden rounded-xl bg-gloss-black shadow-[0_12px_40px_rgba(0,0,0,0.1)] sm:rounded-2xl sm:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
          >
            <video
              className="h-full w-full object-cover"
              src={src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              suppressHydrationWarning
              aria-label={`SneakCure reel ${i + 1}`}
            />
          </article>
        ))}
      </div>

      <p className="mt-10 text-center text-sm tracking-wide text-muted md:mt-12">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-primary-black"
        >
          Follow @sneakcure on Instagram →
        </a>
      </p>
    </section>
  );
}
