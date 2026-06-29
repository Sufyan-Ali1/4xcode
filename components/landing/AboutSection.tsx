"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "../../utils/AnimationReveal";
import { useSafeReducedMotion } from "../../utils/useSafeReducedMotion";

export default function AboutSection() {
  const reduced = useSafeReducedMotion();

  const stats = [
    { value: "132+", label: "Products Shipped" },
    { value: "30M", label: "Users Reached" },
    { value: "99.99%", label: "Production Uptime" },
    { value: "9yr", label: "Avg. Team Experience" },
  ];

  return (
    <section className="bg-black w-full text-white flex justify-center py-8 md:py-16">
      <div className="w-full max-w-7xl px-5 sm:px-8 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* ── Left: Image ── */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          /* On mobile: fixed height so it doesn't eat the whole screen.
             On desktop: flex-1 with square aspect. */
          className="relative w-full lg:flex-1 isolate"
        >
          <div className="absolute inset-0 rounded-3xl bg-[#F90A1F]/25 blur-[18px] scale-105 -z-10" />

          {/* Fixed height on mobile, aspect-square only on lg+ */}
          <div className="relative w-full h-64 sm:h-80 lg:h-auto lg:aspect-square rounded-3xl border border-white/5 overflow-hidden">
            <Image
              src="/assets/aboutSection.webp"
              alt="Engineering Team"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Founded badge — kept inside image bounds on mobile */}
          <div className="absolute bottom-3 right-3 flex flex-col rounded-[16px] border border-white/10 bg-black/60 p-3 backdrop-blur-md w-40 shadow-2xl select-none">
            <span className="text-zinc-500 text-[9px] uppercase tracking-[0.15em] font-bold mb-1">
              Founded
            </span>
            <span className="text-white text-[16px] font-bold leading-tight">
              2021 · Remote-first
            </span>
          </div>
        </motion.div>

        {/* ── Right: Text + Stats ── */}
        <div className="flex flex-col justify-center space-y-5 w-full lg:flex-1">
          <Reveal>
            <span className="text-[#f90a1f] text-[11px] uppercase tracking-[3.6px]">
              About 4xCode
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-white">
              A boutique engineering studio with a{" "}
              <span className="bg-gradient-to-br from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                blockbuster output.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-3 text-gray-400 text-sm md:text-base leading-relaxed font-light">
              <p>
                4xCode is a boutique software development company building
                ultra-fast, AI-powered SaaS platforms, web applications, and
                mobile products for startups and scaling brands.
              </p>
              <p>
                From custom software development and AI agent engineering to
                cloud infrastructure and UI/UX design, our senior team turns
                ambitious product ideas into category-defining software —
                shipped in weeks, not quarters.
              </p>
            </div>
          </Reveal>

          {/* Stats — 2 col on all sizes, comfortable padding */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: reduced ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  delay: reduced ? 0 : index * 0.08,
                }}
                whileHover={reduced ? {} : { scale: 1.02, y: -3 }}
                className="group bg-[#0D0D0E] border border-white/4 hover:border-[rgba(249,10,31,0.25)] hover:bg-white/3 rounded-2xl p-4 md:p-5 flex flex-col justify-center transition-colors duration-300 cursor-default"
              >
                <span className="text-xl md:text-2xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-gray-500 text-[10px] uppercase tracking-wider font-medium mt-1 group-hover:text-gray-400">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
