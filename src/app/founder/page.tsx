import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageShell } from "@/components/layout/PageShell";
import { PageLoadFallback } from "@/components/ui/PageLoadFallback";

const FounderShowcase = dynamic(
  () => import("@/components/pages/FounderShowcase").then((mod) => mod.FounderShowcase),
  { loading: () => <PageLoadFallback /> }
);

export const metadata: Metadata = {
  title: "Founder Story",
  description:
    "Meet Ajit Yadav — founder of Sneakcure. The journey, craft, and vision behind India's premium restoration atelier.",
};

export default function FounderPage() {
  return (
    <PageShell>
      <FounderShowcase />
    </PageShell>
  );
}
