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
  title: "Chrono 47 | Luxury Timepieces & Jewelry",
  description: "Experience the pinnacle of horology and bespoke jewelry in New York City.",
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
