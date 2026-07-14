import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/pages/PageHero";
import { ContactForm } from "@/components/pages/ContactForm";
import { ContactStores } from "@/components/pages/ContactStores";
import { FAQBlock } from "@/components/pages/FAQBlock";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT_FAQ_ITEMS, SERVICE_CITIES, SITE } from "@/lib/site-data";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "Contact Sneakcure | Premium Restoration & Franchise Enquiries",
  description:
    "Connect with Sneakcure for premium shoe and leather restoration, franchise opportunities, and training. Visit our Delhi, Lucknow, or Kanpur studios or send an enquiry online.",
};

function ContactHeroAside() {
  return (
    <aside className="rounded-2xl border border-black/8 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] sm:p-8">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">Quick connect</p>
      <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-primary-black sm:text-3xl">
        Talk to Sneakcure
      </h2>

      <dl className="mt-6 space-y-5 text-sm">
        <div>
          <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Phone</dt>
          <dd className="mt-1.5">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="text-base font-medium text-primary-black transition-opacity hover:opacity-70"
            >
              {SITE.phone}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Email</dt>
          <dd className="mt-1.5">
            <a
              href={`mailto:${SITE.email}`}
              className="text-base font-medium text-primary-black transition-opacity hover:opacity-70"
            >
              {SITE.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Hours</dt>
          <dd className="mt-1.5 text-primary-black/75">{SITE.hours}</dd>
          <dd className="mt-1 text-sm font-medium text-primary-black">
            Closed every {SITE.weeklyOff}
          </dd>
        </div>
        <div>
          <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Studios</dt>
          <dd className="mt-1.5 text-primary-black/75">{SERVICE_CITIES.join(" · ")}</dd>
        </div>
      </dl>

      <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
        <MagneticButton href={`https://wa.me/${SITE.whatsapp}`} className="!w-full sm:!w-auto">
          WhatsApp Us
        </MagneticButton>
        <MagneticButton href={SITE.instagram} variant="ghost" className="!w-full sm:!w-auto">
          Instagram
        </MagneticButton>
      </div>
    </aside>
  );
}

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Let's create lasting value"
        titleAccent="Crafted with care. Guided by experts."
        subtitle="From restoring treasured leather pieces to exploring franchise and training opportunities, connect with our specialists for customized advice and premium service designed around your needs."
        aside={<ContactHeroAside />}
        dense
      />

      <section className="section-pad py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Reach us"
            title="Connect with Sneakcure"
            titleAccent="Visit our store"
          />

          <div
            className="mb-8 rounded-2xl border border-primary-black/10 bg-primary-black px-5 py-4 text-soft-white sm:px-6"
            role="note"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/90">
              Weekly off
            </p>
            <p className="mt-1.5 text-sm sm:text-base">
              All Sneakcure stores are <strong className="font-semibold">closed every {SITE.weeklyOff}</strong>.
              {" "}Open Mon–Tue &amp; Thu–Sun, {SITE.hours.split(" (")[0]}.
            </p>
          </div>

          <p className="mb-8 text-sm font-medium uppercase tracking-[0.18em] text-muted">Stores</p>

          <ContactStores />

          <div className="mt-10 flex flex-wrap gap-3">
            <MagneticButton href={`https://wa.me/${SITE.whatsapp}`}>WhatsApp Us</MagneticButton>
            <MagneticButton href={SITE.instagram} variant="ghost">
              Instagram
            </MagneticButton>
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft-white py-20 grain md:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Form"
            title="Start your journey"
            titleAccent="Send an enquiry"
            align="center"
          />
          <ContactForm />
        </div>
      </section>

      <FAQBlock
        items={CONTACT_FAQ_ITEMS}
        title="Everything you need to know"
        titleAccent="Quick answers, clearly explained"
        numbered
      />
    </PageShell>
  );
}
