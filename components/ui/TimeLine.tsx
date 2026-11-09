"use client";

import { spaceGrotesk } from "@/lib/fonts";

import React from "react";
import { Reveal } from "../../utils/AnimationReveal";

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
    <section className="relative w-full py-10 z-10 overflow-hidden box-border">
      <div className="site-container space-y-12 overflow-hidden">
        {/* Section Header */}
        <div className="w-full text-left">
          <Reveal>
            <div className="space-y-1">
              <span className="text-[#f90a1f] text-[11px] font-normal uppercase tracking-[3.6px] leading-4">
                Our Journey
              </span>
              <h2
                className={`${spaceGrotesk.className} text-2xl font-bold tracking-tight sm:text-3xl`}
              >
                From Pod to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8C] to-[#EF1F23]">
                  Global Studio
                </span>
                .
              </h2>
            </div>
          </Reveal>
        </div>

        {/* Timeline Dynamic Component Tree Wrapper */}
        {/* Timeline Dynamic Component Tree Wrapper */}
        <div className="relative mx-auto w-full box-border overflow-hidden before:absolute before:inset-y-0 before:left-4 before:w-[1px] before:bg-gradient-to-b before:from-zinc-900 before:via-[#EF1F23]/40 before:to-zinc-900 md:before:left-1/2 md:before:-translate-x-1/2">
          {TIMELINE.map((item, index) => (
            <div
              key={index}
              className={`relative flex w-full flex-col items-start justify-between mb-8 last:mb-0 md:flex-row md:items-center box-border
        ${item.side === "left" ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Card — min-w-0 prevents flex child from overflowing */}
              <div
                className={`w-full min-w-0 pl-10 md:pl-0 md:w-[42%] md:max-w-[42%] shrink-0 box-border ${item.side === "left" ? "md:text-right" : "md:text-left"} text-left`}
              >
                <Reveal>
                  <div className="group flex w-full flex-col rounded-[18px] border border-white/5 bg-white/[0.01] p-5 transition-all duration-200 hover:border-[#EF1F23]/25 hover:bg-white/[0.02] will-change-transform box-border overflow-hidden">
                    <span className="mb-0.5 block text-[10px] font-bold tracking-wider text-[#EF1F23]">
                      {item.year}
                    </span>
                    <h4
                      className={`${spaceGrotesk.className} mb-1 text-sm font-semibold text-white`}
                    >
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400 font-normal leading-relaxed break-words overflow-wrap-anywhere md:text-[13px]">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Central Dot */}
              <div className="absolute left-4 top-[26px] z-20 h-2 w-2 -translate-x-1/2 rounded-full bg-[#EF1F23] shadow-[0_0_8px_#EF1F23] md:left-1/2 md:top-1/2 md:-translate-y-1/2" />

              {/* Spacer — min-w-0 prevents it from expanding */}
              <div className="hidden min-w-0 w-[42%] md:block shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
