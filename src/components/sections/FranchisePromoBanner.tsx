import Link from "next/link";

const TICKER =
  "Own Your City · Sneakcure Franchise · Limited Territories · Full Training & Support · ";

function TickerHalf({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0" aria-hidden={hidden || undefined}>
      <span className="franchise-promo-strip-text">{TICKER.repeat(3)}</span>
      <span className="franchise-promo-strip-text">{TICKER.repeat(3)}</span>
    </div>
  );
}

export function FranchisePromoBanner() {
  return (
    <section className="franchise-promo-strip overflow-hidden bg-soft-white" aria-label="Franchise opportunity">
      <div className="section-pad flex items-center gap-4 border-y border-primary-black/10 py-3 sm:gap-6 sm:py-3.5">
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="franchise-promo-strip-track flex h-[1.125rem] w-max items-center sm:h-5">
            <TickerHalf />
            <TickerHalf hidden />
          </div>
        </div>
        <Link
          href="/franchise"
          className="shrink-0 rounded-full bg-primary-black px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-soft-white transition-colors hover:bg-gloss-black min-h-11 inline-flex items-center sm:px-5 sm:text-[11px]"
        >
          Explore Franchise
        </Link>
      </div>
    </section>
  );
}
