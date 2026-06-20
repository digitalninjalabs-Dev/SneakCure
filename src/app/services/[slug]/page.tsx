import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { PageLoadFallback } from "@/components/ui/PageLoadFallback";
import { getServiceBySlug, SERVICE_PAGES } from "@/lib/site-data";

const ServiceDetailShowcase = dynamic(
  () =>
    import("@/components/services/ServiceDetailShowcase").then((mod) => mod.ServiceDetailShowcase),
  { loading: () => <PageLoadFallback flush /> }
);
type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <PageShell flush>
      <ServiceDetailShowcase service={service} />
    </PageShell>
  );
}
