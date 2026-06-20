"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SafeImage } from "@/components/ui/SafeImage";
import { prefersReducedMotion } from "@/lib/motion";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MAIN_NAV } from "@/lib/site-data";

const SITE_LOGO = "/logo/sneakcureblack.png";
const NAV_EASE = [0.22, 1, 0.36, 1] as const;

const headerVariants = {
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 220,
      damping: 26,
      mass: 0.85,
      opacity: { duration: 0.35, ease: NAV_EASE },
      filter: { duration: 0.4, ease: NAV_EASE },
    },
  },
  hidden: {
    y: "-115%",
    opacity: 0,
    scale: 0.97,
    filter: "blur(6px)",
    transition: {
      duration: 0.5,
      ease: [0.32, 0, 0.67, 0] as const,
      opacity: { duration: 0.35, ease: [0.32, 0, 0.67, 0] as const },
      filter: { duration: 0.45, ease: [0.32, 0, 0.67, 0] as const },
    },
  },
};

function navLabel(label: string, href: string) {  const short: Record<string, string> = {
    "/about": "About",
    "/training": "Training",
    "/franchise": "Franchise",
    "/founder": "Founder",
    "/contact": "Contact",
  };
  return short[href] ?? label;
}

function DesktopNav({ pathname }: { pathname: string }) {
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);
  const anyHover = hovered !== null;

  const prefetchRoute = (href: string) => {
    router.prefetch(href);
  };

  return (
    <ul
      className="hidden min-w-0 flex-1 items-center justify-center lg:flex"
      onMouseLeave={() => setHovered(null)}
    >
      {MAIN_NAV.map((link) => {
        const isHovered = hovered === link.href;
        const isActive = pathname === link.href;
        const display = navLabel(link.label, link.href);

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              scroll={false}
              prefetch={false}
              onMouseEnter={() => {
                setHovered(link.href);
                prefetchRoute(link.href);
              }}
              onFocus={() => prefetchRoute(link.href)}
              className="block whitespace-nowrap py-2.5 text-[12px] font-medium uppercase lg:text-[13px] xl:text-sm"
            >
              <motion.span
                className="block"
                animate={{
                  paddingLeft: isHovered ? "1.35rem" : anyHover ? "0.55rem" : "0.75rem",
                  paddingRight: isHovered ? "1.35rem" : anyHover ? "0.55rem" : "0.75rem",
                  letterSpacing: isHovered ? "0.28em" : anyHover ? "0.1em" : isActive ? "0.18em" : "0.14em",
                  color: isHovered || isActive ? "var(--color-primary-black)" : anyHover ? "rgba(17,17,17,0.35)" : "rgba(17,17,17,0.55)",
                  scale: isHovered ? 1.04 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 32,
                  mass: 0.6,
                }}
              >
                {display}
              </motion.span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(prefersReducedMotion());
  }, []);

  const prefetchRoute = (href: string) => {
    router.prefetch(href);
  };

  useEffect(() => {
    const prefetchAll = () => {
      MAIN_NAV.forEach((link) => router.prefetch(link.href));
    };

    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(prefetchAll, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = setTimeout(prefetchAll, 1200);
    return () => clearTimeout(timer);
  }, [router]);

  useEffect(() => {
    const scrollThreshold = 40;
    const hideAfter = 72;
    const delta = 5;

    const updateNav = (rawY?: number) => {
      const y = rawY ?? window.scrollY;
      setScrolled(y > scrollThreshold);

      if (menuOpen || y <= hideAfter || reduceMotion) {
        setVisible(true);
      } else if (y - lastScrollY.current > delta) {
        setVisible(false);
      } else if (lastScrollY.current - y > delta) {
        setVisible(true);
      }

      lastScrollY.current = y;
      ticking.current = false;
    };

    const scheduleUpdate = (rawY?: number) => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => updateNav(rawY));
    };

    const onWindowScroll = () => scheduleUpdate();
    const onLenisScroll = (event: Event) => {
      const y = (event as CustomEvent<number>).detail;
      if (typeof y === "number") scheduleUpdate(y);
    };

    updateNav();
    window.addEventListener("scroll", onWindowScroll, { passive: true });
    window.addEventListener("sneakcure:scroll", onLenisScroll);

    return () => {
      window.removeEventListener("scroll", onWindowScroll);
      window.removeEventListener("sneakcure:scroll", onLenisScroll);
    };
  }, [menuOpen, reduceMotion]);

  useEffect(() => {
    if (menuOpen) setVisible(true);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => setMenuOpen(false);

  const showNav = visible || menuOpen || reduceMotion;
  const navGlass = scrolled || !isHome;

  return (
    <motion.header
      className="pointer-events-none fixed inset-x-0 top-0 z-50 bg-transparent pt-[max(0.75rem,env(safe-area-inset-top))]"
      role="banner"
      initial={false}
      variants={headerVariants}
      animate={showNav ? "visible" : "hidden"}
      style={{ willChange: "transform, opacity, filter" }}
    >
      <motion.div
        className="site-shell pointer-events-auto"
        animate={{ y: showNav ? 0 : -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
      >
        <motion.nav
          className="flex w-full max-w-[88rem] items-center gap-3 rounded-full border px-3 py-2.5 sm:gap-4 sm:px-4 md:py-3 lg:px-6"
          aria-label="Main navigation"
          animate={{
            backgroundColor: navGlass ? "rgba(255, 255, 255, 0.55)" : "rgba(255, 255, 255, 0.92)",
            borderColor: navGlass ? "rgba(255, 255, 255, 0.65)" : "rgba(255, 255, 255, 0.85)",
            boxShadow: navGlass
              ? "0 4px 30px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)"
              : "0 8px 40px rgba(255, 255, 255, 0.35), 0 2px 12px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 1)",
            backdropFilter: navGlass ? "blur(20px) saturate(180%)" : "blur(24px) saturate(200%)",
          }}
          transition={{ duration: 0.55, ease: NAV_EASE }}
        >
          <motion.div
            animate={{ scale: scrolled ? 0.96 : 1, opacity: showNav ? 1 : 0.85 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            <Link
              href="/"
              scroll={false}
              prefetch={false}
              onMouseEnter={() => prefetchRoute("/")}
              onFocus={() => prefetchRoute("/")}
              className="relative block h-11 w-[148px] shrink-0 overflow-hidden sm:h-12 sm:w-[176px] md:h-14 md:w-[204px] lg:h-[3.75rem] lg:w-[228px]"
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
            </Link>
          </motion.div>

          <DesktopNav pathname={pathname} />

          <motion.button
            type="button"
            className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/60 text-primary-black lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            whileHover={{ scale: 1.06, backgroundColor: "rgba(255,255,255,0.95)" }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
          >
            <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-transform duration-200 ${
                  menuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-0.5 w-full bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-full bg-current transition-transform duration-200 ${
                  menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </motion.button>
        </motion.nav>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              className="pointer-events-auto fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              aria-label="Close menu"
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.35, ease: NAV_EASE }}
              onClick={closeMenu}
            />
            <motion.div
              id="mobile-nav"
              className="pointer-events-auto fixed inset-x-4 top-[calc(4.5rem+env(safe-area-inset-top))] z-50 overflow-hidden rounded-3xl border border-white/70 bg-white/95 shadow-2xl backdrop-blur-xl lg:hidden"
              initial={{ opacity: 0, y: -16, scale: 0.96, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, scale: 0.98, filter: "blur(6px)" }}
              transition={{ type: "spring", stiffness: 320, damping: 30, mass: 0.85 }}
            >
              <ul className="flex flex-col p-2">
                {MAIN_NAV.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.04 + i * 0.04,
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    >
                      <Link
                        href={link.href}
                        scroll={false}
                        prefetch={false}
                        onMouseEnter={() => prefetchRoute(link.href)}
                        onFocus={() => prefetchRoute(link.href)}
                        className={`group block rounded-2xl px-5 py-3.5 text-base font-medium uppercase tracking-[0.12em] transition-colors duration-300 hover:bg-black/5 ${
                          active ? "bg-black/5 text-primary-black" : "text-primary-black/80"
                        }`}
                        onClick={closeMenu}
                      >
                        <motion.span
                          className="block"
                          whileHover={{ x: 6, letterSpacing: "0.16em" }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        >
                          {link.label}
                        </motion.span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
