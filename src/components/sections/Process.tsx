"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { PROCESS_STEPS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

gsap.registerPlugin(useGSAP);

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 1,
          },
          scaleX: 0,
          transformOrigin: "left center",
        });
      }

      gsap.from("[data-step]", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 48,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="section-pad py-24 md:py-36 gloss-black-panel text-soft-white grain"
      aria-label="Restoration process"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="The Journey"
          title="Six acts of restoration."
          dark
        />
        <div ref={lineRef} className="mb-12 hidden h-px w-full origin-left bg-white/20 md:block" />
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step) => (
            <li
              key={step.step}
              data-step
              className="rounded-2xl border border-white/10 bg-premium-gray/40 p-6 backdrop-blur-sm sm:p-8"
            >
              <span className="text-xs tracking-[0.2em] text-muted">{step.step}</span>
              <h3 className="mt-2 font-display text-xl sm:mt-3 sm:text-2xl">{step.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
