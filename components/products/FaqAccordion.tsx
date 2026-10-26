"use client"
import React, { useState } from "react";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export interface FaqItem {
  id: number | string;
  question: string;
  answer: string;
}

export interface FaqAccordionProps {
   data: {
    headingWhite?: string;
    headingRed?: string;
    subtitle?: string;
    faqs: FaqItem[];
  };
}



const FaqAccordion: React.FC<FaqAccordionProps> = ({
data
}:FaqAccordionProps) => {
  // Page load par pehla FAQ open
  const [openId, setOpenId] = useState<FaqItem["id"] | null>(
    data.faqs.length > 0 ? data.faqs[0].id : null
  );

  const toggle = (id: FaqItem["id"]) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-black py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1150px]">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">
            <span className="text-white">{data.headingWhite}</span>
            <span className="text-[#f5071e] ml-3">{data.headingRed}</span>
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-[60px] bg-[#f5071e]" />
          <p className="mx-auto mt-5 max-w-[600px] text-[11px] italic text-[#45556C] sm:text-xs">
            {data.subtitle}
          </p>
        </div>

        {/* FAQ list */}
        <div className="mx-auto mt-10 flex w-full max-w-[632px] flex-col gap-[10px] md:mt-12">
          {data.faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-[18px] border border-[#6b0a14] bg-black transition-colors hover:border-[#a50f1c]"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="flex min-h-[62px] w-full items-center gap-3 px-5 py-3 text-left"
                >
                  <span className="flex size-[23px] shrink-0 items-center text-black  justify-center rounded-full bg-[#6b0a14]">
                 <HelpOutlinedIcon />                 </span>

                  <span className="flex-1 text-[15px] font-bold leading-[18px] text-white">
                    {faq.question}
                  </span>

                  <KeyboardArrowDownIcon
                    className={`!text-[18px] !text-[#8b2a33] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Smooth open/close */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 pl-[58px] text-[14px] leading-[19px] text-[#b5b5b5]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;