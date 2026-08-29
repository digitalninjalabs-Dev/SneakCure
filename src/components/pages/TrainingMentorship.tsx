"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, registerGsap, useGSAP } from "@/lib/gsap-client";
import { LoopVideo } from "@/components/services/LoopVideo";
import { FOUNDER_MEDIA } from "@/lib/site-data";

type TrainingMentorshipProps = {
  poster: string;
  videoSrc?: string;
};

export function TrainingMentorship({
  poster,
  videoSrc = FOUNDER_MEDIA.reel,
}: TrainingMentorshipProps) {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const root = rootRef.current;
      if (!root) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const media = root.querySelector<HTMLElement>("[data-mentor-media]");
        const type = root.querySelector<HTMLElement>("[data-mentor-type]");

        if (media) {
          gsap.fromTo(
            media,
            { y: 64, scale: 0.94 },
            {
              y: 0,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: root,
                start: "top 80%",
                end: "top 35%",
                scrub: 1.1,
              },
            },
          );
        }

        if (type) {
          gsap.fromTo(
            type,
            { y: 40, opacity: 0.35 },
            {
              y: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: root,
                start: "top 78%",
                end: "top 40%",
                scrub: 1,
              },
            },
          );
        }
      });

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-primary-black py-16 text-white sm:py-20 md:py-28"
      aria-label="Personal Mentorship"
    >
      <div className="section-pad relative mx-auto max-w-7xl">
        <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-6 xl:gap-10">
          {/* Video stage */}
          <div className="relative z-10">
            <div
              data-mentor-media
              className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-[#1a1a1a] will-change-transform sm:rounded-[1.75rem] md:aspect-[4/5]"
            >
              <LoopVideo
                src={videoSrc}
                poster={poster}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
            </div>
          </div>

          {/* Oversized type can overlap; paragraph stays in empty black space */}
          <div
            data-mentor-type
            className="relative z-20 flex flex-col justify-center will-change-transform"
          >
            <h2 className="editorial-title text-[clamp(2.85rem,8.5vw,6.75rem)] font-semibold uppercase leading-[0.9] tracking-[-0.045em] lg:-ml-16 xl:-ml-24">
              <span className="block text-white">Mentors,</span>
              <span className="block">
                <span className="text-white/40">Guidance</span>{" "}
                <span className="text-white">and</span>
              </span>
              <span className="block text-white">Experts</span>
            </h2>
            <div className="mt-8 max-w-sm sm:max-w-md lg:mt-10 lg:pl-2">
              <p className="text-sm font-medium leading-relaxed text-white/55 sm:text-[15px]">
                Discover one-on-one mentorship with restoration professionals — technical feedback, business clarity,
                and atelier experience made to elevate your craft every day.
              </p>
              <Link
                href="#apply"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/35 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-white hover:bg-white hover:text-primary-black"
              >
                See the program
                <span aria-hidden>›</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
