"use client";


export default function BuildForIndustry({data}) {
  // All content is dynamic and kept inside this component
 

  return (
    <section className="w-full  max-w-7xl bg-[#030303] px-5 py-5 lg:px-15 ">
      <div className="mx-auto w-full ">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold leading-tight tracking-tight text-white sm:text-2xl">
          {data.heading.white}{" "}
          <span className="text-[#EF1F23]">{data.heading.red}.</span>
        </h2>

        {/* Subheading */}
        <p className="mt-4 max-w-[650px] text-sm md:text-[16px] font-normal leading-relaxed  text-zinc-300 sm:text-xs">
          {data.subheading}
        </p>

    <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
  {data.industries.map((industry) => (
    <button
      key={industry}
      type="button"
      className="mt-2  rounded-full border border-[#EF1F23] bg-transparent py-3 text-[10px] font-normal text-white transition-colors duration-300 hover:bg-[#EF1F23] hover:text-white md:text-[12px] "
    >
      {industry}
    </button>
  ))}
</div>
      </div>
    </section>
  );
}