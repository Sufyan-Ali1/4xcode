import React from "react";
import Link from "next/link";
import { getBlogs } from "@/lib/blogApi";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="min-h-screen bg-[#030303] text-white">

      {/* GLOBAL WIDTH CONTAINER */}
      <div className="mx-auto w-full max-w-300 px-5 pt-28 pb-16">

        {/* HEADER */}
        <h1 className="text-3xl md:text-4xl font-bold mb-10">
          Latest Blogs
        </h1>

        {/* EMPTY STATE */}
        {blogs.length === 0 ? (
          <p className="text-zinc-400">No blogs found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {blogs.map((blog: any) => (
              <Link
                key={blog.slug || blog.id}
                href={`/blog/${blog.slug}`}
                className="group relative bg-[#111] rounded-xl border border-zinc-800 hover:border-zinc-600 transition duration-300 block overflow-hidden"
              >

{/* IMAGE — full width, no padding */}
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                )}

                {/* TEXT CONTENT — padded */}
                <div className="p-5">
                  {/* TITLE */}
                  <h2 className="text-lg font-semibold mb-2 group-hover:text-white">
                    {blog.title}
                  </h2>

                  {/* EXCERPT */}
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {(blog.excerpt || "").slice(0, 120)}
                  </p>
                </div>

              </Link>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}