"use client";

import React, { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useSafeReducedMotion } from "../../../utils/useSafeReducedMotion";
import ServiceFaq from "../../../components/ui/ServiceFaq";
import { Space_Grotesk, Inter } from "next/font/google";
import { Reveal } from "../../../utils/AnimationReveal";
import { SERVICES_DATA, type ServiceItem } from "../../../data/serviceData";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import ServiceWhyChoose from "../../../components/ui/ServiceWhyChoose";

import {
  MetricCard,
  PillarCard,
  CapabilityCard,
  StackGroup,
  ArchitectureStep,
  RelatedServiceCard,
} from "../../../components/ui/ServiceCard";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

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
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: reduced ? 0 : 0.06 },
      },
    };

    const item: Variants = {
      hidden: { opacity: 0, y: reduced ? 0 : 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      },
    };
    return { containerVariants: container, itemVariants: item };
  }, [reduced]);

  const relatedServices = useMemo(() => {
    if (!service) return [];
    const slugs = service.relatedSlugs?.length
      ? service.relatedSlugs
      : SERVICES_DATA.filter((s) => s.slug !== service.slug)
          .slice(0, 3)
          .map((s) => s.slug);
    return slugs
      .map((slug) => SERVICES_DATA.find((s) => s.slug === slug))
      .filter((s): s is ServiceItem => Boolean(s))
      .slice(0, 3);
  }, [service]);

  useEffect(() => {
    document.title = `${service?.titleTag} `;
    let metaDescription = document.querySelector('meta[name="description"]');
    const descriptionText = service?.metaDesc;

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
    <div
      className={`relative min-h-screen w-full overflow-hidden bg-[#030303] pb-12 text-white ${inter.className}`}
    >

      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-0 h-[800px] select-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-[15%] top-[-15%] h-[70%] w-[55%] rounded-full bg-[#f90a1f]/10 blur-[120px]" />
        <div className="absolute right-[15%] top-[-10%] h-[60%] w-[45%] rounded-full bg-[#f90a1f]/8 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030303]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-300 px-5 pt-32 md:pt-36">
        <Reveal>
          <Link
            href="/service"
            className="group mb-8 inline-flex items-center gap-2.5 text-[11px] font-normal uppercase tracking-[2.64px] text-zinc-500 transition-colors duration-300 hover:text-white"
          >
            <KeyboardBackspaceIcon
              style={{ fontSize: 13 }}
              aria-hidden="true"
              className="transform transition-transform duration-300 ease-out "
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
                  Enterprise Production Profile
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                className={`${spaceGrotesk.className} text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight leading-[1.1]`}
              >
                {service.longTitle}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8C] to-[#EF1F23]">
                  {service.gradientWord}
                </span>
                <span className="text-[#EF1F23]">.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-[#a7a3a4]">
                {service.longDesc}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#ef1f23] px-7 py-5.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#d60819] hover:shadow-[0_0_25px_rgba(249,10,31,0.3)] focus-visible:outline-none"
                >
                  Request Scope Audit
                  <ArrowForwardIcon
                    style={{ fontSize: 15 }}
                    aria-hidden="true"
                    className="transition-transform duration-200 "
                  />
                </Link>
                <Link
                  href="/service"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-transparent px-7 py-5.5 text-xs font-bold uppercase tracking-widest text-zinc-300 transition-all duration-300 hover:border-white/30 hover:text-white focus-visible:outline-none"
                >
                  View All Capabilities
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="w-full lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3,
              }}
              className="group/card relative space-y-5 rounded-[22px] border border-white/5 bg-white/2 p-6 md:p-8 shadow-2xl backdrop-blur-xl hover:border-[rgba(249,10,31,0.25)] transition-all duration-300"
            >
              <h3 className="text-lg font-bold uppercase text-zinc-300 tracking-wide">
                Deployment Stack
              </h3>
              <div className="space-y-4">
                {" "}
                {/* Increased spacing for better readability with descriptions */}
                {service.tags.map((tag) => (
                  <div
                    key={tag.name} // Uses the unique tag name as the key
                    className="flex flex-col gap-1 border-b border-white/5 pb-3.5 last:border-none last:pb-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ef1f23] shadow-[0_0_8px_#ef1f23]" />
                      <span className="font-mono text-[13px] font-semibold text-white">
                        {tag.name}
                      </span>
                    </div>
                    {/* Tag Description Layer */}
                    <p className="pl-4 text-xs leading-relaxed text-zinc-400">
                      {tag.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mt-16 md:mt-24 lg:mt-28 grid w-full grid-cols-1 gap-6 pt-12 sm:grid-cols-3"
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
        <div className="mt-16 md:mt-24 lg:mt-28 pt-12">
          <Reveal>
            <div className="space-y-2">
              <p className="text-[#f90a1f] text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
                Core Philosophy
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Engineered for{" "}
                <span className="bg-gradient-to-r from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                  Production Reality
                </span>
              </h2>
            </div>
          </Reveal>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
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
        <div className="mt-16 md:mt-24 lg:mt-28 pt-12">
          <Reveal>
            <div className="space-y-2">
              <p className="text-[#f90a1f] text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
                Capability Matrix
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                What's{" "}
                <span className="bg-gradient-to-r from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                  Included
                </span>
              </h2>
            </div>
          </Reveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" // Updated grid layouts for richer text cards
          >
            {service.features.map((feature) => (
              <CapabilityCard
                key={feature.title} // Uses the unique title as the React execution key
                data={feature} // Passes the entire object { title, description } to the card component
                variants={itemVariants}
                fontClass={spaceGrotesk.className}
              />
            ))}
          </motion.div>
        </div>

        {/* Granular Infrastructure Tech Categories Matrix */}
        <div className="mt-16 md:mt-24 lg:mt-28 pt-12">
          <Reveal>
            <div className="space-y-2">
              <p className="text-[#f90a1f] text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
                Engineering Stack
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Tools &{" "}
                <span className="bg-gradient-to-r from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                  Infrastructure
                </span>
              </h2>
            </div>
          </Reveal>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
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

        {/* Operational Flow Architecture Blueprint */}
        <div className="relative mt-16 md:mt-24 lg:mt-28 pt-12">
          <div className="mb-14 text-center">
            <Reveal>
              <div className="space-y-2 flex flex-col items-center text-center">
                <p className="text-[#f90a1f] text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
                  Operational Delivery Flow
                </p>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Execution Delivery{" "}
                  <span className="bg-gradient-to-r from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                    Framework
                  </span>
                </h2>
              </div>
            </Reveal>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
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

        {/* Accordion FAQ Block */}

        <ServiceFaq faqs={service.faqs} />
      </div>

      <ServiceWhyChoose
        serviceTitle={service.title}
        reasons={service.whyTeamsChoose}
      />
      {/* Adjacent Dynamic Routing Services Section */}
      <div className="relative z-10 mx-auto w-full max-w-300 px-5">
        {relatedServices.length > 0 && (
          <div className="mt-16 md:mt-20 lg:mt-23 pt-5">
            <Reveal>
              <div className="space-y-2">
                <p className="text-[#f90a1f] text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
                  Adjacent Capabilities
                </p>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Pairs Well{" "}
                  <span className="bg-gradient-to-r from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                    With
                  </span>
                </h2>
              </div>
            </Reveal>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {relatedServices.map((rel) => (
                <RelatedServiceCard
                  key={rel.slug}
                  data={rel}
                  variants={itemVariants}
                  fontClass={spaceGrotesk.className}
                />
              ))}
            </motion.div>
          </div>
        )}
      </div>

      {/* Conversion Banner Section */}
      <section className="relative w-full py-16 md:py-24 px-5 z-10">
        <div className="mx-auto w-full max-w-300">
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full bg-gradient-to-r from-[#070707] to-[#0d0d0d] border border-white/4 rounded-3xl p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 md:gap-8 overflow-hidden"
          >
            <div
              className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#f90a1f]/15 blur-[60px] pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10 space-y-1">
              <h2
                className={`${spaceGrotesk.className} text-2xl sm:text-3xl font-bold tracking-tight text-white`}
              >
                Have a project in mind?
              </h2>
              <p className="text-[#a7a3a4] text-xs sm:text-sm font-normal">
                Tell us the goal. We'll tell you the path.
              </p>
            </div>

            <Link
              href="/contact"
              className="group relative z-10 inline-flex items-center justify-center w-full md:w-auto px-7 sm:px-8 py-3.5 bg-[#f90a1f] hover:bg-[#d60819] text-white font-bold rounded-full shadow-[0_4px_25px_rgba(249,10,31,0.3)] transition-all duration-200 text-sm whitespace-nowrap shrink-0 gap-2"
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
    </div>
  );
}
