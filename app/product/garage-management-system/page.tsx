import GarageChallenges from "@/components/products/GarageChallenges"
import CTA from "@/components/products/CTA";
import Why4xCode from "@/components/products/Why4xCode.tsx";
import GarageNeedsFeatures from "@/components/products/GarageNeedsFeatures";
import WorkflowSection from "@/components/products/WorkflowSection";
import SecureAccessSection from "@/components/products/SecureAccessSection";
import BookCallForm from "@/components/products/BookCallForm";
import TestimonialsSection from "@/components/products/Testimonials";
import products_data from "@/data/products.json";
import InspectionSteps from "@/components/products/InspectionSteps";
import PricingPlans from "@/components/products/PricingPlans";
import BlogsCarousel from "@/components/products/BlogsCarousel";
import FaqAccordion from "@/components/products/FaqAccordion";
export default function Home() {
  const data=products_data["garage-management-system"]
  return (
    <main className=" bg-black text-white flex flex-wrap justify-center mx-auto px-5 sm:px-8 lg:px-10">
      <section className="relative w-[1150px] flex  items-start overflow-hidden bg-black py-10 sm:py-12 lg:min-h-[300px] lg:items-center lg:py-16">
      <div className="w-full max-w-[700px]">      
<div className="mb-7 inline-flex h-7 items-center gap-2 rounded-full bg-black px-3.5 shadow-[0_0_18px_rgba(255,91,99,0.18)] sm:mb-7">
  <span className="relative flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#ff5b63]/15">
    <span className="h-1.5 w-1.5 rounded-full bg-[#E35D59]" />
  </span>

  <span className="whitespace-nowrap text-sm font-medium leading-[1.82] tracking-[1.5px] text-[#a5a1a2] ">
    PRODUCTS
  </span>
</div>


          {/* Main heading */}
          <h1 className="max-w-[680px] text-[38px] font-bold leading-[1.12] tracking-[-1.5px] sm:text-[48px] sm:leading-[1.1] sm:tracking-[-1.8px] lg:text-[52px] lg:tracking-[-2px]">
            Smarter Software for
            <br />
            <span className="text-[#e95d60]">
              Modern Garages
            </span>
            <span className="text-white">.</span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-[665px] text-[16px] leading-[1.82] tracking-[1px] text-[#A7A3A4] sm:mt-9 sm:text-[17px] sm:leading-[1.72] lg:mt-9 lg:text-[17px]">
            Run your garage with greater control, clarity, and
            efficiency. Our Garage Management System brings every
            part of your business together in one connected platform,
            giving you complete visibility across jobs, customers,
            vehicles, technicians, invoices, payments, bookings, and
            day-to-day operations. From managing new bookings and
            assigning work to tracking job progress, maintaining
            vehicle records, communicating with customers, and
            keeping your finances organised, everything is designed
            to work together seamlessly.
          </p>
        </div>
      </section> 
      <div className="w-full">
      <BookCallForm />
      </div>
      <div className="w-full">
      <GarageChallenges />
      </div>
      <div className="w-full mt-15">
      <CTA />
      </div>
      <div className="w-full">
      <Why4xCode />
      </div>
       <div className="w-full">
      <GarageNeedsFeatures/>
      </div>
      <div className="w-full">
      < WorkflowSection />
      </div>
        <div className="w-full">
      <SecureAccessSection data={data.security_data1} />
      </div>
       <div className="w-full">
      <TestimonialsSection data={data.testinomials} />
      </div> 
       <div className="w-full">
      <PricingPlans data={data.pricing}/>
      </div> 
       <div className="w-full">
      <SecureAccessSection data={data.security_data2} />
      </div>
       <div className="w-full">
      <InspectionSteps />
      </div> 
       <div className="w-full ">
      <CTA />
      </div>
      
       <div className="w-full ">
      <BlogsCarousel />
      </div>
       <div className="w-full ">
      <FaqAccordion data={data.faq}
/>
</div>
      
    </main>
  );
}
