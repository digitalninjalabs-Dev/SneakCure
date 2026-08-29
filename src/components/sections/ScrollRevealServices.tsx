"use client";

import Link from "next/link";
import { SERVICE_PAGES } from "@/lib/site-data";
import { SafeImage } from "@/components/ui/SafeImage";

const SHORT_TITLES = [
  "Sneaker",
  "Bags & Wallets",
  "Jacket & Accessories",
  "Sofa Cleaning",
  "Customization/Patina",
  "Leather Care",
] as const;

/** Monochrome card grounds — black/white theme, not pastels */
const CARD_TONES = [
  { bg: "#f4f4f4", text: "#111111", muted: "rgba(17,17,17,0.62)", link: "#111111" },
  { bg: "#ebebeb", text: "#111111", muted: "rgba(17,17,17,0.62)", link: "#111111" },
  { bg: "#111111", text: "#ffffff", muted: "rgba(255,255,255,0.65)", link: "#ffffff" },
  { bg: "#f0f0f0", text: "#111111", muted: "rgba(17,17,17,0.62)", link: "#111111" },
  { bg: "#e6e6e6", text: "#111111", muted: "rgba(17,17,17,0.62)", link: "#111111" },
  { bg: "#0a0a0a", text: "#ffffff", muted: "rgba(255,255,255,0.65)", link: "#ffffff" },
] as const;

function trimDesc(text: string, max = 120) {
  const clean = text.trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max).replace(/\s+\S*$/, "");
  return `${cut}…`;
}

export function ScrollRevealServices() {
  const count = SERVICE_PAGES.length;

  return (
    <div id="services" className="bg-white">
      <div className="section-pad pb-4 pt-10 sm:pb-5 sm:pt-12 md:pt-14">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-black/45">
          Services
        </p>
        <h2 className="editorial-title mt-3 max-w-2xl text-[clamp(1.85rem,4.5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-primary-black">
          Every detail. Every finish.
          <span className="text-primary-black/45"> Perfectly restored.</span>
        </h2>
      </div>

      <div className="section-pad relative pb-[12vh]">
        {SERVICE_PAGES.map((service, i) => {
          const tone = CARD_TONES[i % CARD_TONES.length]!;
          const shortTitle = SHORT_TITLES[i] ?? service.title;
          const indexLabel = String(i + 1).padStart(2, "0");
          const stickyTop = `calc(var(--site-header-offset) + ${i * 0.65}rem)`;

          return (
            <article
              key={service.slug}
              className="sticky mb-4 sm:mb-5 md:mb-6"
              style={{ top: stickyTop, zIndex: i + 1 }}
            >
              <div
                className="grid overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] md:min-h-[min(72vh,36rem)] md:grid-cols-2 md:rounded-[2.25rem]"
                style={{ backgroundColor: tone.bg, color: tone.text }}
              >
                <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14">
                  <div>
                    <h3 className="editorial-title text-[clamp(1.85rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                      <span className="tabular-nums opacity-50">{indexLabel}</span>{" "}
                      {shortTitle}
                    </h3>
                    <p
                      className="mt-5 max-w-md text-sm font-medium leading-relaxed sm:mt-6 sm:text-base"
                      style={{ color: tone.muted }}
                    >
                      {trimDesc(service.tagline + " " + service.shortDesc, 140)}
                    </p>
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex min-h-11 w-fit items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-opacity hover:opacity-70"
                    style={{ color: tone.link }}
                  >
                    Learn more
                    <span aria-hidden>→</span>
                  </Link>
                </div>

                <div className="relative min-h-[14rem] p-4 sm:min-h-[18rem] sm:p-5 md:min-h-0 md:p-6 lg:p-7">
                  <div className="relative h-full min-h-[14rem] overflow-hidden rounded-[1.25rem] sm:min-h-[18rem] sm:rounded-[1.5rem] md:min-h-full">
                    <SafeImage
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={i === 0}
                    />
                  </div>
                </div>
              </div>

              {/* Extra scroll room so the last cards can stick cleanly */}
              {i === count - 1 ? null : (
                <div className="pointer-events-none h-2 sm:h-3" aria-hidden />
              )}
            </article>
          );
        })}
      </div>

      <div className="section-pad pb-8 pt-2 text-center sm:pb-10">
        <Link
          href="/services"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-primary-black/15 px-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-black transition-colors hover:border-primary-black/35"
        >
          View all services →
        </Link>
      </div>
    </div>
  );
}
