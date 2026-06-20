"use client";

import { SplitTitle } from "@/components/ui/SplitTitle";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  dark?: boolean;
  align?: "left" | "center";
  /** Enable homepage GSAP hooks on subtitle only. */
  gsap?: boolean;
  delay?: number;
};

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  dark = false,
  align = "left",
  gsap = false,
  delay = 0,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 sm:mb-14 md:mb-20 ${align === "center" ? "mx-auto max-w-3xl px-1 text-center" : "max-w-4xl"}`}
      {...(gsap ? { "data-scroll-reveal": true } : {})}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">{eyebrow}</p>
      )}
      <SplitTitle
        title={title}
        accent={titleAccent}
        as="h2"
        size="section"
        align={align}
        dark={dark}
        delay={delay}
      />
      {subtitle && (
        <p
          className={`mt-4 text-base text-balance sm:mt-6 sm:text-lg md:text-xl ${dark ? "text-muted" : "text-muted"}`}
          {...(gsap ? { "data-fade-up": true } : {})}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
