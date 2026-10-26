import { Reveal } from "../../utils/AnimationReveal";
import { Space_Grotesk } from "next/font/google";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});
export default function HeroSection({product})
{
  return(
         <section className="w-full pb-15 pt-30 min-h-[90vh] max-w-300 flex flex-col items-start space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-gradient-to-b from-[rgba(255,255,255,0.04)] to-[rgba(255,255,255,0.02)] px-[13px] py-[5px]">
                  <div className="w-[6px] h-[6px] rounded-full bg-[#ef1f23] shadow-[0px_0px_40px_-10px_rgba(245,29,49,0.7),0px_0px_80px_-30px_rgba(245,29,49,0.6)] shrink-0" />
                  <span className="text-[12px] font-normal tracking-[2.64px] uppercase text-[rgba(255,255,255,0.7)] leading-[16px]">
                    {product.product}
                  </span>
                </div>
              </Reveal>
    
              <Reveal delay={0.1}>
                <h1 className={`text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight leading-[1.1] max-w-4xl ${spaceGrotesk.className} `}>
                  {product.title1}
                  <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A8C] to-[#EF1F23]">
                    {product.title2}
                  </span>
                  <br className="hidden sm:inline" /> <span>{product.title3}</span>
                  <span className="text-[#EF1F23]">.</span>
                </h1>
              </Reveal>
    
              <Reveal delay={0.2}>
                <p className={`text-[#a7a3a4] text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed ${inter.className}`}>
                  {product.description}
                </p>
              </Reveal>
            </section>
        )
}