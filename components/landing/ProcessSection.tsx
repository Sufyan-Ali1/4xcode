"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/utils/AnimationReveal";

export default function ProcessSection() {
  const reduced = useReducedMotion();

  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We map ambition to architecture workshops, audits, north-star definition.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Cinematic UI and product thinking, prototyped in motion before a line of code.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "Senior engineers ship in fast, observable cycles with weekly demoable progress.",
    },
    {
      number: "04",
      title: "Launch & Scale",
      description:
        "Performance, growth instrumentation and ongoing partnership beyond v1.",
    },
    {
      number: "05",
      title: "Optimize & Evolve",
      description:
        "Continuous improvements driven by real-world data, user feedback, and performance insights.",
    },
  ];

  return (
    <section className=" py-20 px-13 text-white">
      <div className="mx-auto max-w-7xl">
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
      </div>
    </section>
  );
}
