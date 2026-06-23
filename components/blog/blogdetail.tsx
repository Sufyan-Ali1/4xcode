import Image from "next/image";
import Link from "next/link";
import styles from "./blog.module.css";
import { cleanBlogContent } from "@/utils/htmlSanitizer";
import ContactForm from "@/components/ui/ContactForm";
export type BlogImage = {
  id: number;
  image: string;
  uploaded_at?: string;
};

export type Blog = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  images: BlogImage[]; 
  date?: string;
  category?: string;
  author?: string;
};

/* ================= PAGE ================= */
export default function BlogDetailPage({ blog }: { blog: Blog }) {
  const extraImages = blog.images?.slice(1) || [];
  const cleanContent = cleanBlogContent(blog.content || "");

  const bannerImage = blog.image || blog.images?.[0]?.image || "";

  return (
    <main className="min-h-screen bg-black text-white">
      {/* TOP BAR */}
      <div className="border-b border-red-900/40 bg-black/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4">
          <Link
            href="/blog"
            className="text-red-400 hover:text-red-300 text-sm transition"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>

      {/* ================= PAGE WRAPPER (MATCH CTA WIDTH) ================= */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-6 md:px-12 lg:px-24 mt-10 pb-20">
          {/* RESPONSIVE LAYOUT */}
          <div className="flex flex-col lg:grid lg:grid-cols-[7fr_5fr] gap-10">
            {/* ================= RIGHT FIRST ON MOBILE ================= */}
            <aside className="order-1 lg:order-2">
              <div
                className="
                lg:sticky lg:top-[110px]
                max-h-[calc(100vh-130px)]
                overflow-y-auto
                pr-2
                no-scrollbar
              "
              >
                <ContactForm variant="sidebar" />
              </div>
            </aside>

            {/* ================= BLOG CONTENT ================= */}
            <div className="order-2 lg:order-1 min-w-0">
              {/* HERO IMAGE */}
              {bannerImage && (
                <div className="rounded-2xl overflow-hidden border border-red-900/30 shadow-lg mt-4">
                  <Image
                    src={bannerImage}
                    alt={blog.title}
                    width={1600}
                    height={800}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              )}

              {/* TITLE */}
              <h1 className="mt-8 text-3xl sm:text-5xl font-bold text-white leading-tight">
                {blog.title}
              </h1>

              {/* EXCERPT */}
              {blog.excerpt && (
                <p className="mt-5 border-l-4 border-red-600 pl-4 text-gray-300 italic">
                  {blog.excerpt}
                </p>
              )}

              {/* CONTENT */}
              <article
                className={`mt-10 max-w-none ${styles.blogContent}`}
                dangerouslySetInnerHTML={{ __html: cleanContent }}
              />

              {/* EXTRA IMAGES */}
              {extraImages.length > 0 && (
                <section className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {extraImages.map((img, i) => (
                    <div
                      key={img.id ?? i}
                      className="rounded-xl overflow-hidden border border-red-900/30"
                    >
                      <Image
                        src={img.image}
                        alt={blog.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </section>
              )}

              {/* BACK */}
              <div className="mt-16">
                <Link
                  href="/blog"
                  className="text-red-400 hover:text-red-300 text-sm transition"
                >
                  ← Back to Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
