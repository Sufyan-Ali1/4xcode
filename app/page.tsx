import AboutSection from "@/components/landing/AboutSection";
import CaseStudiesSection from "@/components/landing/CaseStudiesSection";
import Hero from "@/components/landing/Hero";
import ProcessSection from "@/components/landing/ProcessSection";
import ServicesSection from "@/components/landing/ServicesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ContactCtaSection from "@/components/landing/ContactCtaSection";

// 1. Import your API fetch helper function
import { getCaseStudies } from "@/lib/caseStudyApi";

export default async function HomePage() {
 
  
   const initialData = await getCaseStudies();


  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col items-center justify-center">
        <Hero />
        <ServicesSection />

        {/* 3. Pass the server data directly down as a typed prop */}
        <CaseStudiesSection initialData={initialData} />

        <AboutSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactCtaSection />
      </div>
    </div>
  );
}
