"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { MAIN_NAV, SERVICE_CITIES, SITE } from "@/lib/site-data";

const FOOTER_NAV = MAIN_NAV.map((link) => ({
  ...link,
  short:
    (
      {
        "/": "Home",
        "/about": "About",
        "/services": "Services",
        "/training": "Training",
        "/franchise": "Franchise",
        "/founder": "Founder",
        "/contact": "Contact",
      } as Record<string, string>
    )[link.href] ?? link.label,
}));

const NAV_LEFT = FOOTER_NAV.filter((_, i) => i % 2 === 0);
const NAV_RIGHT = FOOTER_NAV.filter((_, i) => i % 2 === 1);

function BrandMarquee() {
  const word = (
    <span className="footer-brand-marquee-word">
      Sneakcure<span className="footer-brand-marquee-tm">™</span>
    </span>
  );

  return (
    <div className="footer-brand-marquee" aria-hidden>
      <div className="footer-brand-marquee-track">
        <div className="footer-brand-marquee-group">
          {word}
          {word}
          {word}
          {word}
        </div>
        <div className="footer-brand-marquee-group" aria-hidden>
          {word}
          {word}
          {word}
          {word}
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  const router = useRouter();
  const year = new Date().getFullYear();

  const prefetchRoute = (href: string) => {
    router.prefetch(href);
  };

  return (
    <footer role="contentinfo" className="bg-black text-soft-white">
      <div className="section-pad mx-auto max-w-7xl py-14 sm:py-16 md:py-20">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.85fr] lg:gap-16">
          <div>
            <Link
              href="/"
              scroll={false}
              prefetch={false}
              onMouseEnter={() => prefetchRoute("/")}
              onFocus={() => prefetchRoute("/")}
              className="inline-flex items-center"
              aria-label="Sneakcure home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/sneakcureblack.png"
                alt="Sneakcure"
                width={190}
                height={48}
                className="h-9 w-auto object-contain brightness-0 invert sm:h-10"
                loading="lazy"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Premium sneaker restoration and archival care. Doorstep pickup across India.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-white/40">
              {SERVICE_CITIES.join(" · ")}
            </p>
            <p className="mt-2 text-xs text-white/40">
              {SITE.hours} · Closed {SITE.weeklyOff}s
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-0 content-start">
            <ul className="space-y-0">
              {NAV_LEFT.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    scroll={false}
                    prefetch={false}
                    onMouseEnter={() => prefetchRoute(link.href)}
                    onFocus={() => prefetchRoute(link.href)}
                    className="block py-2 text-sm leading-snug text-white/70 transition-colors hover:text-white"
                  >
                    <span className="sm:hidden">{link.short}</span>
                    <span className="hidden sm:inline">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-0">
              {NAV_RIGHT.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    scroll={false}
                    prefetch={false}
                    onMouseEnter={() => prefetchRoute(link.href)}
                    onFocus={() => prefetchRoute(link.href)}
                    className="block py-2 text-sm leading-snug text-white/70 transition-colors hover:text-white"
                  >
                    <span className="sm:hidden">{link.short}</span>
                    <span className="hidden sm:inline">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2 lg:col-span-1 lg:justify-self-end lg:text-right">
            <div className="flex flex-col gap-2 lg:items-end">
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="!block w-fit text-sm text-white/80 transition-colors hover:text-white"
              >
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="!block w-fit text-sm text-white/80 transition-colors hover:text-white"
              >
                {SITE.email}
              </a>
            </div>
            <div className="mt-5 flex items-center gap-5 lg:justify-end">
              <a
                href={SITE.instagram}
                className="footer-social-link text-white/65 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sneakcure on Instagram"
              >
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.5.6.2 1 .5 1.5 1 .4.4.7.9 1 1.5.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.5 2.4-.2.6-.5 1-1 1.5-.4.4-.9.7-1.5 1-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.5-.6-.2-1-.5-1.5-1-.4-.4-.7-.9-1-1.5-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.5-2.4.2-.6.5-1 1-1.5.4-.4.9-.7 1.5-1 .5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.2 0-3.5 0-4.8.1-1 .1-1.6.2-2 .4-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.2.4-.4 1-.4 2-.1 1.2-.1 1.6-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.6.4 2 .2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.2 1 .4 2 .4 1.2.1 1.6.1 4.8.1s3.5 0 4.8-.1c1-.1 1.6-.2 2-.4.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.2-.4.4-1 .4-2 .1-1.2.1-1.6.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.6-.4-2-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.2-1-.4-2-.4-1.2-.1-1.6-.1-4.8-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm6.3-8.4a1.2 1.2 0 1 1-2.3 0 1.2 1.2 0 0 1 2.3 0Z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                className="footer-social-link text-white/65 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
                  <path d="M19.05 4.91A9.79 9.79 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.45 0 9.9-4.45 9.9-9.91a9.84 9.84 0 0 0-2.9-7.01Zm-7.01 15.24h-.01a8.21 8.21 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24a8.2 8.2 0 0 1 5.83 2.41 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.12-.55.12s-.64.8-.78.96c-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.09-.17.04-.31-.02-.43-.06-.12-.55-1.34-.76-1.84-.2-.48-.4-.42-.55-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74 1.75.76 2.25.83 3.05.7.49-.08 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
                </svg>
              </a>
              <a
                href={SITE.facebook}
                className="footer-social-link text-white/65 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sneakcure on Facebook"
              >
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.4V9.85c0-2.37 1.4-3.68 3.55-3.68 1.03 0 2.11.18 2.11.18v2.33h-1.19c-1.17 0-1.54.73-1.54 1.48v1.78h2.62l-.42 2.9h-2.2V22c4.78-.75 8.44-4.91 8.44-9.93Z" />
                </svg>
              </a>
              <a
                href={SITE.youtube}
                className="footer-social-link text-white/65 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sneakcure on YouTube"
              >
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.8 15.5v-7l6.2 3.5-6.2 3.5Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <BrandMarquee />

      <div className="section-pad mx-auto flex max-w-7xl flex-col gap-5 py-6 pb-[max(1.5rem,calc(env(safe-area-inset-bottom)+0.75rem))] sm:py-8 md:flex-row md:items-end md:justify-between md:gap-12">
        <p className="max-w-lg text-[11px] leading-relaxed text-white/35 sm:text-xs">
          Sneakcure™ restores sneakers, leather goods, and luxury pieces with atelier care. Results
          vary by condition. Information on this site is subject to change.
        </p>
        <div className="shrink-0 md:text-right">
          <p className="text-[11px] text-white/45 sm:text-xs">
            &copy; {year} Sneakcure. Design by{" "}
            <a
              href="https://digitalninjalabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition-colors hover:text-white"
            >
              digitalninjalabs
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
