"use client";

import { useEffect, useRef } from "react";
import { FadeIn } from "@/components/ui/scroll-reveal";
import { REEL_VIDEOS } from "@/lib/constants";
import { SITE } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ReelVideo({ src, index }: { src: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "80px", threshold: 0.15 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="h-full w-full object-cover"
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      suppressHydrationWarning
      aria-label={`Sneakcure reel ${index + 1}`}
    />
  );
}

export function SocialReels() {
  return (
    <section
      id="reels"
      className="section-pad bg-white py-20 text-primary-black sm:py-24 md:py-32"
      aria-label="Sneakcure social media reels"
    >
      <SectionHeading
        eyebrow="@Sneakcure"
        title="The art of restoration"
        titleAccent="Every detail matters"
        subtitle="Follow our journey through premium restorations, artisan craftsmanship, and exclusive studio moments that bring timeless leather and luxury footwear back to life."
        gsap
        align="center"
      />

      <FadeIn className="mx-auto grid max-w-6xl grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-4 md:grid-cols-4 md:gap-5">
        {REEL_VIDEOS.map((src, i) => (
          <article
            key={src}
            className="group relative aspect-[9/16] overflow-hidden rounded-xl bg-black shadow-[0_12px_40px_rgba(0,0,0,0.08)] sm:rounded-2xl sm:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
          >
            <ReelVideo src={src} index={i} />
          </article>
        ))}
      </FadeIn>

      <p className="mt-10 text-center text-sm tracking-wide text-primary-black/45 md:mt-12">
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-primary-black"
        >
          Follow @Sneakcure on Instagram →
        </a>
      </p>
    </section>
  );
}
