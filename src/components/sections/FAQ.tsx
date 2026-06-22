"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-pad bg-soft-white py-24 md:py-36" aria-label="FAQ">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Questions"
          title="Everything you need to know"
          titleAccent="Answers at a glance"
          align="center"
        />
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;

            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-black/5 bg-white"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left min-h-11 sm:gap-4 sm:px-6 sm:py-5"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="min-w-0 flex-1 text-sm font-medium text-primary-black sm:text-base">
                    {item.q}
                  </span>
                  <span className="shrink-0 text-xl text-muted sm:text-2xl">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen ? (
                  <p className="px-4 pb-4 text-sm leading-relaxed text-muted sm:px-6 sm:pb-5 sm:text-base">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
