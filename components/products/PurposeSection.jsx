
export default function PurposeSection({purposeData}) {
  return (
    <section className="w-full bg-black pt-10 pb-5 ">
      <div className="mx-auto w-full max-w-[1200px] overflow-hidden rounded-[20px] py-10 bg-[#111111]  sm:rounded-[24px] sm:px-8 md:px-10 lg:px-12">

        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

          <span className="mb-3 text-[11px] font-semibold uppercase tracking-[2.5px] text-[#f90a1f]  sm:mb-4 sm:text-[13px] sm:tracking-[3px]">
            {purposeData.eyebrow}
          </span>

          <h2 className="text-center text-[29px] font-bold leading-[1.2] tracking-[-0.8px] text-white sm:text-[38px] md:text-[44px] lg:text-[48px]">
            {purposeData.heading.map((part, index) => (
              <span
                key={`${part.text}-${index}`}
                className={` 
                  ${part.variant === "accent"
                    ? "bg-gradient-to-br from-[#ff8a8c] to-[#ef1f23] bg-clip-text text-transparent"
                    : "text-white"}
                `}
                
              >
                {part.text}
              </span>
            ))}
          </h2>

          <p className="mt-4 text-[14px] font-normal leading-relaxed text-[#a6a6a9] sm:mt-5 sm:text-[16px] md:text-[17px]">
            {purposeData.subtitle}
          </p>

        </div>

        <div className="mt-9 flex w-full flex-col gap-8 sm:mt-10 sm:gap-10 md:mt-12 md:gap-11 lg:mt-12">

          {purposeData.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="w-full text-justify text-[14px] font-normal leading-[1.75] tracking-[0.05px] text-[#a6a6a9] sm:text-[15px] sm:leading-[1.8] md:text-[16px] lg:text-[17px]"
            >
              {paragraph}
            </p>
          ))}

        </div>

      </div>
    </section>
  );
}