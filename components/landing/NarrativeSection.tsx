"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "../../utils/useSafeReducedMotion";

interface NarrativeSectionProps {
  spaceGroteskClassName: string;
}

const CONTENT_PARAGRAPHS = [
  <>
    We design and engineer software architectures that are built to perform
    under real-world conditions — not just in development.{" "}
    <span className="text-[#f90a1f] font-normal">Our senior engineers</span>{" "}
    think in systems, not just features, combining edge-first infrastructure,
    serverless runtimes, and deterministic performance principles to deliver
    products that scale globally from day one.
  </>,
  <>
    Our full-stack development process connects frontend interfaces to backend
    systems through a strictly typed codebase using{" "}
    <span className="text-[#f90a1f] font-normal">TypeScript</span>. By
    eliminating runtime errors at the type level, we produce software that is
    faster to maintain, easier to extend, and significantly more reliable in
    production — whether you're building multi-tenant SaaS platforms or
    high-traffic web applications.
  </>,
  <>
    We engineer web performance from the ground up — targeting zero layout
    shifts, sub-second load times, and perfect Core Web Vitals scores. Using
    static generation, dynamic streaming, and edge caching strategies, we
    deliver web applications that rank higher in search results and convert
    better.{" "}
    <span className="text-[#f90a1f] font-normal">
      Core Web Vitals • Next.js • Edge Runtime • Hyper-Fast Loading
    </span>
  </>,
  <>
    We build production-grade AI systems — not demos. Our AI development
    services include custom{" "}
    <span className="text-[#f90a1f] font-normal">
      LLM Integrations, RAG Pipelines
    </span>
    , vector search, and autonomous AI agents built on deterministic pipelines.
    Every system is structured to deliver accurate, predictable outputs at scale
    — without relying on fragile prompt engineering.
  </>,
  <>
    Our cloud engineering team delivers resilient, observable infrastructure on{" "}
    <span className="text-[#f90a1f] font-normal">
      AWS, Vercel, and Cloudflare
    </span>
    . Using infrastructure-as-code, distributed telemetry, and automated
    delivery pipelines, we eliminate downtime and give you full visibility into
    every layer of your system.{" "}
    <span className="text-zinc-500 text-[13px] block mt-2">
      DevOps Automation • Zero-Downtime Deployments
    </span>
  </>,
];

export default function NarrativeSection({
  spaceGroteskClassName,
}: NarrativeSectionProps) {
  const reduced = useSafeReducedMotion();

  return (
    <section className="relative w-full z-10 pe-5 ps-5 sm:ps-8 md:ps-12 mt-15 md:mt-16 text-white">
      <div className="mx-auto w-full max-w-300 flex flex-col gap-8 md:gap-10">
        <motion.h2
          initial={{ opacity: 0, y: reduced ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`${spaceGroteskClassName} text-white text-2xl sm:text-3xl md:text-[40px] font-bold tracking-tight leading-[1.25] text-left max-w-5xl`}
        >
          Software Architecture Built for Performance, Scale &{" "}
          <span className="text-[#f90a1f]"> Long-Term Growth.</span>
        </motion.h2>

        <div className="flex flex-col gap-6 max-w-6xl text-sm md:text-[15px] font-light leading-[1.75] tracking-wide text-justify text-zinc-300">
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
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
