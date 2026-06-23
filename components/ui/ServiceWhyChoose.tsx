"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import { Reveal } from "../../utils/AnimationReveal";
import { type ChoiceReason } from "../../data/serviceData";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});

interface ServiceWhyChooseProps {
  serviceTitle: string;
  reasons: ChoiceReason[];
}

export default function ServiceWhyChoose({ serviceTitle, reasons }: ServiceWhyChooseProps) {
  const reduced = useReducedMotion();

  if (!reasons || reasons.length === 0) return null;

  return (
    <div className="mt-36 flex flex-col items-center px-5">
      <Reveal>
        <h3 className={`${spaceGrotesk.className} text-center text-2xl font-bold md:text-3xl tracking-tight text-white mb-14`}>
          Why teams choose 4xCode for{" "}
          <span className="bg-gradient-to-r from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
            {serviceTitle}
          </span>
        </h3>
      </Reveal>

      {/* Premium Dynamic Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 w-full max-w-300">
        {reasons.map((item, idx) => {
          const isSentenceOnly = !item.desc || typeof item.desc !== "string" || item.desc.trim() === "";
          const displayLabel = isSentenceOnly ? "Benefit" : item.title;
          const displayText = isSentenceOnly ? item.title : item.desc;
          
          // Check if this card is the last item AND it's an odd number in the list
          const isLastAndOdd = idx === reasons.length - 1 && reasons.length % 2 !== 0;

          return (
            <motion.div
              key={item.title || idx}
              initial={{ opacity: 0, y: reduced ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.8,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ scale: 1.015 }}
              className={`w-full relative py-8 flex flex-col items-center justify-center will-change-transform group cursor-default ${
                isLastAndOdd ? "lg:col-span-2 lg:max-w-xl lg:justify-self-center" : ""
              }`}
            >
              {/* Micro Typography Label */}
              <span className="font-mono text-[10px] uppercase tracking-[2px] text-neutral-600 group-hover:text-[#ff8a8c] transition-colors duration-300 mb-2">
                0{idx + 1} &mdash; {displayLabel}
              </span>

              {/* Central Sentence Statement */}
              <p className="text-center text-base md:text-lg font-normal tracking-wide text-gray-400 group-hover:text-white transition-all duration-300 ease-out max-w-2xl leading-relaxed">
                {displayText}
              </p>

              {/* High-End Fading Gradient Border Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent opacity-60 group-hover:via-red-900/50 transition-colors duration-500 ${
                isLastAndOdd ? "lg:hidden" : ""
              }`} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}