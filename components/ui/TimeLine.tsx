"use client";

import React from "react";
import { Space_Grotesk } from "next/font/google";
import { Reveal } from "@/utils/AnimationReveal";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const TIMELINE = [
  {
    year: "2021",
    title: "Founded",
    desc: "Started as a 4-person engineering pod.",
    side: "left",
  },
  {
    year: "2022",
    title: "First SaaS",
    desc: "Shipped our first multi-tenant platform for a VC team.",
    side: "right",
  },
  {
    year: "2024",
    title: "AI division",
    desc: "Spun up our applied AI practice — LLMs, RAG, agents.",
    side: "left",
  },
  {
    year: "2025",
    title: "Global team",
    desc: "Engineers across 3 time zones, 120+ projects shipped.",
    side: "right",
  },
  {
    year: "2026",
    title: "Next chapter",
    desc: "Pushing into autonomous software systems.",
    side: "left",
  },
];

export default function TimelineSection() {
  return (
    <section className="relative w-full py-10 md:py-16 px-6 md:px-12 lg:px-24 z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        <Reveal>
          <div className="space-y-2">
            <span className="text-[#f90a1f] text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
              Our Journey
            </span>
            <h2
              className={`${spaceGrotesk.className} text-3xl font-bold tracking-tight`}
            >
              From pod to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8C] to-[#EF1F23]">
                global studio
              </span>
              .
            </h2>
          </div>
        </Reveal>

        <div className="relative max-w-3xl mx-auto before:absolute before:inset-y-0 before:left-4 md:before:left-1/2 md:before:-translate-x-1/2 before:w-[1px] before:bg-gradient-to-b before:from-zinc-800 before:via-[#EF1F23]/60 before:to-zinc-800">
          {TIMELINE.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-8 last:mb-0 w-full 
                ${item.side === "left" ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div
                className={`w-full md:w-[45%] pl-10 md:pl-0 ${item.side === "left" ? "md:text-right" : "md:text-left"} text-left`}
              >
                <Reveal delay={0.1}>
                  <div className="group flex flex-col rounded-[22px] border border-white/5 bg-white/2 p-5 transition-all duration-300 hover:border-[rgba(249,10,31,0.35)] hover:bg-white/4 will-change-transform">
                    <span className="text-[10px] font-bold text-[#EF1F23] block mb-1 tracking-wider">
                      {item.year}
                    </span>
                    <h4
                      className={`${spaceGrotesk.className} text-sm font-semibold mb-1 text-white`}
                    >
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              </div>

              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#EF1F23] shadow-[0_0_8px_#EF1F23] z-20 top-6 md:top-1/2 md:-translate-y-1/2" />
              <div className="hidden md:block w-[45%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
