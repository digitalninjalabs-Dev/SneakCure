"use client";

import { useRef } from "react";
import { gsap, registerGsap, useGSAP } from "@/lib/gsap-client";

const MODULES = [
  {
    title: "Craft & Repair",
    body: "Every journey starts with the bench — cleaning, repair, color work, and finishing that premium clients expect.",
    icon: "craft",
  },
  {
    title: "Pricing & Value",
    body: "Build packages, calculate margins, and price your restoration work so the studio stays profitable.",
    icon: "pricing",
  },
  {
    title: "Luxury Branding",
    body: "Shape a premium brand through presence, packaging, content, and the experience clients remember.",
    icon: "brand",
  },
  {
    title: "Client Relations",
    body: "Communicate clearly, deliver consistently, and turn one restoration into long-term trust.",
    icon: "clients",
  },
] as const;

function ModuleIcon({ name }: { name: (typeof MODULES)[number]["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    className: "h-5 w-5",
    "aria-hidden": true as const,
  };

  if (name === "craft") {
    return (
      <svg {...common}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M7 16l3-9 2 4 2-6 3 11" />
      </svg>
    );
  }
  if (name === "pricing") {
    return (
      <svg {...common}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M8 8h5.5a2.5 2.5 0 010 5H9m0 0h5.5a2.5 2.5 0 010 5H8" />
      </svg>
    );
  }
  if (name === "brand") {
    return (
      <svg {...common}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V5h10l6 7-6 7H4z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 19a4 4 0 00-8 0M12 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
    </svg>
  );
}

type TrainingModulesProps = {
  images: {
    main: string;
    secondary: string;
    avatars?: string[];
  };
};

export function TrainingModules({ images }: TrainingModulesProps) {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const root = rootRef.current;
      if (!root) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const media = gsap.utils.toArray<HTMLElement>("[data-rise-media]", root);
        const steps = gsap.utils.toArray<HTMLElement>("[data-module-step]", root);

        media.forEach((el, i) => {
          gsap.fromTo(
            el,
            { y: 72 + i * 18, opacity: 0.35 },
            {
              y: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: root,
                start: "top 85%",
                end: "top 48%",
                scrub: 1,
              },
            },
          );
        });

        // Rise only — keep all step text fully opaque so nothing stays faded
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 82%",
            end: "top 45%",
            scrub: 0.9,
          },
        });

        steps.forEach((step, i) => {
          tl.fromTo(
            step,
            { y: 28 },
            { y: 0, ease: "none", duration: 0.35 },
            i * 0.08,
          );
        });
      });

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  const avatars = images.avatars?.slice(0, 4) ?? [];

  return (
    <section
      id="modules"
      ref={rootRef}
      className="relative overflow-hidden bg-white py-16 text-primary-black sm:py-20 md:py-24"
      aria-label="The Modules"
    >
      <div className="section-pad mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-4 md:mb-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-black/45">
              Method we follow
            </p>
            <h2 className="editorial-title mt-3 text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
              The Modules
              <span className="mt-1 block italic text-primary-black/40">Four pillars of success.</span>
            </h2>
          </div>
          <span className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-black/35 sm:inline">
            04
          </span>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-6 xl:gap-8">
          {/* Left — tall image */}
          <div
            data-rise-media
            className="relative min-h-[22rem] overflow-hidden rounded-[1.35rem] bg-[#ececec] will-change-transform sm:min-h-[28rem] lg:min-h-[36rem]"
          >
            <img
              src={images.main}
              alt="Sneakcure training craft"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* Middle — two stacked cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
            <article
              data-rise-media
              className="flex min-h-[14rem] flex-col justify-between rounded-[1.35rem] bg-[#ececec] p-5 will-change-transform sm:p-6"
            >
              {avatars.length > 0 ? (
                <div className="flex -space-x-2">
                  {avatars.map((src, i) => (
                    <span
                      key={`${src}-${i}`}
                      className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-[#ececec] bg-white"
                    >
                      <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
                    </span>
                  ))}
                </div>
              ) : (
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-black/40">
                  Mentors
                </span>
              )}
              <div>
                <p className="editorial-title text-[clamp(2.75rem,6vw,4rem)] font-semibold leading-none tracking-[-0.04em]">
                  4+
                </p>
                <p className="mt-2 max-w-[14rem] text-sm font-medium leading-snug text-primary-black/65">
                  Expert mentors for craft, pricing, branding, and client care.
                </p>
              </div>
            </article>

            <article
              data-rise-media
              className="relative min-h-[14rem] overflow-hidden rounded-[1.35rem] bg-[#ececec] will-change-transform sm:min-h-[16rem]"
            >
              <img
                src={images.secondary}
                alt="Beyond craft — building the business"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-5">
                <p className="text-sm font-semibold leading-snug text-white">
                  Beyond craft: building systems, brand, and lasting client trust.
                </p>
              </div>
            </article>
          </div>

          {/* Right — steps */}
          <div className="flex flex-col justify-center">
            <ul className="divide-y divide-primary-black/10">
              {MODULES.map((item, i) => (
                <li
                  key={item.title}
                  data-module-step
                  className="flex gap-4 py-6 first:pt-0 last:pb-0 will-change-transform sm:gap-5 sm:py-7"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center text-primary-black">
                    <ModuleIcon name={item.icon} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="editorial-title text-[clamp(1.15rem,2.2vw,1.45rem)] font-semibold tracking-[-0.02em] text-primary-black">
                        {item.title}
                      </h3>
                      <span className="shrink-0 text-[11px] font-semibold tracking-[0.14em] text-primary-black/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-primary-black/65">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
