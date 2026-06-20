"use client";

import { createContext, useContext, useEffect, useState } from "react";

const SiteReadyContext = createContext(false);

function readReady() {
  if (typeof document === "undefined") return false;
  return (
    document.documentElement.classList.contains("site-loaded") ||
    !document.documentElement.classList.contains("is-loading")
  );
}

export function SiteReadyProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (readReady()) {
      setReady(true);
      return;
    }

    const observer = new MutationObserver(() => {
      if (readReady()) {
        setReady(true);
        observer.disconnect();
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return <SiteReadyContext.Provider value={ready}>{children}</SiteReadyContext.Provider>;
}

export function useSiteReady() {
  return useContext(SiteReadyContext);
}
