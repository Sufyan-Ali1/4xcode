"use client";

import { entranceOffset, entranceTransition, revealViewport } from "@/utils/motion";

import { METRIC_LABEL_CLASSES, METRIC_VALUE_CLASSES } from "@/components/ui/cardStyles";

import { spaceGrotesk } from "@/lib/fonts";

import defaults from "@/data/landing-defaults.json";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "../../utils/AnimationReveal";
import { useSafeReducedMotion } from "../../utils/useSafeReducedMotion";
export interface AboutSectionData {
  white_heading: string;
  red_heading: string;
  paragraphs: string[];
  stats?: {
    value: string;
    label: string;
  }[];
  image: string;
  founded?: string;
  label?: string;
  imageAlt?: string;
  foundedLabel?: string;
}

interface AboutSectionProps {
  data: AboutSectionData;
  contained?: boolean;
  statsVariant?: "metric" | "text";
  label?: string;
}

export default function AboutSection({ data, contained = false, statsVariant = "metric", label = data.label ?? defaults.about.label }: AboutSectionProps) {
  const reduced = useSafeReducedMotion();

  return (
    <section className="bg-black w-full text-white flex justify-center py-8 md:py-16">
      <div className={`${contained ? "w-full" : "site-container"} flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16`}>
        {/* ── Left: Image ── */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : entranceOffset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={entranceTransition}
          /* On mobile: fixed height so it doesn't eat the whole screen.
             On desktop: flex-1 with square aspect. */
          className="relative w-full lg:flex-1 isolate"
        >
          <div className="absolute inset-0 rounded-3xl bg-[#F90A1F]/25 blur-[18px] scale-105 -z-10" />

          {/* Fixed height on mobile, aspect-square only on lg+ */}
          <div className="relative w-full h-64 sm:h-80 lg:h-auto lg:aspect-square rounded-3xl border border-white/5 overflow-hidden">
            <Image
              src={data.image}
              alt={data.imageAlt ?? defaults.about.imageAlt}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Founded badge — kept inside image bounds on mobile */}
          {data.founded && (
            <div className="absolute bottom-3 right-3 flex flex-col rounded-[16px] border border-white/10 bg-black/60 p-3 backdrop-blur-md w-40 shadow-2xl select-none">
              <span className="text-zinc-500 text-[9px] uppercase tracking-[0.15em] font-bold mb-1">
                {data.foundedLabel ?? defaults.about.foundedLabel}
              </span>
              <span className="text-white text-[16px] font-bold leading-tight">
                {data.founded}
              </span>
            </div>
          )}
        </motion.div>

        {/* ── Right: Text + Stats ── */}
        <div className="flex flex-col justify-center space-y-5 w-full lg:flex-1">
          <Reveal>
            <span className="text-[#f90a1f] text-[11px] uppercase tracking-[3.6px]">
              {label}
            </span>
          </Reveal>

          <Reveal>
            <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-white">
              {data.white_heading}{" "}
              <span className="bg-gradient-to-br from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                {data.red_heading}
              </span>
            </h2>
          </Reveal>

          <Reveal>
            <div className="space-y-3 text-gray-400 text-sm md:text-base leading-relaxed font-light">
              {data.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          {/* Stats — 2 col on all sizes, comfortable padding */}
          {data.stats && data.stats.length > 0 && (
            <div className="grid grid-cols-2 gap-3 pt-2 [&>*:last-child:nth-child(odd)]:col-span-2">
              {data.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: reduced ? 0 : entranceOffset }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={revealViewport}
                  transition={entranceTransition}
                  className="group bg-[#0D0D0E] border border-white/4 hover:border-[rgba(249,10,31,0.25)] hover:bg-white/3 rounded-2xl p-4 md:p-5 flex flex-col justify-center transition-colors duration-200 cursor-default"
                >
                  <h4 className={statsVariant === "text" ? `${spaceGrotesk.className} text-base font-bold tracking-wide text-white` : METRIC_VALUE_CLASSES}>
                    {stat.value}
                  </h4>
                  <span className={statsVariant === "text" ? "mt-2 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400" : METRIC_LABEL_CLASSES}>
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
