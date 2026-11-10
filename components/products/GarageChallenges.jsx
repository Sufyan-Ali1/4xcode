
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import GavelIcon from "@mui/icons-material/Gavel";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import Box from "@mui/material/Box";
const leftProblems = [
  {
    title: "JOBS RUNNING LATE",
    description: "Delays disrupt the entire workshop schedule.",
    icon: AccessTimeIcon,
  },
  {
    title: "VEHICLE WAITING FOR PARTS",
    description: "Workshop space tied up by idle vehicles",
    icon: CarRepairIcon,
  },
  {
    title: "QUOTES WAITING FOR APPROVAL",
    description: "Work delayed by pending customer approval.",
    icon: FormatQuoteIcon,
  },
  {
    title: "TECHNICIANS ARE FREE",
    description:
      "Available capacity gets lost when work isn't assigned efficiently.",
    icon: EngineeringIcon,
  },
];

const rightProblems = [
  {
    title: "UNPAID INVOICES",
    description: "Completed work with outstanding payments.",
    icon: ReceiptLongIcon,
  },
  {
    title: "PARKING SPACE OCCUPIED",
    description: "Workshop space blocked by unfinished jobs",
    icon: OccupiedParkingIcon,
  },
  {
    title: "ADDITIONAL WORK NOT AUTHORISED",
    description: "Repairs delayed by pending approval.",
    icon: GavelIcon,
  },
  {
    title: "CUSTOMERS WAITING FOR UPDATES",
    description: "Staff overwhelmed by customer status calls.",
    icon: PersonIcon,
  },
];
function OccupiedParkingIcon({
  size = 40,
  color = "#ef4444",
}) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        width: size,
        height: size,
        alignItems: "flex-end",
      }}
    >
      {/* Car side/front symbol */}
      <DirectionsCarIcon
        sx={{
          fontSize: size * 0.72,
          color,
        }}
      />

      {/* Parking board */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: size * 0.48,
          height: size * 0.48,
          border: `2px solid ${color}`,
          borderRadius: "5px",
          bgcolor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LocalParkingIcon
          sx={{
            fontSize: size * 0.36,
            color,
          }}
        />
      </Box>
    </Box>
  );
}


function ProblemCard({ item, side }) {
  const isLeft = side === "left";
  const Icon = item.icon;

  return (
    <div className="w-full min-w-0">
      <div
        className={`flex min-h-[50px] w-full items-stretch overflow-hidden rounded-xl border border-[#c91b28] ${
          isLeft ? "flex-row" : "flex-row"
        }`}
      >
        {isLeft && (
          <div className="flex w-[62px] shrink-0 items-center justify-center bg-[#a90f1b] text-white">
            <Icon
              sx={{
                fontSize: 27,
                color: "#ffffff",
              }}
            />
          </div>
        )}

        <div
          className={`flex min-w-0 flex-1 items-center px-3 py-2 sm:px-4 ${
            isLeft ? "justify-start" : "justify-start"
          }`}
        >
          <span className="text-[12px]  leading-[1.15] tracking-[1.6px] text-white sm:text-[13px] sm:tracking-[1.8px]">
            {item.title}
          </span>
        </div>

        {!isLeft && (
          <div className="flex w-[62px] shrink-0 items-center justify-center bg-[#a90f1b] text-white">
            <Icon
              sx={{
                fontSize: 27,
                color: "#ffffff",
              }}
            />
          </div>
        )}
      </div>

      <p className="mt-7 px-2 text-left text-[14px] font-medium leading-[1.45] text-white sm:mt-8 sm:text-[16px]">
        {item.description}
      </p>
    </div>
  );
}


function ProblemColumn({ items, side }) {
  return (
    <div className="flex min-w-0 flex-col gap-7 sm:gap-8 lg:gap-[31px]">
      {items.map((item) => (
        <ProblemCard key={item.title} item={item} side={side} />
      ))}
    </div>
  );
}

export default function GarageChallenges({
  logo = "/assets/4xcode-logo.webp",
}) {
  return (
    <section className="w-full overflow-hidden bg-black py-8 text-white sm:py-10 lg:py-8 flex flex-wrap justify-center" style={{
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
  }}>
      <div className="w-full">
        {/* Heading */}
        <header className="text-center">
          <p className="text-[13px]  tracking-[2px] text-[#ed1828]/50">
            PROBLEM
          </p>

          <h2 className="mx-auto mt-5 max-w-[760px] text-3xl md:text-5xl font-bold tracking-tight">
            Running a <span className="text-[#df555b]">Garage</span> Is More
            Than Managing Records
          </h2>

          <p className="mx-auto mt-4 max-w-[950px] text-[14px] font-medium leading-relaxed text-white sm:text-[16px]">
            Every day, garages are dealing with moving parts, changing
            priorities, and decisions that need to happen quickly.
          </p>
        </header>

        {/* Main problem and solution layout */}
        <div className=" grid grid-cols-1 items-start gap-10 mt-10 md:mt-12 lg:mt-15 lg:grid-cols-[minmax(0,1fr)_280px_minmax(0,1fr)] lg:items-center lg:gap-0">
          {/* Left side */}
          <div className="order-1 min-w-0 justify-self-center lg:justify-self-start max-w-[350px] lg:max-w-[300px] xl:w-[350px] ">
            <ProblemColumn items={leftProblems} side="left" />
          </div>

          {/* Center logo */}
          <div className="order-2 flex min-w-0 flex-col items-center justify-center lg:order-2 lg:self-center">
            <p className="mb-10 text-[13px] font-extrabold tracking-[2px] text-[#ed1828] lg:mb-11">
              SOLUTION
            </p>

            <div className="flex aspect-square w-[220px] items-center justify-center overflow-hidden rounded-full bg-white p-5 sm:w-[255px] lg:w-[255px]">
              <img
                src={logo}
                alt="4XCode logo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

        <div className="order-3 min-w-0 max-w-[350px] lg:max-w-[300px] xl:w-[350px] justify-self-center lg:justify-self-end">
  <ProblemColumn items={rightProblems} side="right" />
</div>
        </div>

        {/* Bottom message */}
        <div className="mt-10 border-x-[4px] border-[#a90f1b] px-3 py-5 sm:px-4 ">
          <p className="text-[16px] font-normal leading-[1.4] text-white  ">
            4Xcode brings your entire workshop together in one connected
            management platform — helping you manage jobs, customers, vehicles,
            technicians, approvals, parts, payments, and daily operations from
            a single place.
          </p>
        </div>
      </div>
    </section>
  );
}

