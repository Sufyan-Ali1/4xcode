"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/utils/AnimationReveal";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const LOGO_SLIDES = [
  "/assets/slide1.png",
  "/assets/slide2.png",
  "/assets/slide3.png",
  "/assets/slide4.png",
  "/assets/slide5.png",
  "/assets/slide6.png",
];

const BAR_HEIGHTS = [16, 26, 20, 32, 24, 36, 30, 40, 34];

const SPRING_TRANSITION = { type: "spring", stiffness: 400, damping: 30 } as const;

const HERO_BACKGROUND_STYLES = {
  backgroundImage: `
    radial-gradient(ellipse 120% 57% at 50% 30%, rgba(239,31,35,0.18) 0%, rgba(239,31,35,0) 60%),
    radial-gradient(ellipse 217% 214% at 20% 0%, rgba(239,31,35,0.25) 0%, rgba(239,31,35,0) 50%),
    radial-gradient(ellipse 217% 214% at 80% 100%, rgba(239,31,35,0.18) 0%, rgba(239,31,35,0) 55%)
  `,
};

function LogoMarquee() {
  const GROUP_W = LOGO_SLIDES.length * 72 + (LOGO_SLIDES.length - 1) * 48 + 48;
  const N_GROUPS = Math.ceil((3840 * 3) / GROUP_W) + 1;
  const SHIFT_PCT = `${-(100 / N_GROUPS).toFixed(8)}%`;

  return (
    <>
      <style>{`
        @keyframes mq-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(${SHIFT_PCT}); }
        }
        .mq-track:hover { animation-play-state: paused !important; }
        @media (prefers-reduced-motion: reduce) {
          .mq-track { animation-play-state: paused !important; }
        }
      `}</style>

      <div
        className="relative w-full h-24 overflow-hidden flex items-center"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="mq-track flex w-max will-change-transform animate-[mq-scroll_28s_linear_infinite]">
          {Array.from({ length: N_GROUPS }, (_, idx) => (
            <div
              key={idx}
              className="flex shrink-0 items-center gap-12 pr-12"
              aria-hidden={idx > 0 ? true : undefined}
            >
              {LOGO_SLIDES.map((src, i) => (
                <div
                  key={i}
                  className="shrink-0 w-18 h-9.5 flex items-center justify-center transition-transform duration-300 ease-out hover:scale-110 cursor-pointer"
                >
                  <Image
                    src={src}
                    alt={idx === 0 ? "Partner logo" : ""}
                    width={72}
                    height={38}
                    className="object-contain opacity-65 hover:opacity-100 brightness-0 invert transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function DeployCard() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, x: reduced ? 0 : -40, y: reduced ? 0 : 16 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="w-52 flex flex-col gap-3 rounded-[20px] border border-white/10 bg-black/60 p-4 backdrop-blur-md shadow-xl cursor-default update-transform transition-shadow duration-300 will-change-transform"
    >
      <div className="flex items-center gap-3">
        <div className="size-10 flex items-center justify-center rounded-2xl bg-red-500/10 shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 17l4-8 4 4 4-6 4 10"
              stroke="#ef4444"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <p className="text-xs text-neutral-400">Deploy time</p>
          <p className="text-lg font-bold text-white">−72%</p>
        </div>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
        <div className="h-full w-3/4 rounded-full bg-linear-to-r from-red-600 to-red-400" />
      </div>
    </motion.div>
  );
}

function ActiveUsersCard() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, x: reduced ? 0 : 40, y: reduced ? 0 : 16 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="w-56 flex flex-col gap-1.5 rounded-[20px] border border-white/10 bg-black/60 p-4 backdrop-blur-md shadow-xl cursor-default update-transform transition-shadow duration-300 will-change-transform"
    >
      <div className="flex items-center justify-between">
        <p className="text-xs text-neutral-400">Active users</p>
        <span className="flex items-center gap-1 text-xs text-red-500">
          <span className="size-1.5 rounded-full bg-red-500 inline-block animate-pulse" />
          live
        </span>
      </div>
      <p className="text-2xl font-bold tracking-tight text-white">128,402</p>
      <div className="flex items-end gap-1 pt-1">
        {BAR_HEIGHTS.map((h, i) => (
          <div
            key={i}
            className="w-2 rounded-t bg-linear-to-t from-red-600/40 to-red-500"
            style={{ height: h }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function DashboardImage() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: reduced ? 0 : 80 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-1.5 shadow-[0_40px_120px_-20px_rgba(239,31,35,0.45)] will-change-transform"
    >
      <div className="absolute inset-0 bg-linear-to-r from-red-600/20 via-transparent to-red-600/20 blur-3xl pointer-events-none" />
      <motion.div
        animate={reduced ? {} : { y: [0, -6, 0] }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="will-change-transform"
      >
        <img
          src="/assets/container.jpg"
          alt="Dashboard preview"
          className="relative z-10 w-full h-auto object-cover rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section
      className="relative flex w-full flex-col items-center overflow-hidden px-4 pt-32 md:pt-40 bg-[#050505]"
      style={HERO_BACKGROUND_STYLES}
    >
      <div className="absolute inset-0 pointer-events-none opacity-20 " />
      <div className="absolute -left-32 top-24 size-96 rounded-full bg-red-600/25 blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-10 -right-40 size-80 rounded-full bg-red-600/15 blur-[70px] pointer-events-none" />

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-16 md:gap-20 px-4">
        <div className="flex w-full max-w-3xl flex-col items-center gap-5 md:gap-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-1.5">
              <span className="relative flex size-2 shrink-0">
                <span className="absolute inset-0 rounded-full bg-red-500 opacity-75 animate-ping" />
                <span className="size-2 rounded-full bg-red-500" />
              </span>
              <span className="text-xs text-neutral-400 whitespace-nowrap">
                Now booking Q3 — premium SaaS engineering
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-[88px] font-bold leading-[1.05] tracking-[-2px] text-white">
              Engineering The
              <br />
              Future With{" "}
              <span className="bg-linear-to-br from-red-300 to-red-600 bg-clip-text text-transparent">
                Code
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-xl text-base md:text-lg leading-7 text-neutral-400">
              We architect cinematic web platforms, intelligent SaaS products
              and AI systems for ambitious teams who refuse to ship anything
              ordinary.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <motion.div
                whileHover={reduced ? {} : { scale: 1.02, y: -2 }}
                transition={SPRING_TRANSITION}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-[18px] bg-red-600 px-6 py-3.5 text-sm font-medium text-white shadow-[0_0_30px_0_rgba(239,31,35,0.5)] hover:opacity-90 transition-opacity"
                >
                  <span>Start Your Project</span>
                  <ArrowForwardIcon style={{ fontSize: 16 }} />
                </Link>
              </motion.div>

              <motion.div
                whileHover={reduced ? {} : { scale: 1.02, y: -2 }}
                transition={SPRING_TRANSITION}
              >
                <Link
                  href="/service"
                  className="inline-flex items-center gap-2 rounded-[18px] border border-white/10 bg-white/4 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </Reveal>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          <div className="hidden lg:block absolute -left-4 top-1/3 z-20">
            <DeployCard />
          </div>
          <div className="hidden lg:block absolute -right-4 bottom-10 z-20">
            <ActiveUsersCard />
          </div>

          <DashboardImage />

          <div className="flex lg:hidden items-start justify-between gap-3 mt-4 px-1">
            <DeployCard />
            <ActiveUsersCard />
          </div>
        </div>

        <Reveal className="flex w-full flex-col items-center gap-5 overflow-hidden pb-10">
          <p className="text-xs uppercase tracking-[3.6px] text-neutral-400">
            Trusted by builders shipping at the frontier
          </p>
          <LogoMarquee />
        </Reveal>
      </div>
    </section>
  );
}