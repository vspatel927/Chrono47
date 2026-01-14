import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InquiryProvider } from "@/components/InquiryContext";

// Lazy load below-the-fold components to reduce initial JS bundle size
const Brands = dynamic(() => import("@/components/Brands").then(mod => mod.Brands), {
  loading: () => <div className="h-24 bg-obsidian" />
});
const Collection = dynamic(() => import("@/components/Collection").then(mod => mod.Collection), {
  loading: () => <div className="h-[800px] bg-obsidian" />
});
const Services = dynamic(() => import("@/components/Services").then(mod => mod.Services), {
  loading: () => <div className="h-[600px] bg-obsidian" />
});
const Testimonials = dynamic(() => import("@/components/Testimonials").then(mod => mod.Testimonials), {
  loading: () => <div className="h-[400px] bg-obsidian" />
});
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer), {
  loading: () => <div className="h-64 bg-black" />
});

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
