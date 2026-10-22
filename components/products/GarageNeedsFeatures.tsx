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
interface FeatureItem {
  id: number;
  icon: React.ReactNode;
  title?: string;
  description?: string;
}
const iconClass = "!text-[28px] !text-[#e8141c]";
const FEATURES: FeatureItem[] = [
  {
    id: 1,
    icon: <DisplaySettingsOutlinedIcon className={iconClass} />,
    title: "Customer & Vehicle Management",
    description:
      "Keep every customer and vehicle record organised in one place, with complete service history and vehicle details.",
  },
  {
    id: 2,
    icon: <EventAvailableOutlinedIcon className={iconClass} />,
    title: "Bookings & Workshop Calendar",
    description:
      "Manage appointments, assign technicians, and plan workshop capacity without scheduling conflicts.",
  },
  {
    id: 3,
    icon: <LocalParkingOutlinedIcon className={iconClass} />,
    title: "Parking Management",
    description:
      "Track every vehicle on your premises, from arrival and parking to collection and handover.",
  },
  {
    id: 4,
    icon: <VisibilityOutlinedIcon className={iconClass} />,
    title: "Digital Vehicle Inspections",
    description:
      "Create detailed digital inspection reports with photos, findings, recommendations, and repair requirements.",
  },
  {
    id: 5,
    icon: <FormatQuoteIcon className={iconClass} />,
    title: "Quotes & Approvals",
    description:
      "Create and send quotes, then get customer approval before starting additional or recommended work.",
  },
  {
    id: 6,
    icon: <MiscellaneousServicesOutlinedIcon className={iconClass} />,
    title: "Job Management",
    description:
      "Track every job from booking and inspection through repairs, progress, completion, and collection.",
  },
  {
    id: 7,
    icon: <WidgetsOutlinedIcon className={iconClass} />,
    title: "Parts Management",
    description:
      "Track parts required, ordered, received, and used, keeping every part connected to the right job.",
  },
  {
    id: 8,
    icon: <EventNoteOutlinedIcon className={iconClass} />,
    title: "Invoicing & Payments",
    description:
      "Create accurate invoices, track completed work, and keep visibility over outstanding payments.",
  },
  {
    id: 9,
    icon: <NotificationsActiveOutlinedIcon className={iconClass} />,
    title: "Automated Reminders",
    description:
      "Automatically follow up with customers for MOTs, servicing, warranties, outstanding payments, and vehicle collections.",
  },
];
const GarageNeedsFeatures: React.FC = () => {
  return (
    <section className="w-full bg-black py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1150px] px-4">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-14">
          <p className="text-[13px] uppercase leading-5 tracking-[2px] text-[#ff1025]/50">
            Features
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
  Everything Your <span className="text-[#e55d5d]">Garage Needs</span>, In One Platform
</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
          {FEATURES.map((item) => (
            <div
  key={item.id}
  className="flex min-h-[170px] flex-col rounded-md border-2 border-[#4a0010] bg-black p-4"
>
  <div className="leading-none">{item.icon}</div>
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