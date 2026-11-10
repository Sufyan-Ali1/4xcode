"use client";

import { interactionTransition } from "@/utils/motion";
import home from "@/data/home.json";
import { motion } from "framer-motion";
import { Reveal } from "@/utils/AnimationReveal";
import { CaseStudyCard } from "../ui/CaseStudyCard";
import Link from "next/link";
import { CaseStudy } from "../../lib/caseStudyApi";

type Props = {
  initialData: CaseStudy[];
  data?: typeof home.work;
};

export default  function CaseStudiesClient({ initialData, data = home.work }: Props) {
  const projects = (initialData || []).slice(0, data.limit);

  return (
    <section className="relative w-full overflow-hidden bg-black py-8">
      <div className="pointer-events-none absolute inset-0 opacity-20 " />

      <div className="site-container relative flex flex-col items-center gap-8">
        <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
          <Reveal>
            <p className="text-[#f90a1f] text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
              {data.label}
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-center text-[36px] font-bold leading-[1.1] tracking-[-1.2px] text-white md:text-[48px]">
              {data.heading}{" "}
              <span className="bg-gradient-to-br from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                {data.highlight}
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {projects.map((project: CaseStudy, index: number) => (
            <Link
              href={`/work/${project.slug}`}
              key={project.id || index}
              className="flex flex-col h-full w-full transition-transform duration-200 ease-out"
            >
              <CaseStudyCard project={project} index={index} showCategory labels={{ action: data.cardAction, imageFallback: data.imageFallback, titleFallback: data.titleFallback }} />
            </Link>
          ))}
        </div>

        <Reveal className="flex w-full justify-center">
          <motion.a
            href={data.action.href}
            whileHover={{ scale: 1.02, transition: interactionTransition }}
            className="flex  w-full max-w-[560px] cursor-pointer items-center justify-center rounded-[55px] border-2 border-[#f90a1f] bg-black/30 px-12 py-5 text-center text-[20px] font-bold whitespace-nowrap text-white shadow-[0_0_24px_rgba(239,31,35,0.05)] transition-colors duration-200 hover:bg-[rgba(249,10,31,0.08)]"
          >
            {data.action.label}
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
