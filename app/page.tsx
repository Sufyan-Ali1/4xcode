import AboutSection from "@/components/landing/AboutSection";
import CaseStudiesSection from "@/components/landing/CaseStudiesSection";
import Hero from "@/components/landing/Hero";
import ProcessSection from "@/components/landing/ProcessSection";
import ServicesSection from "@/components/landing/ServicesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ContactCtaSection from "@/components/landing/ContactCtaSection";

import { Suspense } from "react";
import CaseStudiesSkeleton from "@/components/landing/CaseStudiesSkeleton";

export default async function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col items-center justify-center">
        <Hero />
        <ServicesSection />
        <Suspense fallback={<CaseStudiesSkeleton />}>
          <CaseStudiesSection />
        </Suspense>
        <AboutSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactCtaSection />
      </div>
    </div>
  );
}
