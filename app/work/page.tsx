import React from "react";
import { Space_Grotesk, Inter } from "next/font/google";
import { Reveal } from "@/utils/AnimationReveal";
import { getCaseStudies } from "@/lib/caseStudyApi";
import NarrativeSection from "../../components/landing/NarrativeSection";
import ContactCtaSection from "../../components/landing/ContactCtaSection";
import WorkGrid from "../../components/caseStudy/WorkGrid";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default async function WorkPage() {
  const caseStudies = await getCaseStudies();

  return (
    <div className={`bg-[#030303] text-white min-h-screen w-full relative overflow-hidden pb-10 ${inter.className}`}>
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 right-0 h-125 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-15%] left-[15%] w-[55%] h-[70%] rounded-full bg-[#f90a1f]/10 blur-[120px]" />
        <div className="absolute top-[-10%] right-[15%] w-[45%] h-[60%] rounded-full bg-[#f90a1f]/8 blur-[120px]" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#030303]" />
      </div>

      {/* ✅ STRUCTURAL WRAPPER CHASSIS LINKING MAIN HEADINGS AND CARDS TOGETHER */}
      <div className="mx-auto w-full max-w-300 px-5 pt-28 pb-16 relative z-10 flex flex-col gap-y-16">
        
        {/* Header Section Container */}
        <section className="w-full flex flex-col space-y-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-gradient-to-b from-[rgba(255,255,255,0.04)] to-[rgba(255,255,255,0.02)] px-[13px] py-[5px]">
              <div className="w-[6px] h-[6px] rounded-full bg-[#ef1f23] shadow-[0px_0px_40px_-10px_rgba(245,29,49,0.7),0px_0px_80px_-30px_rgba(245,29,49,0.6)] shrink-0" />
              <span className="text-[12px] font-normal tracking-[2.64px] uppercase text-[rgba(255,255,255,0.7)] leading-[16px]">
                Work
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className={`${spaceGrotesk.className} text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1] max-w-4xl`}>
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
        </section>

        {/* Work Grid Render Element */}
        <WorkGrid caseStudies={caseStudies} />
      </div>

      {/* Sub-sections (They contain their own max-w-300 layout boundaries) */}
      <NarrativeSection spaceGroteskClassName={spaceGrotesk.className} />
      <ContactCtaSection />
    </div>
  );
}