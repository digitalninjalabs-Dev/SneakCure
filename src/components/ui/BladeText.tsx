"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { bladeClip, BLADE_EASE } from "@/lib/animations";

gsap.registerPlugin(useGSAP);

type BladeTextProps = {
  lines: string[];
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  accentIndex?: number;
};

export function BladeText({
  lines,
  className = "",
  as: Tag = "h1",
  accentIndex,
}: BladeTextProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const spans = ref.current?.querySelectorAll("[data-line]");
      if (!spans?.length) return;

      gsap.fromTo(
        spans,
        {
          clipPath: bladeClip.hidden,
          y: 80,
          autoAlpha: 0,
          filter: "blur(14px)",
        },
        {
          clipPath: bladeClip.visible,
          y: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration: 1.3,
          stagger: 0.14,
          ease: BLADE_EASE,
          delay: 0.2,
        }
      );
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref as never} className={className}>
      {lines.map((line, i) => (
        <span
          key={line}
          data-line
          className={`block overflow-hidden ${i === accentIndex ? "text-gloss-black italic" : ""}`}
        >
          <span className="block">{line}</span>
        </span>
      ))}
    </Tag>
  );
}
