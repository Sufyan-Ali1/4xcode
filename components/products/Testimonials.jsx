"use client";

import { useMemo } from "react";
import { Reveal } from "../../utils/AnimationReveal";

export default function TestimonialsSection({ data }) {
  if (!data) return null;

  const reviews = data.reviews || [];

  const STEP_W = 400;
  const GROUP_W = reviews.length * STEP_W;

  const N_GROUPS = useMemo(() => {
    if (!GROUP_W) return 1;

    return Math.ceil((3840 * 3) / GROUP_W) + 1;
  }, [GROUP_W]);

  const SHIFT_PCT = useMemo(() => {
    return `${-(100 / N_GROUPS).toFixed(8)}%`;
  }, [N_GROUPS]);

  return (
    <>
      <style>{`
        @keyframes t-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(${SHIFT_PCT});
          }
        }

        .test-track:hover {
          animation-play-state: paused !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .test-track {
            animation-play-state: paused !important;
          }
        }
      `}</style>

      <section className="flex flex-wrap justify-center">
        
        <div className="relative mt-8 w-full max-w-[1200px] overflow-hidden px-3 flex flex-col items-center gap-8">

       
        <div className="pointer-events-none absolute inset-0 opacity-10" />
        <div className="relative z-10 flex flex-col items-center gap-3 text-center px-6">
          {data.eyebrow && (
            <Reveal>
              <span className="text-[#f90a1f]/50 text-[12px] font-normal uppercase tracking-[3.6px] leading-4">
                {data.eyebrow}
              </span>
            </Reveal>
          )}

          {(data.heading || data.highlight) && (
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                {data.heading}
                {data.highlight && (
                  <span className="ml-3 bg-gradient-to-br from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">
                    {data.highlight}
                  </span>
                )}
              </h2>
            </Reveal>
          )}

          {data.description && (
            <Reveal delay={0.2}>
              <p className="text-sm md:text-base text-zinc-400">
                {data.description}
              </p>
            </Reveal>
          )}
        </div>
        {reviews.length > 0 && (
          <div
            className="relative w-full overflow-hidden flex items-center py-4"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            }}
          >
            <div className="test-track flex w-max items-stretch will-change-transform animate-[t-marquee_35s_linear_infinite]">
              {Array.from({ length: N_GROUPS }, (_, idx) => (
                <div
                  key={idx}
                  className="flex shrink-0 items-stretch gap-5 pr-5"
                  aria-hidden={idx > 0 ? true : undefined}
                >
                  {reviews.map((item, i) => (
                    <div
                      key={`${item.id || item.author}-${idx}-${i}`}
                      className="group w-85 md:w-95 shrink-0 flex flex-col justify-between rounded-[22px] border border-white/10 bg-white/2 p-6 transition-colors duration-300 hover:border-[#f90a1f]/40 hover:bg-white/4 cursor-default h-full"
                    >
                      <div>
                        <div className="flex gap-1 mb-4">
                          {Array.from({
                            length: item.stars || 0,
                          }).map((_, starIdx) => (
                            <svg
                              key={starIdx}
                              className="size-3.5 fill-[#f90a1f]"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-sm md:text-base leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 font-light mb-8">
                          {item.quote}
                        </p>
                      </div>
                      <div className="flex items-center gap-3.5 pt-4 border-t border-white/6 mt-auto">
                        <div className="size-9 rounded-full bg-[#f90a1f]/10 border border-[#f90a1f]/20 flex items-center justify-center font-bold text-xs text-[#f90a1f]">
                          {item.initial}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-white">
                            {item.author}
                          </span>

                          <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium">
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
         </div>
      </section>
    </>
  );
}