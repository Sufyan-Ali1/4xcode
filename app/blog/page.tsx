import React from "react";
import Link from "next/link";
import { getBlogs } from "@/lib/blogApi";
import type { Blog } from "@/lib/blogApi";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="min-h-screen bg-[#030303] text-white">

      {/* WRAPPER (MATCH DETAIL PAGE WIDTH SYSTEM) */}
      <div className="w-full flex justify-center mt-[100px]">
        <div className="w-full max-w-7xl px-6 md:px-12 lg:px-24 py-10">

          {/* HEADER */}
          <h1 className="text-3xl font-bold mb-8">
            Latest Blogs
          </h1>

          {/* EMPTY STATE */}
          {blogs.length === 0 ? (
            <p className="text-zinc-400">No blogs found</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {blogs.map((blog: any) => (
                <Link
                  key={blog.slug || blog.id}
                  href={`/blog/${blog.slug}`}
                  className="group relative bg-[#111] p-5 rounded-xl border border-zinc-800 hover:border-zinc-600 transition duration-300 cursor-pointer block"
                >
                  {/* SLUG BADGE */}
                  <span className="absolute top-3 right-3 text-[10px] text-zinc-500 opacity-0 group-hover:opacity-100 transition">
                    {blog.slug}
                  </span>

                  {/* IMAGE */}
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                  )}

                  {/* TITLE */}
                  <h2 className="text-lg font-semibold mb-2 group-hover:text-white">
                    {blog.title}
                  </h2>

                  {/* EXCERPT */}
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {(blog.excerpt || "").slice(0, 120)}
                  </p>
                </Link>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}