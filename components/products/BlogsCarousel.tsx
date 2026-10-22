"use client"
import React, { useCallback, useEffect, useRef, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  href: string;
}

const POSTS: BlogPost[] = [
  {
    id: 1,
    title:
      "Vehicle Repair Management Software for UK Garages: Features, Costs and How to Choose the Right System",
    excerpt:
      "It's 4:45 on a Friday. A customer is at the counter asking for their van, but the job card is missing, and nobody can say what work was approved.",
    image: "/assets/blogs/e944a3890a2cfeaba46051ce154ce518a668280f.png",
    href: "#",
  },
  {
    id: 2,
    title: "AI Development Cost UK: 2026 Pricing Guide by Project Type",
    excerpt:
      "You've probably already searched a few variations of this question and come away more confused than when you started. Here is a clear breakdown.",
    image: "/assets/blogs/6af8417de11372a5953dea9d4ca283601790484e.png",
    href: "#",
  },
  {
    id: 3,
    title:
      "Workshop Management Software System: What It Does, What It Costs & How to Choose the Right System",
    excerpt:
      "A job card goes missing between the bay and the front desk. The diary lives partly in a book, partly in someone's head, and partly in a phone.",
    image: "/assets/blogs/b893d1505b77cca39ce35b8372927201bc898b1f.png",
    href: "#",
  },
  {
    id: 4,
    title: "Digital Vehicle Inspections: Why Garages Are Switching in 2026",
    excerpt:
      "Paper checklists are slow, easy to lose and hard to explain to customers. Digital inspections fix all three problems at once.",
    image: "https://picsum.photos/seed/garage-blog-4/800/450",
    href: "#",
  },
  {
    id: 5,
    title: "How Automated MOT Reminders Bring Customers Back Every Year",
    excerpt:
      "Most garages lose repeat customers simply because nobody reminded them. Automated reminders turn one-off jobs into regular revenue.",
    image: "https://picsum.photos/seed/garage-blog-5/800/450",
    href: "#",
  },
  {
    id: 6,
    title: "Parts Management for Busy Workshops: Stop Losing Money on Stock",
    excerpt:
      "Parts ordered twice, parts never charged, parts nobody can find. Here is how to connect every part to the right job.",
    image: "https://picsum.photos/seed/garage-blog-6/800/450",
    href: "#",
  },
];

const BlogsCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    // 1px tolerance, kyunke fractional pixels par scrollLeft exact match nahi karta
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateButtons(); // page load par initial state
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);

    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -el.clientWidth : el.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-black px-4 py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1150px]">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b0f17]">
            Blogs
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-white ">
            The Daily <span className="text-[#e55d5d]">Scroll</span>
          </h2>
          <p className="mt-3 text-[13px] text-[#b5b5b5] md:text-sm">
            Thoughtful pieces on the things that matter.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-10 md:mt-12">
          {/* Arrows (image ke bottom edge par) */}
          <button
            type="button"
            aria-label="Previous posts"
            disabled={!canScrollLeft}
            onClick={() => scroll("left")}
            className="absolute left-0 top-[190px] z-10 flex size-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#9b0f1a] text-white shadow-[0_0_12px_rgba(155,15,26,0.6)] transition hover:bg-[#c4121f] disabled:cursor-not-allowed disabled:bg-[#3a3a3a] disabled:opacity-50 disabled:shadow-none disabled:hover:bg-[#3a3a3a]"
          >
            <ArrowBackIcon className="!text-[16px]" />
          </button>
          <button
            type="button"
            aria-label="Next posts"
            disabled={!canScrollRight}
            onClick={() => scroll("right")}
            className="absolute right-0 top-[190px] z-10 flex size-7 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-[#9b0f1a] text-white shadow-[0_0_12px_rgba(155,15,26,0.6)] transition hover:bg-[#c4121f] disabled:cursor-not-allowed disabled:bg-[#3a3a3a] disabled:opacity-50 disabled:shadow-none disabled:hover:bg-[#3a3a3a]"
          >
            <ArrowForwardIcon className="!text-[16px]" />
          </button>

          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {POSTS.map((post) => (
              <article
                key={post.id}
                className="flex w-full shrink-0 snap-start flex-col overflow-hidden rounded-[10px] border border-white/10 bg-[#0d0d0d] sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-[190px] w-full object-cover"
                />

                <div className="flex flex-1 flex-col px-4 pb-3 pt-4">
                  <h3 className="line-clamp-2 text-[15px] font-semibold leading-[22px] text-white">
                    {post.title}
                  </h3>
                  <p className="mt-3  text-[12px] leading-[19px] text-[#8a8a8a]">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto border-t border-white/[0.06] pt-3">
                    <a
                      href={post.href}
                      className="mt-1 flex items-center justify-end gap-1 text-[11px] font-medium text-[#b5b5b5] transition hover:text-white"
                    >
                      Read Post
                      <ArrowForwardIcon className="!text-[12px]" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsCarousel;