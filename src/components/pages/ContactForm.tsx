"use client";

import { useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CONTACT_REFERRAL_SOURCES, SITE } from "@/lib/site-data";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-primary-black sm:text-xl">Send us a message</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
          You can either email us at{" "}
          <a href={`mailto:${SITE.email}`} className="text-primary-black underline underline-offset-2">
            {SITE.email}
          </a>{" "}
          or use the form below.
        </p>
      </div>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <div className="glass-card rounded-2xl p-2">
          <input
            required
            name="name"
            placeholder="Name *"
            className="w-full bg-transparent px-5 py-4 outline-none placeholder:text-muted"
          />
        </div>
        <div className="glass-card rounded-2xl p-2">
          <input
            required
            type="tel"
            name="phone"
            placeholder="Phone No. *"
            className="w-full bg-transparent px-5 py-4 outline-none placeholder:text-muted"
          />
        </div>
        <div className="glass-card rounded-2xl p-2">
          <input
            required
            name="brand"
            placeholder="What brand is your product? *"
            className="w-full bg-transparent px-5 py-4 outline-none placeholder:text-muted"
          />
        </div>
        <div className="glass-card rounded-2xl p-2">
          <select
            required
            name="referral"
            defaultValue=""
            className="w-full appearance-none bg-transparent px-5 py-4 outline-none text-primary-black invalid:text-muted"
          >
            <option value="" disabled>
              Where did you hear about us? *
            </option>
            {CONTACT_REFERRAL_SOURCES.map((source) => (
              <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
        </div>
        <MagneticButton type="submit">{sent ? "Enquiry Sent" : "Send Enquiry"}</MagneticButton>
      </form>
    </div>
  );
}
