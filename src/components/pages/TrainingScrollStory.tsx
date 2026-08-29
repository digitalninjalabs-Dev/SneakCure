"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, registerGsap, useGSAP } from "@/lib/gsap-client";

type StoryImages = {
  training: string;
  consultancy: string;
};

export function TrainingScrollStory({ images }: { images: StoryImages }) {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const root = rootRef.current;
      if (!root) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-rise-card]", root);
        const copy = root.querySelector<HTMLElement>("[data-rise-copy]");

        if (copy) {
          gsap.fromTo(
            copy,
            { y: 36, opacity: 0.35 },
            {
              y: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: root,
                start: "top 85%",
                end: "top 45%",
                scrub: 1,
              },
            },
          );
        }

        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { y: 160 + i * 48, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: root,
                start: "top 80%",
                end: "top 28%",
                scrub: 1.15,
              },
            },
          );
        });
      });

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      className="overflow-hidden bg-white py-20 text-primary-black sm:py-24 md:py-28"
      aria-label="Built for your success"
    >
      <div className="section-pad mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10 xl:gap-14">
        <div data-rise-copy className="max-w-xl will-change-transform lg:max-w-none">
          <h2 className="editorial-title text-[clamp(2.5rem,7vw,5.25rem)] font-semibold uppercase leading-[0.92] tracking-[-0.045em] text-primary-black">
            <span className="block">Built for</span>
            <span className="block">your</span>
            <span className="block">success.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm font-medium leading-relaxed text-primary-black/60 sm:text-[15px]">
            From craft to launch, we move hands-on and stay personal — every technique, every system,
            every step.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          <article
            data-rise-card
            className="relative aspect-[3/4] overflow-hidden rounded-[1.25rem] bg-[#ececec] will-change-transform sm:rounded-[1.5rem]"
          >
            <img
              src={images.training}
              alt="The Training — hands-on mastery"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-4 sm:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                The Training
              </p>
              <p className="mt-1 text-sm font-semibold text-white sm:text-base">Hands-on mastery</p>
            </div>
          </article>

          <article
            data-rise-card
            className="relative mt-8 aspect-[3/4] overflow-hidden rounded-[1.25rem] bg-[#ececec] will-change-transform sm:mt-12 sm:rounded-[1.5rem] md:mt-16"
          >
            <img
              src={images.consultancy}
              alt="The Consultancy — business architecture"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 sm:p-5">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                  The Consultancy
                </p>
                <p className="mt-1 text-sm font-semibold text-white sm:text-base">Business architecture</p>
              </div>
              <Link
                href="#apply"
                className="shrink-0 bg-primary-black px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white transition-transform hover:scale-[1.03] sm:px-4 sm:py-2.5 sm:text-[10px]"
              >
                Apply Today
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
