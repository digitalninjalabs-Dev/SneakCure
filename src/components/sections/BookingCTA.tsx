"use client";

import { useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ClosedWednesdaySign } from "@/components/ui/ClosedWednesdaySign";
import { SITE } from "@/lib/site-data";

const FIELD =
  "w-full rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm text-primary-black outline-none placeholder:text-muted focus:border-primary-black/30";

export function BookingCTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="section-pad relative overflow-visible bg-white py-12 text-primary-black sm:py-14 md:py-16"
      aria-label="Booking"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="flex flex-col justify-between gap-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-black/45">
              Book appointment
            </p>
            <h2 className="editorial-title mt-4 max-w-[14ch] text-[clamp(1.85rem,4vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
              Book a free appointment
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-primary-black/55 md:text-lg">
              Restore your favorites with craftsmanship. Doorstep pickup available across India.
            </p>

            <div className="mt-6 flex justify-center sm:mt-8">
              <ClosedWednesdaySign />
            </div>

            <p className="mt-5 text-center text-sm font-medium uppercase tracking-[0.14em] text-primary-black/40">
              Open Mon–Tue &amp; Thu–Sun · 10:00 AM – 8:00 PM IST
            </p>
          </div>

          <a href={`tel:+${SITE.whatsapp}`} className="inline-flex w-fit items-center gap-3.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-black text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>
              <span className="block text-xs text-muted">Call or WhatsApp</span>
              <span className="mt-0.5 block text-base font-semibold text-primary-black">
                {SITE.phone}
              </span>
            </span>
          </a>
        </div>

        <form
          className="relative z-0 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="book-name" className="mb-2 block text-sm font-medium">
                Full name
              </label>
              <input
                id="book-name"
                name="name"
                type="text"
                required
                placeholder="Full name"
                className={FIELD}
              />
            </div>
            <div>
              <label htmlFor="book-email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                id="book-email"
                name="email"
                type="email"
                required
                placeholder="Email address"
                className={FIELD}
              />
            </div>
            <div>
              <label htmlFor="book-city" className="mb-2 block text-sm font-medium">
                City / pickup
              </label>
              <input
                id="book-city"
                name="city"
                type="text"
                required
                placeholder="Your city"
                className={FIELD}
              />
            </div>
            <div>
              <label htmlFor="book-phone" className="mb-2 block text-sm font-medium">
                Phone
              </label>
              <input
                id="book-phone"
                name="phone"
                type="tel"
                required
                placeholder="Phone / WhatsApp"
                className={FIELD}
              />
            </div>
          </div>

          <div>
            <label htmlFor="book-message" className="mb-2 block text-sm font-medium">
              Details
            </label>
            <textarea
              id="book-message"
              name="message"
              rows={3}
              placeholder="Tell us about your restoration..."
              className={`${FIELD} resize-none`}
            />
          </div>

          <div className="pt-2">
            <MagneticButton type="submit">
              {submitted ? "Request Received" : "Book an appointment"}
            </MagneticButton>
          </div>
        </form>
      </div>
    </section>
  );
}
