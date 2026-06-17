"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/utils/AnimationReveal";
import { caseStudies } from "../../data/index";
import { CaseStudyCard } from "../ui/CaseStudyCard";
import { CaseStudy } from "../../types/index";

export default function CaseStudiesSection() {
  const reduced = useReducedMotion();
  const projects: CaseStudy[] = caseStudies.slice(0, 3);

  return (
    <section className="relative w-full overflow-hidden bg-black py-12.5 px-6 md:px-12 lg:px-24">
      <div className="pointer-events-none absolute inset-0 opacity-20 " />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16">
        <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
          <Reveal delay={0}>
            <p className="text-[#f90a1f] text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
              Featured Work
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-center text-[36px] font-bold leading-[1.1] tracking-[-1.2px] text-white md:text-[48px]">
              Selected{" "}
              <span className="bg-linear-to-br from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                case studies.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project: CaseStudy, index: number) => (
            <CaseStudyCard
              key={project.id}
              project={project}
              index={index}
              reduced={reduced}
            />
          ))}
        </div>
        <Reveal delay={0.3} className="flex w-full justify-center">
          <motion.a
            href="/work"
            whileHover={{ scale: 1.02 }}
            className="flex h-13.25 w-full max-w-140 cursor-pointer items-center justify-center rounded-[55px] border-2 border-[#f90a1f] bg-black/30 px-12.25 py-5 text-center text-[20px] font-bold whitespace-nowrap text-white shadow-[0_0_24px_rgba(239,31,35,0.05)] transition-colors duration-300 hover:bg-[rgba(249,10,31,0.08)]"
          >
            View More Work
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
