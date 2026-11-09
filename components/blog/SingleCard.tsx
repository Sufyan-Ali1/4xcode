import { Reveal } from "@/utils/AnimationReveal";
import Link from "next/link";
import Image from "next/image";
type Blog = {
  id: string | number;
  slug: string;
  title: string;
  image?: string;
  date?: string;
  excerpt?: string;
};

interface SingleCardProps {
  blog: Blog;
}
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
export default function SingleCard({ blog }: SingleCardProps) {
    return(
<Reveal className="h-full">
<Link
            key={blog.slug || blog.id}
            href={`/blog/${blog.slug}`}
            className="group flex flex-col overflow-hidden rounded-[14px] border border-white/5 bg-white/5 backdrop-blur-md transition-all duration-200 hover:border-white/10 hover:bg-white/10 h-full"
          >
            {/* IMAGE CONTAINER */}
            {blog.image && (
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1200px) 33vw, 371px"
                  className="object-contain opacity-90 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:opacity-100 motion-reduce:transform-none motion-reduce:transition-none"
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
              <div className="mt-auto pt-4 border-t border-white/5 flex justify-end">
                <div className="flex items-center gap-1 text-xs font-bold text-zinc-400 group-hover:text-[#f90a1f] transition-colors duration-200">
                  <span>Read Post</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-3 h-3 transition-transform duration-200 transform group-hover:translate-x-1"
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
</Reveal>
    )
}
