"use client";

import { motion } from "framer-motion";
import { useSafeReducedMotion } from "../../utils/useSafeReducedMotion";
import { Reveal } from "../../utils/AnimationReveal";

export default function ProcessSection() {
  const reduced = useSafeReducedMotion();

  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We transform ideas into clear digital strategies through workshops, technical audits, and product roadmap planning.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "We create intuitive, user-focused experiences with modern UI/UX design and interactive prototypes before development begins.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "Our senior engineers build scalable, high-performance solutions through agile development and transparent weekly progress updates.",
    },
    {
      number: "04",
      title: "Launch & Scale",
      description:
        "We ensure successful product launches with performance optimization, analytics integration, and growth-focused strategies.",
    },
    {
      number: "05",
      title: "Optimize & Evolve",
      description:
        "We continuously improve your product using real-world data, user feedback, and ongoing performance enhancements to drive long-term success.",
    },
  ];

  return (
    <section className="py-16 md:py-28 bg-black text-white overflow-hidden w-full">
      {/* ✅ PERFECT GLOBAL ALIGNMENT MATCHING THE HEADER & BLOG SYSTEM */}
      <div className="mx-auto w-full max-w-300 px-5">

        {/* Header */}
        <div className="text-center">
          <Reveal>
            <p className="mb-4 text-[#f90a1f] text-[12px] uppercase tracking-[3.6px]">
              Our Process
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-6xl font-bold">
              From spark to{" "}
              <span className="bg-gradient-to-br from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                shipped
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
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: reduced ? 0 : 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={reduced ? {} : { y: -6, scale: 1.02 }}
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