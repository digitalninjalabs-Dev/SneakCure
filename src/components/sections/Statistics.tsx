import { STATS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Statistics() {
  return (
    <section className="section-pad bg-soft-white py-20 sm:py-24 md:py-28 grain" aria-label="Premium statistics">
      <SectionHeading
        eyebrow="By The Numbers"
        title="Trusted by collectors worldwide"
        titleAccent="Proof in every pair"
        align="center"
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
