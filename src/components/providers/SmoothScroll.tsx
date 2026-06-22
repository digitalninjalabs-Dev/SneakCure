"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap-client";
import { setLenisInstance } from "@/lib/lenis-scroll";
import { prefersReducedMotion } from "@/lib/motion";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    registerGsap();

    let destroyed = false;

    const lenis = new Lenis({
      lerp: 0.16,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1,
      wheelMultiplier: 1,
    });

    setLenisInstance(lenis);
    document.documentElement.classList.add("lenis", "lenis-smooth");

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length && typeof value === "number") {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.documentElement.style.transform ? "transform" : "fixed",
    });

    const onRefresh = () => lenis.resize();
    ScrollTrigger.addEventListener("refresh", onRefresh);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };

    const teardown = () => {
      if (destroyed) return;
      destroyed = true;
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      window.removeEventListener("Sneakcure:navigate", onNavigate);
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      gsap.ticker.remove(ticker);
      ScrollTrigger.scrollerProxy(document.documentElement, {});
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
      setLenisInstance(null);
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };

    const onNavigate = () => {
      lenis.scrollTo(0, { immediate: true });
      teardown();
    };

    window.addEventListener("Sneakcure:navigate", onNavigate);

    let scrollRaf = 0;
    lenis.on("scroll", () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        ScrollTrigger.update();
        window.dispatchEvent(new CustomEvent("Sneakcure:scroll", { detail: lenis.scroll }));
      });
    });

    gsap.ticker.add(ticker);
    ScrollTrigger.refresh();

    return teardown;
  }, []);

  return <>{children}</>;
}
