"use client";

import { prefersReducedMotion } from "@/lib/motion";
import { useEffect, useState } from "react";

const MIN_DISPLAY_MS = 650;
const MAX_DISPLAY_MS = 2200;
const EXIT_MS = 550;

function finishLoading() {
  const root = document.documentElement;
  const fallback = document.getElementById("initial-site-loader");

  fallback?.classList.add("is-exiting");

  window.setTimeout(() => {
    root.classList.remove("is-loading");
    root.classList.add("site-loaded");
    fallback?.classList.add("is-hidden");
    // Never call .remove() — the loader is React-managed in layout.tsx
  }, prefersReducedMotion() ? 150 : EXIT_MS);
}

export function SiteLoader() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (document.documentElement.classList.contains("site-loaded")) {
      setActive(false);
      return;
    }

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
