"use client";

import { useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BladeText } from "@/components/ui/BladeText";

export function BookingCTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden section-pad bg-white py-20 text-primary-black sm:py-28 md:py-40"
      aria-label="Booking"
    >
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <BladeText
          lines={["YOUR FAVORITES", "DESERVE EXPERT CARE."]}
          className="editorial-title text-3xl font-semibold uppercase text-primary-black sm:text-5xl md:text-7xl lg:text-8xl"
        />
        <p className="mt-6 text-lg text-primary-black/55 md:text-xl" data-fade-up>
          Restore them with craftsmanship. Doorstep pickup available across India.
        </p>
        <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-primary-black/45" data-fade-up>
          Closed every Wednesday · Open Mon–Tue &amp; Thu–Sun
        </p>

        <form
          className="mx-auto mt-14 max-w-lg space-y-4 text-left"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          data-scroll-reveal
        >
          <div className="rounded-2xl border border-black/10 bg-white p-2 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <label className="sr-only" htmlFor="name">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Full name"
              className="w-full bg-transparent px-5 py-4 text-primary-black outline-none placeholder:text-muted"
            />
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-2 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="w-full bg-transparent px-5 py-4 text-primary-black outline-none placeholder:text-muted"
            />
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-2 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <label className="sr-only" htmlFor="phone">
              Phone / WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="Phone / WhatsApp"
              className="w-full bg-transparent px-5 py-4 text-primary-black outline-none placeholder:text-muted"
            />
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-2 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <label className="sr-only" htmlFor="message">
              Restoration details
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              required
              placeholder="Tell us about your restoration..."
              className="w-full resize-none bg-transparent px-5 py-4 text-primary-black outline-none placeholder:text-muted"
            />
          </div>
          <div className="flex justify-center pt-4">
            <MagneticButton type="submit">
              {submitted ? "Request Received" : "Request a Free Consultation"}
            </MagneticButton>
          </div>
        </form>
      </div>
    </section>
  );
}
