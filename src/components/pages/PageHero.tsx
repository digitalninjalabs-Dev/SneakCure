"use client";

import { SplitTitle } from "@/components/ui/SplitTitle";
import { SafeImage } from "@/components/ui/SafeImage";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  image?: string;
  dark?: boolean;
};

export function PageHero({ eyebrow, title, titleAccent, subtitle, image, dark }: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${dark ? "gloss-black-panel text-soft-white" : "bg-soft-white grain"}`}
    >
      <div className="section-pad mx-auto grid max-w-7xl items-center gap-10 py-16 md:grid-cols-2 md:py-24 lg:py-28">
        <div>
          {eyebrow && (
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-muted">{eyebrow}</p>
          )}
          <SplitTitle title={title} accent={titleAccent} as="h1" size="page" dark={dark} />
          {subtitle && (
            <p className={`mt-6 max-w-xl text-base leading-relaxed sm:text-lg ${dark ? "text-muted" : "text-primary-black/75"}`}>
              {subtitle}
            </p>
          )}
        </div>
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl gloss-black-panel">
            <SafeImage src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
          </div>
        )}
      </div>
    </section>
  );
}
