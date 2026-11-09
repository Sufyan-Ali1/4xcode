"use client";

import { entranceOffset, entranceTransition, interactionTransition, revealViewport } from "@/utils/motion";

import { spaceGrotesk } from "@/lib/fonts";

import defaults from "@/data/landing-defaults.json";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "../../utils/AnimationReveal";
import { type Faq } from "../../data/serviceData";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface ServiceFaqProps {
  faq_white_heading?: string;
  faq_red_heading?: string;
  faqs: Faq[];
  label?: string;
  description?: string;
  contentClassName?: string;
}

export default function ServiceFaq({ label = defaults.faqSection.label, faq_white_heading, faq_red_heading, description, faqs, contentClassName = "w-full" }: ServiceFaqProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="">
      <Reveal>
        <div className="space-y-2  px-3  text-center">
          <p className="text-[#ef1f23] text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
            {label}
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl tracking-tight text-white">
            {faq_white_heading || defaults.faqSection.heading}{" "}
            <span className="bg-gradient-to-r from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
             {faq_red_heading || defaults.faqSection.highlight}
            </span>
          </h2>
          {description && <p className="mx-auto max-w-3xl text-sm md:text-base leading-relaxed text-zinc-400">{description}</p>}
        </div>
      </Reveal>

      <div className={`mx-auto space-y-4 py-10 ${contentClassName}`}>
        {faqs.map((faq, index) => {
          const isOpen = openFaqIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: entranceOffset }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={entranceTransition}
              className="overflow-hidden rounded-xl border border-white/5 bg-white/2 transition-colors duration-200 hover:border-white/10"
            >
              <button
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between p-5 text-left font-medium text-zinc-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ef1f23]/50"
              >
                <span className={`${spaceGrotesk.className} text-base md:text-lg tracking-wide`}>
                  {faq.q}
                </span>
                <span className="ml-4 shrink-0 text-zinc-500 transition-colors duration-200 group-hover:text-zinc-300">
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
                      transition: interactionTransition
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: interactionTransition
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
