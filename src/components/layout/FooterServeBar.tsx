import { SERVICE_CITIES } from "@/lib/site-data";

function ServeSegment() {
  return (
    <div className="footer-serve-segment flex shrink-0 items-center gap-5 px-10 sm:gap-6 sm:px-14">
      <span className="editorial-title whitespace-nowrap text-sm uppercase tracking-[0.14em] text-primary-black sm:text-base sm:tracking-[0.2em]">
        We serve across India
      </span>
      <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-primary-black/25" aria-hidden />
      <span className="flex shrink-0 items-center gap-4 whitespace-nowrap font-body text-sm text-primary-black/85 sm:text-base">
        {SERVICE_CITIES.map((city, index) => (
          <span key={city} className="flex items-center gap-4">
            {index > 0 ? (
              <span className="text-primary-black/25" aria-hidden>
                |
              </span>
            ) : null}
            {city}
          </span>
        ))}
      </span>
    </div>
  );
}

function ServeHalf({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0" aria-hidden={hidden || undefined}>
      <ServeSegment />
      <ServeSegment />
      <ServeSegment />
    </div>
  );
}

export function FooterServeBar() {
  return (
    <div className="footer-serve-bar w-full bg-pearl" aria-label="Service cities across India">
      <div className="overflow-hidden border-y border-primary-black/12 py-3.5 sm:py-4">
        <div className="footer-serve-track flex w-max">
          <ServeHalf />
          <ServeHalf hidden />
        </div>
      </div>
    </div>
  );
}
