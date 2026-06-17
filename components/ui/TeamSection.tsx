"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import { Reveal } from "../../utils/AnimationReveal";
import GroupsIcon from "@mui/icons-material/Groups";
import { TeamMember } from "../../types/index";
import { TEAM } from "../../data/index";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const CARD_STYLE =
  "group flex h-full flex-col rounded-[22px] border border-white/5 bg-white/2 p-6 transition-all duration-300 hover:border-[rgba(249,10,31,0.35)] hover:bg-white/4 will-change-transform items-center text-center";

export default function TeamSection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative w-full py-16 px-6 md:px-12 lg:px-24 z-10">
      <div className="max-w-7xl mx-auto space-y-10">
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
                  makers
                </span>
                .
              </h2>
            </div>
            <GroupsIcon sx={{ color: "#52525b" }} className="hidden sm:block" />
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-fr gap-6">
          {TEAM.map((member: TeamMember, index: number) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: reduced ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: 0.05 * (index % 4), 
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="h-full"
            >
              <div className={CARD_STYLE}>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#EF1F23] to-[#990a0d] flex items-center justify-center font-bold tracking-wider text-white text-base shadow-lg shadow-[#EF1F23]/10 mb-4 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                  {member.initials}
                </div>
                <h4 className={`${spaceGrotesk.className} text-sm font-semibold text-white`}>
                  {member.name}
                </h4>
                <p className="text-[11px] text-zinc-500 mt-0.5">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
