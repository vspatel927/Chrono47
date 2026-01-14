import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                // Block common AI scrapers to protect content/bandwidth
                userAgent: ['GPTBot', 'CCBot', 'Bytespider', 'ClaudeBot'],
                disallow: '/',
            },
        ],
        sitemap: 'https://chrono-47.com/sitemap.xml',
    };
}
