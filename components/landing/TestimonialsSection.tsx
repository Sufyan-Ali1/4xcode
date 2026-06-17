"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "../../utils/AnimationReveal";
import { TESTIMONIALS } from "../../data/index";

export default function TestimonialsSection() {
  const reduced = useReducedMotion();
  const duplicatedTestimonials = [
    ...TESTIMONIALS,
    ...TESTIMONIALS,
    ...TESTIMONIALS,
  ];

  return (
    <section className="relative w-full overflow-hidden px-3  py-8 md:py-10 flex flex-col items-center gap-12 md:gap-16">
      <div className="pointer-events-none absolute inset-0 opacity-10  " />

      <div className="relative z-10 flex flex-col items-center gap-3 text-center px-6">
        <Reveal>
          <span className="text-[#f90a1f] text-[12px] font-normal uppercase tracking-[3.6px] leading-4 ">
            Testimonials
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Loved by{" "}
            <span className="bg-linear-to-br from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
              operators
            </span>
          </h2>
        </Reveal>
      </div>

      <div className="relative w-full overflow-hidden flex items-center py-4">
        <div
          className={`flex gap-5 w-max will-change-transform ${
            reduced
              ? ""
              : "animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]"
          }`}
        >
          {duplicatedTestimonials.map((item, idx) => (
            <motion.div
              key={`${item.id}-${idx}`}
              initial={{ opacity: 0, y: reduced ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                delay: reduced ? 0 : (idx % TESTIMONIALS.length) * 0.08,
              }}
              whileHover={reduced ? {} : { scale: 1.02, y: -4 }}
              className="group w-85 md:w-95 shrink-0 flex flex-col justify-between rounded-[22px] border border-white/10 bg-white/2 p-6 transition-colors duration-300 hover:border-[#f90a1f]/40 hover:bg-white/4 will-change-transform cursor-default"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <svg
                    key={i}
                    className="size-3.5 fill-[#f90a1f]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm md:text-base leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 font-light mb-8">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-3.5 pt-4 border-t border-white/6">
                <div className="size-9 rounded-full bg-[#f90a1f]/10 border border-[#f90a1f]/20 flex items-center justify-center font-bold text-xs text-[#f90a1f]">
                  {item.initial}
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">
                    {item.author}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                    {item.vehicle}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
      `}</style>
    </section>
  );
}
