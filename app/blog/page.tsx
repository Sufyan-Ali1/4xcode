import Link from "next/link";
import Image from "next/image";
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
          /* ✅ Match grid specs with your high-end WorkGrid layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 auto-rows-fr items-stretch">

            {blogs.map((blog: any) => (
              <Link
                key={blog.slug || blog.id}
                href={`/blog/${blog.slug}`}
                /* ✅ Premium Card Sizing, Borders, Shading, and Hover Transitions */
                className="group relative flex flex-col justify-between overflow-hidden rounded-[14px] border border-white/5 bg-white/2 backdrop-blur-md h-full w-full transition-all duration-300 hover:border-white/10 hover:bg-white/4 block"
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
                    <p className="text-zinc-400 font-normal text-[12px] leading-relaxed line-clamp-2">
                      {(blog.excerpt || "").slice(0, 120)}
                    </p>
                  </div>
                </div>

                {/* ✅ PREMIUM MICRO FOOTER BAR — Displays action link layout item with shifting vector arrow */}
                <div className="mt-auto px-4.5 pb-4.5 flex items-center justify-end w-full">
                  <div className="flex items-center gap-1 text-[12px] font-bold text-zinc-400 transition-colors duration-200 group-hover:text-[#f90a1f] pt-3 border-t border-white/5 w-full justify-end">
                    <span>Read Post</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="h-3 w-3 text-zinc-500 transition-transform duration-300 transform group-hover:translate-x-0.5 group-hover:text-[#f90a1f]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>

              </Link>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}