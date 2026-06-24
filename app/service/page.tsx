"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "../../utils/useSafeReducedMotion";
import { Space_Grotesk, Inter } from "next/font/google";
import { Reveal } from "../../utils/AnimationReveal";
import { SERVICES_DATA } from "../../data/serviceData";
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
  }, []);

  return (
    <>
      <div
        className={`bg-[#030303] text-white min-h-screen relative w-full overflow-hidden pb-10 ${inter.className}`}
      >
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

        <section className="relative w-full pt-36 pb-24 flex items-center z-10 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-start space-y-6 relative z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-gradient-to-b from-[rgba(255,255,255,0.04)] to-[rgba(255,255,255,0.02)] px-[13px] py-[5px]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#ef1f23] shadow-[0px_0px_40px_-10px_rgba(245,29,49,0.7),0px_0px_80px_-30px_rgba(245,29,49,0.6)] shrink-0" />
                <span className="text-[12px] font-normal tracking-[2.64px] uppercase text-[rgba(255,255,255,0.7)] leading-[16px]">
                  Services
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                className={`${spaceGrotesk.className} text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight leading-[1.1] max-w-4xl`}
              >
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
          </div>
        </section>

        <section className="relative w-full z-10 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
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
                className="group flex flex-col rounded-[18px] overflow-hidden border border-white/5 hover:border-[rgba(249,10,31,0.35)] transition-all duration-300 bg-white/4 p-5 justify-between min-h-[380px] hover:-translate-y-1"
              >
                <div className="w-full">
                  <div className="flex items-start justify-between w-full mb-4">
                    <DynamicServiceIcon iconKey={service.iconKey} />
                    <NorthEastIcon
                      className="text-zinc-600 group-hover:text-zinc-400 transition-transform duration-300 transform  mt-1"
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

        <section className="relative w-full z-10 px-4 sm:px-6 md:px-12 lg:px-24 mt-20 md:mt-28">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full bg-gradient-to-r from-[#070707] to-[#0d0d0d] border border-white/4 rounded-3xl sm:rounded-4xl p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 md:gap-8 overflow-hidden"
            >
              <div
                className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#f90a1f]/15 blur-[60px] pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 space-y-2">
                <h2
                  className={`${spaceGrotesk.className} text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white`}
                >
                  Have a project in mind?
                </h2>
                <p className="text-[#a7a3a4] text-xs sm:text-sm md:text-base font-normal">
                  Tell us the goal. We'll tell you the path.
                </p>
              </div>

              <Link
                href="/contact"
                className="group relative z-10 inline-flex items-center justify-center w-full md:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-[#f90a1f] hover:bg-[#d60819] text-white font-bold rounded-full shadow-[0_4px_25px_rgba(249,10,31,0.3)] transition-all duration-200 text-sm sm:text-base whitespace-nowrap shrink-0 gap-2"
              >
                <span>Start Project</span>
                <ArrowForwardIcon
                  style={{ fontSize: 18 }}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </section>

        <NarrativeSection spaceGroteskClassName={spaceGrotesk.className} />
        <ProcessSection />
        <TestimonialsSection />
      </div>
    </>
  );
}
