
"use client";

import Image from "next/image";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";

function GalleryHeading({ data }) {
  return (
    <div className="mb-8 text-center ">
      <div className="mb-3 inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#ef1f2a]">
        <PhotoLibraryOutlinedIcon sx={{ fontSize: 15 }} />
        <span className="text-[#f90a1f]">{data.eyebrow}</span>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
        {data.title}
        <span className="ml-3 bg-gradient-to-r from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent">{data.highlight}</span>
      </h2>

      <p className="mt-3 text-sm font-normal text-slate-200 sm:text-base">
        {data.description}
      </p>
    </div>
  );
}

function GalleryImageCard({ item }) {
  return (
    <div className="group relative aspect-[1.2/1] overflow-hidden rounded-[10px]  border border-[#ef1f2a] bg-[#080808]">
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
        className="object-cover h-[300] object-center transition-transform duration-500 group-hover:scale-[1.025]"
      />
    </div>
  );
}

export default function Product_gallery({ data }) {
  if (!data) return null;

  return (
    <section
      id={data.sectionId}
      className="w-full bg-black pt-5 pb-10 text-white "
    >
      <div className="mx-auto max-w-[1200px]">
        <GalleryHeading data={data} />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3  xl:gap-6">
          {data.cards?.map((item) => (
            <GalleryImageCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}