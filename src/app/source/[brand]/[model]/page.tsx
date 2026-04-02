import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { InquiryProvider } from '@/components/InquiryContext';
import seoData from '@/data/seo-pages.json';

// Define the type loosely based on our JSON
type SourcePageData = {
  slug: string;
  brand: string;
  model: string;
  seo: { title: string; description: string };
  hero: { title: string; subtitle: string; image: string };
  content: string;
  specs: Record<string, string>;
};

// Next.js dynamic routing configuration
export async function generateStaticParams() {
  return seoData.pages.map((p) => {
    const [brand, model] = p.slug.split('/');
    return { brand, model };
  });
}

export async function generateMetadata(
  props: { params: Promise<{ brand: string; model: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const querySlug = `${params.brand}/${params.model}`.toLowerCase();
  const page = seoData.pages.find((p) => p.slug.toLowerCase() === querySlug);
  if (!page) return {};

  return {
    title: page.seo.title,
    description: page.seo.description,
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      images: [page.hero.image],
    },
  };
}

export default async function SourcePage(props: { params: Promise<{ brand: string; model: string }> }) {
  const params = await props.params;
  const querySlug = `${params.brand}/${params.model}`.toLowerCase();
  const page = seoData.pages.find((p) => p.slug.toLowerCase() === querySlug) as unknown as SourcePageData;

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-obsidian text-white">
      <InquiryProvider>
        <Header />
        
        {/* Sourcing Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian z-10" />
            <Image
              src={page.hero.image}
              alt={page.hero.title}
              fill
              className="object-cover object-center blur-sm"
              priority
            />
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h1 className="text-primary text-xs font-bold tracking-[0.2em] uppercase font-display mb-6">
              Sourcing Service: {page.brand}
            </h1>
            <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              {page.model}
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-300 font-light font-body mb-10">
              {page.hero.subtitle}
            </p>
            <a href="#concierge" className="inline-block bg-primary text-obsidian text-sm font-bold tracking-widest uppercase py-4 px-10 rounded-sm hover:bg-white transition-colors font-display">
              Request Sourcing
            </a>
          </div>
        </section>

        {/* Content & Specs Section */}
        <section className="py-24 bg-obsidian-light border-y border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl font-serif italic mb-8 border-b border-white/10 pb-4">
                The {page.brand} {page.model}
              </h3>
              <p className="text-gray-400 leading-relaxed font-body text-lg">
                {page.content}
              </p>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="bg-obsidian border border-white/10 p-8 rounded-xl">
                <h4 className="text-primary text-xs font-bold tracking-[0.2em] uppercase font-display mb-6">
                  Target Specifications
                </h4>
                <div className="flex flex-col gap-4">
                  {Object.entries(page.specs || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-gray-500 font-display text-sm tracking-wider uppercase">{key}</span>
                      <span className="text-white font-body text-sm font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </InquiryProvider>
    </main>
  );
}


