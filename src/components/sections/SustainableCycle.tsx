const STEPS = [
  { num: "01", title: "Restore", desc: "Give every pair a fresh beginning." },
  { num: "02", title: "Preserve", desc: "Protect quality, comfort, and craftsmanship." },
  { num: "03", title: "Rewear", desc: "Enjoy your favorites for years to come." },
] as const;

const MARQUEE = "Restore · Preserve · Rewear · Repeat · ";

function SustainableCycleMobile() {
  return (
    <section
      className="sustainable-cycle-section overflow-x-hidden section-pad bg-white py-14 sm:py-16 md:hidden"
      aria-label="Sustainable sneaker care"
    >
      <div className="mx-auto w-full max-w-lg">
        <h2 className="editorial-title text-[clamp(1.75rem,8vw,2.5rem)] uppercase leading-[1.05] tracking-tight text-primary-black">
          Sustainable
          <span className="mt-2 block text-primary-black/75">With Sneakcure</span>
        </h2>

        <ol className="mt-8 space-y-3">
          {STEPS.map((step) => (
            <li key={step.num}>
              <div className="rounded-2xl border border-primary-black/10 bg-white px-5 py-5">
                <span className="text-[11px] font-medium tracking-[0.28em] text-muted">{step.num}</span>
                <p className="editorial-title mt-2 text-2xl uppercase leading-none text-primary-black">
                  {step.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-primary-black/55">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 overflow-hidden border-y border-primary-black/10 py-3">
          <div className="sustainable-cycle-marquee-track editorial-title whitespace-nowrap text-lg uppercase tracking-[0.18em] text-primary-black/10">
            {MARQUEE.repeat(6)}
          </div>
        </div>

        <div className="mt-8 space-y-4 text-sm leading-relaxed text-primary-black/80">
          <p>
            Every pair restored at Sneakcure is one less pair sent to landfill. From everyday
            sneakers to luxury leather goods, we help extend their life through expert restoration
            and thoughtful care.
          </p>
          <p className="text-primary-black/55">
            Choosing restoration over replacement reduces waste, preserves craftsmanship, and
            supports a more responsible way to enjoy premium footwear and leather accessories.
          </p>
          <p className="text-primary-black/55">
            Together, we can restore, preserve, and rewear — creating a future where quality lasts
            longer and every pair has another story to tell.
          </p>
        </div>
      </div>
    </section>
  );
}

function SustainableCycleDesktop() {
  return (
    <section
      className="sustainable-cycle-section section-pad bg-white py-20 max-md:hidden sm:py-24 md:py-32 lg:py-36"
      aria-label="Sustainable sneaker care"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10 xl:gap-14">
        <div className="flex justify-center lg:justify-start">
          <div className="sustainable-cycle-title">
            <span className="editorial-title text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-none tracking-tight text-primary-black">
              Sustainable
            </span>
            <span className="sustainable-cycle-title-rule" aria-hidden />
            <span className="editorial-title text-[clamp(2.5rem,6vw,4.5rem)] uppercase leading-none tracking-tight text-primary-black/80">
              With Sneakcure
            </span>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <ol className="sustainable-cycle-steps space-y-0">
            {STEPS.map((step, index) => (
              <li key={step.num}>
                <div
                  className="sustainable-cycle-step rounded-2xl border border-primary-black/10 bg-white px-6 py-5 sm:px-7 sm:py-6"
                  data-scroll-reveal
                >
                  <span className="text-[11px] font-medium tracking-[0.28em] text-muted">{step.num}</span>
                  <p className="editorial-title mt-2 text-3xl uppercase leading-none text-primary-black sm:text-4xl">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-primary-black/55">{step.desc}</p>
                </div>
                {index < STEPS.length - 1 ? (
                  <div className="sustainable-cycle-connector" aria-hidden />
                ) : null}
              </li>
            ))}
          </ol>

          <div className="sustainable-cycle-marquee mt-8 overflow-hidden border-y border-primary-black/10 py-4">
            <div className="sustainable-cycle-marquee-track editorial-title whitespace-nowrap text-[clamp(1.25rem,3vw,2rem)] uppercase tracking-[0.22em] text-primary-black/10">
              {MARQUEE.repeat(8)}
            </div>
          </div>
        </div>

        <div className="max-w-xl text-primary-black/90 lg:max-w-none">
          <p className="text-base leading-relaxed sm:text-lg">
            Every pair restored at Sneakcure is one less pair sent to landfill. From everyday
            sneakers to luxury leather goods, we help extend their life through expert restoration
            and thoughtful care.
          </p>
          <p className="mt-5 text-base leading-relaxed text-primary-black/55 sm:mt-6 sm:text-lg">
            Choosing restoration over replacement reduces waste, preserves craftsmanship, and
            supports a more responsible way to enjoy premium footwear and leather accessories.
          </p>
          <p className="mt-5 text-base leading-relaxed text-primary-black/55 sm:mt-6 sm:text-lg">
            Together, we can restore, preserve, and rewear — creating a future where quality lasts
            longer and every pair has another story to tell.
          </p>
        </div>
      </div>
    </section>
  );
}

export function SustainableCycle() {
  return (
    <>
      <SustainableCycleMobile />
      <SustainableCycleDesktop />
    </>
  );
}
