import garage from "@/data/GarageManagementPage.json";
import React from "react";
import DisplaySettingsOutlinedIcon from "@mui/icons-material/DisplaySettingsOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import MiscellaneousServicesOutlinedIcon from "@mui/icons-material/MiscellaneousServicesOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";

const iconClass = "!text-[28px] !text-[#e8141c]";
const icons = { customer: DisplaySettingsOutlinedIcon, vehicle: LocalParkingOutlinedIcon, booking: EventAvailableOutlinedIcon, job: MiscellaneousServicesOutlinedIcon, quote: FormatQuoteIcon, staff: WidgetsOutlinedIcon, reminder: NotificationsActiveOutlinedIcon, report: EventNoteOutlinedIcon, inspection: VisibilityOutlinedIcon, mot: FactCheckOutlinedIcon, inventory: Inventory2OutlinedIcon, email: MarkEmailReadOutlinedIcon };
const GarageNeedsFeatures = ({ data = garage.features }: { data?: typeof garage.features }) => {
  return (
    <section className="w-full bg-black py-12 md:py-16">
      <div className="mx-auto w-full">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-14">
          <p className="text-[13px] uppercase leading-5 tracking-[2px] text-[#ff1025]/50">
            {data.label}
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
  {data.heading}{" "}<span className="text-[#e55d5d]">{data.highlight}</span>
</h2>
          <p className="mt-3 text-sm text-zinc-400">{data.description}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
          {data.items.map((item) => (
            <div
  key={item.id}
  className="flex min-h-[170px] flex-col rounded-md border-2 border-[#4a0010] bg-black p-4"
>
  <div className="leading-none">{React.createElement(icons[item.icon as keyof typeof icons], { className: iconClass })}</div>
  <h3 className="mt-3 text-[15px] font-bold text-white">{item.title}</h3>
  <p className="mt-2 text-xs leading-snug text-gray-300">{item.description}</p>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GarageNeedsFeatures;
