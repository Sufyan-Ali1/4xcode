"use client";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

export default function TechnologyExperience({sectionData}) {
  return (
    <section className="w-full bg-[#030303] py-12 md:py-16">
      <div className="mx-auto flex flex-wrap  w-full max-w-7xl">
        <div className="rounded-[18px]   bg-[#101010] px-6 py-8 mx-5 md:mx-8 sm:py-9 lg:mx-14 md:py-10">
          <h2 className="max-w-[600px] text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl ">
            {sectionData.heading}
          </h2>
          <p className="mt-4 max-w-[620px] text-[12px] md:text-[14px] lg:text-[16px] font-normal leading-[1.7]  sm:text-[11px] text-zinc-300">
            {sectionData.description}
          </p>
          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
            {sectionData.cards.map((card, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="mt-[2px] shrink-0 text-[14px] leading-none text-[#EF1F23]">
                  <ArrowForwardIcon /> 
                </span>
                <div>
                  <h3 className="text-[12px] md:text-[14px] lg:text-[16px] font-bold leading-snug text-white ">
                    {card.card_heading}
                  </h3>

                  <p className="mt-2 text-[10px] md:text-[12px] lg:text-[14px] font-normal leading-[1.6]  text-zinc-300 ">
                    {card.card_description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}