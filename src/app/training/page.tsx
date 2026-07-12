import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageShell } from "@/components/layout/PageShell";
import { PageLoadFallback } from "@/components/ui/PageLoadFallback";

const TrainingShowcase = dynamic(
  () => import("@/components/pages/TrainingShowcase").then((mod) => mod.TrainingShowcase),
  { loading: () => <PageLoadFallback /> }
);

export const metadata: Metadata = {
  title: {
    absolute: "Sneakcure Training | Learn Shoe & Leather Restoration Skills",
  },
  description:
    "Master premium shoe and leather restoration with Sneakcure. Get hands-on training, expert guidance, and business skills to launch or grow your restoration career.",
};

export default function TrainingPage() {
  return (
    <PageShell flush>
      <TrainingShowcase />
    </PageShell>
  );
}
