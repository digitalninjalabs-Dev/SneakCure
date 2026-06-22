import type Lenis from "lenis";

let lenis: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null) {
  lenis = instance;
}

export function scrollToY(top: number, options?: { immediate?: boolean }) {
  if (lenis) {
    lenis.scrollTo(top, options);
    return;
  }
  window.scrollTo({ top, behavior: options?.immediate ? "auto" : "smooth" });
}
