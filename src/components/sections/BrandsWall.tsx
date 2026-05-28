"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import { useEffect, useState } from "react";
import { motion, LayoutGroup, useReducedMotion } from "framer-motion";
import {
  BRAND_GRID_COLUMNS,
  createBrandGridItems,
  slotToGridStyle,
  type BrandLogoItem,
} from "@/lib/brand-logos";

const SWAP_INTERVAL_MS = 5000;

function swapRandomPair(list: BrandLogoItem[]): BrandLogoItem[] {
  const next = list.map((item) => ({ ...item }));
  const i = Math.floor(Math.random() * next.length);
  let j = Math.floor(Math.random() * next.length);
  while (j === i) j = Math.floor(Math.random() * next.length);

  const tempSlot = next[i].slot;
  next[i].slot = next[j].slot;
  next[j].slot = tempSlot;

  return next;
}

function useGridColumns() {
  const [columns, setColumns] = useState(BRAND_GRID_COLUMNS);

  useEffect(() => {
    const update = () => {
      setColumns(window.innerWidth < 640 ? 2 : BRAND_GRID_COLUMNS);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return columns;
}

export function BrandsWall() {
  const reduceMotion = useReducedMotion();
  const columns = useGridColumns();
  const [logos, setLogos] = useState<BrandLogoItem[]>(createBrandGridItems);

  useEffect(() => {
    if (reduceMotion) return;

    const id = setInterval(() => {
      setLogos((prev) => swapRandomPair(prev));
    }, SWAP_INTERVAL_MS);

    return () => clearInterval(id);
  }, [reduceMotion]);

  const gridClass = columns === 2 ? "grid-cols-2" : "grid-cols-4";

  return (
    <section
      id="brands"
      className="section-pad bg-white py-12 sm:py-16 md:py-24"
      aria-label="Luxury brands wall"
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-8 text-xs font-normal tracking-wide text-neutral-500 sm:mb-10 sm:text-sm md:mb-14 md:text-base">
          Brands We Have Restored..
        </p>

        <LayoutGroup id="brands-logo-grid">
          <motion.ul
            role="list"
            layout
            className={`grid ${gridClass} gap-x-3 gap-y-2 sm:gap-x-4 sm:gap-y-2 md:gap-x-5 md:gap-y-3 lg:gap-x-6 lg:gap-y-3`}
          >
            {logos.map((logo) => (
              <motion.li
                key={logo.id}
                role="listitem"
                layout="position"
                layoutId={logo.id}
                layoutDependency={logo.slot}
                initial={false}
                transition={{
                  layout: {
                    type: "tween",
                    duration: 1.9,
                    ease: [0.42, 0, 0.18, 1],
                  },
                }}
                style={slotToGridStyle(logo.slot, columns)}
                className="flex h-16 items-center justify-center will-change-[transform] sm:h-20 md:h-24 lg:h-28"
              >
                <SafeImage
                  src={logo.src}
                  alt={logo.alt}
                  width={280}
                  height={120}
                  className="pointer-events-none h-full max-h-16 w-auto max-w-[92%] object-contain object-center brightness-0 sm:max-h-20 md:max-h-24 lg:max-h-28"
                  sizes="(max-width: 640px) 40vw, (max-width: 1024px) 22vw, 16vw"
                />
              </motion.li>
            ))}
          </motion.ul>
        </LayoutGroup>

        <p className="mt-10 text-sm font-normal tracking-wide text-neutral-500 md:mt-14 md:text-base">
          ..... and many more
        </p>
      </div>
    </section>
  );
}
