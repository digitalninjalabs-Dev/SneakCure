import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { AboutIntro } from "@/components/pages/AboutIntro";
import { AboutWallMarquee } from "@/components/pages/AboutWallMarquee";
import { PageCTA } from "@/components/pages/PageCTA";
import { GalleryGrid } from "@/components/pages/GalleryGrid";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_GALLERY, TEAM } from "@/lib/site-data";
import { productImage } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover Sneakcure — our story, mission, values, and the team behind premium restoration.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <AboutIntro image={productImage(8)} />

      <section className="section-pad py-10 sm:py-12 md:py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Company story"
              titleAccent="Where it began"
              size="section"
              dense
            />
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              From a single atelier bench in Lucknow to a multi-city restoration house, Sneakcure has grown by saying no to shortcuts. Every sneaker, bag, and leather piece receives a bespoke protocol — documented, insured, and returned in museum-grade presentation.
            </p>
          </div>
          <div>
            <SectionHeading
              eyebrow="Purpose"
              title="Mission & Vision"
              titleAccent="Why we exist"
              size="section"
              dense
            />
            <p className="mb-3 text-base leading-relaxed text-muted sm:text-lg">
              <strong className="text-primary-black">Mission:</strong> Restore the culture — one iconic piece at a time, with transparency and craft.
            </p>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              <strong className="text-primary-black">Vision:</strong> To become India&apos;s most trusted luxury restoration brand, training the next generation of artisans.
            </p>
          </div>
        </div>
      </section>

      <AboutWallMarquee />

      <section className="section-pad bg-[#f3f3f3] py-10 sm:py-12 md:py-14" aria-label="Team">
        <SectionHeading
          eyebrow="People"
          title="The people who drive"
          titleAccent="our craft"
          subtitle="Our atelier team brings specialised skill in restoration, leatherwork, color, and final quality — every piece handled with precision."
          align="center"
          size="section"
          dense
        />

        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {TEAM.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-[1.5rem] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04] transition-shadow duration-300 hover:shadow-[0_18px_48px_rgba(0,0,0,0.12)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <SafeImage
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <span
                  className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary-black text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                >
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
                    <path
                      d="M4 12 12 4M6 4h6v6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="bg-white px-5 py-4">
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-primary-black/40">
                  {member.role}
                </p>
                <h3 className="editorial-title mt-1.5 text-lg font-semibold tracking-[-0.02em] text-primary-black sm:text-xl">
                  {member.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white py-10 sm:py-12 md:py-14" aria-label="Trust">
        <SectionHeading
          eyebrow="Trust"
          title="Why customers trust us"
          titleAccent="Built on results"
          align="center"
          size="section"
          dense
        />

        <div className="mx-auto max-w-4xl border-y border-primary-black/10">
          <ul className="grid sm:grid-cols-2">
            {[
              { label: "Pieces restored with atelier care", value: "12.4k+" },
              { label: "Luxury brands serviced", value: "48+" },
              { label: "Customer satisfaction rate", value: "99%" },
              { label: "Insured white-glove handling", value: "100%" },
            ].map((stat, i) => (
              <li
                key={stat.label}
                className={`px-6 py-8 text-center sm:px-8 sm:py-10 ${
                  i % 2 === 0 ? "sm:border-r sm:border-primary-black/10" : ""
                } ${i < 2 ? "border-b border-primary-black/10" : ""}`}
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary-black/40 sm:text-[11px]">
                  {stat.label}
                </p>
                <p className="editorial-title mt-3 text-[clamp(2.5rem,6vw,3.75rem)] font-semibold leading-none tracking-[-0.04em] text-primary-black">
                  {stat.value}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <GalleryGrid
        images={ABOUT_GALLERY}
        eyebrow="Gallery"
        title="The atelier"
        titleAccent="In stills"
        dense
      />
      <PageCTA
        title="Ready to restore your grails"
        titleAccent="with SneakCure"
        subtitle="Book a consultation with our atelier team — we'll diagnose the damage and map the right restoration path."
        primaryHref="/booking"
        primaryLabel="Get started"
        secondaryHref="/contact"
        secondaryLabel="Request a demo"
        dense
      />
    </PageShell>
  );
}
