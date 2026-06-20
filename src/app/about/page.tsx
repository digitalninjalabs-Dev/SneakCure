import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/pages/PageHero";
import { PageCTA } from "@/components/pages/PageCTA";
import { GalleryGrid } from "@/components/pages/GalleryGrid";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_GALLERY, BRAND_VALUES, TEAM } from "@/lib/site-data";
import { productImage } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover SneakCure — our story, mission, values, and the team behind premium restoration.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Us"
        title="Crafted for iconic pieces"
        titleAccent="Restored with precision"
        subtitle="SneakCure was founded for collectors who refuse to retire their grails. We blend archival restoration science with luxury fashion-house precision."
        image={productImage(8)}
      />

      <section className="section-pad py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our Story" title="Company story" titleAccent="Where it began" />
            <p className="text-lg leading-relaxed text-muted">
              From a single atelier bench in Lucknow to a multi-city restoration house, SneakCure has grown by saying no to shortcuts. Every sneaker, bag, and leather piece receives a bespoke protocol — documented, insured, and returned in museum-grade presentation.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Purpose" title="Mission & Vision" titleAccent="Why we exist" />
            <p className="mb-4 text-lg leading-relaxed text-muted">
              <strong className="text-primary-black">Mission:</strong> Restore the culture — one iconic piece at a time, with transparency and craft.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              <strong className="text-primary-black">Vision:</strong> To become India&apos;s most trusted luxury restoration brand, training the next generation of artisans.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft-white py-20 grain md:py-28">
        <SectionHeading eyebrow="Values" title="Brand values" titleAccent="What we stand for" align="center" />
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2">
          {BRAND_VALUES.map((v) => (
            <div key={v.title} className="glass-card rounded-2xl p-8">
              <h3 className="font-display text-xl">{v.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad py-20 md:py-28">
        <SectionHeading eyebrow="People" title="Team overview" titleAccent="The atelier bench" align="center" />
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-2xl gloss-black-panel">
              <div className="relative aspect-square">
                <SafeImage src={member.image} alt={member.name} fill className="object-cover" sizes="250px" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-soft-white">{member.name}</h3>
                <p className="text-sm text-muted">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-soft-white py-20 grain md:py-28">
        <SectionHeading eyebrow="Trust" title="Why customers trust us" titleAccent="Built on results" align="center" />
        <div className="mx-auto grid max-w-4xl gap-6 text-center">
          {["12,400+ pieces restored", "48 luxury brands serviced", "99% satisfaction rate", "Insured white-glove handling"].map((item) => (
            <p key={item} className="text-xl text-primary-black/85">{item}</p>
          ))}
        </div>
      </section>

      <GalleryGrid images={ABOUT_GALLERY} title="The atelier" titleAccent="In stills" />
      <PageCTA title="Ready to restore your grails" titleAccent="Book a consultation" subtitle="Book a consultation with our atelier team." />
    </PageShell>
  );
}
