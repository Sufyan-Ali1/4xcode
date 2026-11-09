"use client";

import defaults from "@/data/landing-defaults.json";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "../../utils/useSafeReducedMotion";
import { Reveal } from "../../utils/AnimationReveal";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function CTASection({ data = defaults.cta }: { data?: typeof defaults.cta }) {
  const reduced = useSafeReducedMotion();

  return (
    <div className="w-full bg-black pt-12 pb-16 md:py-16 px-5 sm:px-8 md:px-12 flex items-center justify-center">
      {/* ✅ LAYOUT SYSTEM INTEGRATION WRAPPER */}
      <section className="relative w-full max-w-300 min-h-125 md:min-h-145 rounded-3xl md:rounded-4xl overflow-hidden flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 border border-white/10 shadow-[0_0_30px_0_rgba(239,31,35,0.5)]">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            fill
            priority
            className="object-cover object-center scale-105"
            sizes="(max-w-1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-10 opacity-10 bg--size-[60px_60px]" />

        <div className="relative z-20 flex max-w-2xl flex-col items-start gap-5 md:gap-6 text-left">
          <Reveal>
            <span className="text-[#f90a1f] text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
              {data.label}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-[56px] lg:text-[64px] font-bold tracking-tight text-white leading-[1.1] md:leading-[1.05]">
              {data.heading}{" "}<span className="bg-gradient-to-br from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">{data.highlight}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-xl text-sm md:text-base lg:text-lg leading-relaxed text-zinc-400 font-light">
              {data.description}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <motion.div
                whileHover={reduced ? {} : { scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <Link
                  href={data.actions[0].href}
                  className="group inline-flex h-13 items-center justify-center gap-2 rounded-[18px] bg-red-600 px-6 py-3.5 text-sm font-medium text-white shadow-[0_0_30px_0_rgba(239,31,35,0.5)] hover:opacity-90 transition-opacity duration-300"
                >
                  <span>{data.actions[0].label}</span>
                  <ArrowForwardIcon
                    style={{ fontSize: 16 }}
                    className="transition-transform duration-300"
                  />
                </Link>
              </motion.div>
              <motion.div
                whileHover={reduced ? {} : { scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <Link
                  href={data.actions[1].href}
                  className="inline-flex h-13 items-center justify-center rounded-[18px] border border-white/10 bg-black/40 backdrop-blur-sm px-7 text-sm font-semibold text-white hover:border-white/20 hover:bg-white/5 transition-colors duration-300"
                >
                  {data.actions[1].label}
                </Link>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
