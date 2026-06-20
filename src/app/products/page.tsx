import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/pages/PageHero";
import { PageLoadFallback } from "@/components/ui/PageLoadFallback";
import { productImage } from "@/lib/constants";

const ProductsShowcase = dynamic(
  () => import("@/components/pages/ProductsShowcase").then((mod) => mod.ProductsShowcase),
  { loading: () => <PageLoadFallback /> }
);
export const metadata: Metadata = {
  title: "Products",
  description: "Premium SneakCure care products — sneaker cleaners, leather conditioners, restoration kits, and accessories.",
};

export default function ProductsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Shop"
        title="Products"
        titleAccent="Atelier-grade care"
        subtitle="Luxury care products engineered by our atelier — for collectors, professionals, and everyday legends."
        image={productImage(1)}
      />
      <ProductsShowcase />
    </PageShell>
  );
}
