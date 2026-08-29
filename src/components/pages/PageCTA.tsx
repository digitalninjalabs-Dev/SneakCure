import Link from "next/link";
import { SplitTitle } from "@/components/ui/SplitTitle";

interface PageCTAProps {
  title: string;
  titleAccent?: string;
  subtitle: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  dense?: boolean;
}

export function PageCTA({
  title,
  titleAccent,
  subtitle,
  primaryHref = "/booking",
  primaryLabel = "Get started",
  secondaryHref = "/contact",
  secondaryLabel = "Request a demo",
  dense = false,
}: PageCTAProps) {
  return (
    <section
      className={`bg-white ${dense ? "py-10 sm:py-12 md:py-14" : "py-16 md:py-24"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] bg-[#f0f0f0] px-6 py-14 text-center sm:rounded-[2rem] sm:px-10 sm:py-16 md:px-16 md:py-20">
          <SplitTitle
            title={title}
            accent={titleAccent}
            as="h2"
            size="section"
            align="center"
            className="mx-auto max-w-2xl text-balance"
          />
          <p className="mx-auto mt-4 max-w-md text-[0.95rem] leading-relaxed text-black/45 sm:text-base">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3.5 text-[0.8rem] font-semibold tracking-wide text-white transition-opacity hover:opacity-85 sm:px-10"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-full border border-black/15 bg-transparent px-7 py-3.5 text-[0.8rem] font-semibold tracking-wide text-black transition-colors hover:border-black/30 hover:bg-white/60 sm:px-8"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
