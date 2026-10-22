import Link from "next/link";
import Image from "next/image";



function ProductIcon({ type }) {
  return (
    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-red-500/20 bg-red-600/10 text-red-500 shadow-[0_0_25px_rgba(239,31,35,0.12)] transition-all duration-300 group-hover:border-red-500/50 group-hover:bg-red-600/20">
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

function ProductCard({ product }) {
  return (
    <Link
      href={product.href}
      aria-label={`Explore ${product.title}`}
      className="group relative isolate flex min-h-[280px] w-full flex-col overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#101010] p-7 outline-none transition-all duration-500 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_15px_50px_rgba(239,31,35,0.10)] focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:min-h-[300px] sm:p-8 lg:min-h-[280px]"
    >
      <Image
        src={product.image}
        alt=""
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 640px"
        className="absolute inset-0 -z-20 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-black/20 transition-colors duration-500 group-hover:bg-black/55" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/30 to-black/75" />
      <div className="pointer-events-none absolute -left-16 -top-20 -z-10 size-56 rounded-full bg-red-600/[0.06] blur-[70px] transition-opacity duration-500 group-hover:opacity-100" />
      <div className="flex flex-1 flex-col items-start">
        <ProductIcon type={product.icon} />

        <div className="mt-6 max-w-[420px]">
          <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-red-400 sm:text-[21px]">
            {product.title}
          </h3>

          <p className="mt-2.5 max-w-[380px] text-sm leading-[1.65] text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300 sm:text-[15px]">
            {product.description}
          </p>
        </div>

        <div className="mt-auto flex items-center gap-2 pt-5 text-sm font-medium text-white/0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-400">
          Explore product
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

export default function Product({products}) {
  return (
    <section
      id="products"
      className="relative isolate w-full overflow-hidden bg-black px-5 py-5 sm:px-8 lg:px-12 "
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/[0.035] blur-[120px]" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center ">
          <span className="text-[11px] font-medium uppercase tracking-[5px] text-red-500">
            Delivered
          </span>

          <h2 className="mt-2 text-4xl font-bold leading-tight tracking-[-1.5px] text-white sm:text-5xl lg:text-[48px]">
            Our <span className="text-[#f04b50]">Products.</span>
          </h2>

          <p className="mt-2 max-w-lg text-sm leading-7 text-neutral-400 sm:text-base">
            Innovative solutions designed to simplify your business.
          </p>
        </div>

        <div className="grid mt-10 grid-cols-1 gap-5  lg:grid-cols-2">
           {Object.entries(products)[1] && (
  <ProductCard
    key={Object.entries(products)[1][1].title}
    product={Object.entries(products)[1][1]}
  />
)}
        </div>
      </div>
    </section>
  );
}

