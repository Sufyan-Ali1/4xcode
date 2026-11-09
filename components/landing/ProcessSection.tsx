"use client";

import { entranceOffset, entranceTransition, revealViewport } from "@/utils/motion";

import home from "@/data/home.json";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "../../utils/useSafeReducedMotion";
import { Reveal } from "../../utils/AnimationReveal";

export default function ProcessSection({ data = home.process }: { data?: typeof home.process }) {
  const reduced = useSafeReducedMotion();


  return (
    <section className="py-5 bg-black text-white overflow-hidden w-full">
      {/* ✅ PERFECT GLOBAL ALIGNMENT MATCHING THE HEADER & BLOG SYSTEM */}
      <div className="site-container">

        {/* Header */}
        <div className="text-center">
          <Reveal>
            <p className="mb-4 text-[#f90a1f] text-[12px] uppercase tracking-[3.6px]">
              {data.label}
            </p>
          </Reveal>
          <Reveal>
            <h2 className="text-3xl md:text-6xl font-bold">
              {data.heading}{" "}
              <span className="bg-gradient-to-br from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                {data.highlight}
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Steps */}
        <div className="relative mt-16 md:mt-24">

          {/* Horizontal line — desktop only */}
          <div className="absolute hidden md:block top-8 left-[10%] right-[10%] h-px bg-red-900/40 z-0" />

          {/* Vertical line — mobile only */}
          <div className="absolute md:hidden left-8 top-0 bottom-0 w-px bg-red-900/40 z-0" />

          {/* ✅ FIXED GRID & AUTO-ROWS: Prevents horizontal expanding over parent limits */}
          <div className="flex flex-col md:grid md:grid-cols-5 gap-8 md:gap-6 auto-rows-fr items-stretch">
            {data.steps.map((step) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: reduced ? 0 : entranceOffset }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={revealViewport}
                transition={entranceTransition}
                className="relative z-10 flex flex-row md:flex-col items-start md:items-center gap-5 md:gap-0 text-left md:text-center w-full"
              >
                {/* Number circle */}
                <div className="shrink-0 flex h-16 w-16 items-center justify-center rounded-full border border-red-900 bg-black z-10 md:mb-6">
                  <span className="bg-gradient-to-br from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-3xl font-bold text-transparent">
                    {step.number}
                  </span>
                </div>

                {/* Text Context Frame */}
                <div className="flex flex-col md:items-center w-full">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {step.title}
                  </h3>
                  {/* ✅ SAFELY CONSTRAINED COMPRESSION: Max-width enforces line wraps beautifully */}
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed max-w-full md:max-w-[180px] lg:max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}