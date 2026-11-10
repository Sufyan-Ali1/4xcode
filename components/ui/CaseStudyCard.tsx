"use client";

import { entranceOffset, entranceTransition, revealViewport } from "@/utils/motion";

import defaults from "@/data/landing-defaults.json";
import { motion, type Variants } from "framer-motion";
import { CaseStudy } from "../../types/index";
import { CaseStudyItem } from "../../components/caseStudy/WorkGrid";
import { useSafeReducedMotion } from "@/utils/useSafeReducedMotion";

interface CaseStudyCardProps {
  project: CaseStudy | CaseStudyItem | any;
  index: number;
  showCategory?: boolean;
  showLinkCaption?: boolean;
  labels?: typeof defaults.caseStudyCard;
}

export function CaseStudyCard({ project, showCategory = false, showLinkCaption = true, labels = defaults.caseStudyCard }: CaseStudyCardProps) {
  const reduced = useSafeReducedMotion();
  const displayTitle =
    project?.heading || project?.title || labels.titleFallback;

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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : entranceOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: entranceTransition,
    },
  };

  const renderCardContent = () => (
    <>
      <div className="w-full">
        {/* ✅ MATCHED BLOG LAYOUT: Fixed Cinema Aspect Ratio (2/1), wall-to-wall container with no extra padding spaces */}
        <div className="relative aspect-[2/1] w-full overflow-hidden bg-zinc-900 border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-1 pointer-events-none" />

          {project?.image ? (
            <img
              src={project.image}
              alt={displayTitle}
              /* ✅ object-cover fills the aspect box uniformly, while object-center balances the left/right/top/bottom margins safely */
              className="h-full w-full object-cover object-center opacity-90 md:opacity-80 transition-opacity duration-200 group-hover:opacity-100"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-zinc-950">
              {showLinkCaption && <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase">{labels.imageFallback}</span>}
            </div>
          )}
        </div>

        {/* ✅ TEXT CONTENT BOX: Structural padding and clamping mirroring the layout block perfectly */}
        <div className="p-4.5 space-y-1.5">
          <h3 className={`text-white font-bold text-base tracking-tight leading-snug group-hover:text-[#f90a1f] transition-colors duration-200 ${showCategory ? "" : "line-clamp-1"}`}>
            {displayTitle}
          </h3>
          {showCategory && <p className="text-[#f90a1f] text-xs">{project.category}</p>}
          <p className={`text-zinc-400 font-normal text-[12px] leading-relaxed ${showCategory ? "" : "line-clamp-2"}`}>
            {descriptionSnippet}
          </p>
        </div>
      </div>

      {/* ✅ PREMIUM MICRO FOOTER BAR: Shifting vector arrow on container hover */}
      {showLinkCaption && <div className="mt-auto px-4.5 pb-4.5 flex items-center justify-end w-full">
        <div className="flex items-center gap-1 text-[12px] font-bold text-zinc-400 transition-colors duration-200 group-hover:text-[#f90a1f] pt-3 border-t border-white/5 w-full justify-end">
          <span>{labels.action}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="h-3 w-3 text-zinc-500 transition-transform duration-200 transform group-hover:translate-x-0.5 group-hover:text-[#f90a1f]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>}
    </>
  );

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      className="group relative flex flex-col flex-1 justify-between overflow-hidden rounded-[14px] border border-white/5 bg-white/2 backdrop-blur-md h-full w-full transition-colors duration-200 hover:border-white/10 hover:bg-white/4"
    >
      {renderCardContent()}
    </motion.div>
  );
}