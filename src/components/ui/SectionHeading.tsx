"use client";

import { SplitTitle, type SplitTitleSize } from "@/components/ui/SplitTitle";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  dark?: boolean;
  align?: "left" | "center";
  size?: SplitTitleSize;
  /** Enable homepage GSAP hooks on subtitle only. */
  gsap?: boolean;
  delay?: number;
  /** Tighter spacing below the heading block */
  dense?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  dark = false,
  align = "left",
  size = "section",
  gsap = false,
  delay = 0,
  dense = false,
  className = "",
}: SectionHeadingProps) {
  const marginClass = dense ? "mb-6 sm:mb-8 md:mb-10" : "mb-10 sm:mb-14 md:mb-20";

  return (
    <div
      className={`${marginClass} ${align === "center" ? "mx-auto max-w-3xl px-1 text-center" : "max-w-4xl"} ${className}`}
      {...(gsap ? { "data-scroll-reveal": true } : {})}
    >
      {eyebrow && (
        <p
          className={`mb-0 text-[11px] font-semibold uppercase tracking-[0.28em] ${
            dark ? "text-white/45" : "text-primary-black/45"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <div className={eyebrow ? "mt-4" : undefined}>
        <SplitTitle
          title={title}
          accent={titleAccent}
          as="h2"
          size={size}
          align={align}
          dark={dark}
          delay={delay}
        />
      </div>
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
