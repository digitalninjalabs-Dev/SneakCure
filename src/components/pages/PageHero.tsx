"use client";

import type { ReactNode } from "react";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SafeImage } from "@/components/ui/SafeImage";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  image?: string;
  aside?: ReactNode;
  dark?: boolean;
  /** Tighter vertical padding (useful when the right column is tall). */
  dense?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  image,
  aside,
  dark,
  dense = false,
}: PageHeroProps) {
  const hasAside = Boolean(image || aside);

  return (
    <section
      className={`relative overflow-hidden ${dark ? "gloss-black-panel text-soft-white" : "bg-soft-white grain"}`}
    >
      <div
        className={`section-pad mx-auto grid max-w-7xl items-start gap-8 md:items-center md:gap-10 ${
          dense ? "py-8 md:py-12 lg:py-14" : "py-16 md:py-24 lg:py-28"
        } ${hasAside ? "md:grid-cols-2" : ""}`}
      >
        <div>
          {eyebrow && (
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-muted">{eyebrow}</p>
          )}
          <SplitTitle title={title} accent={titleAccent} as="h1" size="page" dark={dark} />
          {subtitle && (
            <p
              className={`mt-6 max-w-xl text-base leading-relaxed sm:text-lg ${
                dark ? "text-muted" : "text-primary-black/75"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
        {aside ? (
          <div className="min-w-0">{aside}</div>
        ) : image ? (
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl gloss-black-panel">
            <SafeImage
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
