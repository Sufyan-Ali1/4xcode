"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/utils/AnimationReveal";
import { CaseStudyCard } from "../ui/CaseStudyCard";
import Link from "next/link";
import { CaseStudy } from "../../lib/caseStudyApi";

interface CaseStudiesSectionProps {
  initialData: CaseStudy[];
}

export default function CaseStudiesSection({
  initialData,
}: CaseStudiesSectionProps) {
  const projects = (initialData || []).slice(0, 3);

  return (
    <section className="relative w-full overflow-hidden bg-black py-12 px-6 md:px-12 lg:px-24">
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
              <span className="bg-gradient-to-br from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                case studies.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {projects.map((project: CaseStudy, index: number) => (
            <Link
              href={`/work/${project.slug}`}
              key={project.id || index}
              className="flex flex-col h-full w-full transition-transform duration-300 ease-out hover:scale-[1.015]"
            >
              <CaseStudyCard
                project={project}
                index={index}
              />
            </Link>
          ))}
        </div>

        <Reveal delay={0.3} className="flex w-full justify-center">
          <motion.a
            href="/work"
            whileHover={{ scale: 1.02 }}
            className="flex h-12 w-full max-w-[560px] cursor-pointer items-center justify-center rounded-[55px] border-2 border-[#f90a1f] bg-black/30 px-12 py-5 text-center text-[20px] font-bold whitespace-nowrap text-white shadow-[0_0_24px_rgba(239,31,35,0.05)] transition-colors duration-300 hover:bg-[rgba(249,10,31,0.08)]"
          >
            View More Work
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
