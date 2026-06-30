// components/work/WorkHeader.tsx
"use client";

import React from "react";
import { Reveal } from "@/utils/AnimationReveal";

interface WorkHeaderProps {
  spaceGroteskClass: string;
}

export default function WorkHeader({ spaceGroteskClass }: WorkHeaderProps) {
  return (
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
        <h1 className={`${spaceGroteskClass} text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1] max-w-4xl`}>
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
          A selection of products, platforms, and AI systems we've engineered with ambitious teams.
        </p>
      </Reveal>
    </section>
  );
}