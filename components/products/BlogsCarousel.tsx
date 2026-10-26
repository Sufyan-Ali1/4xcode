import { getBlogs } from "@/lib/blogApi";
import BlogGrid from "@/components/blog/blogCard";
export default async function BlogsCarousel() {
    const selectedIds = ["vehicle-repair-management-software", "ai-development-cost-uk", "workshop-management-software-system"];
   const blogs = await getBlogs();
 
   if (!blogs || blogs.length === 0) {
     return null;
   }
  const selectedBlogs = blogs.filter((blog) =>
    selectedIds.includes(blog.slug)
  );
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
        <div className="mt-10">
           <BlogGrid blogs={selectedBlogs} />
        </div>
      </div>
    </section>
  );
};
