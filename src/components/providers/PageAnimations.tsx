"use client";

import { gsap, ScrollTrigger, registerGsapClient, useGSAP } from "@/lib/gsap-client";
import { bladeReveal, fadeUpReveal } from "@/lib/animations";
import { prefersReducedMotion } from "@/lib/motion";

export function PageAnimations() {
  useGSAP(() => {
    registerGsapClient();

    if (prefersReducedMotion()) {
      gsap.set("[data-animate], [data-fade-up], [data-blade], [data-scroll-reveal]", {
        autoAlpha: 1,
        clearProps: "all",
      });
      return;
    }

    bladeReveal("[data-blade]", { stagger: 0.06 });
    fadeUpReveal("[data-fade-up]", { stagger: 0.06 });

    ScrollTrigger.batch("[data-scroll-reveal]", {
      start: "top 90%",
      onEnter: (elements) => {
        gsap.from(elements, {
          y: 28,
          autoAlpha: 0,
          duration: 0.65,
          stagger: 0.06,
          ease: "power2.out",
        });
      },
      once: true,
    });

    ScrollTrigger.refresh();
  }, []);

  return null;
}
