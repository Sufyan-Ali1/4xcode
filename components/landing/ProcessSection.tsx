"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "../../utils/AnimationReveal";

export default function ProcessSection() {
  const reduced = useReducedMotion();

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

  const highlights = [
    "More business-focused language.",
    "Easier for clients to understand.",
    "Highlights value and outcomes rather than internal processes.",
    "Better suited for UK and international clients.",
  ];

  return (
    <section className="py-20 px-13 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <Reveal>
            <p className="mb-4 text-[#f90a1f] text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
              Our Process
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-4xl font-bold md:text-6xl">
              From spark to{" "}
              <span className="bg-linear-to-br from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                shipped
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Process Steps */}
        <div className="relative mt-24">
          <div className="absolute hidden md:block top-8 left-[10%] right-[10%] h-px bg-red-900" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: reduced ? 0 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="relative flex flex-col items-center text-center will-change-transform"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-red-900 bg-black">
                  <span className="bg-linear-to-br from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-3xl font-bold text-transparent">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-55 text-sm leading-relaxed text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Why This Version Is Better Premium Stack --- */}
        <div className="mt-36 flex flex-col items-center text-center">
          <Reveal>
            <h3 className="text-2xl font-bold md:text-3xl tracking-tight text-white mb-14">
              Why this version is{" "}
              <span className="bg-linear-to-br from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                better:
              </span>
            </h3>
          </Reveal>

          {/* Premium Column Layout Container */}
          <div className="flex flex-col items-center max-w-3xl w-full px-4">
            {highlights.map((text, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: reduced ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.015 }}
                className="w-full relative py-6 flex flex-col items-center justify-center will-change-transform group cursor-default"
              >
                {/* Micro Typography Label */}
                <span className="font-mono text-[10px] uppercase tracking-[2px] text-neutral-600 group-hover:text-[#ff8a8c] transition-colors duration-300 mb-2">
                  0{idx + 1} &mdash; Benefit
                </span>

                {/* Central Sentence Statement */}
                <p className="text-base md:text-lg font-normal tracking-wide text-gray-400 group-hover:text-white transition-all duration-300 ease-out max-w-2xl leading-relaxed">
                  {text}
                </p>

                {/* High-End Fading Gradient Border Line */}
                {idx !== highlights.length - 1 && (
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent opacity-60 group-hover:via-red-900/50 transition-colors duration-500" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
