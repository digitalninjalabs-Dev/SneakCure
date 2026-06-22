"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import { FadeIn } from "@/components/ui/scroll-reveal";
import { BEFORE_AFTER } from "@/lib/constants";
import { useCallback, useRef, useState } from "react";

export type BeforeAfterItem = {
  title: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

type BeforeAfterSliderProps = Partial<Omit<BeforeAfterItem, "title">> & {
  title?: string;
};

export function BeforeAfterSlider({
  before = BEFORE_AFTER.before,
  after = BEFORE_AFTER.after,
  beforeAlt = "Before restoration",
  afterAlt = "After restoration",
}: BeforeAfterSliderProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, x)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/5] w-full cursor-ew-resize touch-none select-none overflow-hidden bg-neutral-100 sm:aspect-square"
      onPointerDown={(e) => {
        dragging.current = true;
        containerRef.current?.setPointerCapture(e.pointerId);
        updatePosition(e.clientX);
      }}
      onPointerMove={(e) => {
        if (!dragging.current) return;
        updatePosition(e.clientX);
      }}
      onPointerUp={(e) => {
        dragging.current = false;
        containerRef.current?.releasePointerCapture(e.pointerId);
      }}
      onPointerCancel={() => {
        dragging.current = false;
      }}
    >
      <SafeImage
        src={after}
        alt={afterAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
        priority={false}
      />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <SafeImage
          src={before}
          alt={beforeAlt}
          fill
          className="object-cover grayscale contrast-110 brightness-90"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <span className="absolute left-3 top-3 z-10 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-600 sm:left-4 sm:top-4 sm:text-[11px]">
        Before
      </span>
      <span className="absolute right-3 top-3 z-10 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-600 sm:right-4 sm:top-4 sm:text-[11px]">
        After
      </span>

      <div
        className="absolute top-0 bottom-0 z-20 w-px bg-white shadow-[0_0_12px_rgba(0,0,0,0.15)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-md sm:h-10 sm:w-10">
          <span className="text-[11px] font-medium tracking-tighter text-neutral-700" aria-hidden>
            ‹›
          </span>
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterCard({ title, before, after, beforeAlt, afterAlt }: BeforeAfterItem) {
  return (
    <FadeIn as="article" className="overflow-hidden rounded-xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.07)] ring-1 ring-black/[0.04]">
      <BeforeAfterSlider
        before={before}
        after={after}
        beforeAlt={beforeAlt}
        afterAlt={afterAlt}
      />
      <p className="border-t border-neutral-100 px-4 py-4 text-center text-sm font-medium text-primary-black sm:py-5 sm:text-[0.9375rem]">
        {title}
      </p>
    </FadeIn>
  );
}
