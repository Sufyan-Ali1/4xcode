import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getBlogs } from "@/lib/blogApi";

export default async function BlogDataLoader() {
  const blogs = await getBlogs();

  if (!blogs || blogs.length === 0) {
    return <p className="text-zinc-400">No blogs found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 auto-rows-fr">
      {blogs.map((blog: any) => (
        <Link
          key={blog.slug || blog.id}
          href={`/blog/${blog.slug}`}
          className="group flex flex-col overflow-hidden rounded-[14px] border border-white/5 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:bg-white/10 h-full"
        >
          {/* IMAGE CONTAINER */}
          {blog.image && (
            <div className="relative w-full h-48 bg-zinc-900">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover transition-opacity duration-300 opacity-90 group-hover:opacity-100"
              />
            </div>
          )}

          {/* CONTENT ACCORDING TO SYSTEM CARDS */}
          <div className="flex flex-col flex-1 p-5">
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
  );
}