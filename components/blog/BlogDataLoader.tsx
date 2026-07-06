import React from "react";
import { getBlogs } from "@/lib/blogApi";
import BlogGrid from "./blogCard"; // Adjust this path to where your new component lives

export default async function BlogDataLoader() {
  const blogs = await getBlogs();

  if (!blogs || blogs.length === 0) {
    return <p className="text-zinc-400">No blogs found.</p>;
  }

  // Passing the entire array down as a prop
  return <BlogGrid blogs={blogs} />;
}
