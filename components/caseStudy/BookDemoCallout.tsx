"use client";

import React from "react";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
// Import the ArrowForward icon from Material UI
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
});

export function BookDemoCallout() {
  return (
    <div className="w-full mt-16 border-t border-white/5 pt-12">
      <div className="w-full space-y-6">
        <h3
          className={`${spaceGrotesk.className} text-xl font-bold tracking-tight text-white sm:text-2xl`}
        >
          Book Your Free Demo
        </h3>

        <div className="text-zinc-400 text-sm sm:text-base leading-relaxed space-y-4">
          <p>
            If your garage is losing repeat customers to a lack of follow-up,
            4xCode Garage Software can change that quickly and without
            complexity. Our automated reminder system is ready to configure for
            your business within days.
          </p>
          <p>
            Book a free, no-obligation demo and see exactly how the automated
            service reminder system works, how quickly it can be set up, and
            what it could mean for your monthly bookings.
          </p>
        </div>

        {/* Premium Dark Tech Callout Box Design Integration */}
        <div className="group relative w-full overflow-hidden rounded-[22px] border border-[#ef1f23]/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-8 text-center shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-[#ef1f23]/30 md:p-10 mt-8">
          {/* Subtle Dynamic Target Aura Glow */}
          <div
            className="pointer-events-none absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-[#ef1f23]/10 blur-[50px] transition-opacity duration-300 group-hover:opacity-20"
            aria-hidden="true"
          />

          <h4
            className={`${spaceGrotesk.className} mb-3 text-lg font-bold tracking-tight text-white md:text-xl`}
          >
            See Automated Reminders in Action
          </h4>

          <p className="mx-auto mb-6 max-w-xl text-xs font-normal leading-relaxed text-zinc-400 md:text-sm">
            Book a free demo of 4xCode Garage Software and discover how
            automated service reminders can increase your repeat bookings,
            reduce missed MOTs, and grow your garage revenue.
          </p>

          <div className="mx-auto mt-4 max-w-xl border-t border-white/5 pt-5 text-xs font-bold uppercase tracking-widest md:text-sm">
            <Link
              href="/contact"
              className="group/demo-link inline-flex items-center justify-center gap-2 transition-all duration-200"
            >
              <span className="bg-gradient-to-r from-red-400 via-red-200 to-white bg-clip-text text-transparent transition-all group-hover/demo-link:brightness-110">
                www.4xcode.com | Book Your Free Demo Today
              </span>

              <ArrowForwardIcon
                style={{ fontSize: 16 }}
                className="text-[#ef1f23] transition-transform duration-300 ease-out "
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
