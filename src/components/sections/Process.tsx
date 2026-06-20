"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.7", "end 0.6"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="section-pad py-24 md:py-36 gloss-black-panel text-soft-white grain"
      aria-label="Restoration process"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="The Journey" title="Six acts of restoration" titleAccent="From intake to return" dark gsap />
        <motion.div
          style={{ scaleX: lineScale }}
          className="mb-12 hidden h-px w-full origin-left bg-white/20 md:block"
        />
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step, i) => (
            <motion.li
              key={step.step}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: EASE }}
              className="rounded-2xl border border-white/10 bg-premium-gray/40 p-6 backdrop-blur-sm sm:p-8"
            >
              <span className="text-xs tracking-[0.2em] text-muted">{step.step}</span>
              <h3 className="mt-2 font-display text-xl sm:mt-3 sm:text-2xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
