import { SafeImage } from "@/components/ui/SafeImage";
import { productImage } from "@/lib/constants";

const TRUST_AVATARS = [
  { src: productImage(0), alt: "Sneakcure client restoration" },
  { src: productImage(1), alt: "Restored premium sneakers" },
  { src: productImage(2), alt: "Leather care result" },
  { src: productImage(3), alt: "Sneaker restoration detail" },
  { src: productImage(4), alt: "Atelier craftsmanship" },
] as const;

function InlineIcon({ name, invert }: { name: string; invert?: boolean }) {
  return (
    <span
      className={`mx-1.5 inline-flex h-[0.82em] w-[0.82em] shrink-0 translate-y-[-0.05em] items-center justify-center rounded-full align-middle ${
        invert ? "bg-white text-primary-black ring-1 ring-black/15" : "bg-primary-black text-white"
      }`}
      aria-hidden
    >
      <span className="material-symbols-outlined text-[0.52em] leading-none">{name}</span>
    </span>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="section-pad bg-white pt-14 pb-20 sm:pt-16 sm:pb-24 md:pt-20 md:pb-32"
      aria-label="About Sneakcure"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p
          className="text-[11px] font-medium uppercase tracking-[0.28em] text-primary-black/45"
          data-fade-up
        >
          · Our craft
        </p>

        <h2
          className="editorial-title mx-auto mt-6 text-[clamp(1.85rem,5.2vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-primary-black text-balance"
          data-blade
        >
          Thousands of customers across India —
          <InlineIcon name="auto_awesome" />
          <span className="text-primary-black">excellence</span>
          <span className="text-primary-black/35"> and </span>
          <InlineIcon name="verified" invert />
          <span className="text-primary-black/35">lasting care</span>
          <span>.</span>
        </h2>

        <div className="mt-10 flex flex-col items-center gap-3" data-fade-up>
          <div className="flex items-center">
            <div className="flex -space-x-3">
              {TRUST_AVATARS.map((avatar) => (
                <div
                  key={avatar.src}
                  className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-white sm:h-12 sm:w-12"
                >
                  <SafeImage
                    src={avatar.src}
                    alt={avatar.alt}
                    fill
                    className="object-cover"
                    sizes="48px"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div
              className="relative z-10 ml-1 flex h-11 w-11 items-center justify-center rounded-full bg-primary-black text-white sm:h-12 sm:w-12"
              aria-hidden
            >
              <span className="text-xl font-semibold leading-none">+</span>
            </div>
          </div>
          <p className="text-sm font-medium text-primary-black sm:text-base">
            Trusted by 12k+ restorations
          </p>
        </div>

        <p
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-primary-black/55 text-balance sm:text-lg"
          data-fade-up
        >
          Built on craftsmanship and consistent results — every pair, bag, and leather piece
          restored with precision.
        </p>
      </div>
    </section>
  );
}
