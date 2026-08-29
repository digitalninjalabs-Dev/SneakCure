"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import { FRANCHISE_HOME_IMAGE, FRANCHISE_TERRITORIES } from "@/lib/site-data";

const PHONE_EASE = [0.33, 1, 0.68, 1] as const;

const FEATURES = [
  { label: "Premium Brand", icon: "brand" },
  { label: "Full Training", icon: "training" },
  { label: "On-ground Support", icon: "support" },
  { label: "Proven Systems", icon: "systems" },
] as const;

const PERKS = [
  { label: "Full Training", icon: "training" },
  { label: "Brand SOPs", icon: "sops" },
  { label: "Supply Chain", icon: "supply" },
  { label: "Launch Kit", icon: "launch" },
  { label: "Territory Support", icon: "territory" },
  { label: "Marketing Playbooks", icon: "marketing" },
] as const;

type IconName =
  | (typeof FEATURES)[number]["icon"]
  | (typeof PERKS)[number]["icon"]
  | "pin"
  | "phone"
  | "arrow";

function AdIcon({ name, className = "" }: { name: IconName; className?: string }) {
  const common = `franchise-ad-icon ${className}`;
  switch (name) {
    case "pin":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
          <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "arrow":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "brand":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <path
            d="M5 16 12 3l7 13H5zm3.2-2h7.6L12 7.8 8.2 14zM4 19h16v2H4v-2z"
            fill="currentColor"
          />
        </svg>
      );
    case "training":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <path
            d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M5 13.2V17c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.8" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "support":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <path
            d="M12 3 4 6.5v5.2C4 16.4 7.6 20.2 12 21c4.4-.8 8-4.6 8-9.3V6.5L12 3z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "systems":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path d="m8.5 12.5 2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "sops":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <path d="M7 3h8l4 4v14H7V3z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M15 3v4h4M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "supply":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <path d="M3 7h12v10H3V7zm12 3h4l3 3v4h-7v-7z" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="7" cy="18.5" r="1.6" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="17.5" cy="18.5" r="1.6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "launch":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <path
            d="M4.5 16.5 3 21l4.5-1.5C10 21 14 19 17 15s4.5-8 4.5-11.5C18 3.5 13 5 9 8S3 14 4.5 16.5z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="m9 15-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "territory":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
          <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
        </svg>
      );
    case "marketing":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden>
          <path
            d="M3 10v4a2 2 0 0 0 2 2h2l6 4V4L7 8H5a2 2 0 0 0-2 2z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M16 8.8a3.2 3.2 0 0 1 0 6.4M18.7 6a6 6 0 0 1 0 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

function FilmStrip({ children }: { children: ReactNode }) {
  return (
    <div className="franchise-ad-film relative z-20 overflow-hidden">
      <div className="franchise-ad-film-track flex w-max">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

type TerritoryCity = (typeof FRANCHISE_TERRITORIES)[number]["city"];

export function FranchiseHomeBanner() {
  const [activeCity, setActiveCity] = useState<TerritoryCity>(FRANCHISE_TERRITORIES[0]!.city);
  const active = FRANCHISE_TERRITORIES.find((t) => t.city === activeCity) ?? FRANCHISE_TERRITORIES[0]!;

  const cityStrip = Array.from({ length: 4 }, (_, copy) =>
    FRANCHISE_TERRITORIES.map((branch) => (
      <span key={`${copy}-${branch.city}`} className="franchise-ad-film-chip">
        <AdIcon name="pin" className="franchise-ad-icon--pin h-3.5 w-3.5" />
        <span className="font-bold tracking-[0.14em] text-white">
          {branch.city.toUpperCase()} {branch.city === "Delhi" ? "NCR" : ""}
        </span>
        <span className="text-white/50" aria-hidden>
          •
        </span>
        <span className="font-semibold tracking-[0.1em] text-white/90">{branch.detail}</span>
      </span>
    ))
  );

  return (
    <section
      id="franchise"
      className="franchise-ad relative isolate w-full overflow-hidden text-white"
      aria-label="Franchise opportunity"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <SafeImage
          src={FRANCHISE_HOME_IMAGE}
          alt=""
          fill
          className="franchise-ad-bg object-cover object-[center_40%]"
          sizes="100vw"
          priority={false}
        />
        <div className="franchise-ad-overlay absolute inset-0" />
        <div className="franchise-ad-neon-glow absolute inset-0" />
      </div>

      <FilmStrip>{cityStrip}</FilmStrip>

      <div className="relative z-10 section-pad">
        <div className="mx-auto max-w-7xl py-5 sm:py-6 lg:min-h-0 lg:py-8">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.85fr)] lg:gap-12 xl:gap-16">
            <div className="relative z-10 max-w-xl">
              <div className="franchise-ad-banner mb-3 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-black sm:mb-4 sm:text-[11px]">
                <span className="franchise-ad-live-dot inline-block h-2 w-2 shrink-0 rounded-full" />
                <span>Now Open — Limited Territories</span>
              </div>

              <p className="franchise-ad-kicker text-[10px] font-extrabold uppercase tracking-[0.34em] sm:text-[11px]">
                Sneakcure Franchise
              </p>

              <h2 className="franchise-ad-headline mt-1.5">
                <span className="franchise-ad-line-open">OPEN</span>
                <span className="franchise-ad-line-script">your story</span>
                <span className="franchise-ad-line-city">IN THE CITY.</span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75 sm:text-[15px]">
                Launch a premium restoration studio with full training, brand systems, and on-ground
                support — built for operators who want the Sneakcure standard in their city.
              </p>

              <ul className="franchise-ad-feature-row mt-5" aria-label="Franchise highlights">
                {FEATURES.map((f, i) => (
                  <li key={f.label} className="franchise-ad-feature-item">
                    <span
                      className="franchise-ad-feature-orb inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-white sm:h-9 sm:w-9"
                      style={{ animationDelay: `${i * 0.18}s` }}
                    >
                      <AdIcon name={f.icon} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </span>
                    <span className="text-[8px] font-extrabold uppercase leading-[1.1] tracking-[0.12em] text-white sm:text-[9px]">
                      {f.label.split(" ").map((w) => (
                        <span key={w} className="block">
                          {w}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/franchise"
                className="franchise-ad-paint-btn mt-6 inline-flex items-center gap-3 px-5 py-2.5 sm:mt-7"
              >
                <span className="text-[12px] font-extrabold uppercase tracking-[0.2em]">
                  Explore Franchise
                </span>
                <span className="franchise-ad-cta-arrow inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full">
                  <AdIcon name="arrow" className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>

            <div className="franchise-ad-ticket relative z-10 mx-auto w-full max-w-md lg:mx-0 lg:ml-auto lg:max-w-[23rem]">
              <div className="franchise-ad-ticket-inner rounded-[1.25rem] border border-white/10 bg-black/75 p-5 backdrop-blur-xl sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-white/80">
                      Campaign Open
                    </p>
                  </div>
                  <span className="franchise-ad-year rounded-md px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em]">
                    2026
                  </span>
                </div>

                <div className="my-5 border-t border-white/15" />

                <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white">
                  Territories
                </p>
                <p className="mt-1 text-[11px] text-white/40">Tap a city to see details</p>

                <ul className="mt-3 space-y-2">
                  {FRANCHISE_TERRITORIES.map((branch) => {
                    const selected = branch.city === activeCity;
                    return (
                      <li key={branch.city}>
                        <button
                          type="button"
                          onClick={() => setActiveCity(branch.city)}
                          aria-pressed={selected}
                          className={`group/city flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left transition-all duration-300 ${
                            selected
                              ? "franchise-ad-city-active bg-black/40 text-white"
                              : "border border-white/10 bg-white/[0.03] text-white/75 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
                          }`}
                        >
                          <AdIcon
                            name="pin"
                            className={`franchise-ad-icon--pin h-4 w-4 shrink-0 ${
                              selected ? "text-white" : "text-white/45"
                            }`}
                          />
                          <span className="min-w-0 flex-1">
                            <span className="block text-[13px] font-extrabold uppercase tracking-[0.1em]">
                              {branch.city === "Delhi" ? "Delhi NCR" : branch.city}
                            </span>
                            <span className={`block text-[11px] ${selected ? "text-white/55" : "text-white/35"}`}>
                              {branch.detail}
                            </span>
                          </span>
                          <span
                            className={`text-lg leading-none ${
                              selected ? "text-white" : "text-white/35"
                            }`}
                          >
                            ›
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-5 flex flex-col gap-2.5">
                  <a
                    href={`tel:${active.phoneHref}`}
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-white transition-colors hover:border-white/30"
                    aria-label={`Call ${active.city} at ${active.phone}`}
                  >
                    <AdIcon name="phone" className="franchise-ad-icon--phone h-4 w-4 text-white" />
                    <span className="inline-grid max-w-full overflow-hidden">
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                          key={`${active.city}-${active.phone}`}
                          className="col-start-1 row-start-1 whitespace-nowrap text-base font-bold tabular-nums tracking-wide"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.3, ease: PHONE_EASE }}
                        >
                          {active.phone}
                        </motion.span>
                      </AnimatePresence>
                      <span
                        className="invisible col-start-1 row-start-1 whitespace-nowrap text-base font-bold tabular-nums"
                        aria-hidden
                      >
                        +91 9555213651
                      </span>
                    </span>
                  </a>

                  <Link
                    href="/franchise"
                    className="franchise-ad-paint-btn franchise-ad-paint-btn--solid inline-flex w-full items-center justify-center gap-2"
                  >
                    <span className="text-[13px] font-extrabold uppercase tracking-[0.2em] text-primary-black">
                      Apply Now
                    </span>
                    <AdIcon name="arrow" className="h-4 w-4 text-primary-black" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-2.5">
            {PERKS.map((perk, i) => (
              <li
                key={perk.label}
                className="franchise-ad-perk flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-black/55 px-2.5 py-3 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/35 hover:bg-black/70"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span className="franchise-ad-feature-orb inline-flex h-8 w-8 items-center justify-center rounded-full border text-white">
                  <AdIcon name={perk.icon} className="h-4 w-4" />
                </span>
                <span className="text-[8px] font-extrabold uppercase tracking-[0.12em] text-white sm:text-[9px]">
                  {perk.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
