import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/pages/PageHero";
import { ContactForm } from "@/components/pages/ContactForm";
import { FAQBlock } from "@/components/pages/FAQBlock";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { SITE } from "@/lib/site-data";
import { FAQ_ITEMS } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Sneakcure — book restoration, training, franchise, or product inquiries.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Contact" title="Contact us" titleAccent="We are here to help" subtitle="Book restoration, training, franchise, or product inquiries — we're here to help." />

      <section className="section-pad py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Reach us" title="Business details" titleAccent="Hours & locations" />
            <ul className="space-y-4 text-muted">
              <li><strong className="text-primary-black">Phone:</strong> {SITE.phone}</li>
              <li><strong className="text-primary-black">Email:</strong> {SITE.email}</li>
              <li><strong className="text-primary-black">Address:</strong> {SITE.address}</li>
              <li><strong className="text-primary-black">Hours:</strong> Mon–Sat, 10am – 7pm IST</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href={`https://wa.me/${SITE.whatsapp}`}>WhatsApp Us</MagneticButton>
              <MagneticButton href={SITE.instagram} variant="ghost">Instagram</MagneticButton>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Form" title="Contact form" titleAccent="Send a message" />
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft-white py-12 grain md:py-16">
        <SplitTitle title="Find us" accent="Visit the atelier" as="h2" size="md" align="center" className="mb-8" />
        <div className="mx-auto aspect-video max-w-5xl overflow-hidden rounded-2xl">
          <iframe
            src={SITE.mapEmbed}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sneakcure location"
          />
        </div>
      </section>

      <FAQBlock items={FAQ_ITEMS} />
    </PageShell>
  );
}
