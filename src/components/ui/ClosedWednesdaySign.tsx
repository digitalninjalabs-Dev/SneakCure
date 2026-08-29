"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

export function ClosedWednesdaySign() {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.aside
      className="pointer-events-none relative z-10 mx-auto origin-top"
      initial={false}
      animate={
        reduce
          ? { opacity: 1, y: 0, rotate: 0 }
          : {
              opacity: 1,
              y: 0,
              rotate: [-12, 9, -5, 3, -1.5, 0],
            }
      }
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 1.35, ease: [0.22, 1, 0.36, 1], times: [0, 0.22, 0.42, 0.6, 0.78, 1] }
      }
      aria-label="Closed every Wednesday"
    >
      <motion.div
        className="pointer-events-auto relative mx-auto w-[9.5rem] origin-top cursor-default select-none sm:w-[11rem] md:w-[12rem]"
        style={{ transformOrigin: "50% 0%" }}
        animate={
          reduce
            ? { rotate: 0 }
            : hovered
              ? { rotate: [0, -9, 8, -5, 3, 0] }
              : { rotate: [0, -2.4, 2.2, -1.4, 0] }
        }
        transition={
          reduce
            ? { duration: 0 }
            : hovered
              ? { duration: 1.05, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.15 }
              : { duration: 3.6, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }
        }
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <span className="absolute left-1/2 top-0 z-20 h-3 w-3 -translate-x-1/2 -translate-y-1 rounded-full bg-gradient-to-b from-neutral-300 to-neutral-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_1px_2px_rgba(0,0,0,0.35)] ring-1 ring-black/20" />

        <svg
          className="absolute left-1/2 top-[6px] h-8 w-[5.5rem] -translate-x-1/2 overflow-visible sm:h-9 sm:w-[6.5rem]"
          viewBox="0 0 84 32"
          fill="none"
          aria-hidden
        >
          <path
            d="M42 2 C34 8 22 16 14 28"
            stroke="#9ca3af"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeDasharray="0.8 3.2"
          />
          <path
            d="M42 2 C50 8 62 16 70 28"
            stroke="#9ca3af"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeDasharray="0.8 3.2"
          />
          <circle cx="42" cy="2" r="1.6" fill="#d4d4d8" stroke="#71717a" strokeWidth="0.6" />
          <circle cx="14" cy="28" r="1.4" fill="#d4d4d8" stroke="#71717a" strokeWidth="0.5" />
          <circle cx="70" cy="28" r="1.4" fill="#d4d4d8" stroke="#71717a" strokeWidth="0.5" />
        </svg>

        <div className="relative mt-8 rounded-[0.65rem] border border-black/15 bg-white shadow-[0_12px_28px_rgba(0,0,0,0.18),0_2px_6px_rgba(0,0,0,0.08)] sm:mt-9">
          <span className="absolute left-0 top-1/2 h-4 w-1.5 -translate-x-[55%] -translate-y-1/2 rounded-full bg-white ring-1 ring-black/15" />
          <span className="absolute right-0 top-1/2 h-4 w-1.5 translate-x-[55%] -translate-y-1/2 rounded-full bg-white ring-1 ring-black/15" />

          <div className="px-3 pb-0 pt-3 sm:px-3.5 sm:pt-3.5">
            <div className="rounded-[0.35rem] border border-black px-2 py-2 text-center sm:py-2.5">
              <p
                className="text-[1.75rem] leading-none tracking-[0.04em] text-primary-black sm:text-[2rem]"
                style={{ fontFamily: "var(--font-ad-display)" }}
              >
                CLOSED
              </p>
              <p className="mt-1.5 text-[8px] font-extrabold uppercase leading-tight tracking-[0.14em] text-primary-black/70 sm:text-[9px]">
                on Wednesday
              </p>
            </div>
          </div>

          <div className="mt-2.5 flex items-center justify-center gap-2 rounded-b-[0.6rem] bg-primary-black px-2.5 py-2">
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/35 text-[7px] font-bold text-white">
              SC
            </span>
            <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-white sm:text-[9px]">
              Sneakcure
            </span>
          </div>
        </div>
      </motion.div>
    </motion.aside>
  );
}
