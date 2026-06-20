"use client";

import { prepareForNavigation } from "@/lib/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function isInternalNavLink(anchor: HTMLAnchorElement, pathname: string) {
  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return false;
  }
  if (anchor.target === "_blank" || anchor.hasAttribute("download")) return false;

  const url = new URL(href, window.location.origin);
  if (url.origin !== window.location.origin) return false;
  return url.pathname !== pathname;
}

export function RouteChangeHandler() {
  const pathname = usePathname();
  const [navigating, setNavigating] = useState(false);

  useEffect(() => {
    setNavigating(false);
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = "auto";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor || !isInternalNavLink(anchor, pathname)) return;

      setNavigating(true);
      window.scrollTo(0, 0);
      prepareForNavigation();
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  if (!navigating) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[120] h-[2px] overflow-hidden bg-black/5"
      aria-hidden
    >
      <div className="route-progress-bar h-full bg-primary-black" />
    </div>
  );
}
