"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import { TESTIMONIALS, productImage } from "@/lib/constants";
import { SHARED_TESTIMONIALS } from "@/lib/site-data";

const HOVER = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };

const EXTRA = SHARED_TESTIMONIALS.slice(0, 2).map((t) => ({
  quote: t.quote,
  name: t.name,
  role: t.role,
}));

const FAN_CARDS = [...TESTIMONIALS, ...EXTRA].map((t, i) => ({
  ...t,
  avatar: productImage(i + 2),
  rotate: ([-6, -3, 2, -4, 5] as const)[i] ?? 0,
}));

function Stars({ lit }: { lit: boolean }) {
  return (
    <p
      className={`text-[11px] tracking-[0.14em] ${lit ? "text-white" : "text-primary-black"}`}
      aria-label="5 out of 5 stars"
    >
      ★★★★★
    </p>
  );
}

function CardBody({
  card,
  lit,
}: {
  card: (typeof FAN_CARDS)[number];
  lit: boolean;
}) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex shrink-0 items-start justify-between gap-3">
        <Stars lit={lit} />
        <Link
          href="/contact"
          className={`shrink-0 text-[9px] font-semibold uppercase tracking-[0.16em] transition-opacity hover:opacity-70 ${
            lit ? "text-white/55" : "text-primary-black/40"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          Book now
        </Link>
      </div>

      <p
        className={`mt-3 line-clamp-4 flex-1 text-[13px] font-medium leading-relaxed sm:mt-4 sm:line-clamp-5 sm:text-sm ${
          lit ? "text-white/90" : "text-primary-black/80"
        }`}
      >
        &ldquo;{card.quote}&rdquo;
      </p>

      <footer className="mt-auto flex shrink-0 items-center gap-3 pt-4">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-black/5">
          <SafeImage
            src={card.avatar}
            alt=""
            fill
            className="object-cover"
            sizes="40px"
            loading="lazy"
          />
        </div>
        <div className="min-w-0">
          <cite
            className={`block truncate text-sm font-semibold not-italic ${
              lit ? "text-white" : "text-primary-black"
            }`}
          >
            {card.name}
          </cite>
          <p className={`truncate text-xs ${lit ? "text-white/50" : "text-primary-black/45"}`}>
            {card.role}
          </p>
        </div>
      </footer>
    </div>
  );
}

export function Testimonials() {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeMobile, setActiveMobile] = useState(0);

  return (
    <section
      id="reviews"
      className="overflow-x-hidden bg-white py-12 text-primary-black sm:py-14 md:py-16"
      aria-label="Testimonials"
    >
      <div className="section-pad mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-black/45">
          Voices
        </p>
        <h2 className="editorial-title mt-4 text-[clamp(1.85rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
          Real stories,
          <span className="mt-1 block italic text-primary-black/45">real restorations.</span>
        </h2>
      </div>

      {/* Mobile: snap carousel */}
      <div className="mt-10 md:hidden">
        <div
          className="-mx-0 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onScroll={(e) => {
            const el = e.currentTarget;
            const card = el.querySelector("article");
            if (!card) return;
            const step = card.getBoundingClientRect().width + 16;
            const index = Math.round(el.scrollLeft / step);
            setActiveMobile(Math.max(0, Math.min(FAN_CARDS.length - 1, index)));
          }}
        >
          {FAN_CARDS.map((card, i) => {
            const lit = activeMobile === i;
            return (
              <article
                key={`m-${card.name}-${i}`}
                role="blockquote"
                className={`flex h-[18.5rem] w-[min(85vw,20rem)] shrink-0 snap-center flex-col overflow-hidden rounded-[1.35rem] p-5 shadow-[0_14px_40px_rgba(0,0,0,0.1)] transition-colors duration-300 ${
                  lit ? "bg-primary-black text-white" : "bg-white text-primary-black ring-1 ring-black/5"
                }`}
                onClick={() => setActiveMobile(i)}
              >
                <CardBody card={card} lit={lit} />
              </article>
            );
          })}
        </div>
        <div className="mt-5 flex justify-center gap-2" aria-hidden>
          {FAN_CARDS.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeMobile === i ? "w-5 bg-primary-black" : "w-1.5 bg-primary-black/20"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: fan stack — sized to fit viewport without clipping */}
      <div
        className="relative mt-12 hidden w-full overflow-visible pb-8 pt-6 sm:mt-14 md:mt-16 md:block"
        onMouseLeave={() => setHovered(null)}
      >
        <div className="mx-auto flex w-full max-w-6xl items-end justify-center px-4 lg:px-8">
          {FAN_CARDS.map((card, i) => {
            const isHot = hovered === i;
            const anyHot = hovered !== null;
            const lit = isHot;

            return (
              <motion.article
                key={`${card.name}-${i}`}
                role="blockquote"
                className={`relative flex h-[17.5rem] w-[12.75rem] shrink-0 cursor-pointer flex-col overflow-hidden rounded-[1.35rem] p-4 shadow-[0_18px_48px_rgba(0,0,0,0.12)] will-change-transform lg:h-[18.5rem] lg:w-[14.25rem] lg:rounded-[1.5rem] lg:p-5 xl:h-[19.5rem] xl:w-[15.5rem] xl:p-5 ${
                  lit ? "bg-primary-black text-white" : "bg-white text-primary-black ring-1 ring-black/5"
                }`}
                style={{
                  zIndex: isHot ? 40 : 10 + i,
                  transformOrigin: "50% 100%",
                }}
                initial={false}
                animate={
                  reduce
                    ? {
                        rotate: 0,
                        y: 0,
                        scale: 1,
                        marginLeft: i === 0 ? 0 : -24,
                      }
                    : {
                        rotate: isHot ? 0 : card.rotate,
                        y: isHot ? -20 : 0,
                        scale: isHot ? 1.04 : 1,
                        marginLeft: i === 0 ? 0 : anyHot ? -14 : -26,
                      }
                }
                transition={HOVER}
                onMouseEnter={() => setHovered(i)}
              >
                <CardBody card={card} lit={lit} />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
