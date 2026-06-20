"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FAQItem = { q: string; a: string };

export function FAQBlock({ items, title = "Frequently asked questions." }: { items: readonly FAQItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad py-20 md:py-28 bg-soft-white grain">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="FAQ" title={title} titleAccent="Answers at a glance" align="center" />
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={item.q} className="overflow-hidden rounded-2xl border border-black/5 bg-white/60">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-6"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="min-w-0 flex-1 text-sm font-medium sm:text-base">{item.q}</span>
                <span className="shrink-0 text-xl text-muted">{open === i ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                    <p className="px-4 pb-4 text-sm leading-relaxed text-muted sm:px-6 sm:pb-5">{item.a}</p>
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
