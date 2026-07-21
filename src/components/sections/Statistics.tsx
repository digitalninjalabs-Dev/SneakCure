import { STATS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Statistics() {
  return (
    <section className="section-pad bg-black py-20 text-soft-white sm:py-24 md:py-28" aria-label="Premium statistics">
      <SectionHeading
        eyebrow="By the numbers"
        title="Excellence in every restoration"
        titleAccent="Trusted across India"
        align="center"
        dark
        gsap
      />
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {STATS.map((stat) => (
          <AnimatedCounter
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}
