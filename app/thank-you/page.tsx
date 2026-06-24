"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Space_Grotesk, Inter } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";
import { useSafeReducedMotion } from "../../utils/useSafeReducedMotion";
import { Reveal } from "../../utils/AnimationReveal";
import MailOutlineIcon from "@mui/icons-material/MailOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function ThankYouPage() {
  const router = useRouter();
  const reduced = useSafeReducedMotion();
  const [countdown, setCountdown] = useState(10);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasAccess = window.sessionStorage.getItem("form_submitted");

      if (hasAccess !== "true") {
        // Kick out users trying to cheat the route URL or hard refresh
        router.replace("/");
      } else {
        setIsVerified(true);
      }
    }
  }, [router]);

  // 2. Controlled 10-Second Countdown
  // 2. Controlled 10-Second Countdown
  useEffect(() => {
    if (!isVerified) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);

          // 1. Clear out the token key flag safely
          if (typeof window !== "undefined") {
            window.sessionStorage.removeItem("form_submitted");
          }

          setTimeout(() => {
            router.push("/");
          }, 0);

          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVerified, router]);

  const handleClearAccess = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem("form_submitted");
    }
  };
  if (!isVerified) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <div
      className={`bg-black text-white min-h-screen w-full flex items-start justify-center pt-32 md:pt-40 relative overflow-hidden px-6 ${inter.className}`}
    >
      <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-15%] left-[25%] w-[50%] h-[70%] rounded-full bg-[#F90A1F]/10 blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[25%] w-[40%] h-[60%] rounded-full bg-[#F90A1F]/5 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>

      <div className="relative max-w-xl w-full text-center z-10 flex flex-col items-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: reduced ? 1 : 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center w-20 h-20 rounded-full border border-white/5 bg-[#0D0D0E]/60 backdrop-blur-md shadow-xl group select-none"
        >
          <div className="absolute inset-0 rounded-full bg-[#F90A1F]/10 blur-md opacity-70" />
          <span
            className={`${spaceGrotesk.className} text-xl font-bold text-white tracking-tight`}
          >
            {countdown}s
          </span>
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
            <circle
              cx="40"
              cy="40"
              r="38"
              stroke="rgba(255, 255, 255, 0.03)"
              strokeWidth="1.5"
              fill="transparent"
            />
            <motion.circle
              cx="40"
              cy="40"
              r="38"
              stroke="#ef1f23"
              strokeWidth="1.5"
              fill="transparent"
              strokeDasharray="238"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: 238 - (238 * countdown) / 10 }}
              transition={{ duration: 1, ease: "linear" }}
            />
          </svg>
        </motion.div>

        {/* Dynamic Title Headers Section */}
        <div className="flex flex-col space-y-3">
          <Reveal>
            <span className="text-[#f90a1f] text-[11px] font-normal uppercase tracking-[3.6px] leading-4">
              Transmission Confirmed
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className={`${spaceGrotesk.className} text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-white leading-tight`}
            >
              Inquiry Saved to{" "}
              <span className="bg-gradient-to-br from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                the Floor
              </span>
              <span className="text-[#ef1f23]">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-gray-400 text-sm max-w-md mx-auto font-light leading-relaxed">
              Your transmission has been logged. Our engineering desk will
              review the tech specs and reach back out inside 24 cycles.
            </p>
          </Reveal>
        </div>

        {/* Minimal Studio Profile Wrapper & Metadata Box */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-[#070708] border border-white/5 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-2xl select-none"
        >
          <div className="flex items-center gap-3.5">
            <Link
              href="/"
              aria-label="4xcode home"
              className="flex items-center"
            >
              <Image
                src="/assets/logo1.png"
                height={48}
                width={48}
                alt="4xcode logo"
                className="block h-12 w-[57px] object-contain"
              />
            </Link>
            <div className="flex flex-col">
              <span
                className={`${spaceGrotesk.className} font-bold text-sm tracking-tight text-zinc-200 leading-tight`}
              >
                4xCode Studio
              </span>
              <span className="text-xs font-light tracking-wide text-zinc-500 mt-0.5">
                Boutique engineering output.
              </span>
            </div>
          </div>

          <a
            href="mailto:hello@4xcode.com"
            className="flex items-center gap-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] px-3.5 py-2 text-xs text-zinc-400 hover:text-white transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <MailOutlineIcon
              style={{ fontSize: 14 }}
              className="text-[#ef1f23]"
            />
            <span>hello@4xcode.com</span>
          </a>
        </motion.div>

        {/* Navigation Actions Component Trigger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="w-full pt-2"
        >
          <Link
            href="/"
            onClick={handleClearAccess}
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full border border-white/[0.08] bg-zinc-900/40 text-zinc-300 text-xs font-medium tracking-[1.5px] uppercase transition-all duration-300 hover:border-[#ef1f23]/50 hover:text-white hover:bg-[#ef1f23]/[0.04] cursor-pointer outline-none w-full sm:w-auto"
          >
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-[#ef1f23]/10 -z-10" />
            <span>Return to Home Page</span>
            <ArrowForwardIcon
              className="text-zinc-500 group-hover:text-[#ef1f23] group-hover:translate-x-0.5 transition-all duration-300"
              style={{ fontSize: 14 }}
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
