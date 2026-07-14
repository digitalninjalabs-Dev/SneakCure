const MESSAGE =
  "We are closed every Wednesday · Open Mon–Tue & Thu–Sun · 10:00 AM – 8:00 PM IST · ";

function ClosedSegment() {
  return (
    <div className="closed-wed-segment flex shrink-0 items-center gap-5 px-8 sm:gap-6 sm:px-12">
      <span className="closed-wed-dot h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" aria-hidden />
      <span className="editorial-title whitespace-nowrap text-sm uppercase tracking-[0.16em] text-soft-white sm:text-base sm:tracking-[0.2em]">
        Closed on Wednesdays
      </span>
      <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-white/25" aria-hidden />
      <span className="whitespace-nowrap font-body text-sm text-white/75 sm:text-base">
        Open Mon–Tue &amp; Thu–Sun · 10:00 AM – 8:00 PM IST
      </span>
    </div>
  );
}

function ClosedHalf({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0" aria-hidden={hidden || undefined}>
      <ClosedSegment />
      <ClosedSegment />
      <ClosedSegment />
    </div>
  );
}

export function ClosedWednesdayBar() {
  return (
    <div
      className="closed-wed-bar w-full bg-primary-black"
      aria-label="Weekly holiday — closed every Wednesday"
    >
      <div className="overflow-hidden border-y border-white/10 py-3 sm:py-3.5">
        <div className="closed-wed-track flex w-max">
          <ClosedHalf />
          <ClosedHalf hidden />
        </div>
        <p className="sr-only">{MESSAGE}</p>
      </div>
    </div>
  );
}
