import Link from "next/link"; 
export interface RelatedService {
  link?: string;
  heading: string;
  description: string;
  button?: string;
}
interface RelatedServicesProps {
  items: RelatedService;

}

export default function RelatedServices({ items }: RelatedServicesProps) {
  return (
   <div className="group relative z-10 flex h-full flex-col items-start rounded-[22px] border border-white/5 bg-white/7 p-6 text-left transition-transform duration-200 ease-linear hover:border-[rgba(249,10,31,0.35)] hover:bg-white/4">

      <h3
        className={`text-base font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-zinc-100`}
      >
            {items.heading}
          </h3>


      <p className="mt-2 flex-grow text-xs leading-relaxed text-[#a7a3a4]">
        {items.description}
          </p>

          {items.link && items.button && (
            <Link
              href={`/service/${items.link}`}
              className="inline-flex mt-2 w-fit items-center gap-2 font-medium text-red-500 transition hover:text-red-400"
            >
              {items.button}

            </Link>
          )}

    </div>
  );
}