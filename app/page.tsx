import JsonLd from "@/components/JsonLd";
import homeSchema from "@/data/schema/home.json";
import AboutSection from "@/components/landing/AboutSection";
import CaseStudiesSection from "@/components/landing/CaseStudiesSection";
import Hero from "@/components/landing/Hero";
import ProcessSection from "@/components/landing/ProcessSection";
import ServicesSection from "@/components/landing/ServicesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ContactCtaSection from "@/components/landing/ContactCtaSection";
import home_data from "@/data/home.json";
import { Suspense } from "react";
import ServiceFaq from "@/components/ui/ServiceFaq";
import CaseStudiesSkeleton from "@/components/landing/CaseStudiesSkeleton";
import Products from "@/components/products/ProductsMain";

export default async function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={homeSchema} />
      <div className="flex flex-1 flex-col">
        <Hero data={home_data.hero} />
        <ServicesSection data={home_data.services} />
        <Suspense fallback={<CaseStudiesSkeleton />}>
          <CaseStudiesSection data={home_data.work} />
        </Suspense>
        <AboutSection data={home_data.about} />
        <Products data={home_data.products} />
        <ProcessSection data={home_data.process} />
        <TestimonialsSection testimonials={home_data.testimonials} data={home_data.testimonialSection} />
        <ContactCtaSection data={home_data.cta} />
        <div className="site-container">
          <ServiceFaq contentClassName="w-full" label={home_data.faqSection.label} faq_white_heading={home_data.faqSection.heading} faq_red_heading={home_data.faqSection.highlight} faqs={home_data.faqs} />
        </div>
      </div>
    </div>
  );
}
