import { ContactForm } from "./ContactForm";

export function Footer() {
    return (
        <footer className="bg-obsidian pt-16 pb-8" id="concierge">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 mb-16 items-start">
                    <div className="w-full lg:w-1/2 max-w-md">
                        <h2 className="text-4xl font-serif italic text-white mb-2">
                            Private{" "}
                            <span className="font-display not-italic font-light text-gray-400 ml-1">
                                Consultation
                            </span>
                        </h2>
                        <p className="text-gray-500 mb-10 text-sm tracking-wide font-body">
                            Speak to our Senior Concierge to discover your perfect selection.
                        </p>
                        <ContactForm />
                        <div className="mt-16 flex gap-8">
                            <a
                                className="text-[10px] font-bold text-primary/80 uppercase tracking-widest hover:text-primary transition-colors font-display"
                                href="https://www.instagram.com/chrono47official"
                            >
                                Instagram
                            </a>
                            <a
                                className="text-[10px] font-bold text-primary/80 uppercase tracking-widest hover:text-primary transition-colors font-display"
                                href="https://www.youtube.com/@chrono47official"
                            >
                                YouTube
                            </a>
                            <a
                                className="text-[10px] font-bold text-primary/80 uppercase tracking-widest hover:text-primary transition-colors font-display"
                                href="https://www.tiktok.com/@chrono47official"
                            >
                                TikTok
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:pt-8">
                        <div className="w-full h-64 rounded-xl overflow-hidden grayscale invert transition-all duration-500 relative bg-gray-800 border border-white/10 group">
                            <iframe
                                src="https://maps.google.com/maps?q=37%20W%2047th%20St%2C%20New%20York%2C%20NY%2010036&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-full border-0 pointer-events-none"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Chrono47 Location"
                            ></iframe>
                            <a
                                href="https://www.google.com/maps/place/Chrono+47/@40.7576416,-73.9803687,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2591d1a8a95c1:0xac2d2a75d8196b6d!8m2!3d40.7576416!4d-73.9803687!16s%2Fg%2F11vwm8m10w"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-10"
                                aria-label="Open Chrono 47 in Google Maps"
                            ></a>
                        </div>
                        <div className="flex justify-between items-start text-sm text-gray-400 font-body">
                            <div>
                                <h4 className="text-white font-serif text-lg italic mb-2">
                                    Chrono 47
                                </h4>
                                <p className="font-light tracking-wide">37 W 47th St</p>
                                <p className="font-light tracking-wide">Booth 64 & 65</p>
                                <p className="font-light tracking-wide">New York, NY 10036</p>
                                <p className="font-light tracking-wide mt-2 text-primary">(720) 492-6619</p>
                            </div>
                            <div className="text-right">
                                <h4 className="text-white font-serif text-lg italic mb-2">
                                    Hours
                                </h4>
                                <p className="font-light tracking-wide">Mon - Thu: 10am - 6pm</p>
                                <p className="font-light tracking-wide">Fri: 10am - 2pm</p>
                                <p className="font-light tracking-wide">Sun: 10am - 5pm</p>
                                <p className="font-light tracking-wide text-red-400">Sat: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-display">
                    <p>© {new Date().getFullYear()} Chrono 47. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a
                            className="hover:text-primary transition-colors uppercase tracking-widest"
                            href="#"
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
