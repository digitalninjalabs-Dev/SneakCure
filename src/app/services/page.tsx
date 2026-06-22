import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageShell } from "@/components/layout/PageShell";
import { PageLoadFallback } from "@/components/ui/PageLoadFallback";

const ServicesShowcase = dynamic(
  () => import("@/components/services/ServicesShowcase").then((mod) => mod.ServicesShowcase),
  { loading: () => <PageLoadFallback flush /> }
);
export const metadata: Metadata = {
  title: "Services",
  description: "Explore Sneakcure restoration services — sneakers, leather, sofas, automotive, and patina work.",
};

export default function ServicesPage() {
  return (
    <PageShell flush>
      <ServicesShowcase />
    </PageShell>
  );
}
