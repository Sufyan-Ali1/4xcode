"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "../../utils/useSafeReducedMotion";
export interface AboutSectionData {
  white_heading: string;
  red_heading: string;
  paragraphs: string[];
  stats?: {
    value: string;
    label: string;
  }[];
  image: string;
  founded?: string;
}

interface AboutSectionProps {
  data: AboutSectionData;
}

export default function CompanyOverview({ data }: AboutSectionProps) {
  const reduced = useSafeReducedMotion();

  return (
    <section className="bg-black w-full text-white flex justify-center py-8 md:py-16">
      <div className="w-full max-w-7xl px-5 sm:px-8 md:px-12 flex flex-col lg:flex-row justify-between gap-10 lg:gap-16">
        {/* ── Left: Image ── */}
       
       <div className="flex flex-col items-start gap-4 w-full lg:w-1/2">

          <div>
            <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15] text-white">
              {data.white_heading}
              <span className="ml-3 bg-gradient-to-br from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                {data.red_heading}
              </span>
            </h2>
          </div>

          <div>
            <div className="space-y-3 text-gray-400 text-sm md:text-base leading-relaxed font-light">
              {data.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

        
        </div>
         {/* ── Right: Text + Stats ── */}
         <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          /* On mobile: fixed height so it doesn't eat the whole screen.
             On desktop: flex-1 with square aspect. */
          className="relative w-full lg:w-1/2 isolate"
        >
          <div className="absolute inset-0 rounded-3xl bg-[#F90A1F]/25 blur-[18px] scale-105 -z-10" />

          {/* Fixed height on mobile, aspect-square only on lg+ */}
          <div className="relative w-full h-64 sm:h-80 lg:h-auto lg:aspect-square rounded-3xl border border-white/5 overflow-hidden">
            <Image
              src={data.image}
              alt="Engineering Team"
              fill
              priority
              className="object-cover"
            />
          </div>

       
        </motion.div>

       
      </div>
    </section>
  );
}
