
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
function FeatureCheck({ featured }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`size-4 shrink-0 ${
        featured ? "text-[#ef1f23]" : "text-[#ff8a00]"
      }`}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}
function PricingCard({ plan, index }) {
  const featured = Boolean(plan.featured);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.25 },
      }}
      className={`relative flex h-full min-h-[372px] flex-col rounded-[15px] border bg-[#111111] px-7 py-8 transition-colors duration-300 sm:px-9 ${
        featured
          ? "border-[#ef1f23] shadow-[0_0_30px_rgba(239,31,35,0.06)]"
          : "border-[#454545] hover:border-white/40"
      }`}
    >
      <div>
        <h3 className="text-[21px] font-semibold leading-tight tracking-tight text-white sm:text-[23px]">
          {plan.name}
        </h3>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="text-xs font-normal text-[#a7a3a4]">
            {plan.currencySymbol}
          </span>

          <span className="text-[32px] font-bold leading-none tracking-tight text-white sm:text-[34px]">
            {plan.price}
          </span>

          <span className="text-sm text-[#a7a3a4]">
            {plan.billingPeriod}
          </span>
        </div>

        {plan.priceDescription && (
          <p className="mt-2 text-xs text-[#a7a3a4]">
            {plan.priceDescription}
          </p>
        )}
      </div>
      <ul className="mt-8 space-y-3.5">
        {plan.features?.map((feature, featureIndex) => (
          <li
            key={`${feature}-${featureIndex}`}
            className="flex items-start gap-3 text-sm leading-[1.5] text-[#e2e2e2]"
          >
            <span className="mt-[2px]">
              <FeatureCheck featured={featured} />
            </span>

            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <Link
          href={plan.action?.href || "/contact"}
          className={`flex min-h-[47px] w-full items-center justify-center rounded-lg px-5 py-3 text-center text-[13px] font-bold uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef1f23] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] ${
            featured
              ? "bg-[#ef1f23] text-white hover:bg-[#d60819] hover:shadow-[0_0_25px_rgba(239,31,35,0.25)]"
              : "bg-white text-black hover:bg-neutral-200"
          }`}
        >
          {plan.action?.label || "Select Plan"}
        </Link>
      </div>
    </motion.div>
  );
}
export default function PricingPlans({ data }) {
  if (!data) return null;

  return (
    <section
      id={data.sectionId || "pricing"}
      className="w-full flex flex-wrap justify-center"
      aria-label={data.sectionLabel || "Pricing plans"}
    >
      <div   className="relative w-full max-w-[1150px] overflow-hidden bg-black pt-5 pb-10 text-white ">

      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[260px] w-[650px] -translate-x-1/2 rounded-full bg-[#ef1f23]/[0.035] blur-[110px]"
      />

      <div className="relative z-10 mx-auto w-full">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center text-center s">
          <span className="text-[12px] uppercase tracking-[3.6px] text-[#f90a1f]/50">
            {data.eyebrow}
          </span>

          <h2 className="mt-4 text-white text-3xl md:text-5xl font-bold tracking-tight">
            {data.title}
            {data.highlight && (
              <span className="ml-3 bg-gradient-to-r from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                {data.highlight}
              </span>
            )}
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#a7a3a4] sm:text-base">
            {data.description}
          </p>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {data.plans?.map((plan, index) => (
            <PricingCard
              key={plan.id || plan.name}
              plan={plan}
              index={index}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}