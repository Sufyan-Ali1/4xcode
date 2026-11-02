"use client";
import SingleCard from './SingleCard'
import React, { FC, useState, useRef, useEffect, useCallback } from "react";

import { Blog } from "@/lib/blogApi"; 

type Props = {
  blogs: Blog[] | null | undefined;
};





const BlogGrid: FC<Props> = ({ blogs }) => {
  const [visibleCount, setVisibleCount] = useState<number>(9);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

  const updateButtons = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateButtons();

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateButtons);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(updateButtons);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [updateButtons, blogs, visibleCount]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el || el.children.length === 0) return;

    const first = el.children[0] as HTMLElement;
    const second = el.children[1] as HTMLElement | undefined;
    const step = second
      ? second.offsetLeft - first.offsetLeft
      : first.offsetWidth;

    el.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  if (!blogs || blogs.length === 0) {
    return <p className="text-zinc-400">No blogs found.</p>;
  }

  const visibleBlogs = blogs.slice(0, visibleCount);
  const hasMore = blogs.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  const arrowBase =
    "z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-700 text-white shadow-lg shadow-black/50 transition-all duration-200 hover:bg-red-600 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-red-700 disabled:active:scale-100 md:absolute md:top-1/2 md:-translate-y-1/2";

  return (
    <div className="flex flex-col gap-12">
      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-x-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {visibleBlogs.map((blog,index) => (
            <div
              key={index}
              className="flex shrink-0 basis-full snap-start md:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)] [&>*]:w-full"
            >
              <SingleCard blog={blog} />
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-center gap-4 md:contents">
          <button
            type="button"
            aria-label="Previous blogs"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollLeft}
            className={`${arrowBase} md:left-2 lg:-left-5`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next blogs"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollRight}
            className={`${arrowBase} md:right-2 lg:-right-5`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      {hasMore && (
        <div className="flex justify-center pt-4">
          <button
            onClick={handleLoadMore}
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-200 shadow-sm hover:bg-white/10 hover:text-white transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/20"
          >
            Load More Posts
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;