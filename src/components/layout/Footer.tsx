"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FooterServeBar } from "@/components/layout/FooterServeBar";
import { MAIN_NAV, SITE } from "@/lib/site-data";

const FOOTER_NAV_SHORT: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/services": "Services",
  "/training": "Training",
  "/franchise": "Franchise",
  "/founder": "Founder",
  "/contact": "Contact",
};

function footerNavLabel(label: string, href: string) {
  return FOOTER_NAV_SHORT[href] ?? label;
}

const NAV_COL_LEFT = MAIN_NAV.filter((_, i) => i % 2 === 0);
const NAV_COL_RIGHT = MAIN_NAV.filter((_, i) => i % 2 === 1);

export function Footer() {
  const router = useRouter();

  const prefetchRoute = (href: string) => {
    router.prefetch(href);
  };

  return (
    <footer role="contentinfo">
      <div className="gloss-black-panel section-pad py-12 text-soft-white sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-10 sm:gap-12 md:grid-cols-3 lg:grid-cols-[1.35fr_1fr_0.9fr] lg:gap-16">
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
                  className="h-9 w-auto object-contain opacity-95 brightness-0 invert sm:h-10"
                  loading="lazy"
                />
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
                Premium sneaker restoration and archival care for iconic footwear. Crafted for
                collectors, stylists, and luxury houses.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted">{SITE.address}</p>
              <p className="mt-3 text-sm text-muted">{SITE.hours}</p>
              <p className="mt-1 text-sm font-medium text-soft-white/90">
                Closed every {SITE.weeklyOff}
              </p>
            </div>

            <div>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Navigate
              </p>
              <div className="grid grid-cols-2 gap-x-8">
                <ul className="space-y-0">
                  {NAV_COL_LEFT.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        scroll={false}
                        prefetch={false}
                        onMouseEnter={() => prefetchRoute(link.href)}
                        onFocus={() => prefetchRoute(link.href)}
                        className="block py-2 text-sm leading-snug text-soft-white/80 transition-colors hover:text-soft-white"
                      >
                        <span className="sm:hidden">{footerNavLabel(link.label, link.href)}</span>
                        <span className="hidden sm:inline">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-0">
                  {NAV_COL_RIGHT.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        scroll={false}
                        prefetch={false}
                        onMouseEnter={() => prefetchRoute(link.href)}
                        onFocus={() => prefetchRoute(link.href)}
                        className="block py-2 text-sm leading-snug text-soft-white/80 transition-colors hover:text-soft-white"
                      >
                        <span className="sm:hidden">{footerNavLabel(link.label, link.href)}</span>
                        <span className="hidden sm:inline">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Connect
              </p>
              <ul className="space-y-0">
                <li>
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="block py-2 text-sm leading-snug text-soft-white/80 transition-colors hover:text-soft-white"
                  >
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="block py-2 text-sm leading-snug text-soft-white/80 transition-colors hover:text-soft-white"
                  >
                    {SITE.email}
                  </a>
                </li>
              </ul>
              <div className="mt-4 flex items-center gap-4">
                <a
                  href={SITE.instagram}
                  className="inline-flex shrink-0 items-center justify-center text-soft-white/75 transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sneakcure on Instagram"
                >
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                    <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
                    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  className="inline-flex shrink-0 items-center justify-center text-soft-white/75 transition-colors hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                >
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
                    <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.12 6.45 2.12 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01Zm-7.01 15.24h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23a8.2 8.2 0 0 1 5.82 2.41 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.12-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.09-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.84-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74 1.75.76 2.25.83 3.05.7.49-.08 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.29Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterServeBar />

      <div className="footer-copyright-bar gloss-black-panel border-t border-white/10">
        <div className="section-pad flex min-h-14 items-center py-4 text-xs text-muted sm:min-h-16 sm:py-5">
          <p>&copy; {new Date().getFullYear()} Sneakcure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
