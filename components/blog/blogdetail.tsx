import Image from "next/image";
import Link from "next/link";
import styles from "./blog.module.css";
import { cleanBlogContent } from "@/utils/htmlSanitizer";
import ContactForm from "@/components/ui/ContactForm";

export type BlogImage = {
  id: number;
  image: string;
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

      {/* GLOBAL WIDTH CONTAINER */}
      <div className="mx-auto w-full max-w-300 px-5 pt-24 pb-6">

        {/* BACK LINK */}
        <Link
          href="/blog"
          className="text-red-400 hover:text-red-300 text-sm transition inline-block mb-6 mt-6"
        >
          ← Back to Blogs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[8fr_4fr] gap-6">

          {/* CONTENT */}
          <div className="min-w-0 order-2 lg:order-1">

            {/* HERO IMAGE */}
            {bannerImage && (
              <div className="rounded-2xl overflow-hidden border border-red-900/30">
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
            <h1 className="mt-8 text-3xl sm:text-5xl font-bold text-red-500 leading-tight">
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



          </div>

          {/* SIDEBAR — sticky, form card handles internal scroll */}
          <aside className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-[90px]">
              <ContactForm variant="sidebar" />
            </div>
          </aside>

        </div>

      </div>
    </main>
  );
}
