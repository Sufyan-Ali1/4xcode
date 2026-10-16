import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { fetchBlog } from "@/lib/blogApi";
import BlogDetailPage from "@/components/blog/blogdetail";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cleanSlug = typeof slug === "string" ? decodeURIComponent(slug) : "";
  const blog = await fetchBlog(cleanSlug);

  if (!blog) return {};

  const canonicalUrl = `https://www.4xcode.com/blog/${cleanSlug}`;

  return {
    title: blog.meta_title || (blog.title ? `${blog.title} | 4xCode` : "Blog | 4xCode"),
    description:
      blog.meta_description ||
      blog.excerpt ||
      "Read our latest insights on software engineering, modern web architectures, and AI.",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const cleanSlug = typeof slug === "string" ? decodeURIComponent(slug) : "";

  const blog = await fetchBlog(cleanSlug);

  if (!blog) return notFound();

  return <BlogDetailPage blog={blog} />;
}
