"use client";

import { useEffect, useState } from "react";
import { useInquiry } from "./InquiryContext";

export function ContactForm() {
    const { inquiryMessage } = useInquiry();
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [responseMessage, setResponseMessage] = useState("");

    useEffect(() => {
        if (inquiryMessage) {
            setMessage(inquiryMessage);
        }
    }, [inquiryMessage]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");
        setResponseMessage("");

        const formData = new FormData(e.currentTarget);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setStatus("success");
                setResponseMessage("Thank you! Your inquiry has been sent successfully.");
                // Optional: Reset form fields?
                // e.currentTarget.reset(); 
                // But we might want to keep the values so user sees what they sent, 
                // up to UX preference. Let's clear message at least if it was a generic inquiry?
                // Actually standard is usually to clear form.
                if (e.currentTarget) {
                    (e.currentTarget as HTMLFormElement).reset();
                    setMessage("");
                }
            } else {
                setStatus("error");
                setResponseMessage(data.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setResponseMessage("Failed to send inquiry. Please try again later.");
        }
    }

    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Honeypot field for spam protection */}
            <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
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

            {status === "success" && (
                <div className="p-4 bg-green-900/20 border border-green-500/50 text-green-400 text-sm font-body">
                    {responseMessage}
                </div>
            )}

            {status === "error" && (
                <div className="p-4 bg-red-900/20 border border-red-500/50 text-red-400 text-sm font-body">
                    {responseMessage}
                </div>
            )}

            <button
                className="mt-4 bg-primary text-obsidian text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-sm hover:bg-white transition-colors w-max cursor-pointer font-display disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={status === "submitting"}
            >
                {status === "submitting" ? "Sending..." : "Contact Us"}
            </button>
        </form>
    );
}
