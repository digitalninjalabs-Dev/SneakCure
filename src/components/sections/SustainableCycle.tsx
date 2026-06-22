const STEPS = [
  { num: "01", title: "Repair", desc: "Fix damage before it spreads." },
  { num: "02", title: "Restore", desc: "Return pairs to archive-grade condition." },
  { num: "03", title: "Rewear", desc: "Keep grails in rotation, not in landfills." },
] as const;

const MARQUEE = "Wear · Restore · Repeat · ";

function SustainableCycleMobile() {
  return (
    <section
      className="sustainable-cycle-section overflow-x-hidden section-pad bg-pearl py-14 grain sm:py-16 md:hidden"
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
              <div className="rounded-2xl border border-primary-black/10 bg-white/80 px-5 py-5 backdrop-blur-sm">
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
            Your decision to restore with Sneakcure supports a{" "}
            <strong className="font-semibold text-primary-black">wear, restore, repeat</strong> culture that
            keeps grails out of landfills.
          </p>
          <p className="text-primary-black/55">
            By extending the life of every pair, you reduce waste and embrace a circular approach to luxury
            footwear.
          </p>
        </div>
      </div>
    </section>
  );
}

function SustainableCycleDesktop() {
  return (
    <section
      className="sustainable-cycle-section section-pad bg-pearl py-20 grain max-md:hidden sm:py-24 md:py-32 lg:py-36"
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
                  className="sustainable-cycle-step rounded-2xl border border-primary-black/10 bg-white/70 px-6 py-5 backdrop-blur-sm sm:px-7 sm:py-6"
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
            Your decision to restore with Sneakcure — from sole swaps and suede revival to full archival
            rebuilds — supports a{" "}
            <strong className="font-semibold text-primary-black">wear, restore, repeat</strong> culture that
            keeps grails out of landfills.
          </p>
          <p className="mt-5 text-base leading-relaxed text-primary-black/55 sm:mt-6 sm:text-lg">
            By extending the life of every pair, you reduce waste and embrace a circular approach to luxury
            footwear. Responsible collecting starts with care that lasts.
          </p>
          <p className="mt-5 text-base leading-relaxed text-primary-black/55 sm:mt-6 sm:text-lg">
            Join us in a cradle-to-cradle mindset — repair, restore, refresh, and rewear with Sneakcure.
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
