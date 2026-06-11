import AboutSection from "@/components/landing/AboutSection";
import CaseStudiesSection from "@/components/landing/CaseStudiesSection";
import Hero from "@/components/landing/Hero";
import ProcessSection from "@/components/landing/ProcessSection";
import ServicesSection from "@/components/landing/ServicesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ContactCtaSection from "@/components/landing/ContactCtaSection";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col items-center justify-center">
        <Hero />
        <ServicesSection />
        <CaseStudiesSection />
        <AboutSection/>
        <ProcessSection/>
        <TestimonialsSection/>
        <ContactCtaSection/>
      </main>
    </div>
  );
}
