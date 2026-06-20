import { SplitTitle } from "@/components/ui/SplitTitle";

type PricingTier = { tier: string; price: string; note: string };

export function PricingCards({ tiers }: { tiers: readonly PricingTier[] }) {
  return (
    <section className="section-pad py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SplitTitle title="Pricing" accent="Transparent tiers" as="h2" size="md" align="center" className="mb-10" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.tier} className="glass-card rounded-2xl p-8 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">{t.tier}</p>
              <p className="editorial-title mt-3 text-4xl">{t.price}</p>
              <p className="mt-2 text-sm text-muted">{t.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted">Final pricing confirmed after inspection.</p>
      </div>
    </section>
  );
}
