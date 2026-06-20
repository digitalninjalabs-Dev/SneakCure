"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap-client";
import { productImage } from "@/lib/constants";
import { SplitTitle } from "@/components/ui/SplitTitle";

export function VideoShowcase() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsap();
      gsap.from(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
        autoAlpha: 0,
        y: 24,
        duration: 0.75,
        ease: "power2.out",
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="section-pad py-12 md:py-20" aria-label="Video showcase">
      <div className="relative mx-auto aspect-[21/9] max-w-7xl overflow-hidden rounded-3xl gloss-black-panel">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={productImage(0)}
          suppressHydrationWarning
          aria-label="SneakCure restoration cinematic showcase"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-white-sneaker-on-a-black-background-3280-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
        <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16">
          <p className="text-xs uppercase tracking-[0.25em] text-soft-white/70">Cinematic Process</p>
          <SplitTitle title="Craft in motion" accent="See the process" as="h2" size="section" dark className="mt-3" />
        </div>
      </div>
    </section>
  );
}
