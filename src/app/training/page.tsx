import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageShell } from "@/components/layout/PageShell";
import { PageLoadFallback } from "@/components/ui/PageLoadFallback";

const TrainingShowcase = dynamic(
  () => import("@/components/pages/TrainingShowcase").then((mod) => mod.TrainingShowcase),
  { loading: () => <PageLoadFallback /> }
);

export const metadata: Metadata = {
  title: "Training & Consultation",
  description: "Professional sneaker and leather restoration training programs and consultation services by Sneakcure.",
};

export default function TrainingPage() {
  return (
    <PageShell flush>
      <TrainingShowcase />
    </PageShell>
  );
}
