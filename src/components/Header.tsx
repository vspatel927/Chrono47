"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "./Icons";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [logoError, setLogoError] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-obsidian/95 md:bg-obsidian/90 md:backdrop-blur-md transition-all">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex h-24 lg:h-32 items-center justify-between">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex flex-1 items-center gap-8">
                        <Link
                            className="text-xs uppercase tracking-widest font-bold text-gray-400 hover:text-primary transition-colors"
                            href="#collection"
                        >
                            Collection
                        </Link>
                        <Link
                            className="text-xs uppercase tracking-widest font-bold text-gray-400 hover:text-primary transition-colors"
                            href="#brands"
                        >
                            Brands
                        </Link>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center gap-2 justify-center flex-shrink-0">
                        <Link href="/" className="flex flex-col items-center">
                            <div className={`relative h-20 w-auto lg:h-24 ${logoError ? 'hidden' : 'block'}`}>
                                <Image
                                    src="/assets/header-logo.png"
                                    alt="Chrono47 Logo"
                                    width={200}
                                    height={100}
                                    priority
                                    className="h-full w-auto object-contain brightness-110 mix-blend-screen"
                                    onError={() => setLogoError(true)}
                                />
                            </div>
                            <span className={`${logoError ? 'block' : 'hidden'} font-serif italic text-2xl text-white`}>
                                Chrono<span className="text-primary">47</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Right Actions */}
                    <div className="hidden md:flex flex-1 items-center justify-end gap-8">
                        <Link
                            className="text-xs uppercase tracking-widest font-bold text-gray-400 hover:text-primary transition-colors"
                            href="#services"
                        >
                            Services
                        </Link>
                        <Link
                            className="text-xs uppercase tracking-widest font-bold text-gray-400 hover:text-primary transition-colors"
                            href="#about"
                        >
                            About
                        </Link>
                        <Link href="#concierge" className="flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-xs uppercase tracking-widest font-bold text-obsidian shadow-lg shadow-primary/20 hover:bg-white transition-all duration-300 cursor-pointer">
                            Concierge
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden flex-1 justify-end">
                        <button
                            className="text-white p-2 hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <Icon name={isMobileMenuOpen ? "close" : "menu"} className="text-2xl" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 top-24 z-[100] bg-black border-t border-white/10 md:hidden flex flex-col p-6 gap-6 animate-in slide-in-from-top-4 duration-300 min-h-[calc(100vh-96px)]">
                    <nav className="flex flex-col gap-6 items-center text-center">
                        <Link
                            className="text-sm uppercase tracking-[0.2em] font-bold text-gray-200 hover:text-primary transition-colors py-2"
                            href="#collection"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Collection
                        </Link>
                        <Link
                            className="text-sm uppercase tracking-[0.2em] font-bold text-gray-200 hover:text-primary transition-colors py-2"
                            href="#brands"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Brands
                        </Link>
                        <Link
                            className="text-sm uppercase tracking-[0.2em] font-bold text-gray-200 hover:text-primary transition-colors py-2"
                            href="#services"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            className="text-sm uppercase tracking-[0.2em] font-bold text-gray-200 hover:text-primary transition-colors py-2"
                            href="#about"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link href="#concierge" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm uppercase tracking-widest font-bold text-obsidian shadow-lg shadow-primary/20 hover:bg-white transition-all duration-300 w-full max-w-xs mt-4">
                            Concierge
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
