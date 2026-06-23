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
    <section className="py-28 bg-black text-white overflow-hidden">

      {/* ✅ GLOBAL WIDTH CONTAINER */}
      <div className="mx-auto w-full max-w-300 px-5">

        {/* Header */}
        <div className="text-center">
          <Reveal>
            <p className="mb-4 text-[#f90a1f] text-[12px] uppercase tracking-[3.6px]">
              Our Process
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-bold">
              From spark to{" "}
              <span className="bg-linear-to-br from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                shipped
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Steps */}
        <div className="relative mt-24">
          <div className="absolute hidden md:block top-8 left-[10%] right-[10%] h-px bg-red-900" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
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
                whileHover={{ y: -6, scale: 1.02 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-red-900 bg-black">
                  <span className="bg-linear-to-br from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-3xl font-bold text-transparent">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>

                <p className="mt-3 max-w-55 text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-28 flex flex-col items-center">
          <Reveal>
            <h3 className="text-center text-2xl md:text-3xl font-bold mb-14">
              Why this version is{" "}
              <span className="bg-gradient-to-r from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                better:
              </span>
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 w-full">
            {highlights.map((text, idx) => {
              const isLastAndOdd =
                idx === highlights.length - 1 && highlights.length % 2 !== 0;

              return (
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
                  className={`relative py-8 flex flex-col items-center justify-center group ${
                    isLastAndOdd
                      ? "lg:col-span-2 lg:max-w-xl lg:justify-self-center"
                      : ""
                  }`}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[2px] text-neutral-600 group-hover:text-[#ff8a8c] mb-2">
                    0{idx + 1} — Benefit
                  </span>

                  <p className="text-center text-base md:text-lg text-gray-400 group-hover:text-white transition-all max-w-2xl leading-relaxed">
                    {text}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent opacity-60 group-hover:via-red-900/50" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}