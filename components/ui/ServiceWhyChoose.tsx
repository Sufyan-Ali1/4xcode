"use client";

import { spaceGrotesk } from "@/lib/fonts";

import React from "react";
import { Reveal } from "../../utils/AnimationReveal";

type WhyTeamChoose = {
  description: string;
  closing_tag:string;
  items?: { title: string; description: string }[];

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

  return (
    /* Added mx-auto, w-full, and bounded max-w to keep the section unified */
    <div className="mt-15 mx-auto flex w-full flex flex-wrap flex-col items-center overflow-hidden">
      <Reveal className="flex flex-wrap w-full">
        <h2 className={`${spaceGrotesk.className} text-left  text-3xl md:text-[40px] font-bold tracking-tight  text-white  w-full md:w-[90%] lg:w-[80%]`}>
          {whyTeamChooseWhiteHeading}{" "}
          <span className="bg-gradient-to-r from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
            {whyTeamChooseRedHeading}
          </span>
        </h2>
      </Reveal>

      {/* Premium Dynamic Grid Container */}
      {whyTeamsChoose.items?.length ? (
        <div className="mt-6 grid w-full gap-5 md:grid-cols-3">
          {whyTeamsChoose.items.map((item) => (
            <div key={item.title} className="rounded-[22px] border border-white/5 bg-white/2 p-6">
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      ) : <>
        <div className="w-full mt-5 flex flex-wrap">{whyTeamsChoose.description}</div>
        <div className="w-full mt-5 italic flex flex-wrap">{whyTeamsChoose.closing_tag}</div>
      </>}
      <div className="w-full flex flex-wrap">

     </div>
    </div>
  );
}
