"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSafeReducedMotion } from "../../utils/useSafeReducedMotion";
import { Space_Grotesk } from "next/font/google";
import {
  Send as SendIcon,
  ErrorOutlined as ErrorIcon,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";

import { submitContactForm } from "../../lib/contactFormApi";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type ContactFormProps = {
  variant?: "default" | "sidebar";
};

export default function ContactForm({ variant = "default" }: ContactFormProps) {
  const router = useRouter();
  const reduced = useSafeReducedMotion();
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    details: "",
  });

  const isSidebar = variant === "sidebar";

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await submitContactForm(formData);

      if (response.success) {
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    /* Constrained mobile viewports to max-w-xl balanced with auto-margins */
    <div
      className={`relative flex flex-col w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 box-border ${
        isSidebar ? "max-w-full" : "lg:w-[58%]"
      }`}
    >
      <div className="w-full relative flex box-border">
        <div
          className={`absolute inset-0 rounded-2xl md:rounded-[32px] bg-[#f90a1f]/5 md:bg-[#f90a1f]/10 blur-xl md:blur-2xl pointer-events-none transition-opacity duration-300 ${
            isSidebar ? "opacity-10" : "opacity-30"
          }`}
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className={`relative w-full rounded-2xl md:rounded-[32px] border border-white/5 md:border-[rgba(255,255,255,0.1)] bg-white/[0.02] md:bg-[rgba(255,255,255,0.04)] shadow-xl flex flex-col justify-between box-border ${
            isSidebar
              ? "px-4 py-5 sm:px-6 sm:py-8 max-h-[calc(100vh-130px)]"
              : "px-4 py-6 sm:px-8 sm:py-10 md:p-12"
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-4 md:gap-5 h-full w-full box-border ${isSidebar ? "overflow-y-auto no-scrollbar" : ""}`}
          >
            <div className="space-y-1 w-full">
              <h2
                className={`${spaceGrotesk.className} font-bold leading-tight tracking-tight text-white ${
                  isSidebar ? "text-base sm:text-xl" : "text-xl sm:text-[32px]"
                }`}
              >
                Let&apos;s build something great together
              </h2>
              <p
                className={`font-normal leading-relaxed text-zinc-500 max-w-full text-xs sm:text-base ${
                  isSidebar ? "text-[12px]" : "lg:max-w-sm"
                }`}
              >
                Whether you have a project in mind or just want to say hi, we&apos;d love to hear from you.
              </p>
            </div>

            {/* Input fields Stack */}
            <div className="flex flex-col gap-3 md:gap-4 w-full box-border">
              <div className="flex flex-col gap-1 w-full">
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  required
                  disabled={isSubmitting}
                  className="w-full min-w-0 rounded-lg border border-white/5 bg-black/40 px-3.5 py-2 md:py-2.5 text-xs sm:text-sm text-white placeholder:text-zinc-600 outline-none focus:border-[#f51d31]/40 transition-colors box-border disabled:opacity-40"
                />
              </div>

              <div className="flex flex-col gap-1 w-full">
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@gmail.com"
                  required
                  disabled={isSubmitting}
                  className="w-full min-w-0 rounded-lg border border-white/5 bg-black/40 px-3.5 py-2 md:py-2.5 text-xs sm:text-sm text-white placeholder:text-zinc-600 outline-none focus:border-[#f51d31]/40 transition-colors box-border disabled:opacity-40"
                />
              </div>

              <div className="flex flex-col gap-1 w-full">
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                  Number
                </label>
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  placeholder="000-111-2221"
                  className="w-full min-w-0 rounded-lg border border-white/5 bg-black/40 px-3.5 py-2 md:py-2.5 text-xs sm:text-sm text-white placeholder:text-zinc-600 outline-none focus:border-[#f51d31]/40 transition-colors box-border disabled:opacity-40"
                />
              </div>

              <div className="flex flex-col gap-1 w-full">
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                  Project details
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder="Tell us what you're building..."
                  required
                  disabled={isSubmitting}
                  rows={isSidebar ? 3 : 4}
                  className="w-full min-w-0 rounded-lg border border-white/5 bg-black/40 px-3.5 py-2 md:py-2.5 text-xs sm:text-sm text-white placeholder:text-zinc-600 outline-none resize-none focus:border-[#f51d31]/40 transition-colors min-h-[80px] box-border disabled:opacity-40"
                />
              </div>
            </div>

            {/* Submit Action Block */}
            <div className="flex flex-col gap-2.5 w-full pt-1 box-border">
              <motion.div
                whileHover={
                  reduced || isSubmitting ? {} : { scale: 1.01, y: -0.5 }
                }
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="w-full"
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex h-10 md:h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#f51d31] py-2.5 px-6 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-[#ed1c20] transition-all duration-300 cursor-pointer box-border disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <SendIcon style={{ fontSize: 14 }} />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>
              </motion.div>
              <p className="text-[10px] text-zinc-600 text-center font-normal">
                We&apos;ll respond within 24 hours during business days.
              </p>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Error Popup Layer Modal */}
      <AnimatePresence>
        {showErrorPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: reduced ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: reduced ? 1 : 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-sm w-full bg-[#0D0D0E] border border-white/10 rounded-2xl p-6 shadow-2xl text-center flex flex-col items-center space-y-4 box-border"
            >
              <div className="relative flex items-center justify-center w-11 h-11 rounded-full border border-[#f90a1f]/20 bg-[#f90a1f]/5 text-[#ef1f23]">
                <ErrorIcon style={{ fontSize: 20 }} />
              </div>
              <div className="space-y-1">
                <h3 className={`${spaceGrotesk.className} text-sm font-bold text-white`}>
                  Submission not successful
                </h3>
                <p className="text-zinc-500 text-[11px] leading-relaxed">
                  Your inquiry was not successful, please try again.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowErrorPopup(false)}
                className="w-full inline-flex h-8 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] text-zinc-300 text-[11px] font-medium uppercase tracking-wider transition-all"
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