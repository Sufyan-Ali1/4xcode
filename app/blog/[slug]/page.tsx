import { notFound } from "next/navigation";
import { fetchBlog } from "@/lib/blogApi";
import BlogDetailPage from "@/components/blog/blogdetail";
import type { Blog } from "@/lib/blogApi";

export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = await fetchBlog(slug);

  if (!blog) return notFound();

  return <BlogDetailPage blog={blog} />;
}