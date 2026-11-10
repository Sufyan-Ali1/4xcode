import HeroSection from "@/components/products/HeroSection.jsx";
import data from "@/data/products.json";
import Whychoose from "@/components/products/Whychoose.jsx";
import PricingPlans from "@/components/products/PricingPlans";
import Product_gallery from "@/components/products/Product_gallery.jsx"
import CTA from "@/components/products/CTA.jsx";
import TestimonialsSection from "@/components/products/Testimonials.jsx";
import PurposeSection from "@/components/products/PurposeSection";
import GarageChallenges  from "@/components/products/GarageChallenges";
export default async function ProductDetailPage() {

  const product_data = data["auto-recovery-system"];

  return (
    <div className="site-container flex flex-wrap justify-center">
    <div className="w-full flex flex-wrap justify-center">
      <HeroSection product={product_data.hero_data} />
     </div>
     <div className="w-full flex flex-wrap justify-center">
      <GarageChallenges data={product_data.productProblem} />
      </div>
      <div className="w-full flex flex-wrap justify-center">
      <Whychoose data={product_data.whyChoose} />
      </div>
      <div className="w-full flex flex-wrap justify-center">
      <PricingPlans data={product_data.pricing} />
      </div>
         <div className="w-full flex flex-wrap justify-center">
      <CTA />
      </div>
      <div className="w-full flex flex-wrap justify-center">
      <TestimonialsSection data={product_data.testimonials_data} />
      </div>
      <div className="w-full flex flex-wrap justify-center">
      <PurposeSection purposeData={product_data.purpose_section} />
      </div>

        <div className="w-full flex flex-wrap justify-center">
      <Product_gallery data={product_data.product_gallery} />
      </div>

    </div>
  );
}