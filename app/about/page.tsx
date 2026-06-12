"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Space_Grotesk, Inter } from "next/font/google";
import { Reveal } from "../../utils/AnimationReveal";
import ContactCtaSection from "../../components/landing/ContactCtaSection";
import TeamSection from "../../components/ui/TeamSection";
import TimeLine from "../../components/ui/TimeLine";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

const HIGHLIGHTS = [
  {
    id: "velocity",
    title: "Ship velocity",
    desc: "Real software, every week.",
  },
  {
    id: "rigor",
    title: "Engineering rigor",
    desc: "Tested, observable, documented.",
  },
  {
    id: "craft",
    title: "Craft & care",
    desc: "Pixels and code we'd put our names on.",
  },
  {
    id: "native",
    title: "AI native",
    desc: "Modern AI baked into how we build.",
  },
];

const SHARED_CARD_CLASSES =
  "group flex h-full flex-col rounded-[22px] border border-white/5 bg-white/2 p-6 transition-all duration-300 hover:border-[rgba(249,10,31,0.35)] hover:bg-white/4 will-change-transform";

export default function AboutPage() {
  const reduced = useReducedMotion();

  return (
    <div
      className={`bg-[#030303] text-white min-h-screen w-full relative overflow-hidden pb-24 ${inter.className}`}
    >
      <div className="absolute top-0 left-0 right-0 h-[800px] pointer-events-none z-0 overflow-hidden">
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

      <section className="relative w-full pt-36 pb-12 px-6 md:px-12 lg:px-24 z-10">
        <div className="max-w-7xl mx-auto flex flex-col space-y-6">
          <Reveal>
            <div className="flex items-center space-x-2 bg-zinc-900/50 border border-white/5 px-3 py-1 rounded-full text-xs font-medium tracking-wider text-zinc-400 uppercase backdrop-blur-sm w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f90a1f] animate-pulse" />
              <span>About 4XCODE</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className={`${spaceGrotesk.className} text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight leading-[1.1] max-w-4xl`}
            >
              A studio of engineers <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8C] to-[#EF1F23]">
                obsessed
              </span>{" "}
              with what's next<span className="text-[#EF1F23]">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-[#a7a3a4] text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
              We're a senior team of engineers, AI researchers, and designers
              building software that feels like the future arrived early.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative w-full pb-15 px-6 md:px-12 lg:px-24 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-6">
          <Reveal delay={0.3} className="h-full">
            <div className={SHARED_CARD_CLASSES}>
              <div className="mb-3">
                <RocketLaunchOutlinedIcon
                  sx={{ fontSize: 22, color: "#EF1F23" }}
                />
              </div>
              <h3
                className={`${spaceGrotesk.className} text-xl font-bold mb-2`}
              >
                Mission
              </h3>
              <p className="text-[#a7a3a4] text-sm leading-relaxed flex-grow">
                To engineer the software that defines the next decade —
                intelligent, fast, and beautifully made.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4} className="h-full">
            <div className={SHARED_CARD_CLASSES}>
              <div className="mb-3">
                <VisibilityIcon sx={{ fontSize: 22, color: "#EF1F23" }} />
              </div>
              <h3
                className={`${spaceGrotesk.className} text-xl font-bold mb-2`}
              >
                Vision
              </h3>
              <p className="text-[#a7a3a4] text-sm leading-relaxed flex-grow">
                A world where every ambitious team has elite engineering and AI
                within reach.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── WHY 4XCODE SECTION ─── */}
      <section className="relative w-full py-14 px-6 md:px-12 lg:px-24 z-10">
        <div className="max-w-7xl mx-auto space-y-10">
          <Reveal>
            <div className="space-y-3">
              <span className="text-[#f90a1f] text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
                Why 4XCODE
              </span>
              <h2
                className={`${spaceGrotesk.className} text-3xl font-bold tracking-tight`}
              >
                Senior. Sharp.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8C] to-[#EF1F23]">
                  Shipping.
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-4">
            {HIGHLIGHTS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: reduced ? 0 : 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.8,
                  delay: 0.06 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="h-full"
              >
                <div className={SHARED_CARD_CLASSES}>
                  <div className="mb-4 flex items-center">
                    {(() => {
                      switch (item.id) {
                        case "velocity":
                          return (
                            <RocketLaunchOutlinedIcon
                              sx={{ fontSize: 18, color: "#EF1F23" }}
                            />
                          );
                        case "rigor":
                          return (
                            <ShieldOutlinedIcon
                              sx={{ fontSize: 18, color: "#EF1F23" }}
                            />
                          );
                        case "craft":
                          return (
                            <FavoriteBorderIcon
                              sx={{ fontSize: 18, color: "#EF1F23" }}
                            />
                          );
                        case "native":
                          return (
                            <MemoryOutlinedIcon
                              sx={{ fontSize: 18, color: "#EF1F23" }}
                            />
                          );
                        default:
                          return null;
                      }
                    })()}
                  </div>
                  <h4
                    className={`${spaceGrotesk.className}  text-white font-semibold text-sm mb-1`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-500 leading-normal flex-grow">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <TimeLine />
      <TeamSection />
      <ContactCtaSection />
    </div>
  );
}
