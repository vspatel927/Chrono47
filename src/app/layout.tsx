import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0" />
      </head>
      <body
        className={`${manrope.variable} ${playfair.variable} antialiased bg-background-light dark:bg-background-dark text-obsidian dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
