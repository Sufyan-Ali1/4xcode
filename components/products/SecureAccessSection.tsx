import garage from "@/data/GarageManagementPage.json";
import React from "react";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export interface AccessItem {
  id: number;
  title: string;
  description: string;
}

export interface SecureAccessData {
  label: string; // upar chhota red text ("Security")
  whiteHeading: string; // white heading ("Secure Access.")
  redHeading: string; // red heading ("Complete Control")
  headingSuffix?: string; // red heading ke baad white character (".")
  paragraphs: string[]; // left side ke paragraphs
  buttonText: string;
  items: AccessItem[]; // right side ki list
}

export const DEFAULT_SECURE_ACCESS_DATA: SecureAccessData = garage.security;

interface SecureAccessSectionProps {
  data?: SecureAccessData;
  onButtonClick?: () => void;
}

const SecureAccessSection: React.FC<SecureAccessSectionProps> = ({
  data = DEFAULT_SECURE_ACCESS_DATA,
  onButtonClick,
}) => {
  const {
    label,
    whiteHeading,
    redHeading,
    headingSuffix = "",
    paragraphs,
    buttonText,
    items,
  } = data;

  return (
    <section className="w-full bg-black py-12 md:pb-10">
      <div className="mx-auto w-full ">
        {/* Heading */}
        <div className="text-center">
          {label && <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b0f17]">{label}</p>}
          <h2 className="mt-3 text-white text-3xl md:text-5xl font-bold tracking-tight">
            {whiteHeading}{" "}
            <span className="text-[#e55d5d]">{redHeading}</span>
            <span className="">{headingSuffix}</span>
          </h2>
        </div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Left */}
          <div className="flex flex-col">
            {paragraphs.map((text, index) => (
              <p
                key={index}
                className={`text-justify text-[13px] leading-[20px] text-[#9a9a9a] ${
                  index > 0 ? "mt-6" : ""
                }`}
              >
                {text}
              </p>
            ))}

            <button
              type="button"
              onClick={onButtonClick}
              className="mt-10 flex h-[38px] w-full items-center justify-center gap-2 rounded-[5px] bg-[#f5071e] text-[12px] font-bold text-white shadow-[0_6px_24px_rgba(245,7,30,0.45)] transition hover:bg-[#d90619] md:mt-12"
            >
              {buttonText}
              <ArrowForwardIcon className="!text-[14px]" />
            </button>
          </div>

          {/* Right */}
          <ul className="flex flex-col gap-5">
            {items.map((item) => (
              <li key={item.id} className="flex items-start gap-3">
                <TaskAltOutlinedIcon className="!mt-[2px] !text-[13px] !text-[#e8141c]" />
                <div>
                  <h3 className="text-[13px] font-bold leading-[18px] text-white">
                    {item.title}
                  </h3>
                  <p className="text-justify text-[13px] leading-[19px] text-[#e5e5e5]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SecureAccessSection;