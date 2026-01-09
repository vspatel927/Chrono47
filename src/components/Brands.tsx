export function Brands() {
    return (
        <div className="border-y border-white/5 bg-obsidian-light py-8 overflow-hidden relative" id="brands">
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-obsidian z-10 pointer-events-none"></div>
            <div className="flex justify-between items-center max-w-7xl mx-auto px-6 lg:px-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 w-full text-center">
                    <span className="text-xl font-serif tracking-widest text-white/80">ROLEX</span>
                    <span className="text-xl font-serif tracking-widest text-white/80">AUDEMARS PIGUET</span>
                    <span className="text-xl font-serif tracking-widest text-white/80">PATEK PHILIPPE</span>
                    <span className="text-xl font-serif tracking-widest text-white/80">RICHARD MILLE</span>
                    <span className="text-xl font-serif tracking-widest text-white/80">CARTIER</span>
                </div>
            </div>
        </div>
    );
}
