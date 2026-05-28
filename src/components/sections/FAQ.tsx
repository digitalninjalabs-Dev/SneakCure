"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad py-24 md:py-36 bg-soft-white grain" aria-label="FAQ">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Questions" title="Everything you need to know." align="center" />
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={item.q}
              className="overflow-hidden rounded-2xl border border-black/5 bg-white/60 backdrop-blur-sm"
              data-scroll-reveal
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="min-w-0 flex-1 text-sm font-medium text-primary-black sm:text-base">
                  {item.q}
                </span>
                <span className="shrink-0 text-xl text-muted sm:text-2xl">{open === i ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="px-4 pb-4 text-sm leading-relaxed text-muted sm:px-6 sm:pb-5 sm:text-base">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
