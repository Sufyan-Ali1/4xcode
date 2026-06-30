export default function CaseStudiesSkeleton() {
  return (
    <section className="w-full bg-black py-12 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex flex-col justify-between overflow-hidden rounded-[14px] border border-white/5 bg-white/2 backdrop-blur-md w-full h-full animate-pulse"
            >
              <div className="w-full">
                {/* Image Box Aspect Ratio Placeholder */}
                <div className="aspect-[2/1] w-full bg-zinc-900 border-b border-white/5 flex items-center justify-center">
                  <div className="h-full w-full bg-zinc-800/50" />
                </div>

                {/* Text Content Block Placeholders */}
                <div className="p-4.5 space-y-3">
                  {/* Title Bar line clamp alternative */}
                  <div className="h-4 bg-zinc-800 rounded-md w-3/4" />
                  
                  {/* Description Snippet line clamp alternatives */}
                  <div className="space-y-2">
                    <div className="h-3 bg-zinc-800/60 rounded-md w-full" />
                    <div className="h-3 bg-zinc-800/60 rounded-md w-5/6" />
                  </div>
                </div>
              </div>

              {/* Micro Footer Bar Placeholder */}
              <div className="mt-auto px-4.5 pb-4.5 w-full">
                <div className="flex items-center justify-end pt-3 border-t border-white/5 w-full">
                  <div className="h-3 bg-zinc-800 rounded-md w-24" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}