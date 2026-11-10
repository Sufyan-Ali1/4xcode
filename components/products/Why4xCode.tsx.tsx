
const garageTypes = [
  "Independent Garages",
  "MOT & Service Centres",
  "Vehicle Repair Workshops",
  "Specialist Garages",
  "Prestige & Performance Garages",
  "Mobile Mechanics",
  "Multi-Branch Garage Groups",
];

const workshopBenefits = [
  "One Connected System",
  "Built Around Workshop Operations",
  "Less Admin",
  "Better Visibility",
  "Customer Transparency",
];

const integrations = [
  "WhatsApp",
  "Email",
  "Payments",
  "Accounting",
  "MOT / Vehicle data",
  "Parts suppliers",
  "Google Calendar",
  "Website booking forms",
];

const columns = [
  {
    title: "Build for Garages of Every Shape and Size",
    items: garageTypes,
  },
  {
    title: "More Control Over Every Part of Your Workshop",
    items: workshopBenefits,
  },
  {
    title: "Integrations",
    items: integrations,
  },
];

export default function Why4xCode() {
  return (
    <section className="w-full mt-15 overflow-hidden bg-black pb-8 pt-2 text-white" style={{
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
  }}>
      <div className="mx-auto w-full ">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[13px] uppercase leading-5 tracking-[2px] text-[#ff1025]/50">
            WHY US?
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Why <span className="text-[#e95c60]">4×Code</span>?
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-[#ffffff]/70 text-[16px] leading-[20px]">
            Whether you run an independent workshop or manage multiple locations,
            <br className="hidden sm:block" /> 4Xcode adapts to the way your garage operates.
          </p>
        </div>

        {/* Three columns */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {columns.map((column, index) => (
            <div
              key={column.title}
              className={[
                "min-w-0 px-5 py-2 min-w-0 px-5 py-2 sm:[&:last-child:nth-child(odd)]:col-span-2 sm:[&:last-child:nth-child(odd)]:w-1/2 sm:[&:last-child:nth-child(odd)]:justify-self-center lg:[&:last-child:nth-child(odd)]:col-span-1 lg:[&:last-child:nth-child(odd)]:col-start-auto lg:[&:last-child:nth-child(odd)]:w-full lg:[&:last-child:nth-child(odd)]:justify-self-stretch",
                index !== 0 ? "border-t border-dotted border-[#ff1025] sm:border-t-0" : "",
                index === 0 ? "sm:pl-6 mt-5 pt-5 sm:pr-5 border-dotted border-[#ff1025] sm:border-l-2 " : "",
                index === 1 ? "sm:px-5 mt-5 pt-5  border-dotted border-[#ff1025] sm:border-l-2 sm:border-r-2 lg:border-r-0" : "",
                index === 2 ? "sm:pl-8 mt-5 pt-5 sm:pr-2 border-dotted border-[#ff1025] sm:border-l-2 sm:border-r-2" : "",
              ].join(" ")}
            >
              <h3 className="min-h-[48px] text-center text-[18px] font-bold leading-[21px]">
                {column.title}
              </h3>

              <ul className="mt-3 space-y-[13px]">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-[8px] text-[16px] leading-[24px]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[8px] h-0 w-0 shrink-0 border-b-[9px] border-l-[5px] border-r-[5px] border-b-[#ff1025] border-l-transparent border-r-transparent"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}