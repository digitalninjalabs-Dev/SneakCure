"use client";

import Link from "next/link";

function MarqueeRow({
  word,
  reverse = false,
  muted = false,
}: {
  word: string;
  reverse?: boolean;
  muted?: boolean;
}) {
  const item = (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={`${word}-${i}`} className="pr-[0.28em]">
          {word}
        </span>
      ))}
    </>
  );

  return (
    <div className="overflow-hidden">
      <div
        className={`training-words-track editorial-title flex w-max whitespace-nowrap text-[clamp(3rem,11vw,8.5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.045em] ${
          muted ? "text-primary-black/18" : "text-primary-black"
        } ${reverse ? "training-words-track--reverse" : ""}`}
      >
        <span className="inline-flex pr-[0.28em]">{item}</span>
        <span className="inline-flex pr-[0.28em]" aria-hidden>
          {item}
        </span>
      </div>
    </div>
  );
}

function FranchiseTalkBadge() {
  const ring = "APPLY TODAY • LET'S TALK • APPLY TODAY • LET'S TALK • ";

  return (
    <Link
      href="#application"
      aria-label="Apply for franchise — let's talk"
      className="group absolute left-1/2 top-1/2 z-10 flex h-[7.5rem] w-[7.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-black text-white transition-transform duration-500 hover:scale-105 sm:h-36 sm:w-36 md:h-40 md:w-40"
    >
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full franchise-talk-ring" aria-hidden>
        <defs>
          <path
            id="franchise-talk-path"
            d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
          />
        </defs>
        <text className="fill-white text-[11.5px] font-semibold uppercase tracking-[0.22em]">
          <textPath href="#franchise-talk-path" startOffset="0%">
            {ring}
          </textPath>
        </text>
      </svg>
      <span className="relative flex h-10 w-10 items-center justify-center transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-11 sm:w-11">
        <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" aria-hidden>
          <path
            d="M7 17L17 7M17 7H9M17 7V15"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}

export function FranchiseWordsMarquee() {
  return (
    <section
      className="relative overflow-hidden bg-white py-8 text-primary-black sm:py-10 md:py-12"
      aria-label="Franchise partnership"
    >
      <div className="flex flex-col gap-1 sm:gap-2">
        <MarqueeRow word="FRANCHISE" />
        <MarqueeRow word="PARTNER" reverse muted />
      </div>
      <FranchiseTalkBadge />
    </section>
  );
}
