// components/ui/ServiceCards.tsx
import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import CheckIcon from "@mui/icons-material/Check";
import NorthEastIcon from "@mui/icons-material/NorthEast";

import {
  Metric,
  Pillar,
  TechCategory,
  ArchitecturePhase,
  ServiceItem,
} from "../../data/serviceData";

export const SHARED_CARD_CLASSES =
  "group flex h-full flex-col rounded-[22px] border border-white/5 bg-white/2 p-6 transition-all duration-300 hover:border-[rgba(249,10,31,0.35)] hover:bg-white/4 will-change-transform";

interface CardProps<T> {
  data: T;
  variants: Variants;
  fontClass?: string;
}

export function MetricCard({ data, variants, fontClass }: CardProps<Metric>) {
  return (
    <motion.div variants={variants} className={SHARED_CARD_CLASSES}>
      <span
        className={`${fontClass} block bg-gradient-to-b from-white to-[#a7a3a4] bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl`}
      >
        {data.value}
      </span>
      <span className="mt-2 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
        {data.label}
      </span>
    </motion.div>
  );
}

export function PillarCard({ data, variants, fontClass }: CardProps<Pillar>) {
  return (
    <motion.div variants={variants} className={SHARED_CARD_CLASSES}>
      <span className="mb-4 inline-block h-1.5 w-1.5 rounded-full bg-[#ef1f23] shadow-[0_0_8px_#ef1f23]" />
      <h4
        className={`${fontClass} text-base font-semibold text-zinc-100 transition-colors duration-200 group-hover:text-white`}
      >
        {data.title}
      </h4>
      <p className="mt-2 text-xs leading-relaxed text-[#a7a3a4]">{data.desc}</p>
    </motion.div>
  );
}

interface FeatureObject {
  title: string;
  description: string;
}

interface CapabilityCardProps {
  data: FeatureObject; // Updated from string to FeatureObject
  variants: any;
  fontClass?: string;
}

export function CapabilityCard({
  data,
  variants,
  fontClass,
}: CapabilityCardProps) {
  return (
    <motion.div variants={variants} className={SHARED_CARD_CLASSES}>
      <h4
        className={`${fontClass} text-base font-bold text-white tracking-wide transition-colors duration-200 group-hover:text-zinc-100`}
      >
        {data.title}
      </h4>
      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400 transition-colors duration-200 group-hover:text-zinc-300">
        {data.description}
      </p>
    </motion.div>
  );
}
export function StackGroup({
  data: category,
  variants,
}: CardProps<TechCategory>) {
  return (
    <motion.div variants={variants} className={SHARED_CARD_CLASSES}>
      <h4 className="mb-4 border-b border-white/5 pb-3 text-[11px] font-semibold uppercase tracking-[1.5px] text-zinc-500">
        {category.name}
      </h4>
      <div className="flex flex-wrap gap-2">
        {category.description}
      </div>
    </motion.div>
  );
}

export function ArchitectureStep({
  data: step,
  variants,
  fontClass,
}: CardProps<ArchitecturePhase>) {
  return (
   <div className="group relative z-10 flex h-full flex-col items-start rounded-[22px] border border-white/5 bg-white/2 p-6 text-left transition-transform duration-200 ease-linear hover:scale-[1.01] hover:-translate-y-1 hover:border-[rgba(249,10,31,0.35)] hover:bg-white/4">
      <span
        className={`${fontClass} mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm font-semibold text-zinc-300 transition-colors duration-300 group-hover:border-[#ef1f23]/50 group-hover:text-[#ef1f23]`}
      >
        {step.phase}
      </span>
      <h3
        className={`${fontClass} text-base font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-zinc-100`}
      >
        {step.title}
      </h3>
      <p className="mt-2 flex-grow text-xs leading-relaxed text-[#a7a3a4]">
        {step.desc}
      </p>
    </div>
  );
}

export function RelatedServiceCard({
  data: related,
  variants,
  fontClass,
}: CardProps<ServiceItem>) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="will-change-transform h-full"
    >
      <Link
        href={`/service/${related.slug}`}
        className="group relative flex h-full flex-col rounded-[28px] border border-white/5 bg-[#090909] p-8 text-left transition-all duration-300 hover:border-[rgba(249,10,31,0.25)] hover:bg-[#0d0d0d]"
      >
        {/* Top Header Row: Red Dot and Title */}
        <div className="flex items-start gap-4">
          {/* Soft Glowing Status Dot */}
          <div className="mt-2.5 h-[6px] w-[6px] shrink-0 rounded-full bg-[#ef1f23] shadow-[0_0_12px_3px_rgba(239,31,35,0.55)]" />

          <h3
            className={`${fontClass} text-2xl font-bold tracking-tight text-white leading-tight`}
          >
            {related.title}
          </h3>
        </div>

        {/* Main Description Body */}
        <p className="mt-4 flex-grow text-sm leading-relaxed text-zinc-400 font-light pr-4">
          {related.desc}
        </p>

        {/* Bottom Interactive Action Panel */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#ef1f23] transition-colors duration-200 group-hover:text-[#ff4a4e]">
            Explore Service
          </span>

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-white/[0.02] border border-white/5 text-zinc-400 transition-all duration-300 group-hover:bg-[#ef1f23]/10 group-hover:border-[#ef1f23]/30 group-hover:text-white">
            <NorthEastIcon style={{ fontSize: 16 }} aria-hidden="true" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
