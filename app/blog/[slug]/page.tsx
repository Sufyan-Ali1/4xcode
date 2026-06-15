"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Space_Grotesk, Inter } from "next/font/google";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BLOG_DATA from "../../../data/blogs.json";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function BlogDetailPage() {
  const params = useParams();

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
      className={`bg-[#030303] text-white min-h-screen w-full relative overflow-hidden pb-32 ${inter.className}`}
    >
      {/* Decorative Ambient Backlights */}
      <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[20%] w-[60%] h-[80%] rounded-full bg-[#f90a1f]/10 blur-[140px]" />
        <div className="absolute top-[-10%] right-[20%] w-[40%] h-[60%] rounded-full bg-[#f90a1f]/5 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030303]" />
      </div>

      <article className="relative max-w-4xl mx-auto pt-36 px-6 md:px-8 z-10">
        {/* Animated Minimal Back Button */}
        <div className="mb-12 blog-fade-in-node">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[2px] text-zinc-500 transition-colors duration-300 hover:text-white group"
          >
            <ArrowBackIcon
              className="transition-transform duration-300 text-zinc-500 group-hover:text-white "
              style={{ fontSize: 14 }}
            />
            <span>Back to field notes</span>
          </Link>
        </div>

        {/* Post Metadata Header */}
        <header className="flex flex-col space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-zinc-900/40 px-[14px] py-[6px] w-fit blog-fade-in-node">
            <LocalOfferIcon className="text-[#ef1f23] text-[12px]" />
            <span className="text-[10px] font-bold tracking-[2px] uppercase text-[#ef1f23]">
              {post.category || post.tag || "Engineering"}
            </span>
          </div>

          <h1
            className={`${spaceGrotesk.className} text-3xl sm:text-4xl md:text-[46px] font-bold leading-[1.2] text-zinc-100 tracking-tight blog-fade-in-node`}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs text-zinc-500 border-b border-white/[0.04] pb-8 blog-fade-in-node">
            <div className="flex items-center gap-1.5">
              <PersonIcon style={{ fontSize: 16 }} />
              <span>By {post.author || "Vic"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CalendarMonthIcon style={{ fontSize: 16 }} />
              <span>
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </header>

        {/* Content Node Area */}
        <div className="relative w-full blog-fade-in-node">
          <div
            className="dynamic-html-container"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
}
