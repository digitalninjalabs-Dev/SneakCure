import type { MetadataRoute } from "next";
import { PRODUCTS, SERVICE_PAGES } from "@/lib/site-data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sneakcure.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/training",
    "/franchise",
    "/founder",
    "/products",
    "/contact",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...SERVICE_PAGES.map((service) => ({
      url: `${BASE_URL}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...PRODUCTS.map((product) => ({
      url: `${BASE_URL}/products/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
