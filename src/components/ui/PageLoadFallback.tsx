export function PageLoadFallback({ flush = false }: { flush?: boolean }) {
  return (
    <div
      className={`animate-pulse bg-pearl ${flush ? "min-h-[70svh]" : "min-h-[40vh] pt-[var(--site-header-offset)]"}`}
      aria-hidden
    >
      <div className="section-pad mx-auto max-w-7xl py-16 md:py-24">
        <div className="h-3 w-28 rounded-full bg-black/5" />
        <div className="mt-6 h-12 max-w-xl rounded-full bg-black/5 md:h-16" />
        <div className="mt-4 h-4 max-w-md rounded-full bg-black/5" />
      </div>
    </div>
  );
}
