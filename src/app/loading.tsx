export default function Loading() {
  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[120] h-[2px] overflow-hidden bg-black/5" aria-hidden>
        <div className="route-progress-bar h-full bg-primary-black" />
      </div>
      <main className="min-h-[60vh] bg-pearl pt-[var(--site-header-offset)]" aria-hidden>
        <div className="section-pad mx-auto max-w-7xl animate-pulse py-16 md:py-24">
          <div className="h-3 w-28 rounded-full bg-black/5" />
          <div className="mt-6 h-12 max-w-xl rounded-full bg-black/5 md:h-16" />
          <div className="mt-4 h-4 max-w-md rounded-full bg-black/5" />
        </div>
      </main>
    </>
  );
}
