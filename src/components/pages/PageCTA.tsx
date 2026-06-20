"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { SplitTitle } from "@/components/ui/SplitTitle";

type PageCTAProps = {
  title: string;
  titleAccent?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageCTA({
  title,
  titleAccent,
  subtitle,
  primaryHref = "/contact",
  primaryLabel = "Get In Touch",
  secondaryHref,
  secondaryLabel,
}: PageCTAProps) {
  return (
    <section className="section-pad py-20 md:py-28">
      <div className="mx-auto max-w-4xl rounded-3xl gloss-black-panel px-8 py-14 text-center text-soft-white sm:px-12 md:py-16">
        <SplitTitle title={title} accent={titleAccent} as="h2" size="cta" align="center" dark />
        {subtitle && <p className="mx-auto mt-4 max-w-xl text-muted">{subtitle}</p>}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton href={primaryHref}>{primaryLabel}</MagneticButton>
          {secondaryHref && secondaryLabel && (
            <MagneticButton href={secondaryHref} variant="ghost" className="border-white/30 bg-white/10 text-soft-white">
              {secondaryLabel}
            </MagneticButton>
          )}
        </div>
      </div>
    </section>
  );
}
