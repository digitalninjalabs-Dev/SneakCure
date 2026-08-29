"use client";

const WORDS = [
  "Craft",
  "Repair",
  "Training",
  "Consultancy",
  "Mentorship",
  "Branding",
  "Pricing",
  "Restoration",
] as const;

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const item = (
    <>
      {WORDS.map((word) => (
        <span key={word} className="inline-flex items-center gap-[0.35em]">
          <span>{word}</span>
          <span
            className="mx-[0.15em] inline-block h-[0.22em] w-[0.22em] shrink-0 rounded-full bg-primary-black"
            aria-hidden
          />
        </span>
      ))}
    </>
  );

  return (
    <div className="overflow-hidden">
      <div
        className={`training-words-track editorial-title flex w-max whitespace-nowrap text-[clamp(2.75rem,9vw,7.5rem)] font-semibold uppercase leading-none tracking-[-0.04em] text-primary-black ${
          reverse ? "training-words-track--reverse" : ""
        }`}
      >
        <span className="inline-flex items-center gap-[0.35em] pr-[0.35em]">{item}</span>
        <span className="inline-flex items-center gap-[0.35em] pr-[0.35em]" aria-hidden>
          {item}
        </span>
      </div>
    </div>
  );
}

export function TrainingWordsMarquee() {
  return (
    <section
      className="overflow-hidden border-y border-primary-black/8 bg-white py-8 text-primary-black sm:py-10 md:py-12"
      aria-label="Training disciplines"
    >
      <div className="flex flex-col gap-2 sm:gap-3">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
