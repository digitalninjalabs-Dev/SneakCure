"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { SplitTitle } from "@/components/ui/SplitTitle";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PRODUCT_CATEGORIES, PRODUCTS } from "@/lib/site-data";

export function ProductsShowcase() {
  const [category, setCategory] = useState<string>("All");
  const [inquiry, setInquiry] = useState<string[]>([]);

  const filtered = useMemo(
    () => (category === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === category)),
    [category]
  );

  const toggleInquiry = (slug: string) => {
    setInquiry((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  };

  return (
    <>
      <section className="section-pad py-12 md:py-16">
        <p className="mb-4 text-center text-xs uppercase tracking-widest text-muted">Categories</p>
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                category === cat ? "bg-gloss-black text-soft-white" : "bg-white/60 text-primary-black hover:bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="section-pad pb-20 md:pb-28">
        <SplitTitle title="Featured products" accent="Curated for care" as="h2" size="md" align="center" className="mb-10" />
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product) => (
            <article key={product.slug} className="glass-card overflow-hidden rounded-2xl">
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative aspect-square">
                  <SafeImage src={product.image} alt={product.name} fill className="object-cover" sizes="280px" />
                </div>
              </Link>
              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-muted">{product.category}</p>
                <Link href={`/products/${product.slug}`}>
                  <h3 className="mt-1 font-display text-lg hover:underline">{product.name}</h3>
                </Link>
                <p className="mt-2 font-medium">{product.price}</p>
                <p className="text-xs text-muted">★ {product.rating} ({product.reviews} reviews)</p>
                <button
                  type="button"
                  onClick={() => toggleInquiry(product.slug)}
                  className={`mt-4 w-full rounded-full py-2.5 text-xs uppercase tracking-wider transition-colors ${
                    inquiry.includes(product.slug)
                      ? "bg-gloss-black text-soft-white"
                      : "border border-black/10 bg-white/50"
                  }`}
                >
                  {inquiry.includes(product.slug) ? "Added to Inquiry" : "Add to Inquiry"}
                </button>
              </div>
            </article>
          ))}
        </div>

        {inquiry.length > 0 && (
          <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2">
            <MagneticButton href={`/contact?products=${inquiry.join(",")}`}>
              Inquiry ({inquiry.length}) — Contact Us
            </MagneticButton>
          </div>
        )}
      </section>
    </>
  );
}
