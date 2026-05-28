"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

const SITE_LOGO = "/logo/sneakcureblack.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 bg-transparent pt-[max(0.75rem,env(safe-area-inset-top))]"
      role="banner"
    >
      <div className="site-shell pointer-events-auto">
        <nav
          className={`site-gutter flex items-center justify-between gap-3 rounded-full py-2 transition-all duration-500 sm:gap-4 md:py-3 ${
            scrolled ? "glass-nav shadow-lg" : "nav-hero-glass"
          }`}
          aria-label="Main navigation"
        >
          <a
            href="#home"
            className="relative block h-10 w-[140px] shrink-0 overflow-hidden sm:h-12 sm:w-[192px] md:h-14 md:w-[220px]"
            aria-label="SneakCure home"
            onClick={closeMenu}
          >
            <SafeImage
              src={SITE_LOGO}
              alt="SneakCure"
              width={560}
              height={160}
              priority
              unoptimized
              className="absolute left-0 top-1/2 h-[400%] w-auto max-w-none -translate-y-1/2 object-contain object-left"
            />
          </a>

          <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-xs font-medium uppercase tracking-[0.14em] text-primary-black/85 transition-colors hover:text-primary-black"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary-black transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-gloss-black px-4 py-2 text-[10px] font-medium uppercase tracking-wider text-soft-white shine-sweep sm:inline-flex sm:px-5 sm:py-2.5 sm:text-xs md:text-sm"
            >
              Book Now
            </a>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 text-primary-black md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
              <span className="relative block h-3.5 w-4">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-transform duration-300 ${
                    menuOpen ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-0.5 w-full bg-current transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 h-0.5 w-full bg-current transition-transform duration-300 ${
                    menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              className="pointer-events-auto fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            <motion.div
              id="mobile-nav"
              className="pointer-events-auto fixed inset-x-4 top-[calc(4.5rem+env(safe-area-inset-top))] z-50 overflow-hidden rounded-3xl border border-white/70 bg-white/95 shadow-2xl backdrop-blur-xl md:hidden"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="flex flex-col p-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block rounded-2xl px-5 py-4 text-sm font-medium uppercase tracking-[0.14em] text-primary-black transition-colors hover:bg-black/5"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="border-t border-black/5 p-2">
                  <a
                    href="#contact"
                    className="flex w-full items-center justify-center rounded-full bg-gloss-black px-5 py-3.5 text-xs font-medium uppercase tracking-wider text-soft-white"
                    onClick={closeMenu}
                  >
                    Book Now
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
