"use client";

import { entranceOffset, entranceTransition, interactionTransition, revealViewport } from "@/utils/motion";

import React from "react";
import home from "@/data/home.json";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "../../utils/useSafeReducedMotion";
import WebIcon from "@mui/icons-material/Web";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LayersIcon from "@mui/icons-material/Layers";
import CodeIcon from "@mui/icons-material/Code";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import { Reveal } from "../../utils/AnimationReveal";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

function ServiceIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative shrink-0 w-12 h-12 rounded-[18px] flex items-center justify-center text-[#f90a1f] bg-linear-to-br from-[rgba(249,10,31,0.2)] to-[rgba(249,10,31,0.05)] shadow-[0_0_0_1px_rgba(249,10,31,0.3),0_0_24px_0_rgba(239,31,35,0.3)]">
      {children}
    </div>
  );
}

const icons = { web: WebIcon, mobile: PhoneIphoneIcon, saas: LayersIcon, design: CodeIcon, ai: AutoAwesomeIcon, cloud: CloudQueueIcon };

export default function ServicesSection({ data = home.services }: { data?: typeof home.services }) {
  const reduced = useSafeReducedMotion();

  return (
    <section id={data.id} className="relative w-full overflow-hidden bg-black py-15">
      <div className="absolute inset-0 opacity-30 pointer-events-none " />
      <div className="site-container relative flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-3.75 text-center max-w-2xl pt-1.25">
          <Reveal>
            <p className="text-[#f90a1f] text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
              {data.label}
            </p>
          </Reveal>

          <Reveal>
            <h2 className="text-white font-bold text-[32px] md:text-[48px] text-center tracking-[-1.2px] leading-[1.1]">
              {data.heading}{" "}<span className="bg-clip-text text-transparent bg-linear-to-br from-[#ff8a8c] to-[#ef1f23]">{data.highlight}</span>
            </h2>
          </Reveal>

          <Reveal><p className="text-[#a7a3a4] text-base leading-6">{data.description}</p></Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {data.items.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: reduced ? 0 : entranceOffset }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={entranceTransition}
              className="group flex flex-col rounded-[18px] overflow-hidden border border-white/5 hover:border-[rgba(249,10,31,0.35)] transition-colors duration-200 bg-white/4 will-change-transform"
            >
              <Link
                href={service.href}
                className="flex flex-col gap-[7.4px] items-start p-7.25 w-full h-full cursor-pointer"
              >
                <ServiceIcon>{React.createElement(icons[service.icon as keyof typeof icons], { fontSize: "small" })}</ServiceIcon>

                <div className="w-full pt-[16.6px]">
                  <h3 className="text-white font-bold w-full text-[20px] leading-7 tracking-[-0.5px]">
                    {service.title}
                  </h3>
                </div>

                <p className="text-[#a7a3a4] font-normal w-full text-[14px] leading-[22.75px]">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 pt-[16.6px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#f90a1f] text-[14px] leading-5 font-normal">
                  <span>{data.cardAction}</span>
                  <ArrowForwardIcon style={{ fontSize: 16 }} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <Reveal className="w-full flex justify-center">
          <motion.a
            href={data.action.href}
            whileHover={{ scale: 1.02, transition: interactionTransition }}
            className="flex items-center justify-center h-13.25 w-full max-w-140 rounded-[55px] border-2 border-[#f90a1f] bg-black/30 hover:bg-[rgba(249,10,31,0.08)] transition-colors duration-200 cursor-pointer px-13.25 py-5 text-white font-bold text-center capitalize whitespace-nowrap text-[20px]"
          >
            {data.action.label}
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
