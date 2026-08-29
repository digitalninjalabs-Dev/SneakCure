"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import { WHY_CHOOSE, productImage, serviceImage } from "@/lib/constants";

const CARD_IMAGES = [
  serviceImage(0),
  productImage(2),
  serviceImage(1),
  productImage(4),
  productImage(1),
  productImage(6),
] as const;

function NavButton({
  dir,
  onClick,
  disabled,
}: {
  dir: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Previous" : "Next"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-black/10 bg-[#ececec] text-primary-black transition-colors hover:bg-[#e2e2e2] disabled:cursor-not-allowed disabled:opacity-35"
    >
      <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden>
        <path
          d={dir === "prev" ? "M10 3 5 8l5 5" : "M6 3l5 5-5 5"}
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function WhyCard({
  title,
  body,
  image,
  index,
}: {
  title: string;
  body: string;
  image: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className="group relative h-[min(68vw,26rem)] w-[min(78vw,22rem)] shrink-0 snap-center overflow-hidden rounded-[1.75rem] bg-black sm:h-[28rem] sm:w-[24rem] sm:rounded-[2rem] md:h-[30rem] md:w-[26rem]"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {/* Image always full card */}
      <SafeImage
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        sizes="420px"
        loading={index < 2 ? "eager" : "lazy"}
      />

      {/* Bottom text panel only — expands on hover, never covers full card */}
      <div
        className={`absolute inset-x-0 bottom-0 z-10 bg-black transition-[min-height,padding] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "min-h-[48%] px-5 py-5 sm:px-6 sm:py-6" : "min-h-0 px-5 py-4 sm:px-6 sm:py-5"
        }`}
      >
        <p className="font-display text-base font-semibold text-white sm:text-lg">{title}</p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="mt-2 text-sm font-medium leading-relaxed text-white/65 sm:text-[15px]">
                {body}
              </p>
              <Link
                href="/services"
                className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-70"
              >
                Learn more
                <span aria-hidden>→</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}

export function WhyChoose() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateNav = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth - 4;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < max);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateNav();
    el.addEventListener("scroll", updateNav, { passive: true });
    window.addEventListener("resize", updateNav);
    return () => {
      el.removeEventListener("scroll", updateNav);
      window.removeEventListener("resize", updateNav);
    };
  }, [updateNav]);

  const scrollByCard = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const amount = card ? card.getBoundingClientRect().width + 20 : 320;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section
      className="bg-white py-20 text-primary-black sm:py-24 md:py-32"
      aria-label="Why choose Sneakcure"
    >
      <div className="section-pad mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-10">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-black/45">
              <span className="inline-block h-1.5 w-1.5 rounded-sm bg-primary-black" aria-hidden />
              The Sneakcure standard
            </p>
            <h2 className="editorial-title mt-4 text-[clamp(1.85rem,4.5vw,3.25rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-primary-black">
              Why people trust Sneakcure.
              <span className="mt-1 block italic text-primary-black/45">
                Craftsmanship without compromise.
              </span>
            </h2>
          </div>

          <div className="flex shrink-0 gap-2 md:pt-2">
            <NavButton dir="prev" onClick={() => scrollByCard(-1)} disabled={!canPrev} />
            <NavButton dir="next" onClick={() => scrollByCard(1)} disabled={!canNext} />
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-10 flex gap-4 overflow-x-auto pb-4 pl-0 pr-4 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory sm:mt-12 sm:gap-5 sm:pr-6 md:pr-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] [&::-webkit-scrollbar]:hidden"
      >
        {WHY_CHOOSE.map((item, i) => (
          <WhyCard
            key={item.title}
            title={item.title}
            body={item.body}
            image={CARD_IMAGES[i % CARD_IMAGES.length]!}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
