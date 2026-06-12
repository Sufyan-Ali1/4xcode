"use client";

import React, { useState, useMemo } from "react";
import { Space_Grotesk, Inter } from "next/font/google";
import { Reveal } from "@/utils/AnimationReveal";
import { CaseStudyCard } from "../../components/ui/CaseStudyCard";
import { CASE_STUDIES_DATA } from "../../data/index";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import NarrativeSection from "@/components/landing/NarrativeSection";
import ContactCtaSection from "@/components/landing/ContactCtaSection";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI" },
  { id: "saas", label: "SaaS" },
  { id: "fintech", label: "Fintech" },
  { id: "automation", label: "Automation" },
  { id: "e-commerce", label: "E-commerce" },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCaseStudies = useMemo(() => {
    if (activeCategory === "all") return CASE_STUDIES_DATA;

    return CASE_STUDIES_DATA.filter(
      (item) => item.tag?.toLowerCase() === activeCategory.toLowerCase(),
    );
  }, [activeCategory]);

  return (
    <div
      className={`bg-[#030303] text-white min-h-screen w-full relative overflow-hidden pb-10 ${inter.className}`}
    >
      <div className="absolute top-0 left-0 right-0 h-125 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-15%] left-[15%] w-[55%] h-[70%] rounded-full bg-[#f90a1f]/10 blur-[120px]" />
        <div className="absolute top-[-10%] right-[15%] w-[45%] h-[60%] rounded-full bg-[#f90a1f]/8 blur-[120px]" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#030303]" />
      </div>

      <section className="relative w-full pt-36 pb-16 px-6 md:px-12 lg:px-24 z-10">
        <div className="max-w-7xl mx-auto flex flex-col space-y-6">
          <Reveal>
            <div className="flex items-center space-x-2 bg-zinc-900/50 border border-white/5 px-3 py-1 rounded-full text-xs font-medium tracking-wider text-zinc-400 uppercase backdrop-blur-sm w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f90a1f] animate-pulse" />
              <span>work</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className={`${spaceGrotesk.className} text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1] max-w-4xl`}
            >
              Software that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8C] to-[#EF1F23]">
                moved the
              </span>{" "}
              <br className="hidden sm:inline" /> needle
              <span className="text-[#EF1F23]">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-[#a7a3a4] text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
              A selection of products, platforms, and AI systems we've
              engineered with ambitious teams.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative w-full px-6 md:px-12 lg:px-24 mb-10 z-10">
        <Reveal delay={0.2}>
          <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-all duration-300 whitespace-nowrap cursor-pointer select-none outline-none ${
                    isActive
                      ? "bg-[#EF1F23] text-white border-[#EF1F23]"
                      : "text-zinc-400 border-white/10 bg-zinc-900/10 hover:text-white hover:border-white/20"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </Reveal>
      </section>
      {/* GRID LAYER */}
      <section className="relative w-full px-6 md:px-12 lg:px-24 z-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-zinc-500 text-sm mb-6 font-medium tracking-wide">
            {filteredCaseStudies.length}{" "}
            {filteredCaseStudies.length === 1 ? "Project" : "Projects"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {filteredCaseStudies.map((project) => (
              <div
                key={project.id}
                className="transition-transform duration-300 ease-out hover:scale-[1.015]"
              >
                <CaseStudyCard project={project} index={0} reduced={false} />
              </div>
            ))}
          </div>

          {/* ─── ALIGNED HIGH-FIDELITY CTA LAYER MATCHING REFERENCE IMAGE ─── */}
          <div className="w-full flex justify-center pt-10 ">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 md:py-3.5 bg-[#f90a1f] hover:bg-[#ef1f23] text-white text-[13px] font-semibold tracking-wide rounded-full shadow-[0_0_15px_0_rgba(249,10,31,0.45)] transition-all duration-300 select-none cursor-pointer gap-2 transform hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              <span>Become The Next Case Study</span>

              <span className="text-[11px] font-bold tracking-normal transition-transform duration-200 ">
                <ArrowForwardIcon style={{ fontSize: 18 }} />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <NarrativeSection spaceGroteskClassName={spaceGrotesk.className} />
      <ContactCtaSection />
    </div>
  );
}
