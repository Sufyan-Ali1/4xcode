"use client";

import { motion, type Variants } from "framer-motion"; // 1. Imported Variants type
import { CaseStudy } from "../../types/index";
import { CaseStudyItem } from "../../components/caseStudy/WorkGrid";

interface CaseStudyCardProps {
  project: CaseStudy | CaseStudyItem | any;
  index: number;
  reduced: boolean | null;
}

export function CaseStudyCard({ project, index, reduced }: CaseStudyCardProps) {
  const displayTitle =
    project?.heading || project?.title || "Untitled Case Study";

  const execSummarySection = project?.sections?.find(
    (s: any) =>
      s.section_number === 1 || s.title?.toLowerCase().includes("summary"),
  );

  const descriptionSnippet =
    execSummarySection?.introduction ||
    execSummarySection?.content?.[1] ||
    execSummarySection?.content?.[0] ||
    project?.excerpt ||
    "";

  const resultsSection = project?.sections?.find((s: any) => s.results_table);
  const coreMetric = resultsSection?.results_table?.find(
    (r: any) =>
      r.after_4xcode?.includes("%") ||
      r.after_4xcode?.toLowerCase().includes("reduced"),
  )?.after_4xcode;

  const displayMetric = coreMetric
    ? coreMetric
        .replace("Returned by ", "")
        .replace(" increase in returning customers", "")
    : null;

  // 2. Explicitly type cardVariants as Variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.06 * index,
        ease: [0.22, 1, 0.36, 1] as const, // 3. Added 'as const' to enforce fixed array length
      },
    },
  };

  return (
    <motion.div
      variants={reduced ? undefined : cardVariants} // 4. Replaced empty object {} with undefined
      initial={reduced ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="group relative flex flex-col flex-1 justify-between overflow-hidden rounded-[18px] border border-white/5 bg-white/4 p-5 backdrop-blur-md h-full w-full transition-colors duration-300 hover:border-white/15"
    >
      {/* Top Content Block */}
      <div className="w-full">
        {/* Card Image Container */}
        <div className="relative mb-5 aspect-video w-full overflow-hidden rounded-xl bg-zinc-900">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-1 pointer-events-none" />

          {project?.image ? (
            <img
              src={project.image}
              alt={displayTitle}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-zinc-700 bg-zinc-950">
              <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
                4xCode Case Study
              </span>
            </div>
          )}
        </div>

        <h3 className="text-white font-bold text-[18px] leading-6 tracking-[-0.3px]">
          {displayTitle}
        </h3>

        <p className="text-[#a7a3a4] font-normal text-[13px] leading-relaxed mt-2 mb-4 line-clamp-3">
          {descriptionSnippet}
        </p>
      </div>

      <div className="mt-auto flex items-center justify-end border-t border-white/5 pt-4 w-full">
        <div className="flex items-center gap-1.5 text-[14px] font-bold text-white transition-colors duration-200 group-hover:text-[#f90a1f]">
          Read Study
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="h-4 w-4 text-zinc-600 transition-colors duration-300 group-hover:text-[#f90a1f]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}