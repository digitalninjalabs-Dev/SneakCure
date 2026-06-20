import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SafeImage } from "@/components/ui/SafeImage";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { getProductBySlug, PRODUCTS } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return { title: product.name, description: `${product.name} — ${product.category} by SneakCure` };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <PageShell>
      <section className="section-pad py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl gloss-black-panel">
            <SafeImage src={product.image} alt={product.name} fill className="object-cover" sizes="50vw" priority />
          </div>
          <div>
            <Link href="/products" className="text-xs uppercase tracking-widest text-muted hover:text-primary-black">
              ← Back to products
            </Link>
            <p className="mt-4 text-xs uppercase tracking-widest text-muted">{product.category}</p>
            <SplitTitle title={product.name} accent={product.category} as="h1" size="page" className="mt-2" />
            <p className="mt-4 text-2xl font-medium">{product.price}</p>
            <p className="mt-2 text-sm text-muted">★ {product.rating} · {product.reviews} reviews</p>
            <p className="mt-6 text-muted leading-relaxed">
              Professional-grade formula developed in the SneakCure atelier. Safe for premium materials when used as directed. Batch-tested for consistency and performance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href={`/contact?product=${product.slug}`}>Add to Inquiry</MagneticButton>
              <MagneticButton href="/contact" variant="ghost">Ask a Question</MagneticButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft-white py-20 grain md:py-28">
        <SplitTitle title="Product reviews" accent="From collectors" as="h2" size="md" align="center" className="mb-8" />
        <div className="mx-auto max-w-2xl space-y-4">
          {[
            { name: "Arjun K.", text: "Best cleaner I've used on my Jordan 1s. No residue, no damage." },
            { name: "Priya M.", text: "Atelier-quality product. Worth every rupee for luxury leather." },
          ].map((r) => (
            <blockquote key={r.name} className="glass-card rounded-2xl p-6">
              <p>&ldquo;{r.text}&rdquo;</p>
              <footer className="mt-3 text-sm text-muted">— {r.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
