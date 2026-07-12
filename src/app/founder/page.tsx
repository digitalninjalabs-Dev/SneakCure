import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageShell } from "@/components/layout/PageShell";
import { PageLoadFallback } from "@/components/ui/PageLoadFallback";

const FounderShowcase = dynamic(
  () => import("@/components/pages/FounderShowcase").then((mod) => mod.FounderShowcase),
  { loading: () => <PageLoadFallback /> }
);

export const metadata: Metadata = {
  title: "Ajit Yadav | Founder & Atelier Director | Sneakcure",
  description:
    "Meet Ajit Yadav, founder of Sneakcure. From a small Lucknow workshop to a luxury leather atelier, training academy, and franchise network — discover the craft, vision, and story behind India's premium restoration house.",
};

export default function FounderPage() {
  return (
    <PageShell>
      <FounderShowcase />
    </PageShell>
  );
}
