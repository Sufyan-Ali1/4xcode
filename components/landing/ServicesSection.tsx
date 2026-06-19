"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import WebIcon from "@mui/icons-material/Web";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LayersIcon from "@mui/icons-material/Layers";
import CodeIcon from "@mui/icons-material/Code";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import { Reveal } from "../../utils/AnimationReveal";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/dist/client/link";

function ServiceIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative shrink-0 w-12 h-12 rounded-[18px] flex items-center justify-center text-[#f90a1f] bg-linear-to-br from-[rgba(249,10,31,0.2)] to-[rgba(249,10,31,0.05)] shadow-[0_0_0_1px_rgba(249,10,31,0.3),0_0_24px_0_rgba(239,31,35,0.3)]">
      {children}
    </div>
  );
}

const services = [
  {
    icon: (
      <ServiceIcon>
        <WebIcon fontSize="small" />
      </ServiceIcon>
    ),

    title: "Web Development",
    slug: "web-development",
    description:
      "A web development agency building blisteringly fast, full-stack platforms with modern frameworks and edge-first architecture.",
  },
  {
    icon: (
      <ServiceIcon>
        <PhoneIphoneIcon fontSize="small" />
      </ServiceIcon>
    ),
    title: "Mobile Apps",
    slug: "mobile-apps",
    description:
      "Native-feeling iOS and Android app development using React Native, Swift, and Kotlin.",
  },
  {
    icon: (
      <ServiceIcon>
        <LayersIcon fontSize="small" />
      </ServiceIcon>
    ),
    title: "SaaS Engineering",
    slug: "saas-engineering",
    description:
      "Multi-tenant SaaS development services with billing, auth, analytics, and dashboards engineered to scale.",
  },
  {
    icon: (
      <ServiceIcon>
        <CodeIcon fontSize="small" />
      </ServiceIcon>
    ),
    title: "UI / UX Design",
    slug: "ui-ux-design",
    description:
      "A UI/UX design agency crafting cinematic, conversion-focused interfaces.",
  },
  {
    icon: (
      <ServiceIcon>
        <AutoAwesomeIcon fontSize="small" />
      </ServiceIcon>
    ),
    title: "AI Development",
    slug: "ai-development",
    description:
      "Production-grade AI agent development, RAG pipelines, and LLM-powered workflows that actually ship.",
  },
  {
    icon: (
      <ServiceIcon>
        <CloudQueueIcon fontSize="small" />
      </ServiceIcon>
    ),
    title: "Cloud Systems",
    slug: "cloud-systems",
    description:
      "Resilient cloud infrastructure consulting on AWS, Vercel, and Cloudflare — observable, secure, automated.",
  },
];

export default function ServicesSection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-black py-28 px-6 md:px-12 lg:px-24">
      <div className="absolute inset-0 opacity-30 pointer-events-none " />
      <div className="relative max-w-7xl mx-auto flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-3.75 text-center max-w-2xl pt-1.25">
          <Reveal delay={0}>
            <p className="text-[#f90a1f] text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
              Capabilities
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col items-center w-full">
              <h2 className="text-white font-bold text-[32px] md:text-[48px] text-center tracking-[-1.2px] leading-[1.1]">
                A studio engineered for
              </h2>
              <h2 className="font-bold text-[32px] md:text-[48px] text-center bg-clip-text text-transparent bg-linear-to-br from-[#ff8a8c] to-[#ef1f23] tracking-[-1.2px] leading-[1.1]">
                ambitious teams.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-[#a7a3a4] text-[16px] font-normal text-center leading-6">
              Interlocking capabilities. One obsessive standard of craft.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: reduced ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: 0.1 * index,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group flex flex-col rounded-[22px] overflow-hidden border border-transparent hover:border-[rgba(249,10,31,0.4)] transition-colors duration-300 bg-white/4 will-change-transform"
            >
              <Link
                href={`/service/${service.slug}`}
                className="flex flex-col gap-[7.4px] items-start p-7.25 w-full h-full cursor-pointer"
              >
                {service.icon}

                <div className="w-full pt-[16.6px]">
                  <h3 className="text-white font-bold w-full text-[20px] leading-7 tracking-[-0.5px]">
                    {service.title}
                  </h3>
                </div>

                <p className="text-[#a7a3a4] font-normal w-full text-[14px] leading-[22.75px]">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 pt-[16.6px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#f90a1f] text-[14px] leading-5 font-normal">
                  <span>Learn more</span>
                  <ArrowForwardIcon style={{ fontSize: 16 }} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.4} className="w-full flex justify-center">
          <motion.a
            href="/service"
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-center h-13.25 w-full max-w-140 rounded-[55px] border-2 border-[#f90a1f] bg-black/30 hover:bg-[rgba(249,10,31,0.08)] transition-colors duration-300 cursor-pointer px-13.25 py-5 text-white font-bold text-center capitalize whitespace-nowrap text-[20px]"
          >
            View More Services
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
