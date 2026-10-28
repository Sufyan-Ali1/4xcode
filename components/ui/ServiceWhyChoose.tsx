"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "../../utils/useSafeReducedMotion";
import { Space_Grotesk } from "next/font/google";
import { Reveal } from "../../utils/AnimationReveal";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});

type WhyTeamChoose = {
  description: string;
  closing_tag:string;

};

type ServiceWhyChooseProps = {
  whyTeamChooseWhiteHeading: string;
  whyTeamChooseRedHeading: string;
  whyTeamsChoose: WhyTeamChoose;
};

export default function ServiceWhyChoose({
  whyTeamChooseWhiteHeading,
  whyTeamChooseRedHeading,
  whyTeamsChoose,
}: ServiceWhyChooseProps) {
  const reduced = useSafeReducedMotion();



  return (
    /* Added mx-auto, w-full, and bounded max-w to keep the section unified */
    <div className="mt-15 mx-auto flex w-full max-w-300 flex-col items-center px-5 overflow-hidden">
      <Reveal>
        <h3 className={`${spaceGrotesk.className} text-center text-2xl font-bold md:text-3xl tracking-tight text-white px-4`}>
          {whyTeamChooseWhiteHeading}
          <span className="ml-3 bg-gradient-to-r from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
            {whyTeamChooseRedHeading}
          </span>
        </h3>
      </Reveal>

      {/* Premium Dynamic Grid Container */}
     <div className="w-full flex flex-wrap">
        {whyTeamsChoose.description}
     </div>
        <div className="w-full mt-5 italic flex flex-wrap">
        {whyTeamsChoose.closing_tag}
     </div>
      <div className="w-full flex flex-wrap">
    
     </div>
    </div>
  );
}