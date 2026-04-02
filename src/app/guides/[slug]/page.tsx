import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { InquiryProvider } from '@/components/InquiryContext';
import seoData from '@/data/seo-pages.json';

type GuidePageData = {
  slug: string;
  seo: { title: string; description: string };
  hero: { title: string; subtitle: string; };
  content: string;
};

export async function generateStaticParams() {
  return seoData.guides.map((g) => ({
    slug: g.slug,
  }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const guide = seoData.guides.find((g) => g.slug === params.slug);
  if (!guide) return {};

  return {
    title: guide.seo.title,
    description: guide.seo.description,
  };
}

export default async function GuidePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const guide = seoData.guides.find((g) => g.slug === params.slug) as GuidePageData;

  if (!guide) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-obsidian text-white">
      <InquiryProvider>
        <Header />
        
        {/* Guide Hero Section */}
        <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 border-b border-white/5">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              {guide.hero.title}
            </h1>
            <p className="text-xl text-primary font-display tracking-widest uppercase text-xs mb-10">
              {guide.hero.subtitle}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="prose prose-invert prose-lg prose-p:text-gray-400 prose-p:leading-relaxed prose-p:font-body">
                {/* We are doing a simple string render for MVP, normally this would be MDX or parsed HTML */}
                <p className="text-xl leading-loose font-body text-gray-300">
                  {guide.content}
                </p>
            </div>
            
            <div className="mt-20 flex justify-center">
              <a href="#concierge" className="inline-block bg-primary text-obsidian text-sm font-bold tracking-widest uppercase py-4 px-10 rounded-sm hover:bg-white transition-colors font-display">
                Speak to our Concierge
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </InquiryProvider>
    </main>
  );
}


