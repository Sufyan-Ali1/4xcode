import AboutSection from "@/components/landing/AboutSection";
import About_section from "@/data/About_section.json";
import CaseStudiesSection from "@/components/landing/CaseStudiesSection";
import Hero from "@/components/landing/Hero";
import ProcessSection from "@/components/landing/ProcessSection";
import ServicesSection from "@/components/landing/ServicesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ContactCtaSection from "@/components/landing/ContactCtaSection";
import products_data from "@/data/products.json";
import home_data from "@/data/home.json"
import { Suspense } from "react";
import ServiceFaq from "@/components/ui/ServiceFaq";
import CaseStudiesSkeleton from "@/components/landing/CaseStudiesSkeleton";
import Products from "@/components/products/ProductsMain";
import LogoMarquee from "@/components/landing/LogosMarquee";
export default async function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col items-center justify-center">
        <Hero />
        <LogoMarquee />
        <ServicesSection />
        <Suspense fallback={<CaseStudiesSkeleton />}>
        <CaseStudiesSection />
        </Suspense>
        <AboutSection data={About_section} />
          <Products products={products_data} />
        <ProcessSection />
        <TestimonialsSection />
        <ContactCtaSection />
        <ServiceFaq faqs={home_data.faqs} />
      </div>
    </div>
  );
}
