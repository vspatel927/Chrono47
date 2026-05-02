import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/Preloader";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chrono 47 | Luxury Watch Dealers on 47th Street NYC",
  description: "NYC's top watch dealer on 47th St. Buy, sell, and trade Rolex, Patek, AP and more. Expertly sourced luxury watches.",
  openGraph: {
    title: "Chrono 47 | Luxury Watch Dealers on 47th Street NYC",
    description: "Expert sourcing of Rolex, Patek Philippe, Audemars Piguet & more in NYC. We buy, sell, and trade luxury watches and offer bespoke jewelry services.",
    url: "https://chrono-47.com",
    siteName: "Chrono 47",
    images: [
      {
        url: "/assets/header-logo.png", // Using Logo as requested
        width: 800,
        height: 800,
        alt: "Chrono 47 Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary", // Summary card for Logo
    title: "Chrono 47 | Luxury Watch Dealers on 47th Street NYC",
    description: "Expert sourcing of Rolex, Patek Philippe, and Audemars Piguet.",
    images: ["/assets/header-logo.png"],
  },
  keywords: [
    "watch dealers on 47th street",
    "47th street watch dealer nyc",
    "diamond district watch dealers",
    "luxury watches",
    "rolex daytona",
    "richard mille timepieces",
    "audemars piguet timepiece",
    "royal oak",
    "jewelry repairs",
    "luxury watches for men",
    "New York Luxury Watch Dealer",
    "Buy Rolex NYC",
    "Patek Philippe Authorized Reseller",
    "Sell Audemars Piguet",
    "Investment Grade Watches"
  ],
  authors: [{ name: "Chrono 47" }],
  publisher: "Chrono 47",
  metadataBase: new URL("https://chrono-47.com"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  "name": "Chrono 47",
  "image": "https://chrono-47.com/assets/header-logo.png",
  "@id": "https://chrono-47.com",
  "url": "https://chrono-47.com",
  "telephone": "+17204926619",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "47 West 47th Street",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10036",
    "addressCountry": "US"
  },
  "areaServed": ["New York, NY", "USA", "International"],
  "priceRange": "$$$$",
  "sameAs": [
    "https://instagram.com/chrono47official",
    "https://tiktok.com/@chrono47official",
    "https://youtube.com/@chrono47official"
  ],
  "knowsAbout": [
    "Rolex",
    "Patek Philippe",
    "Audemars Piguet",
    "Richard Mille",
    "Custom Jewelry",
    "Engagement Rings",
    "Wedding Bands",
    "Tennis Necklaces",
    "Studs",
    "Luxury Watch Sourcing"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Luxury Watch Buy, Sell, Trade"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bespoke Jewelry & Diamond Setting"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Master Watch Repair & Restoration"
        }
      }
    ]
  }
};

import { LoadingProvider } from "@/components/LoadingContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://chrono-47.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="google-site-verification" content="g6tB_sn5R_06uGMd7HiLZqApnZcGyTYJEE7pFc-TrVc" />
      </head>
      <body
        className={`${manrope.variable} ${playfair.variable} antialiased bg-background-light dark:bg-background-dark text-obsidian dark:text-white`}
      >
        <LoadingProvider>
          <Preloader />
          <Analytics />
          <SpeedInsights />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
