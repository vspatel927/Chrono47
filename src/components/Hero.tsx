"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLoading } from "./LoadingContext";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-obsidian pt-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-24">
                <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center gap-8 lg:pr-12">
                        <div>
                            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
                                Luxury Watches & Fine Jewelry
                            </span>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
                                <span className="font-serif italic font-normal text-white block">
                                    Luxury
                                </span>
                                <span className="font-display font-light text-gray-400 block">
                                    Vision
                                </span>
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed max-w-md font-light font-body">
                                Experience the pinnacle of horology. We curate the world&apos;s most
                                coveted timepieces and bespoke jewelry to make your vision come to life.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Link href="#collection" className="flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-xs font-bold tracking-widest text-obsidian hover:bg-white transition-all duration-300 uppercase cursor-pointer">
                                Explore Collection
                            </Link>
                            <Link href="#services" className="flex items-center justify-center rounded-sm border border-white/20 bg-transparent px-8 py-4 text-xs font-bold tracking-widest text-white hover:bg-white/5 transition-all duration-300 uppercase cursor-pointer">
                                Our Services
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 relative group">
                        <VideoComponent />
                    </div>
                </div>
            </div>
        </section>
    );
}

function VideoComponent() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { isLoaded } = useLoading();
    const [isMobile, setIsMobile] = useState(true); // Default to mobile to prevent early video fetch

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkMobile();

        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!isMobile && isLoaded && videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Video play failed (likely autoplay policy):", error);
            });
        }
    }, [isLoaded, isMobile]);

    return (
        <div
            className="w-full relative aspect-[4/5] lg:aspect-video overflow-hidden"
        >
            {isMobile ? (
                <div className="relative w-full h-full">
                    {/* Placeholder for the 'last frame/logo' image requested by user */}
                    <div className="absolute inset-0 bg-black flex items-center justify-center">
                        <Image
                            src="/assets/header-logo.png"
                            alt="Chrono47"
                            width={200}
                            height={100}
                            className="w-48 h-auto object-contain brightness-110"
                        />
                    </div>
                </div>
            ) : (
                <video
                    ref={videoRef}
                    src="/assets/HeroV2.mp4"
                    poster="/assets/hero-poster.avif"
                    className="w-full h-full object-cover scale-110"
                    muted
                    playsInline
                    preload="auto"
                />
            )}
        </div>
    );
}
