"use client";


export default function BuildForIndustry({data}) {
  // All content is dynamic and kept inside this component
 

  return (
    <section className="w-full  max-w-7xl bg-[#030303] px-7 py-5 lg:px-15 ">
      <div className="mx-auto w-full ">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-tight tracking-tight text-white sm:text-2xl">
          {data.headingwhite}{" "}
          <span className="text-[#EF1F23]">{data.headingred}.</span>
        </h2>

        {/* Subheading */}
        <p className="mt-4 w-full  text-sm md:text-[16px] font-normal leading-relaxed  text-zinc-300 sm:text-xs">
          {data.subheading}
        </p>
    <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
  {data.items.map((industry,index) => (
    <button
      key={index}
      type="button"
      className="mt-2 rounded-[10px] border border-[#EF1F23]/50 bg-transparent py-3 text-[10px] font-normal text-white transition-colors duration-300 hover:bg-[#EF1F23] hover:text-white md:text-[12px] px-3 "
    >
     <h4 className="font-bold text-[14px]">{industry.heading}</h4>
     <p className="mt-2">{industry.text}</p>
     
    </button>
  ))}
</div>
      </div>
    </section>
  );
}