import React from "react";
import Image from "next/image";
interface InspectionStep {
  id: number;
  number: string;
  title: string;
  description: string;
}

const STEPS: InspectionStep[] = [
  {
    id: 1,
    number: "01",
    title: "Inspect",
    description: "Technician records faults and adds photos.",
  },
  {
    id: 2,
    number: "02",
    title: "Quote",
    description: "Recommended repairs are turned into a quote.",
  },
  {
    id: 3,
    number: "03",
    title: "Approve",
    description: "Customer reviews and authorises the work digitally.",
  },
];

const InspectionSteps: React.FC = () => {
  return (
    <section className="w-full bg-black px-4 py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1150px]">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b0f17]">
            Inspection
          </p>
          <h2 className="mt-3 text-white text-3xl md:text-5xl font-bold tracking-tight">
            Digital Vehicle{" "}
            <span className="text-[#e55d5d]">Inspection</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:mt-14">
          {STEPS.map((step) => (
            <div
              key={step.id}
              className="flex min-h-[176px] flex-col rounded-[22px] bg-[#212121] px-4 pb-6 pt-4"
            >
              <span className="text-[28px] font-bold leading-none text-[#9b0f1a]">
                {step.number}
              </span>
              <h3 className="mt-5 text-[26px] font-bold leading-none text-white">
                {step.title}
              </h3>
              <p className="mt-4 max-w-[200px] text-[12px] leading-[16px] text-[#8a8a8a]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full mt-20 lg:mt-25">
              <Image
    src="/assets/technicianician-job-management.webp"
    alt="4XCode Workshop Workflow"
    width={1160}
    height={619}
    className="h-auto w-full object-cover"
    priority
  />


        </div>
      </div>

    </section>
  );
};

export default InspectionSteps;