import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ClientBootstraps } from "@/components/providers/ClientBootstraps";
import { productImage } from "@/lib/constants";const siteUrl = "https://sneakcure.com";
const ogImage = `${siteUrl}${productImage(0)}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SneakCure — Premium Sneaker Restoration & Care",
    template: "%s | SneakCure",
  },
  description:
    "Luxury sneaker restoration, cleaning, and archival care. Museum-grade craftsmanship for iconic footwear — trusted by collectors and luxury houses worldwide.",
  keywords: [
    "sneaker restoration",
    "premium sneaker cleaning",
    "luxury sneaker care",
    "sole whitening",
    "leather restoration",
  ],
  authors: [{ name: "SneakCure" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "SneakCure",
    title: "SneakCure — Restore The Culture",
    description:
      "Premium sneaker restoration crafted for iconic footwear. Billion-dollar care for your grails.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "SneakCure premium sneaker restoration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SneakCure — Premium Sneaker Restoration",
    description: "Restore the culture. Crafted for iconic footwear.",
    images: [ogImage],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: "#F6F4F1",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SneakCure",
  description: "Premium sneaker restoration and luxury sneaker care services.",
  url: siteUrl,
  image: ogImage,
  priceRange: "$$$",
  areaServed: ["US", "EU"],
  serviceType: [
    "Sneaker Cleaning",
    "Sneaker Restoration",
    "Leather Restoration",
    "Suede Restoration",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="is-loading" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/logo/sneakcuresqblack.png"
          as="image"
        />
        <link
          href="https://api.fontshare.com/v2/css?f=clash-display@400,500,600,700&f=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden" suppressHydrationWarning>
        <div
          id="initial-site-loader"
          className="site-loader-fallback grain"
          role="status"
          aria-live="polite"
          aria-label="Loading SneakCure"
          suppressHydrationWarning
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/sneakcuresqblack.png"
            alt="SneakCure"
            width={512}
            height={512}
            className="site-loader-fallback__logo"
            fetchPriority="high"
            suppressHydrationWarning
          />
          <p className="site-loader-fallback__tagline">Premium Sneaker Restoration</p>
          <div className="site-loader-fallback__bar" aria-hidden>
            <div className="site-loader-fallback__bar-fill" />
          </div>
        </div>

        <div data-site-main suppressHydrationWarning>
          <ClientBootstraps>
            <Navbar />
            {children}
            <Footer />
          </ClientBootstraps>
        </div>      </body>
    </html>
  );
}
