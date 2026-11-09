"use client";

import { useState } from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

export interface VideoItem {
  id: string | number;
  tag: string;
  title: string;
  description: string;
  duration: string;
  thumbnail?: string;
  videoUrl?: string;
}

export interface OurVideosData {
  eyebrow?: string;
  whiteTitle?: string;
  redTitle?: string;
  description?: string;
  videos?: VideoItem[];
}

export interface OurVideosSectionProps {
  data?: OurVideosData;
}

const defaultData: Required<OurVideosData> = {
  eyebrow: "Watch & Explore",
  whiteTitle: "Our",
  redTitle: "Videos",
  description:
    "See our work in action, get expert insights, and learn more about what makes 4xCode different.",
  videos: [],
};

export default function OurVideosSection({ data }: OurVideosSectionProps) {
  const { eyebrow, whiteTitle, redTitle, description, videos } = {
    ...defaultData,
    ...data,
  };

  const [playingId, setPlayingId] = useState<string | number | null>(null);

  return (
    <section className="relative isolate w-full overflow-hidden bg-black py-10 px-6 lg:px-10 lg:py-15">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[460px] w-[460px] rounded-full bg-red-700/25 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-48 -right-40 -z-10 h-[460px] w-[460px] rounded-full bg-red-700/25 blur-[150px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)]" />

      {/* Top-left curved lines */}
      <svg
        aria-hidden="true"
        viewBox="0 0 520 420"
        fill="none"
        className="pointer-events-none absolute left-0 top-0 -z-10 h-[300px] w-[380px] sm:h-[420px] sm:w-[520px]"
      >
        <defs>
          <linearGradient id="ov-arc-a" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#ef1f23" stopOpacity="0" />
            <stop offset="0.45" stopColor="#ff2a3d" stopOpacity="0.95" />
            <stop offset="1" stopColor="#ef1f23" stopOpacity="0" />
          </linearGradient>
          <filter id="ov-glow-a" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        <path
          d="M -10 250 C 40 130, 110 50, 215 -10"
          stroke="url(#ov-arc-a)"
          strokeWidth="5"
          filter="url(#ov-glow-a)"
          opacity="0.7"
        />
        <path
          d="M -10 250 C 40 130, 110 50, 215 -10"
          stroke="url(#ov-arc-a)"
          strokeWidth="1.6"
        />
        <path
          d="M -10 300 C 50 170, 130 80, 250 -10"
          stroke="url(#ov-arc-a)"
          strokeWidth="1"
          opacity="0.35"
        />
      </svg>

      {/* Right-side / bottom-right curved lines */}
      <svg
        aria-hidden="true"
        viewBox="0 0 620 460"
        fill="none"
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[300px] w-[420px] sm:h-[460px] sm:w-[620px]"
      >
        <defs>
          <linearGradient id="ov-arc-b" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ef1f23" stopOpacity="0" />
            <stop offset="0.5" stopColor="#ff2a3d" stopOpacity="0.9" />
            <stop offset="1" stopColor="#ef1f23" stopOpacity="0" />
          </linearGradient>
          <filter id="ov-glow-b" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        <path
          d="M 630 90 C 560 200, 440 340, 270 470"
          stroke="url(#ov-arc-b)"
          strokeWidth="5"
          filter="url(#ov-glow-b)"
          opacity="0.6"
        />
        <path
          d="M 630 90 C 560 200, 440 340, 270 470"
          stroke="url(#ov-arc-b)"
          strokeWidth="1.5"
        />
        <path
          d="M 630 150 C 570 250, 480 360, 360 470"
          stroke="url(#ov-arc-b)"
          strokeWidth="1"
          opacity="0.35"
        />
      </svg>

      {/* Bottom-right play-button emblem */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-14 -right-14 -z-10 flex h-44 w-44 items-center justify-center rounded-full border border-red-600/50 bg-red-600/5 shadow-[0_0_60px_rgba(239,68,68,0.35),inset_0_0_40px_rgba(239,68,68,0.15)] sm:-bottom-16 sm:-right-16 sm:h-56 sm:w-56"
      >
        <div className="flex h-[74%] w-[74%] items-center justify-center rounded-full border border-red-500/60 bg-black/40 shadow-[inset_0_0_30px_rgba(239,68,68,0.35)]">
          <PlayArrowRoundedIcon
            sx={{ fontSize: { xs: 64, sm: 84 }, color: "#ef1f23" }}
            style={{ filter: "drop-shadow(0 0 14px rgba(239,68,68,0.9))" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-[1150px]">
        {/* Heading */}
        <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center text-center sm:mb-14">
          <div className="mb-5 flex w-full items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-red-500 shadow-[0_0_10px_rgba(239,68,68,0.9)] sm:w-28" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white sm:text-xs">
              {eyebrow.split("&").map((part, i, arr) => (
                <span key={i}>
                  <span className={i === 0 ? "text-red-500" : ""}>
                    {part}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="text-red-500">&</span>
                  )}
                </span>
              ))}
            </span>

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-red-500 shadow-[0_0_10px_rgba(239,68,68,0.9)] sm:w-28" />
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            {whiteTitle}{" "}
            <span className="bg-gradient-to-r from-[#ff3d57] to-[#f0284a] bg-clip-text text-transparent">
              {redTitle}
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-200 sm:text-base">
            {description}
          </p>
        </div>
        {/* Responsive video grid — no carousel or scrolling */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((video) => (
            <article
              key={video.id}
              className="group relative min-w-0 overflow-hidden rounded-2xl border border-red-600/70 bg-gradient-to-b from-[#0d0d0d] to-black shadow-[0_0_22px_rgba(220,38,38,0.18),inset_0_-30px_40px_-30px_rgba(239,68,68,0.45)] transition duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-[0_0_36px_rgba(239,68,68,0.4),inset_0_-30px_40px_-30px_rgba(239,68,68,0.6)]"
            >
              {/* Thumbnail / inline player */}
              {playingId === video.id && video.videoUrl ? (
                <div className="relative aspect-video w-full bg-black">
                  <iframe
                    src={`${video.videoUrl}${
                      video.videoUrl.includes("?") ? "&" : "?"
                    }autoplay=1`}
                    title={video.title}
                    className="absolute inset-0 h-full w-full"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setPlayingId(video.id)}
                  aria-label={`Play ${video.title}`}
                  className="relative block aspect-video w-full overflow-hidden bg-neutral-900"
                >
                  {video.thumbnail ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.45),transparent_55%),linear-gradient(135deg,#1a1a1a,#050505)]" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-black/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Duration */}
                  <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-white/15 bg-black/75 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                    <AccessTimeRoundedIcon sx={{ fontSize: 13 }} />
                    {video.duration}
                  </span>

                  {/* Play button */}
                  <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-red-600 bg-black/50 text-white shadow-[0_0_22px_rgba(239,68,68,0.7),inset_0_0_14px_rgba(239,68,68,0.35)] backdrop-blur transition group-hover:scale-110 group-hover:bg-red-600">
                    <PlayArrowRoundedIcon sx={{ fontSize: 32 }} />
                  </span>
                </button>
              )}

              {/* Video content */}
              <div className="flex min-h-[170px] flex-col p-5">
                <span className="mb-3 w-fit rounded-full bg-red-700 px-3 py-1 text-[11px] font-semibold text-white">
                  {video.tag}
                </span>

                <h3 className="text-lg font-semibold leading-snug text-white">
                  {video.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                  {video.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}