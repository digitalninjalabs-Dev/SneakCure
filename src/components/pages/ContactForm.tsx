"use client";

import { useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";

type ContactFormProps = {
  subject?: string;
  submitLabel?: string;
};

export function ContactForm({ subject = "General Inquiry", submitLabel = "Send Message" }: ContactFormProps) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <input type="hidden" name="subject" value={subject} />
      <div className="glass-card rounded-2xl p-2">
        <input required placeholder="Full name" className="w-full bg-transparent px-5 py-4 outline-none placeholder:text-muted" />
      </div>
      <div className="glass-card rounded-2xl p-2">
        <input required type="email" placeholder="Email address" className="w-full bg-transparent px-5 py-4 outline-none placeholder:text-muted" />
      </div>
      <div className="glass-card rounded-2xl p-2">
        <input placeholder="Phone / WhatsApp" className="w-full bg-transparent px-5 py-4 outline-none placeholder:text-muted" />
      </div>
      <div className="glass-card rounded-2xl p-2">
        <textarea rows={4} required placeholder="Your message..." className="w-full resize-none bg-transparent px-5 py-4 outline-none placeholder:text-muted" />
      </div>
      <MagneticButton type="submit">{sent ? "Message Sent" : submitLabel}</MagneticButton>
    </form>
  );
}
