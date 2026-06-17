"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Space_Grotesk, Inter } from "next/font/google";
import { Reveal } from "../../../utils/AnimationReveal";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import BLOG_DATA from "../../../data/blogs.json";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function BlogDetailPage() {
  const params = useParams();
  const reduced = useReducedMotion();

  const post = BLOG_DATA.find(
    (item) => item.slug?.toLowerCase() === String(params.slug).toLowerCase(),
  );

  if (!post) {
    return (
      <div className="min-h-screen bg-[#030303] text-zinc-600 flex items-center justify-center font-light text-xs uppercase tracking-widest">
        Field note not found.
      </div>
    );
  }

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

      <article className="relative max-w-4xl mx-auto pt-36 px-6 md:px-8 z-10">
        {/* Animated Minimal Back Button */}
        <div className="mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[11px] font-normal uppercase tracking-[2.64px] text-zinc-500 transition-colors duration-300 hover:text-white group"
          >
            <ArrowBackIcon
              className="transition-transform duration-300 text-zinc-500 group-hover:text-white "
              style={{ fontSize: 13 }}
            />
            <span>Back to field notes</span>
          </Link>
        </div>

        {/* Post Metadata Header */}
        <header className="flex flex-col space-y-6 mb-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-gradient-to-b from-[rgba(255,255,255,0.04)] to-[rgba(255,255,255,0.02)] px-[13px] py-[5px] w-fit">
              <div className="w-[6px] h-[6px] rounded-full bg-[#ef1f23] shadow-[0px_0px_40px_-10px_rgba(245,29,49,0.7),0px_0px_80px_-30px_rgba(245,29,49,0.6)] shrink-0" />
              <span className="text-[12px] font-normal tracking-[2.64px] uppercase text-[rgba(255,255,255,0.7)] leading-[16px]">
                {post.category || "Engineering"}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className={`${spaceGrotesk.className} text-4xl sm:text-5xl md:text-[52px] font-bold tracking-tight leading-[1.1] text-zinc-100`}
            >
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-sm text-[#a7a3a4] border-b border-white/[0.06] pb-8">
              <div className="flex items-center gap-1.5">
                <PersonIcon style={{ fontSize: 16, color: "#EF1F23" }} />
                <span>By {post.author || "Vic"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CalendarMonthIcon style={{ fontSize: 16, color: "#EF1F23" }} />
                <span>
                  {new Date(post.created_at).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </Reveal>
        </header>

        {/* Content Node Area */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full text-[#a7a3a4] text-sm sm:text-base leading-relaxed"
        >
          <div
            className="dynamic-html-container prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </article>
    </div>
  );
}
