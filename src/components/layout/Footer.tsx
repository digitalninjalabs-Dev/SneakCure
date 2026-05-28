import { NAV_LINKS } from "@/lib/constants";

const SOCIAL = ["Instagram", "TikTok", "YouTube", "LinkedIn"] as const;

export function Footer() {
  return (
    <footer className="gloss-black-panel section-pad py-12 text-soft-white sm:py-16" role="contentinfo">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold tracking-wide">SneakCure</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Premium sneaker restoration and archival care for iconic footwear. Crafted for
              collectors, stylists, and luxury houses.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">Navigate</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-soft-white/80 transition-colors hover:text-soft-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted">Connect</p>
            <ul className="space-y-2">
              {SOCIAL.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm text-soft-white/80 transition-colors hover:text-soft-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-muted sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-8">
          <p>&copy; {new Date().getFullYear()} SneakCure. All rights reserved.</p>
          <p>Los Angeles · New York · Milan</p>
        </div>
      </div>
    </footer>
  );
}
