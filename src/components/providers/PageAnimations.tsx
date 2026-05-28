"use client";

import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap";
import { bladeReveal, fadeUpReveal, prefersReducedMotion } from "@/lib/animations";

gsap.registerPlugin(useGSAP);

export function PageAnimations() {
  useGSAP(() => {
    registerGsap();
    if (prefersReducedMotion()) {
      gsap.set("[data-animate]", { autoAlpha: 1, clearProps: "all" });
      return;
    }

    bladeReveal("[data-blade]", { stagger: 0.08 });
    fadeUpReveal("[data-fade-up]", { stagger: 0.08 });

    ScrollTrigger.batch("[data-scroll-reveal]", {
      start: "top 88%",
      onEnter: (elements) => {
        gsap.from(elements, {
          y: 56,
          autoAlpha: 0,
          filter: "blur(8px)",
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        });
      },
      once: true,
    });

    gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
      const speed = Number(el.dataset.speed ?? 0.3);
      gsap.to(el, {
        y: () => speed * 120,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    gsap.utils.toArray<HTMLElement>("[data-float]").forEach((el, i) => {
      gsap.to(el, {
        y: "+=18",
        duration: 2.8 + i * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return null;
}
