"use client";

import { prefersReducedMotion } from "@/lib/animations";
import { useEffect, useState } from "react";

const MIN_DISPLAY_MS = 1600;
const MAX_DISPLAY_MS = 4500;
const EXIT_MS = 850;

function finishLoading() {
  const root = document.documentElement;
  const fallback = document.getElementById("initial-site-loader");

  fallback?.classList.add("is-exiting");

  window.setTimeout(() => {
    root.classList.remove("is-loading");
    fallback?.remove();
  }, prefersReducedMotion() ? 200 : EXIT_MS);
}

export function SiteLoader() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("is-loading");

    const reduceMotion = prefersReducedMotion();
    const minMs = reduceMotion ? 350 : MIN_DISPLAY_MS;
    const maxMs = reduceMotion ? 700 : MAX_DISPLAY_MS;
    let minTimer: ReturnType<typeof setTimeout> | undefined;
    let maxTimer: ReturnType<typeof setTimeout> | undefined;
    let ready = false;
    const startedAt = Date.now();

    const beginExit = () => {
      if (ready) return;
      ready = true;
      const elapsed = Date.now() - startedAt;
      const wait = Math.max(0, minMs - elapsed);

      minTimer = setTimeout(() => {
        finishLoading();
        setActive(false);
      }, wait);
    };

    if (document.readyState === "complete") {
      beginExit();
    } else {
      window.addEventListener("load", beginExit, { once: true });
    }

    maxTimer = setTimeout(beginExit, maxMs);

    return () => {
      window.removeEventListener("load", beginExit);
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
    };
  }, []);

  if (!active) return null;

  return null;
}
