"use client";

import Link from "next/link";

export type DayStep = {
  title: string;
  body: string;
  image: string;
  categories: readonly string[];
};

type TrainingDayInsideProps = {
  steps: readonly DayStep[];
};

/**
 * Animation: left column stays sticky; right cards scroll and stack
 * (each card is sticky with a rising top offset). No GSAP pin.
 */
export function TrainingDayInside({ steps }: TrainingDayInsideProps) {
  return (
    <section
      className="relative bg-white py-16 text-primary-black sm:py-20 md:py-24"
      aria-label="A Day Inside"
    >
      <div className="section-pad mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-20">
        {/* Left — sticky intro */}
        <div className="lg:sticky lg:top-[calc(var(--site-header-offset,5rem)+1.5rem)] lg:self-start">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-black/45">
            A day inside
          </p>
          <h2 className="editorial-title mt-4 text-[clamp(2.25rem,5vw,4rem)] font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-primary-black">
            Our process
          </h2>
          <p className="mt-5 max-w-md text-sm font-medium leading-relaxed text-primary-black/60 sm:text-[15px]">
            Our three-step training day keeps you involved at every stage — theory, guided practice, and strategy —
            so you leave with craft skill and entrepreneurial confidence.
          </p>
          <Link
            href="#apply"
            className="mt-8 inline-flex min-h-11 items-center rounded-full bg-primary-black px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-transform hover:scale-[1.03]"
          >
            Apply Today
          </Link>
        </div>

        {/* Right — stacking image cards */}
        <div className="flex flex-col gap-5 sm:gap-6">
          {steps.map((step, i) => (
            <article
              key={step.title}
              className="sticky overflow-hidden rounded-[1.35rem] border border-primary-black/8 bg-[#f3f3f3] shadow-[0_12px_40px_rgba(0,0,0,0.06)] sm:rounded-[1.5rem]"
              style={{
                top: `calc(var(--site-header-offset, 5rem) + ${1.25 + i * 0.85}rem)`,
                zIndex: i + 1,
              }}
            >
              <div className="grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[18rem] lg:min-h-[20rem]">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-7 md:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-black text-[11px] font-semibold tracking-[0.06em] text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="editorial-title text-[clamp(1.35rem,2.5vw,1.85rem)] font-semibold leading-tight tracking-[-0.025em] text-primary-black">
                      {step.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm font-medium leading-relaxed text-primary-black/60 sm:text-[15px]">
                    {step.body}
                  </p>

                  <div className="mt-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-black/40">
                      Categories
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {step.categories.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-primary-black/70 ring-1 ring-primary-black/8"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
