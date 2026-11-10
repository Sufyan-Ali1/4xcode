import { Reveal } from "@/utils/AnimationReveal";
import Link from "next/link";
import Image from "next/image";
import garageManagementBanner from "@/public/assets/garage-management-banner.webp";



function ProductIcon({ type }) {
  return (
    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-red-500/20 bg-red-600/10 text-red-500 shadow-[0_0_25px_rgba(239,31,35,0.12)] transition-all duration-200 group-hover:border-red-500/50 group-hover:bg-red-600/20">
      {type === "recovery" ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 7h12v11H3z" />
          <path d="M15 11h3l3 3v4h-6" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="M6 11h6M6 14h4" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="7" y="2.5" width="10" height="19" rx="1.8" />
          <path d="M10 5h4M10 18.5h4" />
        </svg>
      )}
    </div>
  );
}

function ProductCard({ product, actionLabel }) {
  return (
    <Link
      href={product.href}
      aria-label={product.title}
      className="group relative isolate block w-full overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#101010] outline-none transition-all duration-200 hover:border-red-500/30 hover:shadow-[0_15px_50px_rgba(239,31,35,0.10)] focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
    >
      <Image
        src={product.image === "/assets/garage-management-banner.webp" ? garageManagementBanner : product.image}
        alt={product.imageAlt || product.title}
        width={garageManagementBanner.width}
        height={garageManagementBanner.height}
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 640px"
        className="block h-auto w-full"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10" />
      <div className="absolute inset-0 flex flex-col items-start justify-end p-4 lg:p-6">
        <div className="hidden lg:block">
          <ProductIcon type={product.icon} />
        </div>

        <div className="max-w-[420px] lg:mt-3">
          <h3 className="text-lg font-semibold leading-tight tracking-tight text-white transition-colors duration-200 group-hover:text-red-400 lg:text-[21px]">
            {product.title}
          </h3>

          <p className="mt-2 max-w-[380px] text-xs leading-relaxed text-neutral-200 transition-colors duration-200 group-hover:text-white lg:text-sm">
            {product.description}
          </p>
        </div>

        <div className="flex items-center gap-2 pt-2 text-xs font-medium text-white transition-colors duration-200 group-hover:text-red-400 lg:pt-3 lg:text-sm">
          {actionLabel}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="size-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function Product({data}) {
  return (
    <section
      id={data.id}
      className="relative isolate w-full overflow-hidden bg-black py-5"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/[0.035] blur-[120px]" />

      <div className="site-container">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center ">
          <span className="text-[11px] font-medium uppercase tracking-[5px] text-red-500">
            {data.label}
          </span>

          <h2 className="mt-2 text-4xl font-bold leading-tight tracking-[-1.5px] text-white sm:text-5xl lg:text-[48px]">
            {data.heading}{" "}<span className="text-[#f04b50]">{data.highlight}</span>
          </h2>

          <p className="mt-2 max-w-lg text-sm leading-7 text-neutral-400 sm:text-base">
            {data.description}
          </p>
        </div>

        <div className="grid mt-10 grid-cols-1 gap-10 md:grid-cols-2">
          {data.items.map((product) => (
            <Reveal
              key={product.href}
              className={`min-w-0 h-full ${data.items.length === 1 ? "md:col-span-2 md:w-[calc((100%-2.5rem)/2)] md:justify-self-center" : ""}`}
            >
              <ProductCard product={product} actionLabel={data.cardAction} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

