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
  "/products": "Products",
  "/contact": "Contact",
};

function footerNavLabel(label: string, href: string) {
  return FOOTER_NAV_SHORT[href] ?? label;
}

export function Footer() {
  const router = useRouter();

  const prefetchRoute = (href: string) => {
    router.prefetch(href);
  };

  return (
    <footer role="contentinfo">
      {/* Main footer — columns */}
      <div className="gloss-black-panel section-pad py-12 text-soft-white sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <p className="font-display text-2xl font-semibold tracking-wide">Sneakcure</p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                Premium sneaker restoration and archival care for iconic footwear. Crafted for
                collectors, stylists, and luxury houses.
              </p>
              <p className="mt-4 text-sm text-muted">{SITE.address}</p>
            </div>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">Navigate</p>
              <ul className="space-y-2">
                {MAIN_NAV.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      scroll={false}
                      prefetch={false}
                      onMouseEnter={() => prefetchRoute(link.href)}
                      onFocus={() => prefetchRoute(link.href)}
                      className="hover-slide-link block py-2.5 text-sm text-soft-white/80 transition-colors hover:text-soft-white"
                    >
                      <span className="sm:hidden">{footerNavLabel(link.label, link.href)}</span>
                      <span className="hidden sm:inline">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">Connect</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="hover-slide-link block py-2.5 text-sm text-soft-white/80 transition-colors hover:text-soft-white"
                  >
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="hover-slide-link block py-2.5 text-sm text-soft-white/80 transition-colors hover:text-soft-white"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.instagram}
                    className="hover-slide-link block py-2.5 text-sm text-soft-white/80 transition-colors hover:text-soft-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    className="hover-slide-link block py-2.5 text-sm text-soft-white/80 transition-colors hover:text-soft-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Cities ticker — between main footer & copyright (reference layout) */}
      <FooterServeBar />

      {/* Copyright strip */}
      <div className="footer-copyright-bar gloss-black-panel border-t border-white/10">
        <div className="section-pad flex flex-col gap-3 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:py-6">
          <p>&copy; {new Date().getFullYear()} Sneakcure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
