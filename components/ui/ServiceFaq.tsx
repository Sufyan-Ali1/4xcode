"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import { Reveal } from "../../utils/AnimationReveal";
import { type Faq } from "../../data/serviceData";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});

interface ServiceFaqProps {
  faqs: Faq[];
}

export default function ServiceFaq({ faqs }: ServiceFaqProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="">
      <Reveal>
        <div className="space-y-2 mb-10 text-center">
          <p className="text-[#ef1f23] text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
            Technical Validation
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl tracking-tight text-white">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>
      </Reveal>

      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openFaqIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="overflow-hidden rounded-xl border border-white/5 bg-white/2 transition-colors duration-300 hover:border-white/10"
            >
              <button
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between p-5 text-left font-medium text-zinc-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ef1f23]/50"
              >
                <span className={`${spaceGrotesk.className} text-base md:text-lg tracking-wide`}>
                  {faq.q}
                </span>
                <span className="ml-4 shrink-0 text-zinc-500 transition-colors duration-300 group-hover:text-zinc-300">
                  {isOpen ? (
                    <RemoveIcon style={{ fontSize: 18 }} className="text-[#ef1f23]" />
                  ) : (
                    <AddIcon style={{ fontSize: 18 }} />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: "auto", 
                      opacity: 1,
                      transition: {
                        height: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                        opacity: { duration: 0.25, delay: 0.05 }
                      }
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
                        opacity: { duration: 0.15 }
                      }
                    }}
                  >
                    <div className="border-t border-white/5 p-5 text-sm md:text-base leading-relaxed text-zinc-400 bg-white/[0.01]">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}