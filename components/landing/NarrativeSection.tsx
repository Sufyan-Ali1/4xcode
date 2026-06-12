"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

interface NarrativeSectionProps {
  spaceGroteskClassName: string;
}
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const CONTENT_PARAGRAPHS = [
  <>
    We build software with a deep emphasis on architectural integrity and
    long-term scalability. Leveraging modern execution environments like the{" "}
    <span className="text-[#f90a1f]">Edge Runtime</span> and serverless
    infrastructure, we eliminate cold starts and scale computations globally.
    Every system is tailored around deterministic performance matrices, ensuring
    your digital products respond instantaneously regardless of regional network
    traffic loads.
  </>,
  <>
    Our complete full-stack workflow unifies frontend interfaces with robust
    backend architectures. By utilizing strict type configurations via{" "}
    <span className="text-[#f90a1f]">TypeScript</span> alongside relational
    state management systems, we avoid runtime memory leaks and maintain
    end-to-end data safety. Whether orchestrating distributed microservices or
    fine-tuning custom relational schemas inside multi-tenant structures, our
    systems are built to process transaction layers securely at a massive scale.
  </>,
  <>
    Performance is never an afterthought; it is intentionally engineered into
    our operational roadmap. We optimize web performance by enforcing
    zero-layout shifts, static path generation protocols, and dynamic state
    streaming techniques. This strict adherence to computational discipline
    translates directly into premium user experiences and top-tier core web
    vital scores.
  </>,
  <>
    We seamlessly bridge the gap between deterministic software layers and
    intelligent predictive workflows. Our native{" "}
    <span className="text-[#f90a1f]">AI Integration</span> processes leverage
    advanced vector embeddings, parallelized inference execution, and dynamic
    context windows to build agents that solve complex logic paths safely.
    Rather than relying on fragile prompt patterns, we structure deterministic
    pipelines around language models to guarantee accurate responses.
  </>,
  <>
    From cloud orchestrations to automated delivery, our systems utilize
    declarative infrastructure as code configurations. We maintain real-time
    systems visibility using strict distributed{" "}
    <span className="text-[#f90a1f]">Telemetry and Logging</span> solutions,
    catching behavioral exceptions before they hit production environments. This
    continuous monitoring pipeline ensures zero-downtime updates, maximum
    operational health, and secure deployments across every region.
  </>,
];

export default function NarrativeSection({
  spaceGroteskClassName,
}: NarrativeSectionProps) {
  const reduced = useReducedMotion();

  return (
    <section className="relative w-full z-10 px-6 md:px-12 lg:px-24 mt-20 md:mt-28 text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
        <motion.h2
          initial={{ opacity: 0, y: reduced ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`${spaceGroteskClassName} text-white text-2xl sm:text-3xl md:text-[40px] font-bold tracking-tight leading-[1.25] text-left max-w-5xl`}
        >
          Designing and engineering category-defining software architectures
          optimized from the iron up for{" "}
          <span className="text-[#f90a1f]">raw performance.</span>
        </motion.h2>

        <div className="flex flex-col gap-6 max-w-6xl text-sm md:text-[15px] font-light leading-[1.75] tracking-wide text-justify">
          {CONTENT_PARAGRAPHS.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: reduced ? 0 : index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`${spaceGrotesk.className} text-white`}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
