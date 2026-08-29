"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQ_GROUPS } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center text-primary-black/55 transition-transform duration-300 sm:h-8 sm:w-8 ${
        open ? "rotate-180" : "rotate-0"
      }`}
      aria-hidden
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M3.5 5.25L7 8.75L10.5 5.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function FAQ() {
  const [activeGroup, setActiveGroup] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const group = FAQ_GROUPS[activeGroup] ?? FAQ_GROUPS[0]!;

  return (
    <section
      className="bg-white py-12 text-primary-black sm:py-14 md:py-16 lg:py-20"
      aria-label="FAQ"
    >
      <div className="section-pad mx-auto grid max-w-6xl gap-8 sm:gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)] lg:gap-16 xl:gap-20">
        <div>
          <span className="inline-flex rounded-full border border-primary-black/15 bg-white/60 px-3.5 py-1.5 text-[11px] font-medium tracking-[-0.01em] text-primary-black/70">
            Frequently asked questions
          </span>

          <h2 className="editorial-title mt-4 max-w-[16ch] text-[clamp(1.65rem,6vw,2.85rem)] font-semibold leading-[1.12] tracking-[-0.03em] sm:mt-5">
            Got questions? Let&apos;s clear them up
          </h2>

          {/* Mobile / tablet: horizontal chips — full-bleed scroll */}
          <nav
            className="relative mt-7 lg:mt-12"
            aria-label="FAQ categories"
          >
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
              {FAQ_GROUPS.map((item, i) => {
                const isActive = i === activeGroup;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setActiveGroup(i);
                      setOpen(0);
                    }}
                    className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-2.5 text-left text-sm transition-colors duration-300 lg:rounded-none lg:px-0 lg:py-2.5 ${
                      isActive
                        ? "bg-primary-black text-white lg:bg-transparent lg:font-semibold lg:text-primary-black"
                        : "bg-white text-primary-black/50 hover:text-primary-black/80 lg:bg-transparent lg:hover:text-primary-black"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>

        <div className="min-w-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="border-t border-primary-black/10"
            >
              {group.items.map((item, i) => {
                const isOpen = open === i;

                return (
                  <div key={item.q} className="border-b border-primary-black/10">
                    <button
                      type="button"
                      className="group flex min-h-12 w-full items-start justify-between gap-3 py-4 text-left sm:gap-4 sm:py-6"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`min-w-0 flex-1 text-[14px] font-semibold leading-snug tracking-[-0.015em] transition-colors duration-300 sm:text-base ${
                          isOpen
                            ? "text-primary-black"
                            : "text-primary-black/85 group-hover:text-primary-black"
                        }`}
                      >
                        {item.q}
                      </span>
                      <Chevron open={isOpen} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-xl pb-4 text-sm leading-relaxed text-primary-black/55 sm:pb-6 sm:text-[15px]">
                            {item.a}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
