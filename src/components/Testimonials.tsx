"use client";
import { Icon } from "./Icons";

export function Testimonials() {
    return (
        <section className="py-24 bg-obsidian border-b border-white/5">
            <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
                <div className="flex justify-center gap-2 mb-8 text-primary">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} name="star" className="text-sm" />
                    ))}
                </div>
                <blockquote className="text-2xl md:text-4xl font-serif italic text-white leading-relaxed mb-10 max-w-4xl mx-auto">
                    &quot;These guys are the number 1 watch and jewelry dealer on 47th St. Honest which is a hard commodity to find on 47th St.&quot;
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-obsidian-light border border-primary/20 flex items-center justify-center text-xs text-primary font-bold">
                        RC
                    </div>
                    <div className="text-left">
                        <div className="text-primary text-xs font-bold uppercase tracking-widest font-display">
                            Ralph C.
                        </div>
                        <div className="text-primary/60 text-[10px] uppercase tracking-widest font-display">
                            Google Review
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
