"use client";

import { useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BladeText } from "@/components/ui/BladeText";

export function BookingCTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden section-pad py-20 sm:py-28 md:py-40 bg-pearl grain"
      aria-label="Booking"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.8),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <BladeText
          lines={["YOUR SNEAKERS", "DESERVE BETTER."]}
          className="editorial-title text-3xl font-semibold uppercase sm:text-5xl md:text-7xl lg:text-8xl"
        />
        <p className="mt-6 text-lg text-muted md:text-xl" data-fade-up>
          Book a premium restoration. White-glove pickup available.
        </p>

        <form
          className="mx-auto mt-14 max-w-lg space-y-4 text-left"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          data-scroll-reveal
        >
          <div className="glass-card rounded-2xl p-2">
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
          <div className="glass-card rounded-2xl p-2">
            <label className="sr-only" htmlFor="email">
              Email
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
          <div className="glass-card rounded-2xl p-2">
            <label className="sr-only" htmlFor="sneaker">
              Sneaker details
            </label>
            <textarea
              id="sneaker"
              name="sneaker"
              rows={3}
              placeholder="Tell us about your pair..."
              className="w-full resize-none bg-transparent px-5 py-4 text-primary-black outline-none placeholder:text-muted"
            />
          </div>
          <div className="flex justify-center pt-4">
            <MagneticButton type="submit">
              {submitted ? "Request Received" : "Book Premium Restoration"}
            </MagneticButton>
          </div>
        </form>
      </div>
    </section>
  );
}
