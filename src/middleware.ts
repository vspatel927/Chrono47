import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const userAgent = request.headers.get('user-agent') || '';

    // List of aggressive AI scrapers to block
    // These bots often ignore robots.txt so we block them at the edge
    const blockedBots = [
        'GPTBot',      // OpenAI
        'CCBot',       // Common Crawl
        'Bytespider',  // ByteDance
        'ClaudeBot',   // Anthropic
        'FacebookBot', // Meta
        'Amazonbot'    // Amazon
    ];

    if (blockedBots.some(bot => userAgent.toLowerCase().includes(bot.toLowerCase()))) {
        return new NextResponse('Access Denied', { status: 403 });
    }

    const response = NextResponse.next();

    // Security Headers
    // X-Robots-Tag: noai -> explicitly tells polite AI bots not to train on this data
    response.headers.set('X-Robots-Tag', 'noai');

    return response;
}

export const config = {
    // Apply to all routes except api, _next, and static files
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|assets).*)',
    ],
};
