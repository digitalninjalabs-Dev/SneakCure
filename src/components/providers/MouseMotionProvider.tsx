"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const TILT_SELECTOR =
  "[data-site-main] main article:not(.services-showcase article):not(.services-showcase *), [data-site-main] main .glass-card, [data-site-main] main blockquote[class*='border']";

const FLOAT_SELECTOR =
  "[data-site-main] main img.object-cover:not(.services-showcase img):not(.services-showcase *)";

export function MouseMotionProvider() {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [spot, setSpot] = useState({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number>(0);
  const tiltEls = useRef<HTMLElement[]>([]);
  const floatEls = useRef<HTMLElement[]>([]);

  useEffect(() => {
    setMounted(true);
    const coarse = window.matchMedia("(pointer: coarse)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      const on = !coarse.matches && !reduced.matches;
      setEnabled(on);
      document.documentElement.classList.toggle("mouse-motion-active", on);
    };

    sync();
    coarse.addEventListener("change", sync);
    reduced.addEventListener("change", sync);

    return () => {
      coarse.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
      document.documentElement.classList.remove("mouse-motion-active");
    };
  }, []);

  useEffect(() => {
    if (!enabled || !mounted) return;

    const collect = () => {
      tiltEls.current = Array.from(document.querySelectorAll<HTMLElement>(TILT_SELECTOR));
      floatEls.current = Array.from(document.querySelectorAll<HTMLElement>(FLOAT_SELECTOR));
    };

    const reset = () => {
      document.documentElement.style.setProperty("--mouse-x", "0.5");
      document.documentElement.style.setProperty("--mouse-y", "0.5");
      tiltEls.current.forEach((el) => {
        el.style.transform = "";
      });
      floatEls.current.forEach((el) => {
        el.style.transform = "";
      });
    };

    const apply = () => {
      const { x: nx, y: ny } = mouseRef.current;

      document.documentElement.style.setProperty("--mouse-x", String(nx));
      document.documentElement.style.setProperty("--mouse-y", String(ny));

      const mx = nx * window.innerWidth;
      const my = ny * window.innerHeight;

      for (const el of tiltEls.current) {
        if (!el.isConnected) continue;
        const r = el.getBoundingClientRect();
        if (r.bottom < -40 || r.top > window.innerHeight + 40) continue;

        const px = (mx - (r.left + r.width / 2)) / (r.width * 0.5);
        const py = (my - (r.top + r.height / 2)) / (r.height * 0.5);
        const clamp = (v: number) => Math.max(-1, Math.min(1, v));

        el.style.transform = `perspective(900px) rotateY(${clamp(px) * 5}deg) rotateX(${clamp(-py) * 4}deg) translateY(${clamp(-py) * -2}px)`;
      }

      for (const img of floatEls.current) {
        if (!img.isConnected) continue;
        const r = img.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) continue;

        const px = (mx - (r.left + r.width / 2)) / window.innerWidth;
        const py = (my - (r.top + r.height / 2)) / window.innerHeight;
        img.style.transform = `scale(1.04) translate(${px * 18}px, ${py * 12}px)`;
      }

      rafRef.current = 0;
    };

    const onMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
      setSpot({ x: e.clientX, y: e.clientY });
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(apply);
      }
    };

    const onLeave = () => reset();

    const collectTimer = window.setTimeout(collect, 0);
    const retryTimer = window.setTimeout(collect, 500);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.clearTimeout(collectTimer);
      window.clearTimeout(retryTimer);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      reset();
    };
  }, [enabled, mounted, pathname]);

  if (!mounted || !enabled) return null;

  const spotlight = (
    <div
      aria-hidden
      className="mouse-spotlight"
      style={{
        background: `radial-gradient(560px circle at ${spot.x}px ${spot.y}px, rgba(17,17,17,0.08), transparent 62%)`,
      }}
    />
  );

  return createPortal(spotlight, document.body);
}
