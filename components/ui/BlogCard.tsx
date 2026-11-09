"use client";

import { entranceOffset, entranceTransition, revealViewport } from "@/utils/motion";

import { spaceGrotesk } from "@/lib/fonts";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { BlogPost } from "../../types/index";

type BlogCardProps = {
  post: BlogPost;
  index: number;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: entranceOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={entranceTransition}
      className="h-full w-full"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group relative flex flex-col h-full cursor-pointer rounded-[20px] bg-[#070708] p-6 border border-white/[0.04] transition-all duration-200 md:hover:border-[rgba(249,10,31,0.5)] md:hover:bg-white/4 will-change-transform"
      >
        <div className="relative w-full h-[160px] overflow-hidden rounded-[14px]">
          <Image
            src={"/assets/caseStudy.webp"}
            alt={post.title}
            fill
            className="object-cover opacity-90 md:opacity-80 transition-opacity duration-200 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070708]/70" />
        </div>

        <div className="flex flex-col flex-1 justify-between pt-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#ef1f23]">
                {post.category || "Engineering"}
              </span>
              <NorthEastIcon
                className="text-zinc-600 transition-all duration-200 group-hover:text-white "
                style={{ fontSize: 13 }}
              />
            </div>

            <h3
              className={`${spaceGrotesk.className} text-[18px] font-bold leading-[1.25] text-zinc-100 group-hover:text-white transition-colors tracking-tight`}
            >
              {post.title}
            </h3>

            <p className="text-[13px] leading-relaxed text-[#a7a3a4] font-normal line-clamp-2">
              {post.meta_description}
            </p>
          </div>
          <div className="flex items-center justify-between border-t border-white/[0.04] mt-5 pt-4">
            <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-medium">
              <span>
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
