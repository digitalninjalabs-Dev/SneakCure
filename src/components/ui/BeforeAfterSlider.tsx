"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import { BEFORE_AFTER } from "@/lib/constants";
import { useRef, useState } from "react";

export function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);

  const handlePointer = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, x)));
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full cursor-ew-resize touch-none overflow-hidden rounded-xl gloss-black-panel sm:aspect-[16/10] sm:rounded-2xl"
      onMouseMove={(e) => handlePointer(e.clientX)}
      onTouchStart={(e) => handlePointer(e.touches[0].clientX)}
      onTouchMove={(e) => handlePointer(e.touches[0].clientX)}
      data-scroll-reveal
    >
      <SafeImage
        src={BEFORE_AFTER.after}
        alt="Sneaker after restoration"
        fill
        className="object-cover"
        sizes="(max-width: 1200px) 100vw, 1200px"
        priority={false}
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <SafeImage
          src={BEFORE_AFTER.before}
          alt="Sneaker before restoration"
          fill
          className="object-cover grayscale contrast-125 brightness-90"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.5)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-gloss-black/80 backdrop-blur-md sm:h-12 sm:w-12">
          <span className="text-[10px] text-soft-white sm:text-xs">↔</span>
        </div>
      </div>
      <span className="absolute left-3 top-3 rounded-full bg-black/50 px-3 py-1 text-[10px] uppercase tracking-widest text-soft-white backdrop-blur-md sm:left-6 sm:top-6 sm:px-4 sm:py-1.5 sm:text-xs">
        Before
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-white/20 px-3 py-1 text-[10px] uppercase tracking-widest text-soft-white backdrop-blur-md sm:right-6 sm:top-6 sm:px-4 sm:py-1.5 sm:text-xs">
        After
      </span>
    </div>
  );
}
