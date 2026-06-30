import React, { Suspense } from "react";
import { Space_Grotesk, Inter } from "next/font/google";

import NarrativeSection from "../../components/landing/NarrativeSection";
import ContactCtaSection from "../../components/landing/ContactCtaSection";

import WorkHeader from "@/components/caseStudy/WorkHeader";
import CaseStudiesSkeleton from "@/components/landing/CaseStudiesSkeleton";
import CaseStudiesDataLoader from "@/components/caseStudy/CaseStudiesDataLoader";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export const metadata: Metadata = {
  title: "Case Studies & Proven Software | 4xCode Work",
  description:
    "Explore our case studies. From autonomous AI agents to scalable SaaS platforms, see how our senior engineering team turns ambitious concepts into reality.",
  alternates: {
    canonical: "https://4xcode.com/work",
  },
};

export default async function WorkPage() {
  return (
    <div
      className={`bg-[#030303] text-white min-h-screen w-full relative overflow-hidden pb-10 ${inter.className}`}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 right-0 h-125 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-15%] left-[15%] w-[55%] h-[70%] rounded-full bg-[#f90a1f]/10 blur-[120px]" />
        <div className="absolute top-[-10%] right-[15%] w-[45%] h-[60%] rounded-full bg-[#f90a1f]/8 blur-[120px]" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#030303]" />
      </div>

      <div className="mx-auto w-full max-w-300 px-5 pt-36 pb-16 relative z-10 flex flex-col gap-y-16">
        <WorkHeader spaceGroteskClass={spaceGrotesk.className} />

        <Suspense fallback={<CaseStudiesSkeleton />}>
          <CaseStudiesDataLoader />
        </Suspense>
      </div>

      <NarrativeSection spaceGroteskClassName={spaceGrotesk.className} />
      <ContactCtaSection />
    </div>
  );
}
