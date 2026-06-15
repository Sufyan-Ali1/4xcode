"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import { Send as SendIcon } from "@mui/icons-material";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });

export default function ContactForm() {
  const reduced = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    details: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitting Form Data:", formData);
  };

  return (
    <div className="w-full lg:w-[58%] relative flex">
      <div className="absolute inset-0 rounded-[32px] bg-[#f90a1f]/20 blur-xl pointer-events-none opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: reduced ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative w-full rounded-3xl md:rounded-[32px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-8 py-10 md:p-12 shadow-[0_0_30px_0_rgba(239,31,35,0.35)] flex flex-col justify-between"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full">
          <div className="space-y-2">
            <h2
              className={`${spaceGrotesk.className} text-2xl sm:text-[35px] font-bold leading-[1.2] tracking-tight text-white`}
            >
              Let&apos;s build something great together
            </h2>
            <p className="text-[16px] font-normal leading-[23px] text-white/70 max-w-[400px]">
              Whether you have a project in mind or just want to say hi, we&apos;d love to hear from you. Fill out the form and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="block text-[14px] font-medium leading-[20px] text-[rgba(255,255,255,0.56)]">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                required
                className="w-full rounded-[8px] border border-[rgba(245,29,49,0.15)] bg-[rgba(0,0,0,0.54)] px-[17px] py-[15px] text-[16px] leading-normal text-[rgba(255,255,255,0.65)] placeholder-[rgba(255,255,255,0.3)] outline-none transition-all duration-200 focus:border-[rgba(245,29,49,0.4)] focus:bg-[rgba(0,0,0,0.7)]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="block text-[14px] font-medium leading-[20px] text-[rgba(255,255,255,0.56)]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@gmail.com"
                required
                className="w-full rounded-[8px] border border-[rgba(245,29,49,0.15)] bg-[rgba(0,0,0,0.54)] px-[17px] py-[15px] text-[16px] leading-normal text-[rgba(255,255,255,0.65)] placeholder-[rgba(255,255,255,0.3)] outline-none transition-all duration-200 focus:border-[rgba(245,29,49,0.4)] focus:bg-[rgba(0,0,0,0.7)]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="block text-[14px] font-medium leading-[20px] text-[rgba(255,255,255,0.56)]">
                Number
              </label>
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                placeholder="000-111-2221"
                className="w-full rounded-[8px] border border-[rgba(245,29,49,0.15)] bg-[rgba(0,0,0,0.54)] px-[17px] py-[15px] text-[16px] leading-normal text-[rgba(255,255,255,0.65)] placeholder-[rgba(255,255,255,0.3)] outline-none transition-all duration-200 focus:border-[rgba(245,29,49,0.4)] focus:bg-[rgba(0,0,0,0.7)]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="block text-[14px] font-medium leading-[20px] text-[rgba(255,255,255,0.56)]">
                Project details
              </label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                placeholder="Tell us what you're building, the goals, and the timeline...."
                required
                rows={5}
                className="w-full rounded-[8px] border border-[rgba(245,29,49,0.15)] bg-[rgba(0,0,0,0.54)] px-[17px] py-[15px] text-[16px] leading-normal text-[rgba(255,255,255,0.65)] placeholder-[rgba(255,255,255,0.3)] outline-none transition-all duration-200 focus:border-[rgba(245,29,49,0.4)] focus:bg-[rgba(0,0,0,0.7)] resize-none leading-[24px] min-h-[140px]"
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
                className="group inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-[8px] bg-[#f51d31] py-[16px] px-6 text-[16px] font-semibold text-white shadow-[0_0_25px_0_rgba(239,31,35,0.4)] hover:opacity-90 transition-all duration-300 cursor-pointer"
              >
                <SendIcon style={{ fontSize: 18 }} />
                <span>Send Message</span>
              </button>
            </motion.div>

            <p className="text-[14px] text-white/60 text-center font-normal leading-[20px]">
              We&apos;ll respond to your message within 24 hours during business
              days.
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
