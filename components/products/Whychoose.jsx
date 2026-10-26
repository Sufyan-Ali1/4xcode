
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="size-[19px] shrink-0 text-[#f90a1f]"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.5" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  );
}
function WorkflowNumber({ number }) {
  return (
    <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#f90a1f] bg-[#f90a1f]/[0.06] text-sm font-semibold text-[#f90a1f] transition-all duration-300 group-hover:bg-[#f90a1f]/15">
      {number}
    </div>
  );
}
export default function WhyChoose({ data }) {
  if (!data) return null;

  return (
    <section
      className="relative w-full overflow-hidden bg-[#030303] pb-10 "
      aria-label={data.sectionLabel}
    >
      <div className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-[22px] border border-white/[0.10] bg-[#090909] p-5 sm:p-7 md:p-8 lg:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-32 size-[350px] rounded-full bg-[#f90a1f]/[0.035] blur-[100px]"
        />

        <div className="relative z-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">

          <div className="min-w-0 space-y-7 lg:col-span-7">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="space-y-3"
            >
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.8px] text-white sm:text-4xl md:text-[40px]">
                {data.title}
              </h2>

              <p className="max-w-[650px] text-sm leading-[1.65] text-[#a7a3a4] sm:text-base">
                {data.description}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="space-y-3.5"
            >
              {data.features?.map((feature, index) => (
                <div
                  key={`${feature}-${index}`}
                  className="group flex items-center gap-3"
                >
                  <CheckIcon />

                  <span className="text-sm leading-6 text-[#d4d4d4] transition-colors duration-300 group-hover:text-white sm:text-[15px]">
                    {feature}
                  </span>
                </div>
              ))}
            </motion.div>
            <div className="space-y-5 pt-1">
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-lg font-semibold tracking-tight text-white sm:text-xl"
              >
                {data.workflowTitle}
              </motion.h3>

              <div className="space-y-4">
                {data.workflow?.map((step, index) => (
                  <motion.div
                    key={`${step.number}-${index}`}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex items-center gap-3"
                  >
                    <WorkflowNumber number={step.number} />

                    <p className="text-sm leading-[1.65] text-[#c5c5c5] sm:text-[15px]">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="min-w-0 space-y-6 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group rounded-[17px] border border-white/[0.10] bg-[#111111] p-5 transition-all duration-300 hover:border-[#f90a1f]/30 sm:p-6"
            >
              <h3 className="mb-5 text-base font-semibold text-white sm:text-lg">
                {data.scheduledJob?.title}
              </h3>

              <div className="space-y-4">
                {data.scheduledJob?.details?.map((item, index) => (
                  <div
                    key={`${item.label}-${index}`}
                    className="space-y-1"
                  >
                    <p className="text-[11px] font-normal uppercase tracking-wide text-[#a7a3a4]">
                      {item.label}
                    </p>
                    <p className="break-words text-sm font-medium text-white sm:text-[15px]">
                      {item.value}
                    </p>
                  </div>
                ))}
                {data.scheduledJob?.status && (
                  <div className="space-y-1">
                    <p className="text-[11px] font-normal uppercase tracking-wide text-[#a7a3a4]">
                      {data.scheduledJob.status.label}
                    </p>

                    <span className="inline-flex rounded border border-[#f90a1f]/70 px-2 py-1 text-xs font-medium text-[#ff454d]">
                      {data.scheduledJob.status.value}
                    </span>
                  </div>
                )}
                {data.scheduledJob?.action && (
                  <Link
                    href={data.scheduledJob.action.href}
                    className="inline-flex min-h-[45px] w-full items-center justify-center rounded-lg bg-[#f90a1f] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#d60819] hover:shadow-[0_0_24px_rgba(249,10,31,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f90a1f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
                  >
                    {data.scheduledJob.action.label}
                  </Link>
                )}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-[17px] border border-white/[0.10] bg-[#111111] p-5 transition-all duration-300 hover:border-[#f90a1f]/30 sm:p-6"
            >
              <h3 className="mb-4 text-base font-semibold text-white sm:text-lg">
                {data.gpsValidation?.title}
              </h3>

              <div className="relative flex min-h-[118px] items-center justify-center overflow-hidden rounded-[15px] bg-gradient-to-br from-[#a82c31] via-[#f90a1f] to-[#812126] px-4 py-7 text-center sm:min-h-[130px]">
               <div
  aria-hidden="true"
  className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.35)_25%,transparent_55%)]"
/>

<div
  aria-hidden="true"
  className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[200px] rotate-[-45deg] bg-gradient-to-tr from-black via-black/80 to-transparent blur-[80px]"
/>

                <div className="relative z-10 space-y-1">
                  {data.gpsValidation?.message?.map((line, index) => (
                    <p
                      key={`${line}-${index}`}
                      className="text-sm font-medium leading-relaxed text-white sm:text-base"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group rounded-[17px] border border-white/[0.10] bg-[#111111] p-5 transition-all duration-300 hover:border-[#f90a1f]/30 sm:p-6"
            >
              <h3 className="mb-4 text-base font-semibold text-white sm:text-lg">
                {data.preview?.title}
              </h3>

              <div className="relative mx-auto flex min-h-[155px] w-full items-center justify-center overflow-hidden rounded-xl sm:min-h-[175px]">
                {data.preview?.image ? (
                  <Image
                    src={data.preview.image}
                    alt={data.preview.alt || ""}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="flex min-h-[155px] w-full items-center justify-center rounded-xl border border-dashed border-white/10 bg-black/20 text-sm text-neutral-500">
                    {data.preview?.placeholder}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}





