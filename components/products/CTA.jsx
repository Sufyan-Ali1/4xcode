"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const default_cta={
  heading_white:" Have a project in",
  heading_red:"mind?",
  text:"Tell us the goal. We'll tell you the path.",
  button:"Start Project",
};
export default function CTA({data=default_cta})
{
    return(
              <section className="w-full flex flex-wrap justify-center">
          <div
            className="
            max-w-[1150px]
              relative w-full overflow-hidden
              rounded-3xl
              border border-[#f90a1f]/60
              bg-[#070707]
              py-4
              px-6 
              sm:px-10 
              md:px-12 
              lg:px-16 
              flex flex-col md:flex-row
              items-center justify-between
              text-center md:text-left
              gap-5
            "
          >
            <div
              className="
                absolute -right-24 -top-24
                w-96 h-96
                rounded-full
                bg-[#f90a1f]/20
                blur-[90px]
                pointer-events-none
              "
              aria-hidden="true"
            />
        
            <div
              className="
                absolute -left-24 -bottom-32
                w-72 h-72
                rounded-full
                bg-[#f90a1f]/10
                blur-[80px]
                pointer-events-none
              "
              aria-hidden="true"
            />
        
            <div
              className="
                absolute -top-16 -left-16
                w-32 h-32
                rounded-full
                bg-[#f90a1f]/20
                blur-[35px]
                pointer-events-none
              "
              aria-hidden="true"
            />
        
            <div className="relative z-10">
              <div className="flex items-center justify-center md:justify-start gap-3 ">
                <span className="h-px w-6 bg-[#f90a1f]" />
                <span
                  className="
                    text-[#f90a1f]
                    text-[10px] sm:text-xs
                    font-bold
                    tracking-[0.35em]
                    uppercase
                  "
                >
                  Get Started
                </span>
                <span className="h-px w-6 bg-[#f90a1f]" />
              </div>
              <h2
                className={`
                  text-3xl
                  sm:text-4xl
                  md:text-4xl
                  lg:text-5xl
                  font-bold
                  tracking-tight
                  leading-tight
                  text-white
                `}
              >
               {data.heading_white}
                <span className="ml-3 text-[#f90a1f]">{data.heading_red}</span>
              </h2>
        
             
              <p className="
                mt-3
               text-[#a7a3a4]
                text-sm
                sm:text-base
                md:text-lg
                font-normal
              ">
                {data.text}
              </p>
            </div>
            <Link
              href="/contact"
              className="
                group relative z-10
                inline-flex items-center justify-center
                w-full md:w-auto
                min-w-[180px]
                px-8 sm:px-10
                py-4
                bg-[#f90a1f]
                hover:bg-[#c70819]
                text-white
                font-bold
                rounded-full
                text-sm sm:text-base
                whitespace-nowrap
                shrink-0
                gap-3
                shadow-[0_0_25px_rgba(249,10,31,0.35)]
                transition-all duration-300      
              "
            >
              <span>{data.button}</span>
        
              <ArrowForwardIcon
                style={{ fontSize: 20 }}
                className="
                  transition-transform
                  duration-300
                  
                "
              />
            </Link>
            <div
              className="
                absolute -right-16 -bottom-20
                w-48 h-48
                rounded-full
                border border-[#f90a1f]/30
                pointer-events-none
              "
              aria-hidden="true"
            />
          </div>
        </section>
    )
}