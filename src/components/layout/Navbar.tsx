"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SafeImage } from "@/components/ui/SafeImage";
import { prefersReducedMotion } from "@/lib/motion";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MAIN_NAV, SERVICE_NAV } from "@/lib/site-data";

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

function navLabel(label: string, href: string) {
  const short: Record<string, string> = {
    "/": "Home",
    "/about": "About",
    "/services": "Services",
    "/training": "Training",
    "/franchise": "Franchise",
    "/founder": "Founder",
    "/products": "Products",
    "/contact": "Contact",
  };
  return short[href] ?? label;
}

function ServicesDropdown({
  pathname,
  anyHover,
  hovered,
  setHovered,
  prefetchRoute,
}: {
  pathname: string;
  anyHover: boolean;
  hovered: string | null;
  setHovered: (href: string | null) => void;
  prefetchRoute: (href: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const isActive = pathname === "/services" || pathname.startsWith("/services/");
  const isHovered = hovered === "/services" || open;

  return (
    <li
      className="relative"
      onMouseEnter={() => {
        setOpen(true);
        setHovered("/services");
        prefetchRoute("/services");
        SERVICE_NAV.forEach((item) => prefetchRoute(item.href));
      }}
      onMouseLeave={() => {
        setOpen(false);
        setHovered(null);
      }}
    >
      <Link
        href="/services"
        scroll={false}
        prefetch={false}
        className={`flex items-center gap-1.5 whitespace-nowrap rounded-full py-2.5 text-[12px] font-semibold uppercase transition-colors duration-300 lg:text-[13px] xl:text-sm ${
          isHovered || isActive
            ? "bg-pearl px-4 text-primary-black shadow-sm lg:px-5"
            : anyHover
              ? "px-3 text-primary-black/35"
              : "px-3 text-primary-black/55"
        }`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <span className="tracking-[0.14em] lg:tracking-[0.16em]">Services</span>
        <svg
          viewBox="0 0 12 12"
          className={`h-2.5 w-2.5 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-1/2 top-full z-50 w-[min(100vw-2rem,18.5rem)] -translate-x-1/2 pt-3"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.22, ease: NAV_EASE }}
          >
            <div className="overflow-hidden rounded-2xl border border-black/8 bg-white py-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
              <ul>
                {SERVICE_NAV.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        scroll={false}
                        prefetch={false}
                        onMouseEnter={() => prefetchRoute(item.href)}
                        onFocus={() => prefetchRoute(item.href)}
                        className={`block px-6 py-3.5 text-center font-body text-sm font-medium leading-snug text-primary-black transition-colors hover:bg-black/[0.05] hover:font-semibold ${
                          active ? "bg-black/[0.05] font-semibold" : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

function NavContactCta({
  pathname,
  prefetchRoute,
}: {
  pathname: string;
  prefetchRoute: (href: string) => void;
}) {
  const isActive = pathname === "/contact";

  return (
    <Link
      href="/contact"
      scroll={false}
      prefetch={false}
      onMouseEnter={() => prefetchRoute("/contact")}
      onFocus={() => prefetchRoute("/contact")}
      className={`nav-contact-cta hidden shrink-0 items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors lg:ml-2 lg:inline-flex xl:px-8 xl:py-3.5 xl:text-sm ${
        isActive
          ? "bg-primary-black text-soft-white shadow-md"
          : "bg-primary-black text-soft-white hover:bg-gloss-black"
      }`}
    >
      Contact
    </Link>
  );
}

function DesktopNav({
  pathname,
  prefetchRoute,
}: {
  pathname: string;
  prefetchRoute: (href: string) => void;
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  const anyHover = hovered !== null;

  return (
    <ul
      className="hidden min-w-0 flex-1 items-center justify-center lg:flex"
      onMouseLeave={() => setHovered(null)}
    >
      {MAIN_NAV.map((link) => {
        if (link.href === "/services") {
          return (
            <ServicesDropdown
              key={link.href}
              pathname={pathname}
              anyHover={anyHover}
              hovered={hovered}
              setHovered={setHovered}
              prefetchRoute={prefetchRoute}
            />
          );
        }

        if (link.href === "/contact") {
          return null;
        }

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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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
      SERVICE_NAV.forEach((link) => router.prefetch(link.href));
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

    updateNav();
    window.addEventListener("scroll", onWindowScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onWindowScroll);
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
    setMobileServicesOpen(false);
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
          className="flex w-full max-w-[88rem] items-center gap-2 rounded-full border px-2.5 py-2 sm:gap-4 sm:px-4 sm:py-2.5 md:py-3 lg:px-6"
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
              className="relative block h-11 w-[min(46vw,10.5rem)] shrink-0 overflow-hidden sm:h-12 sm:w-44 md:h-14 md:w-[13.25rem] lg:h-[3.75rem] lg:w-[14.25rem]"
              aria-label="Sneakcure home"
              onClick={closeMenu}
            >
              <SafeImage
                src={SITE_LOGO}
                alt="Sneakcure"
                width={560}
                height={160}
                priority
                unoptimized
                className="absolute left-0 top-1/2 h-[400%] w-auto max-w-none -translate-y-1/2 object-contain object-left"
              />
            </Link>
          </motion.div>

          <DesktopNav pathname={pathname} prefetchRoute={prefetchRoute} />

          <NavContactCta pathname={pathname} prefetchRoute={prefetchRoute} />

          <motion.button
            type="button"
            className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/60 text-primary-black lg:hidden"
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
              className="pointer-events-auto fixed inset-x-4 top-[calc(var(--site-header-offset)+0.5rem)] z-50 max-h-[calc(100dvh-var(--site-header-offset)-1rem)] overflow-y-auto overscroll-contain rounded-3xl border border-white/70 bg-white/95 shadow-2xl backdrop-blur-xl lg:hidden"
              initial={{ opacity: 0, y: -16, scale: 0.96, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, scale: 0.98, filter: "blur(6px)" }}
              transition={{ type: "spring", stiffness: 320, damping: 30, mass: 0.85 }}
            >
              <div className="border-b border-black/6 px-5 py-4">
                <Link
                  href="/"
                  scroll={false}
                  prefetch={false}
                  onClick={closeMenu}
                  className="relative block h-10 w-[10.5rem] overflow-hidden"
                  aria-label="Sneakcure home"
                >
                  <SafeImage
                    src={SITE_LOGO}
                    alt="Sneakcure"
                    width={560}
                    height={160}
                    unoptimized
                    className="absolute left-0 top-1/2 h-[400%] w-auto max-w-none -translate-y-1/2 object-contain object-left"
                  />
                </Link>
              </div>
              <ul className="flex flex-col p-2">
                {MAIN_NAV.map((link, i) => {
                  if (link.href === "/services") {
                    const servicesActive =
                      pathname === "/services" || pathname.startsWith("/services/");
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
                        <button
                          type="button"
                          className={`flex min-h-11 w-full items-center justify-between rounded-2xl px-5 py-3 text-base font-medium uppercase tracking-[0.12em] transition-colors ${
                            servicesActive ? "bg-black/5 text-primary-black" : "text-primary-black/80"
                          }`}
                          onClick={() => setMobileServicesOpen((open) => !open)}
                          aria-expanded={mobileServicesOpen}
                        >
                          Services
                          <svg
                            viewBox="0 0 12 12"
                            className={`h-3 w-3 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                            aria-hidden
                          >
                            <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: NAV_EASE }}
                              className="overflow-hidden"
                            >
                              <li>
                                <Link
                                  href="/services"
                                  scroll={false}
                                  prefetch={false}
                                  className="flex min-h-11 items-center rounded-xl px-5 py-2.5 text-sm font-medium text-primary-black hover:bg-black/5"
                                  onClick={closeMenu}
                                >
                                  All Services
                                </Link>
                              </li>
                              {SERVICE_NAV.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    scroll={false}
                                    prefetch={false}
                                    className={`flex min-h-11 items-center rounded-xl px-5 py-2.5 text-sm font-medium text-primary-black hover:bg-black/5 hover:font-semibold ${
                                      pathname === item.href ? "font-semibold" : ""
                                    }`}
                                    onClick={closeMenu}
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    );
                  }

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
                        className={`group flex min-h-11 items-center rounded-2xl px-5 py-3 text-base font-medium uppercase tracking-[0.12em] transition-colors duration-300 hover:bg-black/5 ${
                          active ? "bg-black/5 text-primary-black" : "text-primary-black/80"
                        }`}
                        onClick={closeMenu}
                      >
                        <motion.span
                          className="block"
                          whileHover={{ x: 6, letterSpacing: "0.16em" }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        >
                          {navLabel(link.label, link.href)}
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
