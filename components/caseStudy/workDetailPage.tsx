"use client";

import { spaceGrotesk, inter } from "@/lib/fonts";

import React, { useMemo, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Reveal } from "../../utils/AnimationReveal";
import { CaseStudyImage } from "../ui/CaseStudyImage";
import CaseStudydefaultImg from "../../public/assets/caseStudy.webp";
import type { CaseStudy } from "../../types/index";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import { BookDemoCallout } from "./BookDemoCallout";
import styles from "./workModule.module.css";

interface CaseStudyDetailProps {
  study: CaseStudy | any;
}

interface ParsedSection {
  id: number;
  title: string;
  htmlContent: string;
}

export default function WorkDetail({ study }: CaseStudyDetailProps) {
  const reduced = useReducedMotion();
  const [sections, setSections] = useState<ParsedSection[]>([]);

  const heroImage = useMemo(() => {
    if (study?.images && study.images.length > 0) {
      return study.images[0].image;
    }
    return study?.image || CaseStudydefaultImg;
  }, [study]);

  useEffect(() => {
    if (!study?.content) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(study.content, "text/html");

    const headings = doc.querySelectorAll("h2");
    const parsed: ParsedSection[] = [];

    headings.forEach((heading, idx) => {
      const rawText = heading.textContent || "";
      const cleanTitle = rawText.replace(/^\d+\.\s*/, "").trim();

      // Skip rendering the manual "Book Your Free Demo" if it appears in the raw payload
      if (!cleanTitle || cleanTitle.toLowerCase().includes("book your free demo")) return;

      let htmlContent = "";
      let nextNode = heading.nextElementSibling;
      while (nextNode && nextNode.tagName !== "H2") {
        htmlContent += nextNode.outerHTML;
        nextNode = nextNode.nextElementSibling;
      }

      parsed.push({
        id: idx + 1,
        title: cleanTitle,
        htmlContent: htmlContent,
      });
    });

    setSections(parsed);
  }, [study?.content]);

  const { containerVariants } = useMemo(() => {
    const container: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: reduced ? 0 : 0.06 },
      },
    };
    return { containerVariants: container };
  }, [reduced]);

  const scrollToSection = (sectionId: number) => {
    const target = document.getElementById(`section-${sectionId}`);
    if (target) {
      const offset = 24;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
    }
  };

  return (
    <div className={`relative min-h-screen w-full overflow-x-clip bg-[#030303] text-white ${inter.className}`}>
      {/* Ambient Glow Background Visuals */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[800px] select-none overflow-hidden" aria-hidden="true">
        <div className="absolute left-[15%] top-[-15%] h-[70%] w-[55%] rounded-full bg-[#f90a1f]/10 blur-[120px]" />
        <div className="absolute right-[15%] top-[-10%] h-[60%] w-[45%] rounded-full bg-[#f90a1f]/8 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030303]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-300 w-full grid-cols-1 gap-12 px-5 pt-36 lg:grid-cols-[1fr_350px]">

        {/* Left Content Column Dynamic Stream */}
        <main
        id="case-study-scroll-area"
        className="pb-32 pr-2">
          <div className="w-full space-y-12">
            <nav className="mb-4">
              <Reveal>
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2.5 text-[11px] font-normal uppercase tracking-[2.64px] text-zinc-500 transition-colors duration-300 hover:text-white"
                >
                  <KeyboardBackspaceIcon style={{ fontSize: 13 }} className="transform transition-transform duration-300 ease-out" />
                  <span>BACK TO CASE STUDIES</span>
                </Link>
              </Reveal>
            </nav>

            <header className="w-full space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-gradient-to-b from-white/[0.04] to-white/[0.02] px-3.5 py-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#ef1f23] shadow-[0px_0px_12px_rgba(239,31,35,0.8)]" />
                  <span className="text-[11px] font-medium uppercase tracking-[2px] text-zinc-400">
                    Case Study Analysis
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className={`${spaceGrotesk.className} text-3xl font-bold tracking-tight leading-tight sm:text-4xl md:text-[44px]`}>
                  {study.title || study.heading}
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-4 w-full overflow-hidden rounded-[22px] border border-white/5 bg-white/5 shadow-2xl backdrop-blur-xl">
                  <CaseStudyImage
                    src={heroImage}
                    alt={study.title || study.heading}
                    priority={true}
                  />
                </div>
              </Reveal>
            </header>

            {/* Rendered Live HTML Content Container Blocks */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.02 }}
              className="space-y-16"
            >
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={`section-${section.id}`}
                  className="scroll-mt-24 border-t border-white/5 pt-12 first:border-t-0 first:pt-0"
                >
                  <h2 className={`${spaceGrotesk.className} mb-6 flex items-center gap-3 text-xl font-bold sm:text-2xl text-white`}>
                    <span className="font-mono text-xs text-[#ef1f23]">
                      {String(section.id).padStart(2, "0")}.
                    </span>
                    {section.title}
                  </h2>

                  <div
                    className={`${styles.htmlRender} text-zinc-400 text-sm sm:text-base leading-relaxed space-y-4`}
                    dangerouslySetInnerHTML={{ __html: section.htmlContent }}
                  />
                </section>
              ))}

              <BookDemoCallout />
            </motion.div>
          </div>
        </main>

       {/* Right Sticky Navigation Index */}
       <aside className="hidden  lg:sticky lg:top-28 lg:self-start max-h-[calc(100vh-8rem)] flex-col border-l border-white/5 pl-8 lg:flex">
          <h4 className={`${spaceGrotesk.className} mb-5 border-b border-white/5 pb-2 text-[12px] font-bold uppercase tracking-[3px] text-zinc-500`}>
            DOCUMENT INDEX
          </h4>
          <nav className="flex-1 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <ul className="space-y-4 font-semibold text-zinc-400 text-sm pb-6">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollToSection(s.id)}
                    className="group/index flex items-start w-full text-left transition-colors duration-200 hover:text-white bg-transparent cursor-pointer"
                  >
                    <span className="font-mono text-xs text-[#ef1f23] mr-3 font-bold transition-transform duration-200 group-hover/index:translate-x-0.5">
                      {String(s.id).padStart(2, "0")}
                    </span>
                    <span className="group-hover/index:underline decoration-red-500/30 underline-offset-4 line-clamp-2">
                      {s.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
}
