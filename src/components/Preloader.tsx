"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            // Add a small delay to ensure smooth transition even on fast loads
            setTimeout(() => {
                setIsLoading(false);
            }, 800);
        };

        // Check if document is already loaded
        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    // remove from DOM after transition
    useEffect(() => {
        if (!isLoading) {
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 500); // match transition duration
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

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
