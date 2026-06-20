"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap-client";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerGsap();

    let destroyed = false;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };

    const teardown = () => {
      if (destroyed) return;
      destroyed = true;
      window.removeEventListener("sneakcure:navigate", onNavigate);
      gsap.ticker.remove(ticker);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };

    const onNavigate = () => {
      lenis.scrollTo(0, { immediate: true });
      teardown();
    };

    window.addEventListener("sneakcure:navigate", onNavigate);
    lenis.on("scroll", (event: { scroll: number }) => {
      ScrollTrigger.update();
      window.dispatchEvent(
        new CustomEvent("sneakcure:scroll", { detail: event.scroll })
      );
    });
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return teardown;
  }, []);

  return <>{children}</>;
}
