"use client";

import { useEffect } from "react";

/** Marks the site ready for motion providers — no blocking splash screen. */
export function SiteLoader() {
  useEffect(() => {
    document.documentElement.classList.add("site-loaded");
    document.getElementById("initial-site-loader")?.classList.add("is-hidden");
  }, []);

  return null;
}
