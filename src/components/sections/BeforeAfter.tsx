import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BeforeAfter() {
  return (
    <section className="section-pad py-24 md:py-36 bg-soft-white grain" aria-label="Before and after showcase">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Transformation"
          title="Witness the revival."
          subtitle="Drag to reveal the SneakCure difference — from worn to runway-ready."
        />
        <BeforeAfterSlider />
      </div>
    </section>
  );
}
