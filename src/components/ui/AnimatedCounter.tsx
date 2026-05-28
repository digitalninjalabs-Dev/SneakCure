"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

gsap.registerPlugin(useGSAP);

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  label: string;
};

export function AnimatedCounter({ value, suffix = "", label }: AnimatedCounterProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const obj = { val: 0 };
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: value,
            duration: 2.2,
            ease: "power2.out",
            onUpdate: () => setDisplay(Math.floor(obj.val)),
          });
        },
      });
    },
    { scope: ref, dependencies: [value] }
  );

  return (
    <div ref={ref} className="glass-card shine-sweep rounded-2xl p-6 sm:p-8 md:p-10" data-scroll-reveal>
      <p className="editorial-title text-4xl text-primary-black sm:text-5xl md:text-6xl">
        {display.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-3 text-sm uppercase tracking-[0.15em] text-muted">{label}</p>
    </div>
  );
}
