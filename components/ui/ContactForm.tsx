"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import {
  Send as SendIcon,
  ErrorOutlined as ErrorIcon,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type ContactFormProps = {
  variant?: "default" | "sidebar";
};

export default function ContactForm({ variant = "default" }: ContactFormProps) {
  const router = useRouter();
  const reduced = useReducedMotion();
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    details: "",
  });

  const isSidebar = variant === "sidebar";

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/maqzvbyz", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          number: "",
          details: "",
        });

        if (typeof window !== "undefined") {
          window.sessionStorage.setItem("form_submitted", "true");
        }

        router.push("/thank-you");
      } else {
        setShowErrorPopup(true);
      }
    } catch (error) {
      console.error(error);
      setShowErrorPopup(true);
    }
  };

  return (
    <div
      className={`relative flex flex-col w-full box-border ${
        isSidebar ? "max-w-full" : "lg:w-[58%]"
      }`}
    >
      <div className="w-full relative flex box-border">
        {/* FIX 1: Modified glow element to conform to the layout's aspect ratio. 
           In sidebar view, we reduce opacity to keep high contrast text legible. */}
        <div 
          className={`absolute inset-0 rounded-3xl md:rounded-[32px] bg-[#f90a1f]/10 blur-2xl pointer-events-none transition-opacity duration-300 ${
            isSidebar ? "opacity-20" : "opacity-40"
          }`} 
          aria-hidden="true" 
        />

        {/* FIX 2: Added a balanced container box-shadow for sidebars (`shadow-[0_4px_24px_rgba(0,0,0,0.5)]`).
           This keeps the card completely straight and contained. */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className={`relative w-full rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md flex flex-col box-border ${
            isSidebar 
              ? "px-5 py-6 shadow-[0_4px_30px_rgba(0,0,0,0.5)] md:rounded-3xl" 
              : "px-8 py-10 md:p-12 shadow-[0_0_40px_0_rgba(239,31,35,0.25)] md:rounded-[32px]"
          }`}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full box-border">
            <div className="space-y-1.5 w-full text-left">
              <h2
                className={`${spaceGrotesk.className} font-bold leading-tight tracking-tight text-white ${
                  isSidebar ? "text-lg sm:text-xl" : "text-2xl sm:text-[32px]"
                }`}
              >
                Let&apos;s build something great together
              </h2>
              <p
                className={`font-normal leading-relaxed text-zinc-400 ${
                  isSidebar ? "text-[13px]" : "text-sm sm:text-base max-w-sm"
                }`}
              >
                Whether you have a project in mind or just want to say hi, we&apos;d love to hear from you.
              </p>
            </div>

            {/* Input fields stack */}
            <div className="flex flex-col gap-4 w-full box-border">
              <div className="flex flex-col gap-1.5">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  required
                  className="w-full min-w-0 rounded-lg border border-white/5 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-[#f51d31]/40 transition-colors box-border"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@gmail.com"
                  required
                  className="w-full min-w-0 rounded-lg border border-white/5 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-[#f51d31]/40 transition-colors box-border"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  Number
                </label>
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  placeholder="000-111-2221"
                  className="w-full min-w-0 rounded-lg border border-white/5 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-[#f51d31]/40 transition-colors box-border"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  Project details
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder="Tell us what you're building..."
                  required
                  rows={isSidebar ? 3 : 5}
                  className="w-full min-w-0 rounded-lg border border-white/5 bg-black/40 px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none resize-none focus:border-[#f51d31]/40 transition-colors min-h-[100px] box-border"
                />
              </div>
            </div>

            {/* Submit CTA Container */}
            <div className="flex flex-col gap-3 w-full pt-2 box-border">
              <motion.div
                whileHover={reduced ? {} : { scale: 1.01, y: -0.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="w-full"
              >
                <button
                  type="submit"
                  className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#f51d31] py-2.5 px-6 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(245,29,49,0.3)] hover:bg-[#ed1c20] transition-all duration-300 cursor-pointer box-border"
                >
                  <SendIcon style={{ fontSize: 16 }} />
                  <span>Send Message</span>
                </button>
              </motion.div>
              <p className="text-[11px] text-zinc-500 text-center font-normal">
                We&apos;ll respond within 24 hours during business days.
              </p>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Error Modal Overlay */}
      <AnimatePresence>
        {showErrorPopup && (
          <div className="fixed inset-0 z-120 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: reduced ? 1 : 0.96, y: reduced ? 0 : 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: reduced ? 1 : 0.96, y: reduced ? 0 : 8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-sm w-full bg-[#0D0D0E] border border-white/10 rounded-2xl p-6 shadow-2xl text-center flex flex-col items-center space-y-4 box-border"
            >
              <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-[#f90a1f]/20 bg-[#f90a1f]/5 text-[#ef1f23]">
                <div className="absolute inset-0 rounded-full bg-[#f90a1f]/10 blur-sm opacity-60" />
                <ErrorIcon style={{ fontSize: 24 }} />
              </div>

              <div className="space-y-1.5">
                <h3 className={`${spaceGrotesk.className} text-base font-bold text-white tracking-tight`}>
                  Submission not successful
                </h3>
                <p className="text-zinc-400 text-xs font-normal leading-relaxed">
                  Your inquiry was not successful, please try again.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowErrorPopup(false)}
                className="mt-2 w-full inline-flex h-9 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] text-zinc-300 hover:text-white text-xs font-medium uppercase tracking-wider transition-all duration-300 outline-none cursor-pointer"
              >
                <span>Go Back</span>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}