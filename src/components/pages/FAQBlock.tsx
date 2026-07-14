"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FAQItem = { q: string; a: string };

export function FAQBlock({
  items,
  title = "Frequently asked questions.",
  titleAccent = "Answers at a glance",
  numbered = false,
}: {
  items: readonly FAQItem[];
  title?: string;
  titleAccent?: string;
  numbered?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad py-20 md:py-28 bg-soft-white grain">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="FAQ" title={title} titleAccent={titleAccent} align="center" />
        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;

            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-black/5 bg-white"
              >
                <button
                  type="button"
                  className="flex min-h-11 w-full items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="min-w-0 flex-1 text-sm font-medium text-primary-black sm:text-base">
                    {numbered ? (
                      <>
                        <span className="mr-2 text-muted">{String(i + 1).padStart(2, "0")}</span>
                        {item.q}
                      </>
                    ) : (
                      item.q
                    )}
                  </span>
                  <span className="shrink-0 text-xl leading-none text-muted sm:text-2xl" aria-hidden>
                    {isOpen ? "−" : "+"}
                  </span>
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
