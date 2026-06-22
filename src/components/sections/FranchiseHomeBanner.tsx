import type { ReactNode } from "react";
import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import { MaterialIcon } from "@/components/pages/campaign-ui";
import { FRANCHISE_HOME_IMAGE, FRANCHISE_TERRITORIES, SITE } from "@/lib/site-data";

const PHONE_HREF = `tel:${SITE.phone.replace(/\s/g, "")}`;

const PERKS =
  "Full Training · Brand SOPs · Supply Chain · Launch Kit · Territory Support · Marketing Playbooks · ";

function FilmStrip({
  reverse,
  children,
  variant = "dark",
}: {
  reverse?: boolean;
  children: ReactNode;
  variant?: "dark" | "light";
}) {
  return (
    <div
      className={`franchise-ad-film relative z-20 overflow-hidden ${
        variant === "light" ? "franchise-ad-film--light" : ""
      }`}
    >
      <div className={`franchise-ad-film-track flex w-max${reverse ? " franchise-ad-film-track--reverse" : ""}`}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

export function FranchiseHomeBanner() {
  const cityStrip = Array.from({ length: 3 }, (_, copy) =>
    FRANCHISE_TERRITORIES.map((branch) => (
      <span key={`${copy}-${branch.city}`} className="franchise-ad-film-chip">
        <MaterialIcon name="location_on" filled className="text-[13px]" />
        <span className="font-semibold">{branch.city}</span>
        <span className="opacity-45">{branch.detail}</span>
      </span>
    ))
  );

  return (
    <section
      id="franchise"
      className="franchise-ad group relative isolate w-full overflow-hidden text-soft-white"
      aria-label="Franchise opportunity"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <SafeImage
          src={FRANCHISE_HOME_IMAGE}
          alt=""
          fill
          className="franchise-ad-bg object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="franchise-ad-overlay absolute inset-0" />
        <div className="franchise-ad-slash absolute" />
        <p className="franchise-ad-watermark">Franchise</p>
      </div>

      <FilmStrip variant="light">{cityStrip}</FilmStrip>

      <div className="relative z-10 section-pad">
        <div className="mx-auto flex min-h-[min(72vw,320px)] max-w-7xl flex-col justify-center py-8 sm:min-h-[340px] sm:py-10 lg:min-h-[380px] lg:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
            <div className="max-w-xl">
              <div className="franchise-ad-live mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] backdrop-blur-md sm:text-[11px]">
                <span className="franchise-ad-live-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Now Open — Limited Territories
              </div>

              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/45 sm:text-[11px]">
                Sneakcure Franchise
              </p>
              <h2 className="editorial-title mt-3 text-[clamp(2.5rem,8vw,4.5rem)] font-semibold uppercase leading-[0.92] text-soft-white">
                Own Your
                <span className="block text-white/35">City.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55 sm:text-base">
                Launch a premium restoration studio with full training, brand systems, and
                on-ground support — built for operators who want the Sneakcure standard in their city.
              </p>
            </div>

            <div className="franchise-ad-ticket relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto lg:max-w-sm">
              <div className="franchise-ad-ticket-inner rounded-2xl border border-white/15 bg-black/45 p-5 backdrop-blur-xl sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/40">
                      Campaign
                    </p>
                    <p className="mt-1 font-display text-2xl font-semibold uppercase leading-none tracking-tight sm:text-3xl">
                      Open
                    </p>
                  </div>
                  <span className="rounded-md border border-white/15 bg-soft-white px-2.5 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-primary-black">
                    2026
                  </span>
                </div>

                <div className="my-5 border-t border-dashed border-white/15" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                  Territories
                </p>
                <ul className="mt-3 space-y-2.5">
                  {FRANCHISE_TERRITORIES.map((branch) => (
                    <li
                      key={branch.city}
                      className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3"
                    >
                      <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em]">
                        <MaterialIcon name="location_on" filled className="shrink-0 text-base text-white/55" />
                        {branch.city}
                      </span>
                      <span className="pl-6 text-[11px] text-white/40 sm:pl-0 sm:text-right">{branch.detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                  <a
                    href={PHONE_HREF}
                    className="franchise-ad-cta-primary inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-soft-white px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-black transition-colors hover:bg-white sm:text-[11px]"
                  >
                    <MaterialIcon name="call" className="shrink-0 text-sm" />
                    <span className="sm:hidden">Call Us</span>
                    <span className="hidden truncate sm:inline">{SITE.phone}</span>
                  </a>
                  <Link
                    href="/franchise"
                    className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-full border border-white/25 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-soft-white transition-colors hover:border-white/45 hover:bg-white/5 sm:text-[11px]"
                  >
                    Apply Now
                    <MaterialIcon name="arrow_forward" className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FilmStrip reverse>
        <span className="franchise-ad-film-text">{PERKS.repeat(2)}</span>
      </FilmStrip>
    </section>
  );
}
