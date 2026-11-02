"use client"; // Required for useState interactivity
import SingleCard from './SingleCard'
import React, { FC, useState } from "react";
import { Blog } from "@/lib/blogApi"; // Adjust if necessary to match your API path

type Props = {
  blogs: Blog[] | null | undefined;
};
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
        {visibleBlogs.map((blog,index) => (
          <SingleCard blog={blog} key={index} />
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
