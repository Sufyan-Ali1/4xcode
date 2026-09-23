"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "../../utils/useSafeReducedMotion";
import { Space_Grotesk, Inter } from "next/font/google";
import { Reveal } from "../../utils/AnimationReveal";
import { SERVICES_DATA } from "../../data/serviceData";
import {software_build_data} from "@/data/serviceData";
import {sectionData} from "@/data/serviceData";
import Build_for_industry from "@/components/Build_for_industry";
import Technology_Experience from "@/components/Technology_Experience";
import WebIcon from "@mui/icons-material/Web";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CodeIcon from "@mui/icons-material/Code";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import HubIcon from "@mui/icons-material/Hub";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import PaletteIcon from "@mui/icons-material/Palette";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import ProcessSection from "../../components/landing/ProcessSection";
import TestimonialsSection from "../../components/landing/TestimonialsSection";
import NarrativeSection from "../../components/landing/NarrativeSection";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

const ICONS_MAP: Record<string, React.ReactNode> = {
  ai: <AutoAwesomeIcon fontSize="small" />,
  software: <CodeIcon fontSize="small" />,
  saas: <HubIcon fontSize="small" />,
  web: <WebIcon fontSize="small" />,
  mobile: <PhoneIphoneIcon fontSize="small" />,
  api: <SettingsInputComponentIcon fontSize="small" />,
  automation: <ElectricBoltIcon fontSize="small" />,
  ui: <PaletteIcon fontSize="small" />,
  cloud: <CloudQueueIcon fontSize="small" />,
};

function DynamicServiceIcon({ iconKey }: { iconKey: string }) {
  return (
    <div className="relative shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center text-[#f90a1f] bg-gradient-to-br from-[rgba(249,10,31,0.2)] to-[rgba(249,10,31,0.05)] shadow-[0_0_0_1px_rgba(249,10,31,0.3),0_0_20px_0_rgba(239,31,35,0.25)]">
      {ICONS_MAP[iconKey] || <CodeIcon fontSize="small" />}
    </div>
  );
}

export default function ServicePage() {
  const reduced = useSafeReducedMotion();
  const MotionLink = motion.create(Link);

  useEffect(() => {
    document.title =
      "Software Development Services | AI, SaaS, Web & Mobile — 4xCode";
    let metaDescription = document.querySelector('meta[name="description"]');
    const descriptionText =
      "Explore 4xCode's full-stack services: AI development, SaaS engineering, web & mobile apps, cloud systems, UI/UX, and e-commerce. End-to-end software delivery.";

    if (metaDescription) {
      metaDescription.setAttribute("content", descriptionText);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", descriptionText);
      document.head.appendChild(metaDescription);
    }
       let canonicalLink = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = window.location.href;

    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonicalUrl);
    } else {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      canonicalLink.setAttribute("href", canonicalUrl);
      document.head.appendChild(canonicalLink);
    }
  }, []);

  return (
    <div className={`bg-[#030303] text-white min-h-screen relative w-full overflow-hidden pb-10 ${inter.className}`}>
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-[-15%] left-[15%] w-[55%] h-[70%] rounded-full bg-[#f90a1f]/10 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="absolute top-[-10%] right-[15%] w-[45%] h-[60%] rounded-full bg-[#f90a1f]/8 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030303]"
          aria-hidden="true"
        />
      </div>

      {/* GLOBAL WIDTH CONTAINER MANDATED GRID AND WRAPPERS */}
      <div className="mx-auto w-full max-w-300 px-5 pt-36 pb-16 relative z-10 space-y-10">
        
        {/* HERO SECTION */}
        <section className="w-full flex flex-col items-start space-y-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-gradient-to-b from-[rgba(255,255,255,0.04)] to-[rgba(255,255,255,0.02)] px-[13px] py-[5px]">
              <div className="w-[6px] h-[6px] rounded-full bg-[#ef1f23] shadow-[0px_0px_40px_-10px_rgba(245,29,49,0.7),0px_0px_80px_-30px_rgba(245,29,49,0.6)] shrink-0" />
              <span className="text-[12px] font-normal tracking-[2.64px] uppercase text-[rgba(255,255,255,0.7)] leading-[16px]">
                Services
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className={`${spaceGrotesk.className} text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight leading-[1.1] max-w-4xl`}>
              Every layer of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8C] to-[#EF1F23]">
                modern
              </span>{" "}
              <br className="hidden sm:inline" /> software
              <span className="text-[#EF1F23]">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-[#a7a3a4] text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed">
              4xCode delivers end-to-end software development services — from
              AI research and custom backend architecture to pixel-perfect
              frontend design and cloud infrastructure. Whether you need a
              SaaS platform built from scratch, an AI agent integrated into
              your product, or a full e-commerce buildout, our senior
              engineers handle every layer so you don't have to stitch
              together five different vendors.
            </p>
          </Reveal>
        </section>

        {/* CARDS SECTION */}
        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {SERVICES_DATA.map((service, index) => (
              <MotionLink
                key={service.slug}
                href={`/service/${service.slug}`}
                initial={{ opacity: 0, y: reduced ? 0 : 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.8,
                  delay: 0.06 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex flex-col rounded-[18px] overflow-hidden border border-white/5 hover:border-[rgba(249,10,31,0.35)] transition-all duration-300 bg-white/4 p-5 justify-between  hover:-translate-y-1"
              >
                <div className="w-full">
                  <div className="flex items-start justify-between w-full mb-4">
                    <DynamicServiceIcon iconKey={service.iconKey} />
                    <NorthEastIcon
                      className="text-zinc-600 group-hover:text-zinc-400 transition-transform duration-300 transform mt-1"
                      style={{ fontSize: 16 }}
                    />
                  </div>

                  <h3 className="text-white font-bold text-[18px] leading-6 tracking-[-0.3px]">
                    {service.title}
                  </h3>

                  {service.intro && (
                    <p className="text-[#a7a3a4] font-normal text-[13px] leading-relaxed mt-2 mb-4">
                      {service.intro}
                    </p>
                  )}

                  <ul className="space-y-2 mb-4">
                    {service.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start space-x-2 text-[12.5px]"
                      >
                        <CheckIcon
                          sx={{ color: "#f90a1f", fontSize: 13, mt: 0.5 }}
                          className="shrink-0"
                        />
                        <span className="font-normal text-zinc-400 leading-tight">
                          {feat.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full pt-4 border-t border-white/5 flex flex-wrap gap-1.5 mt-auto">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono tracking-wide text-zinc-400 bg-zinc-900/60 px-2 py-0.5 rounded-md border border-white/5"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </MotionLink>
            ))}
          </div>
        </section>
          <TestimonialsSection />
        {/* CTA BANNER */}
        <section className="w-full">
  <motion.div
    initial={{ opacity: 0, y: reduced ? 0 : 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="
      relative w-full overflow-hidden
      rounded-3xl
      border border-[#f90a1f]/60
      bg-[#070707]
      py-4
      px-6 
      sm:px-10 
      md:px-12 
      lg:px-16 
      flex flex-col md:flex-row
      items-center justify-between
      text-center md:text-left
      gap-5
    "
  >
    {/* Background red glow - right */}
    <div
      className="
        absolute -right-24 -top-24
        w-96 h-96
        rounded-full
        bg-[#f90a1f]/20
        blur-[90px]
        pointer-events-none
      "
      aria-hidden="true"
    />

    {/* Background red glow - bottom left */}
    <div
      className="
        absolute -left-24 -bottom-32
        w-72 h-72
        rounded-full
        bg-[#f90a1f]/10
        blur-[80px]
        pointer-events-none
      "
      aria-hidden="true"
    />

    {/* Decorative red corner */}
    <div
      className="
        absolute -top-16 -left-16
        w-32 h-32
        rounded-full
        bg-[#f90a1f]/20
        blur-[35px]
        pointer-events-none
      "
      aria-hidden="true"
    />

    {/* Content */}
    <div className="relative z-10">
      {/* Small label */}
      <div className="flex items-center justify-center md:justify-start gap-3 ">
        <span className="h-px w-6 bg-[#f90a1f]" />
        <span
          className="
            text-[#f90a1f]
            text-[10px] sm:text-xs
            font-bold
            tracking-[0.35em]
            uppercase
          "
        >
          Get Started
        </span>
        <span className="h-px w-6 bg-[#f90a1f]" />
      </div>

      {/* Heading */}
      <h2
        className={`${spaceGrotesk.className}
          text-3xl
          sm:text-4xl
          md:text-4xl
          lg:text-5xl
          font-bold
          tracking-tight
          leading-tight
          text-white
        `}
      >
        Have a project in{" "}
        <span className="text-[#f90a1f]">mind?</span>
      </h2>

      {/* Description */}
      <p className="
        mt-3
       text-[#a7a3a4]
        text-sm
        sm:text-base
        md:text-lg
        font-normal
      ">
        Tell us the goal. We'll tell you the path.
      </p>
    </div>

    {/* Button */}
    <Link
      href="/contact"
      className="
        group relative z-10
        inline-flex items-center justify-center
        w-full md:w-auto
        min-w-[180px]
        px-8 sm:px-10
        py-4
        bg-[#f90a1f]
        hover:bg-[#c70819]
        text-white
        font-bold
        rounded-full
        text-sm sm:text-base
        whitespace-nowrap
        shrink-0
        gap-3

        shadow-[0_0_25px_rgba(249,10,31,0.35)]
        

        transition-all duration-300
        
      "
    >
      <span>Start Project</span>

      <ArrowForwardIcon
        style={{ fontSize: 20 }}
        className="
          transition-transform
          duration-300
          
        "
      />
    </Link>

    {/* Bottom-right decorative glow */}
    <div
      className="
        absolute -right-16 -bottom-20
        w-48 h-48
        rounded-full
        border border-[#f90a1f]/30
        pointer-events-none
      "
      aria-hidden="true"
    />
  </motion.div>
</section>
      
      </div>
  <div className="flex flex-wrap w-full justify-center">
      <Build_for_industry data={software_build_data} />
      </div>
      {/* SUB-SECTIONS (THEY MANAGE THEIR OWN WRAPPERS) */}
     
      <NarrativeSection spaceGroteskClassName={spaceGrotesk.className} />
    
         <div className="flex flex-wrap w-full justify-center">
       <Technology_Experience sectionData={sectionData} />
      </div>
     
      <ProcessSection />
     
    </div>
  );
}   