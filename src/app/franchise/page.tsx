import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageShell } from "@/components/layout/PageShell";
import { PageLoadFallback } from "@/components/ui/PageLoadFallback";

const FranchiseShowcase = dynamic(
  () => import("@/components/pages/FranchiseShowcase").then((mod) => mod.FranchiseShowcase),
  { loading: () => <PageLoadFallback /> }
);

export const metadata: Metadata = {
  title: {
    absolute: "Sneakcure Franchise | Build India's Next Premium Restoration Studio",
  },
  description:
    "Start your own Sneakcure franchise and build a premium restoration studio for shoes, sneakers, and luxury leather goods. Get expert training, marketing support, and proven business systems.",
};

export default function FranchisePage() {
  return (
    <PageShell flush>
      <FranchiseShowcase />
    </PageShell>
  );
}
