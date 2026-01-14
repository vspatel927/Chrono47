"use client";

import Link from "next/link";
import Image from "next/image";
import { useInquiry } from "./InquiryContext";
import { Icon } from "./Icons";

const WATCHES = [
    {
        id: 1,
        name: "Rolex Daytona 'Panda'",
        details: "Ceramic Bezel • 126500LN",
        price: "$34,500",
        image: "/assets/watches/daytona-panda.avif"
    },
    {
        id: 2,
        name: "AP Royal Oak",
        details: "Rose Gold • Blue Dial • 41mm",
        price: "$78,000",
        image: "/assets/watches/royal-oak-rose-gold.avif"
    },
    {
        id: 3,
        name: "Patek Nautilus",
        details: "Ref 5711/1A • Blue Dial",
        price: "$125,000",
        image: "/assets/watches/nautilus-5711.avif"
    }
];

export function Collection() {
    const { setInquiryMessage } = useInquiry();

    const handleInquire = (watchName: string) => {
        setInquiryMessage(`I'm interested in the ${watchName}`);
        const element = document.getElementById('concierge');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSourcingInquiry = () => {
        setInquiryMessage("I'm looking for ");
        const element = document.getElementById('concierge');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-obsidian" id="collection">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-16 gap-4">
                    <h2 className="text-primary text-xs font-bold tracking-[0.2em] uppercase font-display">
                        Inventory
                    </h2>
                    <h3 className="text-4xl md:text-5xl leading-tight">
                        <span className="font-serif italic font-normal text-white">
                            Curated{" "}
                        </span>
                        <span className="font-display not-italic font-light text-gray-400 ml-1">
                            Watches
                        </span>
                    </h3>
                    <div className="w-12 h-px bg-primary/30 mt-2"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {WATCHES.map((watch) => (
                        <div key={watch.id} className="group flex flex-col gap-4">
                            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-obsidian-light border border-white/5">
                                <div className="absolute top-3 right-3 z-10">
                                    <span className="bg-primary text-obsidian text-[10px] tracking-widest uppercase font-bold px-3 py-1.5 rounded">
                                        New Arrival
                                    </span>
                                </div>
                                <div className="absolute inset-0">
                                    <Image
                                        src={watch.image}
                                        alt={watch.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/60 backdrop-blur-sm">
                                    <button
                                        onClick={() => handleInquire(watch.name)}
                                        className="w-full block text-center bg-white text-obsidian text-xs uppercase tracking-widest font-bold py-3 rounded hover:bg-primary transition-colors cursor-pointer"
                                    >
                                        Inquire Now
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-white text-xl font-serif mb-1">
                                            {watch.name}
                                        </h4>
                                        <p className="text-gray-400 text-xs uppercase tracking-wider font-display">
                                            {watch.details}
                                        </p>
                                    </div>
                                    <p className="text-primary font-bold tracking-wide font-display">
                                        {watch.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-12 hidden">
                    <Link
                        className="group flex items-center gap-2 text-white text-xs tracking-widest uppercase font-bold hover:text-primary transition-colors font-display"
                        href="#"
                    >
                        View Full Collection
                        <span className="transition-transform group-hover:translate-x-1 flex items-center">
                            <Icon name="arrow_forward" className="text-lg" />
                        </span>
                    </Link>
                </div>

                <div className="mt-20 pt-12 border-t border-white/5 flex flex-col items-center text-center">
                    <p className="text-gray-400 font-display text-sm tracking-wide mb-4">
                        Looking for a specific timepiece not in our current inventory?
                    </p>
                    <button
                        onClick={handleSourcingInquiry}
                        className="text-primary text-xs font-bold tracking-[0.2em] uppercase hover:text-white transition-colors cursor-pointer"
                    >
                        Inquire for Sourcing →
                    </button>
                </div>
            </div>
        </section>
    );
}
