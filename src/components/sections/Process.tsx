"use client";

import { PROCESS_STEPS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section className="section-pad gloss-black-panel py-24 text-soft-white grain md:py-36" aria-label="Restoration process">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="The Journey" title="Six acts of restoration" titleAccent="From intake to return" dark gsap />
        <div className="mb-12 hidden h-px w-full bg-white/20 md:block" />
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step) => (
            <li
              key={step.step}
              className="rounded-2xl border border-white/10 bg-premium-gray/40 p-6 sm:p-8"
              data-scroll-reveal
            >
              <span className="text-xs tracking-[0.2em] text-muted">{step.step}</span>
              <h3 className="mt-2 font-display text-xl sm:mt-3 sm:text-2xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
