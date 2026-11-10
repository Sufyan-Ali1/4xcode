"use client";

import React from "react";
import Image from "next/image";

interface CaseStudyImageProps {
  src?: string;
  alt: string;
  priority?: boolean;
}

export function CaseStudyImage({
  src,
  alt,
  priority = false,
}: CaseStudyImageProps) {
  return (

    <div className="w-full rounded-2xl overflow-hidden bg-zinc-950 border border-white/5 shadow-2xl group transition-all duration-200">
      {src ? (
        <Image
          src={src}
          alt={alt}
          /* FIX: Removed `fill`. Instead, we give it full layout dimensions explicitly.
            We use `width={0} height={0} sizes="100vw"` combined with Tailwind's
            `w-full h-auto` to force the browser to compute accurate dynamic pixel scales.
          */
          width={0}
          height={0}
          sizes="100vw"
          priority={priority}
          className="w-full h-auto object-contain transform transition-transform duration-200 ease-out scale-100 group-hover:scale-[1.012]"
        />
      ) : (
        /* Fallback container preserves a placeholder baseline size if no file exists */
        <div className="w-full aspect-[16/9] flex items-center justify-center bg-zinc-900/30">
          <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-zinc-600">
            Image Coming Soon
          </span>
        </div>
      )}
    </div>
  );
}
