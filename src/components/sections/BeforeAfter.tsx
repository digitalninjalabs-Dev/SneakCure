import { BeforeAfterCard } from "@/components/ui/BeforeAfterSlider";
import { BEFORE_AFTER_SHOWCASE } from "@/lib/constants";

export function BeforeAfter() {
  return (
    <section className="section-pad bg-pearl py-20 sm:py-24 md:py-32 grain" aria-label="Before and after showcase">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14 md:mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary-black/45">
            Transformations
          </p>
          <h2 className="editorial-title mt-3 text-4xl font-semibold text-primary-black sm:text-5xl md:text-[3.25rem]">
            Before &amp; After
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Every piece tells a story. These are a few of ours.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {BEFORE_AFTER_SHOWCASE.map((item) => (
            <BeforeAfterCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
