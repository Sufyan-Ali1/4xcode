"use client";

import { entranceOffset, entranceTransition, revealViewport } from "@/utils/motion";

import { spaceGrotesk } from "@/lib/fonts";

import React from "react";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "../../utils/useSafeReducedMotion";
import { Reveal } from "../../utils/AnimationReveal";
import GroupsIcon from "@mui/icons-material/Groups";
import { TeamMember } from "../../types/index";
import { TEAM } from "../../data/index";

export default function TeamSection() {
  const reduced = useSafeReducedMotion();

  return (
    <section className="relative w-full  z-10">
      <div className="site-container space-y-10">
        <Reveal>
          <div className="flex items-end justify-between border-b border-zinc-900 pb-4">
            <div className="space-y-2">
              <span className="text-[#f90a1f] text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
                Team
              </span>
              <h2
                className={`${spaceGrotesk.className} text-3xl font-bold tracking-tight`}
              >
                Operators &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8C] to-[#EF1F23]">
                  Makers
                </span>
                .
              </h2>
            </div>
            <GroupsIcon sx={{ color: "#52525b" }} className="hidden sm:block" />
          </div>
        </Reveal>

        {/* Full-width container with clean line breaks */}
        <div className="w-full divide-y divide-zinc-800/60 border-b border-zinc-800/60">
          {TEAM.map((member: TeamMember) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: reduced ? 0 : entranceOffset }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={entranceTransition}
              className="w-full py-10 group transition-colors duration-200 hover:bg-zinc-900/10"
            >
              {/* Centered layout box grid across the screen */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-12 items-center w-full">

                {/* LEFT: Stacked Profile Metadata Block (Spans 4 columns) */}
                <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-3">
                  {/* 1. Initials on Top */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#EF1F23] to-[#990a0d] flex items-center justify-center font-bold tracking-wider text-white text-sm shadow-md shadow-[#EF1F23]/10 flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                    {member.initials}
                  </div>

                  <div className="space-y-1">
                    {/* 2. Name in Middle */}
                    <h4 className={`${spaceGrotesk.className} text-base font-semibold text-white tracking-tight`}>
                      {member.name}
                    </h4>

                    {/* 3. Role on Bottom */}
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#EF1F23]">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* RIGHT: Biography Text Block (Spans 8 columns) */}
                <div className="md:col-span-8 flex items-center justify-center md:justify-start">
                  {member.detail ? (
                    <p className="text-sm text-zinc-400 leading-relaxed font-normal antialiased text-center md:text-left">
                      {member.detail}
                    </p>
                  ) : (
                    <p className="text-sm text-zinc-600 italic">
                      Profile content pending.
                    </p>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
