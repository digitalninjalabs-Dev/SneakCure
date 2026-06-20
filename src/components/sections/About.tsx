import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { productImage } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="section-pad py-20 sm:py-24 md:py-36 bg-soft-white grain" aria-label="About SneakCure">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The Atelier"
              title="Where sneaker culture meets haute craftsmanship"
              titleAccent="Built for collectors"
              gsap
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-xl leading-snug text-primary-black/90 text-balance sm:text-2xl md:text-3xl" data-blade>
              SneakCure was founded for collectors who refuse to retire their grails. We blend
              archival restoration science with the precision of luxury fashion houses.
            </p>
            <p className="mt-6 text-base text-muted leading-relaxed max-w-2xl sm:mt-8 sm:text-lg" data-fade-up>
              From oxidized soles to distressed suede, every pair receives a bespoke protocol —
              documented, insured, and returned in museum-grade presentation.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl" data-scroll-reveal>
            <SafeImage
              src={productImage(8)}
              alt="SneakCure restoration atelier"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl mt-0 md:mt-24"
            data-scroll-reveal
            data-parallax
            data-speed="0.25"
          >
            <SafeImage
              src={productImage(9)}
              alt="Technician restoring premium sneaker"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
