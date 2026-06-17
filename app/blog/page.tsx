"use client";

import React, { useState, useMemo } from "react";
import { Space_Grotesk, Inter } from "next/font/google";
import { Reveal } from "../../utils/AnimationReveal";
import { BlogCard } from "../../components/ui/BlogCard";
import BLOG_DATA from "../../data/blogs.json";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI" },
  { id: "saas", label: "SaaS" },
  { id: "coding", label: "Coding" },
  { id: "automation", label: "Automation" },
  { id: "performance", label: "Performance" },
];

const INITIAL_VISIBLE = 6;
const LOAD_MORE_COUNT = 3;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filteredPosts = useMemo(() => {
    let dataset = BLOG_DATA;

    if (activeCategory !== "all") {
      dataset = dataset.filter(
        (item) => item.category?.toLowerCase() === activeCategory.toLowerCase(),
      );
    }

    if (searchQuery.trim() !== "") {
      dataset = dataset.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.meta_description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    return dataset;
  }, [activeCategory, searchQuery]);

  React.useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [activeCategory, searchQuery]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = filteredPosts.length > visibleCount;
  const remainingCount = filteredPosts.length - visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
  };

  return (
    <div
      className={`bg-[#030303] text-white min-h-screen w-full relative overflow-hidden pb-24 ${inter.className}`}
    >
      <div className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-15%] left-[15%] w-[55%] h-[70%] rounded-full bg-[#f90a1f]/10 blur-[120px]" />
        <div className="absolute top-[-10%] right-[15%] w-[45%] h-[60%] rounded-full bg-[#f90a1f]/8 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030303]" />
      </div>

      <section className="relative w-full pt-36 pb-12 px-6 md:px-12 lg:px-24 z-10">
        <div className="max-w-7xl mx-auto flex flex-col space-y-5">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-gradient-to-b from-white/[0.04] to-white/[0.02] px-[13px] py-[5px]">
              <div className="w-[6px] h-[6px] rounded-full bg-[#ef1f23] shadow-[0px_0px_15px_rgba(239,31,35,0.8)] shrink-0" />
              <span className="text-[12px] font-normal tracking-[2.64px] uppercase text-white/70 leading-[16px]">
                field notes
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className={`${spaceGrotesk.className} text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1] max-w-4xl`}
            >
              Notes from the <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8C] to-[#EF1F23]">
                engineering floor
              </span>
              <span className="text-[#EF1F23]">.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-[#a7a3a4] text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
              Essays, deep-dives, and dispatches on AI, SaaS, and the craft of
              building software.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative w-full px-6 md:px-12 lg:px-24 mb-12 z-10">
        <Reveal delay={0.2}>
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center border-b border-white/[0.06] pb-6">
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto no-scrollbar">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-xs font-medium border transition-all duration-300 whitespace-nowrap cursor-pointer select-none outline-none ${
                      isActive
                        ? "bg-[#EF1F23] text-white border-[#EF1F23]"
                        : "text-zinc-400 border-white/5 bg-zinc-900/20 hover:text-white hover:border-white/20"
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full sm:w-64 shrink-0">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900/30 text-xs border border-white/5 rounded-full px-4 py-2.5 pl-9 text-zinc-300 placeholder-zinc-600 outline-none focus:border-white/20 transition-all"
              />
              <SearchIcon
                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none"
                style={{ fontSize: 15 }}
              />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="relative w-full px-6 md:px-12 lg:px-24 z-10">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-24 text-zinc-600 text-sm font-light">
              No matching field notes found.
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                {visiblePosts.map((post, idx) => (
                  <BlogCard key={post.id} post={post} index={idx} />
                ))}
              </div>

              {hasMore && (
                <div className="flex flex-col items-center mt-16 gap-3">
                  <p className="text-[11px] uppercase tracking-[2px] text-zinc-600 font-medium">
                    Showing {visibleCount} of {filteredPosts.length} field notes
                  </p>

                  <button
                    onClick={handleLoadMore}
                    className="group relative flex items-center gap-2.5 px-7 py-3 rounded-full border border-white/[0.08] bg-zinc-900/30 text-zinc-300 text-xs font-medium tracking-[1px] uppercase transition-all duration-300 hover:border-[#EF1F23]/50 hover:text-white hover:bg-[#EF1F23]/[0.06] cursor-pointer outline-none"
                  >
                    <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-[#EF1F23]/10 -z-10" />
                    <span>
                      Load{" "}
                      {remainingCount <= LOAD_MORE_COUNT
                        ? `${remainingCount} more`
                        : "more"}{" "}
                      field notes
                    </span>
                    <KeyboardArrowDownIcon
                      className="text-zinc-500 group-hover:text-[#EF1F23] transition-all duration-300"
                      style={{ fontSize: 16 }}
                    />
                  </button>
                </div>
              )}

              {!hasMore && filteredPosts.length > INITIAL_VISIBLE && (
                <div className="flex items-center justify-center mt-16 gap-3">
                  <div className="h-px w-16 bg-white/[0.06]" />
                  <p className="text-[11px] uppercase tracking-[2px] text-zinc-700 font-medium">
                    All {filteredPosts.length} field notes loaded
                  </p>
                  <div className="h-px w-16 bg-white/[0.06]" />
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
