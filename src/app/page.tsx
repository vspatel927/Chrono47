import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Brands } from "@/components/Brands";
import { Collection } from "@/components/Collection";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

import { InquiryProvider } from "@/components/InquiryContext";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian">
      <InquiryProvider>
        <Header />
        <Hero />
        <Brands />
        <Collection />
        <Services />
        <Testimonials />
        <Footer />
      </InquiryProvider>
    </main>
  );
}
