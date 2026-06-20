import { SafeImage } from "@/components/ui/SafeImage";
import { WHY_CHOOSE, productImage } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChoose() {
  return (
    <section className="section-pad py-24 md:py-36" aria-label="Why choose SneakCure">
      <SectionHeading
        eyebrow="The SneakCure Standard"
        title="Why collectors choose us"
        titleAccent="No shortcuts, ever"
        align="center"
        gsap
      />
      <div className="mx-auto max-w-6xl space-y-12 sm:space-y-16 md:space-y-24">
        {WHY_CHOOSE.map((item, i) => (
          <div
            key={item.title}
            className={`grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
            data-scroll-reveal
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl gloss-black-panel">
              <SafeImage
                src={productImage(i + 2)}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="editorial-title text-3xl sm:text-4xl md:text-5xl" data-blade>
                {item.title}
              </h3>
              <p className="mt-4 text-base text-muted leading-relaxed sm:mt-6 sm:text-lg">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
