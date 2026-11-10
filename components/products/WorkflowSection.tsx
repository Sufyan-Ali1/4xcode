import React from "react";
import EastIcon from "@mui/icons-material/East";
import SouthIcon from "@mui/icons-material/South";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";

interface WorkflowStep {
  id: number;
  label: string;
}

const STEPS: WorkflowStep[] = [
  { id: 1, label: "Inquiry" },
  { id: 2, label: "Booking" },
  { id: 3, label: "Check-in" },
  { id: 4, label: "Inspection" },
  { id: 5, label: "Quote" },
  { id: 6, label: "Approval" },
  { id: 7, label: "Job & Parts" },
  { id: 8, label: "Invoice" },
  { id: 9, label: "Collection" },
];

const StepBox: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex h-[54px] w-full min-w-0 flex-col items-center justify-center rounded-[3px] border border-[#c8202a] bg-[#0b0b0b]">
    <DesktopWindowsOutlinedIcon className="!text-[12px] !text-[#e8141c]" />
    <span className="mt-1 whitespace-nowrap text-[15px] font-bold leading-none text-white">
      {label}
    </span>
  </div>
);

const Arrow: React.FC<{ isLast: boolean }> = ({ isLast }) => (
  <span
    className={`flex shrink-0 items-center justify-center text-[#5a5a5a] ${
      isLast ? "hidden md:flex md:invisible" : "flex"
    }`}
  >
    <SouthIcon className="!block !text-[22px] md:!hidden" />
    <EastIcon className="!hidden !text-[26px] md:!block" />
  </span>
);

const StepItem: React.FC<{ label: string; isLast: boolean }> = ({
  label,
  isLast,
}) => (
  <div className="flex w-full flex-col items-center gap-2 md:w-1/4 md:flex-row md:gap-2 md:px-1 lg:w-1/5 xl:w-1/6">
    <div className="w-full md:flex-1 md:min-w-0">
      <StepBox label={label} />
    </div>
    <Arrow isLast={isLast} />
  </div>
);

const WorkflowSection: React.FC = () => {
  return (
    <section className="w-full bg-black py-10 md:py-14">
      <div className="mx-auto w-full  rounded-[28px] bg-[#0d0d0d] px-4 py-10 md:px-8 md:py-12">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b0f17]">
            Work Flow
          </p>
          <h2 className="mt-3 text-white text-3xl md:text-5xl font-bold tracking-tight">
            From Enquiry to Collection,{" "}
            <span className="text-[#e55d5d]">Everything Connected</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[13px] leading-snug text-[#b5b5b5] md:text-sm">
            4Xcode connects every stage of your workshop workflow, giving your
            team visibility from the moment a customer gets in touch to the
            moment the vehicle leaves your garage.
          </p>
        </div>

        {/* Steps: automatic rows */}
        <div className="mt-10 flex flex-wrap justify-center gap-y-2 md:gap-y-5">
          {STEPS.map((step, index) => (
            <StepItem
              key={step.id}
              label={step.label}
              isLast={index === STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;