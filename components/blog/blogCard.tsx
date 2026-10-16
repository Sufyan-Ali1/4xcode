"use client"; // Required for useState interactivity

import React, { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/lib/blogApi"; // Adjust if necessary to match your API path

type Props = {
  blogs: Blog[] | null | undefined;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

function BlogDate({ value }: { value?: string }) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;

  return (
    <time dateTime={date.toISOString()} className="mb-3 text-xs text-zinc-400">
      {dateFormatter.format(date)}
    </time>
  );
}

const BlogGrid: FC<Props> = ({ blogs }) => {
  // 1. Establish state to track how many posts to display (Increments of 9)
  const [visibleCount, setVisibleCount] = useState<number>(9);

  // 2. Render Empty State UI if no blogs exist
  if (!blogs || blogs.length === 0) {
    return <p className="text-zinc-400">No blogs found.</p>;
  }

  // 3. Slice array down to current visibility count
  const visibleBlogs = blogs.slice(0, visibleCount);
  const hasMore = blogs.length > visibleCount;

  // 4. Handle state push to append 9 more items
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  return (
    <div className="flex flex-col gap-12">
      {/* GRID CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 auto-rows-fr">
        {visibleBlogs.map((blog) => (
          <Link
            key={blog.slug || blog.id}
            href={`/blog/${blog.slug}`}
            className="group flex flex-col overflow-hidden rounded-[14px] border border-white/5 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:bg-white/10 h-full"
          >
            {/* IMAGE CONTAINER */}
            {blog.image && (
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1200px) 33vw, 371px"
                  className="object-contain opacity-90 transition-all duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:opacity-100 motion-reduce:transform-none motion-reduce:transition-none"
                />
              </div>
            )}

            <div className="flex flex-col flex-1 p-5">
              <BlogDate value={blog.date} />
              <h2 className="text-lg font-semibold mb-2 group-hover:text-[#f90a1f] transition-colors duration-200 line-clamp-2">
                {blog.title}
              </h2>

              <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 mb-4">
                {(blog.excerpt || "").slice(0, 120)}
              </p>

              {/* MICRO FOOTER HOVER INTERACTION */}
              <div className="mt-auto pt-4 border-t border-white/5 flex justify-end">
                <div className="flex items-center gap-1 text-xs font-bold text-zinc-400 group-hover:text-[#f90a1f] transition-colors duration-200">
                  <span>Read Post</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-3 h-3 transition-transform duration-300 transform group-hover:translate-x-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
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
