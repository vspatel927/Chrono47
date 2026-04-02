import { MetadataRoute } from 'next';
import seoData from '@/data/seo-pages.json';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://chrono-47.com';

    const sourceRoutes = seoData.pages.map((page) => ({
        url: `${baseUrl}/source/${page.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const guideRoutes = seoData.guides.map((guide) => ({
        url: `${baseUrl}/guides/${guide.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...guideRoutes,
        ...sourceRoutes,
    ];
}
