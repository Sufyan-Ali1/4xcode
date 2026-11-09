"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "../../utils/useSafeReducedMotion";
export interface NarrativeSegment {
  text: string;
  highlight?: boolean;
}

export interface NarrativeParagraph {
  segments: NarrativeSegment[];
  note?: string;
}

export interface NarrativeSectionData {
  heading: {
    white: string;
    red: string;
  };
  paragraphs: NarrativeParagraph[];
}
interface NarrativeSectionProps {
  spaceGroteskClassName: string;
  data: NarrativeSectionData;
}

export default function NarrativeSection({
  spaceGroteskClassName,
  data,
}: NarrativeSectionProps) {
  const reduced = useSafeReducedMotion();

  return (
    <section className="relative w-full z-10 pe-5 ps-5 sm:ps-8 md:ps-12 mt-15 md:mt-16 text-white">
      <div className="mx-auto w-full max-w-300 flex flex-col gap-8 md:gap-10">
        <motion.h2
          initial={{ opacity: 0, y: reduced ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`${spaceGroteskClassName} text-white text-2xl sm:text-3xl md:text-[40px] font-bold tracking-tight leading-[1.25] text-left max-w-5xl`}
        >
          {data.heading.white}
          <span className="pl-3 text-[#f90a1f]">
            {data.heading.red}
          </span>
        </motion.h2>

        <div className="flex flex-col gap-6 max-w-6xl text-sm md:text-[15px] font-light leading-[1.75] tracking-wide text-justify text-zinc-300">
          {data.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: reduced ? 0 : index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {paragraph.segments.map((segment, segmentIndex) =>
                segment.highlight ? (
                  <span
                    key={segmentIndex}
                    className="text-[#f90a1f] font-normal"
                  >
                    {segment.text}
                  </span>
                ) : (
                  <React.Fragment key={segmentIndex}>
                    {segment.text}
                  </React.Fragment>
                )
              )}

              {paragraph.note && (
                <span className="text-zinc-500 text-[13px] block mt-2">
                  {paragraph.note}
                </span>
              )}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
