import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageShell } from "@/components/layout/PageShell";
import { PageLoadFallback } from "@/components/ui/PageLoadFallback";

const FranchiseShowcase = dynamic(
  () => import("@/components/pages/FranchiseShowcase").then((mod) => mod.FranchiseShowcase),
  { loading: () => <PageLoadFallback /> }
);

export const metadata: Metadata = {
  title: "Get Franchise",
  description: "Partner with Sneakcure — franchise opportunities in premium restoration across India.",
};

export default function FranchisePage() {
  return (
    <PageShell flush>
      <FranchiseShowcase />
    </PageShell>
  );
}
