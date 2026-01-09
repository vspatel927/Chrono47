export function Services() {
    return (
        <section className="py-24 bg-obsidian-light relative border-y border-white/5" id="services">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 font-display">
                        Our Services
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-serif italic text-white">
                        Concierge Experience
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group bg-obsidian border border-white/5 p-8 rounded-xl hover:border-primary/50 transition-colors duration-300">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-obsidian transition-colors">
                            <span className="material-symbols-outlined">watch</span>
                        </div>
                        <h4 className="text-2xl font-serif italic text-white mb-4">
                            Buy, Sell & Trade
                        </h4>
                        <p className="text-gray-400 text-sm tracking-wide leading-relaxed font-display">
                            Competitive market offers for your timepiece. We provide instant
                            liquidity for luxury watches.
                        </p>
                    </div>
                    <div className="group bg-obsidian border border-white/5 p-8 rounded-xl hover:border-primary/50 transition-colors duration-300">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-obsidian transition-colors">
                            <span className="material-symbols-outlined">diamond</span>
                        </div>
                        <h4 className="text-2xl font-serif italic text-white mb-4">
                            Bespoke Jewelry
                        </h4>
                        <p className="text-gray-400 text-sm tracking-wide leading-relaxed font-display">
                            Custom diamond setting and jewelry design. Create a unique piece
                            that tells your story.
                        </p>
                    </div>
                    <div className="group bg-obsidian border border-white/5 p-8 rounded-xl hover:border-primary/50 transition-colors duration-300">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-obsidian transition-colors">
                            <span className="material-symbols-outlined">construction</span>
                        </div>
                        <h4 className="text-2xl font-serif italic text-white mb-4">
                            Master Repairs
                        </h4>
                        <p className="text-gray-400 text-sm tracking-wide leading-relaxed font-display">
                            Certified horology experts for maintenance and restoration. Your
                            investment deserves the best care.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
