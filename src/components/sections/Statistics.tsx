"use client";

import Link from "next/link";
import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";

function StatCard({
  value,
  suffix = "",
  label,
  delay = 0,
}: {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group flex min-h-[9.5rem] cursor-default flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:border-white/30 hover:bg-white/[0.12] hover:shadow-[0_18px_40px_rgba(0,0,0,0.4)] sm:min-h-[10.5rem] sm:p-6 md:p-7"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55 transition-colors duration-300 group-hover:text-white/80 sm:text-[11px]">
        {label}
      </p>
      <p className="editorial-title text-[clamp(2.25rem,5vw,3.5rem)] leading-none text-white transition-transform duration-300 group-hover:translate-x-0.5">
        {display.toLocaleString()}
        {suffix}
      </p>
    </motion.div>
  );
}

export function Statistics() {
  return (
    <section
      className="section-pad bg-black py-12 text-white sm:py-14 md:py-16 lg:py-20"
      aria-label="Premium statistics"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-14 xl:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
            By the numbers
          </p>
          <h2 className="editorial-title mt-4 text-[clamp(2rem,5.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white text-balance">
            Excellence in every restoration.
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-white/70 sm:text-lg">
            Trusted across India.
          </p>
          <Link
            href="/services"
            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-black transition-transform hover:scale-[1.03] sm:mt-10 sm:px-7 sm:text-xs"
          >
            Explore services
            <span aria-hidden>→</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={0.08 + i * 0.06}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
