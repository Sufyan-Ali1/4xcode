"use client";

import { entranceOffset, entranceTransition, revealViewport } from "@/utils/motion";

import { spaceGrotesk, inter } from "@/lib/fonts";

import React, { useMemo } from "react";
import NarrativeSection from "@/components/landing/NarrativeSection";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion, type Variants } from "framer-motion";
import { useSafeReducedMotion } from "../../../utils/useSafeReducedMotion";
import ServiceFaq from "../../../components/ui/ServiceFaq";
import { Reveal } from "../../../utils/AnimationReveal";
import { SERVICES_DATA, type ServiceItem } from "../../../data/serviceData";

import CTA from "@/components/products/CTA" ;
import AboutSection from "@/components/landing/AboutSection";
import CompanyOverview from "@/components/landing/CompanyOverview";
import Technology_Experience from "@/components/Technology_Experience";
import Build_for_industry from "@/components/services_industry_usage";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import ServiceWhyChoose from "../../../components/ui/ServiceWhyChoose";

import {
  MetricCard,
  PillarCard,
  CapabilityCard,
  StackGroup,
  ArchitectureStep,
} from "../../../components/ui/ServiceCard";
import RelatedServices from "@/components/ui/relatedCard"

import {} from "@/components/ui/ServiceCard";

export default function ServiceDetailPage() {
  const params = useParams();
  const reduced = useSafeReducedMotion();

  const currentSlug = typeof params?.slug === "string" ? params.slug : "";
  const service = useMemo(() => {
    return (SERVICES_DATA as ServiceItem[]).find(
      (item) => item.slug === currentSlug,
    );
  }, [currentSlug]);

  if (!service) {
    notFound();
  }

  const { containerVariants, itemVariants } = useMemo(() => {
    const container: Variants = {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
      },
    };

    const item: Variants = {
      hidden: { opacity: 0, y: reduced ? 0 : entranceOffset },
      visible: {
        opacity: 1,
        y: 0,
        transition: entranceTransition,
      },
    };
    return { containerVariants: container, itemVariants: item };
  }, [reduced]);

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden bg-[#030303] pb-24 text-white ${inter.className}`}
    >
      {/* Background Glow Overlay Layer */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-0 h-[800px] select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-[15%] top-[-15%] h-[70%] w-[55%] rounded-full bg-[#f90a1f]/10 blur-[120px]" />
        <div className="absolute right-[15%] top-[-10%] h-[60%] w-[45%] rounded-full bg-[#f90a1f]/8 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030303]" />
      </div>

      {/* Primary Layout Container wrapper */}
      <div className="relative z-10 site-container pt-32 md:pt-36 flex flex-col">
        <Reveal>
          <Link
            href="/service"
            className="group mb-8 inline-flex items-center gap-2.5 text-[11px] font-normal uppercase tracking-[2.64px] text-zinc-500 transition-colors duration-200 hover:text-white"
          >
            <KeyboardBackspaceIcon
              style={{ fontSize: 13 }}
              aria-hidden="true"
              className="transform transition-transform duration-200 ease-out "
            />
            <span>BACK TO CAPABILITIES</span>
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-5 lg:col-span-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-gradient-to-b from-[rgba(255,255,255,0.04)] to-[rgba(255,255,255,0.02)] px-[13px] py-[5px]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#ef1f23] shadow-[0px_0px_40px_-10px_rgba(245,29,49,0.7)] shrink-0" />
                <span className="text-[12px] font-normal tracking-[2.64px] uppercase text-[rgba(255,255,255,0.7)] leading-[16px]">
                  {service.eyebrow}
                </span>
              </div>
            </Reveal>

            <Reveal>
              <h1
                className={`${spaceGrotesk.className} text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight leading-[1.1]`}
              >
                {service.longTitle}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8C] to-[#EF1F23]">
                  {service.gradientWord}
                </span>
                <span className="text-[#EF1F23]">{service.headingSuffix ?? "."}</span>
              </h1>
            </Reveal>

            <Reveal>
              <p className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-[#a7a3a4]">
                {service.longDesc}
              </p>
            </Reveal>

            {!service.hideHeroActions && <Reveal>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#ef1f23] px-7 py-5.5 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-[#d60819] hover:shadow-[0_0_25px_rgba(249,10,31,0.3)] focus-visible:outline-none"
                >
                  {service.contact_button}
                  <ArrowForwardIcon
                    style={{ fontSize: 15 }}
                    aria-hidden="true"
                    className="transition-transform duration-200 "
                  />
                </Link>
                <Link
                  href="/service"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-transparent px-7 py-5.5 text-xs font-bold uppercase tracking-widest text-zinc-300 transition-colors duration-200 hover:border-white/30 hover:text-white focus-visible:outline-none"
                >
                  {service.service_button}
                </Link>
              </div>
            </Reveal>}
          </div>

          <div className="w-full lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : entranceOffset }}
              animate={{ opacity: 1, y: 0 }}
              transition={entranceTransition}
              className="group/card relative space-y-5 rounded-[22px] border border-white/5 bg-white/2 p-6 md:p-8 shadow-2xl backdrop-blur-xl hover:border-[rgba(249,10,31,0.25)] transition-colors duration-200"
            >
              <h3 className="text-lg font-bold uppercase text-zinc-300 tracking-wide">
                {service.tags_section_heading}
              </h3>
              <div className="space-y-4">
                {service.tags.map((tag) => (
                  <div
                    key={tag.name}
                    className="flex flex-col gap-1 border-b border-white/5 pb-3.5 last:border-none last:pb-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ef1f23] shadow-[0_0_8px_#ef1f23]" />
                      <span className="font-mono text-[13px] font-semibold text-white">
                        {tag.name}
                      </span>
                    </div>
                    <p className="pl-4 text-xs leading-relaxed text-zinc-400">
                      {tag.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {service.metrics.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className={`relative mt-8 grid w-full grid-cols-1 gap-6 ${service.metrics.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}
          >
            {service.metrics.map((metric) => (
              <MetricCard
                key={metric.label}
                data={metric}
                variants={itemVariants}
                fontClass={spaceGrotesk.className}
              />
            ))}
          </motion.div>
        )}

        <div className="mt-8 pt-12">
          <Reveal>
            <div className="space-y-2">
              <p className="text-[#f90a1f] text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
                {service.labels?.philosophy ?? "Core Philosophy"}
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                {service.pillers_heading_white}{" "}
                <span className="bg-gradient-to-r from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                  {service.pillers_heading_red}
                </span>
              </h2>
            </div>
          </Reveal>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {service.pillars.map((pillar) => (
              <PillarCard
                key={pillar.title}
                data={pillar}
                variants={itemVariants}
                fontClass={spaceGrotesk.className}
              />
            ))}
          </motion.div>
        </div>

        <div className="mt-5">
     <ServiceWhyChoose
 whyTeamChooseWhiteHeading={service. whyTeamChooseWhiteHeading}
  whyTeamChooseRedHeading={service.whyTeamChooseRedHeading}
  whyTeamsChoose={service.whyTeamsChoose}

/>
      </div>
        <AboutSection contained statsVariant={currentSlug === "ai-automation" ? "metric" : "text"} data={service.about_section_data1} />
         <NarrativeSection contained data={service.NarrativeData} spaceGroteskClassName={spaceGrotesk.className} />
        <div className="mt-4 pt-12">
          <Reveal>
            <div className="space-y-2">
              <p className="text-[#f90a1f] text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
                {service.labels?.capabilities ?? "Capability Matrix"}
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                  {service.features_white_heading}{" "}
                <span className="bg-gradient-to-r from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                    {service.features_red_heading}
                </span>
              </h2>
            </div>
          </Reveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {service.features.map((feature) => (
              <CapabilityCard
                key={feature.title}
                data={feature}
                variants={itemVariants}
                fontClass={spaceGrotesk.className}
              />
            ))}
          </motion.div>
        </div>

        <div className="mt-4 pt-12">
          <Reveal>
            <div className="space-y-2">
              <p className="text-[#f90a1f] text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
                {service.labels?.stack ?? "Engineering Stack"}
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                {service.tech_section_white_heading}{" "}
                <span className="bg-gradient-to-r from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                  {service.tech_section_red_heading}
                </span>
              </h2>
            </div>
          </Reveal>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {service.techCategories.map((category) => (
              <StackGroup
                key={category.name}
                data={category}
                variants={itemVariants}
              />
            ))}
          </motion.div>
        </div>
          <div className="w-full mt-10 ">
              <CTA data={service.cta} />
          </div>
        <div className="relative mt-8 pt-12">
          <div className="mb-14 text-center">
            <Reveal>
              <div className="space-y-2 flex flex-col items-center text-center">
                <p className="text-[#f90a1f] text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
                  {service.labels?.process ?? "Operational Delivery Flow"}
                </p>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  {service.archetecture_white_heading}{" "}
                  <span className="bg-gradient-to-r from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                    {service.archetecture_red_heading}
                  </span>
                </h2>
              </div>
            </Reveal>

          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="relative mx-auto grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8"
          >
            {service.architecture.map((step) => (
              <ArchitectureStep
                key={step.phase}
                data={step}
                variants={itemVariants}
                fontClass={spaceGrotesk.className}
              />
            ))}
          </motion.div>
        </div>

      </div>

        <div className="w-full flex flex-wrap justify-center">
          <div className="w-full">
      <Build_for_industry data={service.buildforindustry} />
        <CompanyOverview data={service.about_section_data2} />
       <Technology_Experience sectionData={service.sectionData} />

        </div>
      </div>

      {/* Dynamic Routing Services & Final Project CTA Wrapper */}
      <div className="relative z-10 site-container flex flex-col">

          <div className="mt-10 pt-5">
            <Reveal>
              <div className="space-y-2">
                <p className="text-[#f90a1f] text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
                  {service.labels?.related ?? "Adjacent Capabilities"}
                </p>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  {service.relatedSlugsWhiteHeading}{" "}
                  <span className="bg-gradient-to-r from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                    {service.relatedSlugsRedHeading}
                  </span>
                </h2>
              </div>
            </Reveal>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {service.relatedSlugs.map((rel,index) => (
                  <RelatedServices
                  key={index}

                    items={rel}

                />
              ))}
            </motion.div>
          </div>

      </div>
      <div className="site-container pt-20">
          <ServiceFaq
          label={service.labels?.faq}
          description={service.faqDescription}
          faq_white_heading={service.faq_white_heading}
          faq_red_heading={service.faq_red_heading}
          faqs={service.faqs} />
          </div>
    </div>
  );
}
