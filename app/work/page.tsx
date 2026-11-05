import { spaceGrotesk, inter } from "@/lib/fonts";
import worksSchema from "@/data/schema/works.json";
import React, { Suspense } from "react";

import NarrativeSection from "../../components/landing/NarrativeSection";
import ContactCtaSection from "../../components/landing/ContactCtaSection";
import WorkHeader from "@/components/caseStudy/WorkHeader";
import CaseStudiesSkeleton from "@/components/landing/CaseStudiesSkeleton";
import CaseStudiesDataLoader from "@/components/caseStudy/CaseStudiesDataLoader";
import { pageMetadata } from "@/data/metadata";
import works_data from "@/data/WorksMainPage.json"
import ServiceFaq from "@/components/ui/ServiceFaq";
export const metadata = pageMetadata.work;

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

      <div className="mx-auto w-full max-w-300 px-5  relative z-10 flex flex-col gap-y-10">
        <WorkHeader data={works_data.hero} spaceGroteskClass={spaceGrotesk.className} />

        <Suspense fallback={<CaseStudiesSkeleton />}>
          <CaseStudiesDataLoader schema={worksSchema} />

        </Suspense>
      </div>

      <NarrativeSection data={works_data.narrative} spaceGroteskClassName={spaceGrotesk.className} />
      <ContactCtaSection data={works_data.cta} />
      <ServiceFaq label={works_data.faqSection.label} faq_white_heading={works_data.faqSection.heading} faq_red_heading={works_data.faqSection.highlight} description={works_data.faqSection.description} faqs={works_data.faqs} />
    </div>
  );
}
