"use client";

import React from "react";
import { Space_Grotesk } from "next/font/google";
import { Reveal } from "../../utils/AnimationReveal";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const TIMELINE = [
  {
    year: "2021",
    title: "Founded",
    desc: "Founded by Vic and Muhammad Ali, 4xCode began with a simple mission: to challenge the traditional software development model. We believed businesses deserved a technology partner that moved faster, communicated better, and built products with uncompromising quality. What started as a two-person team has grown into a company trusted by clients to deliver scalable web, mobile, and SaaS solutions",
    side: "left",
  },
  {
    year: "2022",
    title: "First SaaS",
    desc: "We shipped our first multi-tenant SaaS platform for an auto garage business in the UK — a platform that's still live and running today. It was the project that taught us how to architect for scale from day one.",
    side: "right",
  },
  {
    year: "2024",
    title: "AI division",
    desc: "As large language models moved from research demos to genuine production tools, we spun up a dedicated applied AI practice — RAG pipelines, custom agents, and fine-tuned models built for real products, not prototypes.",
    side: "left",
  },
  {
    year: "2025",
    title: "Global team",
    desc: "Our team grew across three time zones and crossed 120+ projects shipped, working with startups, SaaS platforms, and AI products for clients across the US, UK, and EU.",
    side: "right",
  },
  {
    year: "2026",
    title: "Next chapter",
    desc: "We're pushing further into autonomous software systems — products that don't just respond to users, but act on their behalf.",
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
              From Pod to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8C] to-[#EF1F23]">
                Global Studio
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
