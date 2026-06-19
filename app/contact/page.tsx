"use client";

import React from "react";
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
  { id: "address", label: "ADDRESS", value: "01 Padnal court Romford RM6 5HR" },
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
      className={`bg-black text-white min-h-screen w-full relative overflow-hidden pb-24 ${inter.className}`}
    >
      <div className="absolute top-0 left-0 right-0 h-[800px] pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-[-15%] left-[15%] w-[55%] h-[70%] rounded-full bg-[#f90a1f]/10 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="absolute top-[-10%] right-[15%] w-[45%] h-[60%] rounded-full bg-[#f90a1f]/8 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-40 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row lg:items-stretch gap-12 lg:gap-16">
          <div className="w-full lg:w-[42%] flex flex-col gap-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-gradient-to-b from-[rgba(255,255,255,0.04)] to-[rgba(255,255,255,0.02)] px-[13px] py-[5px]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#ef1f23] shadow-[0px_0px_40px_-10px_rgba(245,29,49,0.7),0px_0px_80px_-30px_rgba(245,29,49,0.6)] shrink-0" />
                <span className="text-[12px] font-normal tracking-[2.64px] uppercase text-[rgba(255,255,255,0.7)] leading-[16px]">
                  Let&apos;s Talk
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                className={`${spaceGrotesk.className} text-4xl font-bold sm:text-5xl lg:text-[60px]  tracking-[-1.2px] leading-[1.05] text-[#f8f8f8]`}
              >
                Start your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8C] to-[#EF1F23]">
                  next
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8C] to-[#EF1F23]">
                  chapter
                </span>
                <span className="text-[#f8f8f8]">.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-[16px] font-normal leading-[24px] text-[rgba(255,255,255,0.6)] max-w-[448px]">
                Tell us about your project. We reply within 24 hours with a
                clear plan, a scope, and an honest opinion.
              </p>
            </Reveal>

            <div className="flex flex-col gap-3 pt-4">
              {contactDetails.map((item, idx) => (
                <Reveal key={idx} delay={0.25 + idx * 0.05} className="w-full">
                  <div className="w-full flex items-center gap-4 rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-gradient-to-b from-[rgba(255,255,255,0.04)] to-[rgba(255,255,255,0.02)] p-[17px] transition-all duration-300 hover:border-[rgba(239,31,35,0.35)] hover:from-[rgba(255,255,255,0.06)] hover:to-[rgba(255,255,255,0.04)]">
                    <div className="w-10 h-10 rounded-[20px] flex items-center justify-center bg-[rgba(239,31,35,0.1)] text-[#ef1f23] border border-[rgba(239,31,35,0.3)] shrink-0">
                      {renderContactIcon(item.id)}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[12px] font-normal tracking-[1.2px] text-[rgba(255,255,255,0.4)] uppercase leading-[16px]">
                        {item.label}
                      </span>
                      <span
                        className={`${spaceGrotesk.className} text-[16px] font-normal leading-[24px] text-[#f8f8f8]`}
                      >
                        {item.value}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5} className="w-full">
              <div className="rounded-[24px] border border-[rgba(255,255,255,0.1)] h-[200px] w-full overflow-hidden relative transition-all duration-300 hover:border-[rgba(239,31,35,0.35)]">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(162deg, #0b0b0b 0%, #050505 50%, #1a0708 100%)",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(255,255,255,0.04) 2.0833%, rgba(255,255,255,0) 2.0833%), linear-gradient(90deg, rgba(255,255,255,0.04) 2.0833%, rgba(255,255,255,0) 2.0833%)",
                    backgroundSize: "48px 48px",
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
                    opacity="0.7"
                  />
                  <path
                    d="M0,155 Q100,100 200,135 T400,118 T602,130"
                    stroke="#ef1f23"
                    strokeWidth="0.8"
                    opacity="0.25"
                  />
                  <circle cx="300" cy="120" r="4" fill="#ef1f23" />
                </svg>

                <div className="absolute bottom-[12px] left-[16px]">
                  <span className="font-mono text-[12px] leading-[16px] text-[rgba(255,255,255,0.5)]">
                    37.7749° N, 122.4194° W
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
