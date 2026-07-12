import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/pages/PageHero";
import { ContactForm } from "@/components/pages/ContactForm";
import { FAQBlock } from "@/components/pages/FAQBlock";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT_FAQ_ITEMS, CONTACT_STORES, SITE } from "@/lib/site-data";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "Contact Sneakcure | Premium Restoration & Franchise Enquiries",
  description:
    "Connect with Sneakcure for premium shoe and leather restoration, franchise opportunities, and training. Visit our Delhi, Lucknow, or Kanpur studios or send an enquiry online.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Let's create lasting value"
        titleAccent="Crafted with care. Guided by experts."
        subtitle="From restoring treasured leather pieces to exploring franchise and training opportunities, connect with our specialists for customized advice and premium service designed around your needs."
      />

      <section className="section-pad py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Reach us"
            title="Connect with Sneakcure"
            titleAccent="Visit our store"
          />

          <p className="mb-8 text-sm font-medium uppercase tracking-[0.18em] text-muted">Stores</p>

          <div className="grid gap-6 lg:grid-cols-3">
            {CONTACT_STORES.map((store) => (
              <article
                key={store.name}
                className="glass-card flex flex-col rounded-2xl border border-black/5 p-6 sm:p-8"
              >
                <h3 className="text-lg font-medium text-primary-black">{store.name}</h3>
                {store.landmark ? (
                  <p className="mt-1 text-sm text-muted">{store.landmark}</p>
                ) : null}

                <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                  <div>
                    <dt className="font-medium text-primary-black">Address</dt>
                    <dd className="mt-1 text-muted">{store.address}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-primary-black">Hours</dt>
                    <dd className="mt-1 text-muted">{store.hours}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-primary-black">Weekly off</dt>
                    <dd className="mt-1 text-muted">{store.weeklyOff}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-primary-black">Phone</dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${store.phoneHref}`}
                        className="text-primary-black transition-opacity hover:opacity-70"
                      >
                        {store.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium text-primary-black">Email</dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${store.email}`}
                        className="break-all text-primary-black transition-opacity hover:opacity-70"
                      >
                        {store.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

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
