"use client";

import { Space_Grotesk, Inter } from "next/font/google";
import { Reveal } from "../../utils/AnimationReveal";
import ContactForm from "../../components/ui/ContactForm";
import { useEffect } from "react";

import {
  MailOutlined as MailOutlineIcon,
  LocalPhoneOutlined as LocalPhoneOutlinedIcon,
  PlaceOutlined as PlaceOutlinedIcon,
} from "@mui/icons-material";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

interface ContactDetailsItem {
  id: string;
  label: string;
  value: string;
}

const contactDetails: ContactDetailsItem[] = [
  { id: "email", label: "Email", value: "info@4xcode.com" },
  { id: "phone", label: "Phone", value: "+44 7578 227223" },
  {
    id: "address",
    label: "ADDRESS",
    value: "01 Padnal Court, Romford, RM6 5HR, United Kingdom",
  },
];

const renderContactIcon = (id: string) => {
  const iconProps = { style: { fontSize: 16 } };
  switch (id) {
    case "email":
      return <MailOutlineIcon {...iconProps} />;
    case "phone":
      return <LocalPhoneOutlinedIcon {...iconProps} />;
    case "address":
      return <PlaceOutlinedIcon {...iconProps} />;
    default:
      return null;
  }
};

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact 4xCode | Start Your Software Project";
    let metaDescription = document.querySelector('meta[name="description"]');
    const descriptionText =
      "Tell us about your product. 4xCode responds within 24 hours with a sharp opinion and a clear path forward. Remote-first, EU/US.";

    if (metaDescription) {
      metaDescription.setAttribute("content", descriptionText);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", descriptionText);
      document.head.appendChild(metaDescription);
    }
  }, []);

  return (
    <div
      className={`bg-black text-white min-h-screen w-full relative overflow-hidden pb-16 md:pb-24 ${inter.className}`}
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-0 right-0 h-[600px] md:h-[800px] pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-[-15%] left-[15%] w-[65%] h-[60%] rounded-full bg-[#f90a1f]/10 blur-[100px] md:blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black"
          aria-hidden="true"
        />
      </div>

      {/* Main Container Container */}
      <div className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8 pt-28 sm:pt-40 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row lg:items-stretch gap-10 lg:gap-16 w-full box-border">
          
          {/* Left Block: Text & Contact Badges (Width locked on mobile) */}
          <div className="w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 lg:w-[42%] flex flex-col gap-4 md:gap-6 box-border">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-gradient-to-b from-[rgba(255,255,255,0.04)] to-[rgba(255,255,255,0.02)] px-[13px] py-[5px]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#ef1f23] shadow-[0px_0px_20px_rgba(235,31,35,0.8)] shrink-0" />
                <span className="text-[11px] font-normal tracking-[2px] uppercase text-[rgba(255,255,255,0.6)] leading-none">
                  Let&apos;s Talk
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                className={`${spaceGrotesk.className} text-3xl sm:text-5xl lg:text-[56px] xl:text-[60px] font-bold tracking-tight leading-[1.1] text-[#f8f8f8]`}
              >
                Start your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8C] to-[#EF1F23]">
                  next
                </span>
                <br className="hidden sm:block" />{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8C] to-[#EF1F23]">
                  chapter
                </span>
                <span className="text-[#EF1F23]">.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-xs sm:text-base font-normal leading-relaxed text-zinc-400 max-w-full lg:max-w-md">
                Tell us about your project. We reply within 24 hours with a
                clear plan, a scope, and an honest opinion.
              </p>
            </Reveal>

            {/* Details Badges List */}
            <div className="flex flex-col gap-2.5 pt-1 w-full box-border">
              {contactDetails.map((item, idx) => (
                <Reveal key={item.id} delay={0.15 + idx * 0.05} className="w-full">
                  <div className="w-full flex items-center gap-3.5 rounded-xl sm:rounded-[20px] border border-[rgba(255,255,255,0.06)] bg-white/[0.02] p-3.5 sm:p-4 transition-all duration-300 hover:border-[rgba(239,31,35,0.25)] box-border">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[rgba(239,31,35,0.08)] text-[#ef1f23] border border-[rgba(239,31,35,0.2)] shrink-0">
                      {renderContactIcon(item.id)}
                    </div>
                    <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                      <span className="text-[9px] sm:text-[10px] font-medium tracking-wider text-zinc-500 uppercase leading-none">
                        {item.label}
                      </span>
                      <span
                        className={`${spaceGrotesk.className} text-xs sm:text-sm font-normal text-zinc-200 break-words tracking-wide`}
                      >
                        {item.value}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Failsafe Accent Wave Box */}
            <Reveal delay={0.4} className="w-full">
              <div className="rounded-xl sm:rounded-[20px] border border-[rgba(255,255,255,0.06)] h-[110px] sm:h-[150px] w-full overflow-hidden relative box-border">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(162deg, #070707 0%, #030303 50%, #120405 100%)",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(255,255,255,0.03) 2.0833%, rgba(255,255,255,0) 2.0833%), linear-gradient(90deg, rgba(255,255,255,0.03) 2.0833%, rgba(255,255,255,0) 2.0833%)",
                    backgroundSize: "40px 40px",
                  }}
                />

                <svg
                  className="absolute inset-0 w-full h-full fill-none"
                  viewBox="0 0 602 192"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0,140 Q100,80 200,120 T400,100 T602,115"
                    stroke="#ef1f23"
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                  <circle cx="300" cy="120" r="3" fill="#ef1f23" />
                </svg>

                <div className="absolute bottom-[10px] left-[14px]">
                  <span className="font-mono text-[10px] text-zinc-600 tracking-wider">
                    51.5658° N, 0.1782° E
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Block: Form Panel */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}