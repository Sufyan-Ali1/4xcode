"use client";

import React from "react";
import { useEffect } from "react";

import { motion, useReducedMotion } from "framer-motion";
import { useSafeReducedMotion } from "../../utils/useSafeReducedMotion";
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
    desc: "Real, working software ships every week — not slide decks promising it next quarter.",
  },
  {
    id: "rigor",
    title: "Engineering rigor",
    desc: "Every system we build is tested, observable, and documented, so it's maintainable long after handoff — by your team, not just ours.",
  },
  {
    id: "craft",
    title: "Craft & care",
    desc: "We sweat the pixels and the architecture equally. This is work we put our names on, not work we hope no one looks at too closely.",
  },
  {
    id: "native",
    title: "AI native",
    desc: "Modern AI isn't a bolt-on feature for us — it's baked into how we design, build, and ship software, from the first architecture conversation onward.",
  },
];

const SHARED_CARD_CLASSES =
  "group flex h-full flex-col rounded-[22px] border border-white/5 bg-white/2 p-6 transition-all duration-300 hover:border-[rgba(249,10,31,0.35)] hover:bg-white/4 will-change-transform";

export default function AboutPage() {
  const reduced = useSafeReducedMotion();

  useEffect(() => {
    document.title = "About 4xCode | Senior Engineering & AI Studio";
    let metaDescription = document.querySelector('meta[name="description"]');
    const descriptionText =
      "4xCode is a remote-first engineering studio of senior developers, AI researchers, and designers. 120+ products shipped since 2021.";

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
      className={`bg-[#030303] text-white min-h-screen w-full relative overflow-hidden pb-14 ${inter.className}`}
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
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-gradient-to-b from-[rgba(255,255,255,0.04)] to-[rgba(255,255,255,0.02)] px-[13px] py-[5px]">
              <div className="w-[6px] h-[6px] rounded-full bg-[#ef1f23] shadow-[0px_0px_40px_-10px_rgba(245,29,49,0.7),0px_0px_80px_-30px_rgba(245,29,49,0.6)] shrink-0" />
              <span className="text-[12px] font-normal tracking-[2.64px] uppercase text-[rgba(255,255,255,0.7)] leading-[16px]">
                About 4xcode
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className={`${spaceGrotesk.className} text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight leading-[1.1] max-w-4xl`}
            >
              A Software Development Studio <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8C] to-[#EF1F23]">
                Obsessed
              </span>{" "}
              with What's Next<span className="text-[#EF1F23]">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-[#a7a3a4] text-[12px] sm:text-base md:text-lg max-w-2xl leading-relaxed">
              4xCode is a senior software development studio — engineers, AI
              researchers, and designers building products that feel like the
              future arrived early. Since our founding, we've shipped 120+
              projects for startups and scaling teams across SaaS, AI, and web,
              with a remote-first team spanning three time zones.
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
                intelligent, fast, and built with genuine craft, not cutting
                corners.
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
                A world where every ambitious team has access to elite
                engineering and applied AI — not just the companies large enough
                to afford a fifty-person in-house team.
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
