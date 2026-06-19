"use client";

import React, { useState } from "react";
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

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/maqzvbyz", {
        method: "POST",
        headers: {
          Accept: "application/json",
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
      className={`relative flex flex-col gap-4 ${
        isSidebar ? "w-full" : "w-full lg:w-[58%]"
      }`}
    >
      <div className="w-full relative flex">
        <div className="absolute inset-0 rounded-[32px] bg-[#f90a1f]/20 blur-xl pointer-events-none opacity-40" />

        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className={`relative w-full rounded-3xl md:rounded-[32px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] shadow-[0_0_30px_0_rgba(239,31,35,0.35)] flex flex-col justify-between ${
            isSidebar ? "px-6 py-8" : "px-8 py-10 md:p-12"
          }`}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 h-full">
            <div className="space-y-2">
              <h2
                className={`${spaceGrotesk.className} font-bold leading-[1.2] tracking-tight text-white ${
                  isSidebar ? "text-xl sm:text-2xl" : "text-2xl sm:text-[35px]"
                }`}
              >
                Let&apos;s build something great together
              </h2>
              <p
                className={`font-normal leading-[22px] text-white/70 ${
                  isSidebar ? "text-[14px]" : "text-[16px] max-w-[400px]"
                }`}
              >
                Whether you have a project in mind or just want to say hi,
                we&apos;d love to hear from you.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="block text-[13px] font-medium leading-[18px] text-[rgba(255,255,255,0.56)]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  required
                  className="w-full min-w-0 rounded-[8px] border border-[rgba(245,29,49,0.15)] bg-[rgba(0,0,0,0.54)] px-4 py-3 text-[15px] text-[rgba(255,255,255,0.65)] outline-none focus:border-[#f51d31]/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="block text-[13px] font-medium leading-[18px] text-[rgba(255,255,255,0.56)]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@gmail.com"
                  required
                  className="w-full min-w-0 rounded-[8px] border border-[rgba(245,29,49,0.15)] bg-[rgba(0,0,0,0.54)] px-4 py-3 text-[15px] text-[rgba(255,255,255,0.65)] outline-none focus:border-[#f51d31]/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="block text-[13px] font-medium leading-[18px] text-[rgba(255,255,255,0.56)]">
                  Number
                </label>
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  placeholder="000-111-2221"
                  className="w-full min-w-0 rounded-[8px] border border-[rgba(245,29,49,0.15)] bg-[rgba(0,0,0,0.54)] px-4 py-3 text-[15px] text-[rgba(255,255,255,0.65)] outline-none focus:border-[#f51d31]/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="block text-[13px] font-medium leading-[18px] text-[rgba(255,255,255,0.56)]">
                  Project details
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder="Tell us what you're building..."
                  required
                  rows={isSidebar ? 4 : 5}
                  className="w-full min-w-0 rounded-[8px] border border-[rgba(245,29,49,0.15)] bg-[rgba(0,0,0,0.54)] px-4 py-3 text-[15px] text-[rgba(255,255,255,0.65)] outline-none resize-none focus:border-[#f51d31]/50 transition-colors min-h-[110px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <motion.div
                whileHover={reduced ? {} : { scale: 1.015, y: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <button
                  type="submit"
                  className="group inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-[8px] bg-[#f51d31] py-3 px-6 text-[15px] font-semibold text-white shadow-[0_0_25px_0_rgba(239,31,35,0.4)] hover:opacity-90 transition-all duration-300 cursor-pointer"
                >
                  <SendIcon style={{ fontSize: 18 }} />
                  <span>Send Message</span>
                </button>
              </motion.div>
              <p className="text-[13px] text-white/60 text-center font-normal">
                We&apos;ll respond within 24 hours during business days.
              </p>
            </div>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {showErrorPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{
                opacity: 0,
                scale: reduced ? 1 : 0.95,
                y: reduced ? 0 : 10,
              }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{
                opacity: 0,
                scale: reduced ? 1 : 0.95,
                y: reduced ? 0 : 10,
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-sm w-full bg-[#0D0D0E] border border-white/10 rounded-2xl p-6 shadow-2xl text-center select-none flex flex-col items-center space-y-4"
            >
              <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-[#f90a1f]/20 bg-[#f90a1f]/5 text-[#ef1f23]">
                <div className="absolute inset-0 rounded-full bg-[#f90a1f]/10 blur-sm opacity-60" />
                <ErrorIcon style={{ fontSize: 24 }} />
              </div>

              <div className="space-y-1.5">
                <h3
                  className={`${spaceGrotesk.className} text-lg font-bold text-white tracking-tight`}
                >
                  Submission not successful
                </h3>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  Your inquiry was not successful, please try again.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowErrorPopup(false)}
                className="mt-2 w-full inline-flex h-10 items-center justify-center gap-1.5 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] text-zinc-300 hover:text-white text-xs font-medium uppercase tracking-wider transition-all duration-300 outline-none cursor-pointer"
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