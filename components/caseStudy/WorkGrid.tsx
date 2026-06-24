"use client";

import React, { useState } from "react";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CaseStudyCard } from "../ui/CaseStudyCard";

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  images: any[]; 
  date: string;
  category: string;
  author: string | undefined;
  content_type: 'case_study' | string;
}

export type CaseStudyList = CaseStudyItem[];

interface WorkGridProps {
  caseStudies: CaseStudyList | any[];
}

export default function WorkGrid({ caseStudies }: WorkGridProps) {
  const [visibleCount, setVisibleCount] = useState(10);
  const displayedCaseStudies = caseStudies.slice(0, visibleCount);

  return (
    // ✅ REMOVED INDEPENDENT px-6 AND max-w LAYOUT LIMITS
    // Dropping directly within the main layout tree guarantees identical positioning baselines
    <div className="w-full">
      {/* Project Total Counter Label */}
      <p className="text-zinc-500 text-sm mb-6 font-medium tracking-wide">
        {caseStudies.length}{" "}
        {caseStudies.length === 1 ? "Project" : "Projects"}
      </p>

      {/* Responsive Flex Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 auto-rows-fr items-stretch">
        {displayedCaseStudies.map((project: CaseStudyItem, index: number) => (
          <Link
            href={`/work/${project.slug}`}
            key={project.id}
            className="flex flex-col h-full w-full transition-transform duration-300 ease-out hover:scale-[1.015]"
          >
            <CaseStudyCard
              project={project}
              index={index}
            />
          </Link>
        ))}
      </div>

      {/* Conditional Load More Action Button */}
      {caseStudies.length > visibleCount && (
        <div className="w-full flex justify-center pt-12">
          <button
            onClick={() => setVisibleCount(caseStudies.length)}
            className="group inline-flex items-center justify-center px-8 py-4 md:py-3.5 bg-[#f90a1f] hover:bg-[#ef1f23] text-white text-[13px] font-semibold tracking-wide rounded-full shadow-[0_0_15px_0_rgba(249,10,31,0.45)] transition-all duration-300 select-none cursor-pointer gap-2 transform hover:-translate-y-0.5 hover:scale-[1.02] outline-none"
          >
            <span>Load More Projects</span>
            <span className="text-[11px] font-bold tracking-normal transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowForwardIcon style={{ fontSize: 18 }} />
            </span>
          </button>
        </div>
      )}
    </div>
  );
}