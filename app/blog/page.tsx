import { spaceGrotesk, inter } from "@/lib/fonts";
import React, { Suspense } from "react";
import BlogHeader from "../../components/blog/BlogHeader";
import BlogDataLoader from "@/components/blog/BlogDataLoader";
import CaseStudiesSkeleton from "@/components/landing/CaseStudiesSkeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Insights, SaaS & AI Engineering Guides | 4xCode Blog",
  description:
    "Expert insights on building scalable SaaS, deploying AI agents, and mastering web architecture. Read deep dives from our senior engineering team.",
  alternates: {
    canonical: "https://www.4xcode.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div className={`min-h-screen bg-[#030303] text-white ${inter.className}`}>
      {/* Background glow matching the brand aesthetic */}
      <div className="absolute top-0 left-0 right-0 h-125 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-15%] left-[15%] w-[55%] h-[70%] rounded-full bg-[#f90a1f]/10 blur-[120px]" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#030303]" />
      </div>

      <div className="mx-auto w-full max-w-300 px-5 pt-36 pb-16 relative z-10 flex flex-col gap-y-16">
        <BlogHeader spaceGroteskClass={spaceGrotesk.className} />

        <Suspense fallback={<CaseStudiesSkeleton />}>
          <BlogDataLoader />
        </Suspense>
      </div>
    </div>
  );
}
