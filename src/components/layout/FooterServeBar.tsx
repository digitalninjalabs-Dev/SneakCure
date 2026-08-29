import { SERVICE_CITIES } from "@/lib/site-data";

function ServeSegment() {
  return (
    <div className="footer-serve-segment flex shrink-0 items-center gap-4 px-8 sm:gap-5 sm:px-12">
      <span className="editorial-title whitespace-nowrap text-sm font-semibold uppercase tracking-[0.16em] text-white sm:text-[15px]">
        We serve across India
      </span>
      <span className="h-1 w-1 shrink-0 rotate-45 bg-white/40" aria-hidden />
      <span className="flex shrink-0 items-center gap-3 whitespace-nowrap font-body text-sm font-medium text-white/80 sm:text-[15px]">
        {SERVICE_CITIES.map((city, index) => (
          <span key={city} className="flex items-center gap-3">
            {index > 0 ? (
              <span className="text-white/35" aria-hidden>
                |
              </span>
            ) : null}
            <span>{city}</span>
          </span>
        ))}
      </span>
    </div>
  );
}

function ServeHalf({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      <ServeSegment />
      <ServeSegment />
      <ServeSegment />
    </div>
  );
}

export function FooterServeBar() {
  return (
    <div className="footer-serve-bar w-full bg-black" aria-label="Service cities across India">
      <div className="overflow-hidden">
        <div className="footer-serve-track flex w-max items-center py-3.5 sm:py-4">
          <ServeHalf />
          <ServeHalf hidden />
        </div>
      </div>
    </div>
  );
}
