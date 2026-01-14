"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLoading } from "./LoadingContext";

export const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);
    const { setIsLoaded } = useLoading();

    useEffect(() => {
        // Immediate dismissal after mount
        setIsLoading(false);
    }, []);

    // remove from DOM after transition
    useEffect(() => {
        if (!isLoading) {
            const timer = setTimeout(() => {
                setShouldRender(false);
                setIsLoaded(true); // Signal that the site has loaded
            }, 500); // match transition duration
            return () => clearTimeout(timer);
        }
    }, [isLoading, setIsLoaded]);

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background-light dark:bg-background-dark transition-opacity duration-500 ${isLoading ? "opacity-100" : "opacity-0"
                }`}
        >
            <div className="relative w-32 h-32 animate-pulse">
                <Image
                    src="/assets/header-logo.png"
                    alt="Loading..."
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    );
};
