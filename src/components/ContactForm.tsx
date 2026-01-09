"use client";

import { useEffect, useState } from "react";
import { useInquiry } from "./InquiryContext";

export function ContactForm() {
    const { inquiryMessage } = useInquiry();
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (inquiryMessage) {
            setMessage(inquiryMessage);
        }
    }, [inquiryMessage]);

    return (
        <form className="flex flex-col gap-6" action="/api/contact" method="POST">
            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-primary font-bold font-display">
                        First Name
                    </label>
                    <input
                        className="bg-transparent border border-white/20 rounded-none p-3 text-white placeholder-transparent focus:border-primary focus:ring-0 outline-none transition-all font-body"
                        type="text"
                        name="firstName"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-primary font-bold font-display">
                        Last Name
                    </label>
                    <input
                        className="bg-transparent border border-white/20 rounded-none p-3 text-white placeholder-transparent focus:border-primary focus:ring-0 outline-none transition-all font-body"
                        type="text"
                        name="lastName"
                        required
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-primary font-bold font-display">
                    Email Address
                </label>
                <input
                    className="bg-transparent border border-white/20 rounded-none p-3 text-white placeholder-transparent focus:border-primary focus:ring-0 outline-none transition-all font-body"
                    type="email"
                    name="email"
                    required
                />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-primary font-bold font-display">
                    Phone Number
                </label>
                <input
                    className="bg-transparent border border-white/20 rounded-none p-3 text-white placeholder-transparent focus:border-primary focus:ring-0 outline-none transition-all font-body"
                    type="tel"
                    name="phone"
                    required
                />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-primary font-bold font-display">
                    Inquiry
                </label>
                <textarea
                    className="bg-transparent border border-white/20 rounded-none p-3 text-white placeholder-transparent focus:border-primary focus:ring-0 outline-none transition-all resize-none font-body"
                    rows={4}
                    name="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <button
                className="mt-4 bg-primary text-obsidian text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-sm hover:bg-white transition-colors w-max cursor-pointer font-display"
                type="submit"
            >
                Contact Us
            </button>
        </form>
    );
}
