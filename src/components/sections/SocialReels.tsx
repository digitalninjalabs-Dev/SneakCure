"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { REEL_VIDEOS } from "@/lib/constants";
import { SITE } from "@/lib/site-data";
import { prefersReducedMotion } from "@/lib/motion";

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

function ParallaxReel({
  src,
  index,
  progress,
  reduce,
}: {
  src: string;
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduce: boolean;
}) {
  /** Outer columns travel more — creates staggered scroll feel */
  const travel = ([70, -40, -55, 80] as const)[index]!;
  const y = useTransform(progress, [0, 1], [travel, -travel]);
  /** Slight stagger at rest: outer cards sit lower */
  const baseOffset = index === 0 || index === 3 ? "md:mt-12" : "md:mt-0";

  return (
    <motion.article
      className={`group relative aspect-[9/16] overflow-hidden rounded-xl bg-black shadow-[0_16px_48px_rgba(0,0,0,0.12)] sm:rounded-2xl ${baseOffset}`}
      style={reduce ? undefined : { y }}
    >
      <ReelVideo src={src} index={index} />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[36%] bg-gradient-to-t from-black/70 via-black/20 to-transparent"
        aria-hidden
      />
      <p className="pointer-events-none absolute inset-x-0 bottom-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 sm:bottom-4 sm:text-[11px]">
        Sneakcure
      </p>
    </motion.article>
  );
}

export function SocialReels() {
  const sectionRef = useRef<HTMLElement>(null);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(prefersReducedMotion());
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      id="reels"
      className="section-pad bg-white py-12 text-primary-black sm:py-14 md:py-16"
      aria-label="Sneakcure social media reels"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-black/45">
          @Sneakcure
        </p>
        <h2 className="editorial-title mt-4 text-[clamp(1.85rem,4.5vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-primary-black">
          The art of restoration
          <span className="mt-1 block text-primary-black/45">Every detail matters</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm font-medium leading-relaxed text-primary-black/55 sm:text-base">
          Premium restorations, atelier craft, and studio moments from the Sneakcure feed.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-4 md:gap-5">
        {REEL_VIDEOS.map((src, i) => (
          <ParallaxReel
            key={src}
            src={src}
            index={i}
            progress={scrollYProgress}
            reduce={reduce}
          />
        ))}
      </div>

      <p className="mt-6 text-center text-sm tracking-wide text-primary-black/45 md:mt-8">
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
