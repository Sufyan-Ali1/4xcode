import React from "react";
import Link from "next/link";
import Image from "next/image";
import data from "@/data/products.json";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";
import FacebookIcon from "@mui/icons-material/Facebook";
const STUDIO_LINKS = [
  { label: "Service", href: "/service" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
   { label: "Blog", href: "/blog" },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/company/4xcode-software/",
  },
  
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-black pt-4 pb-2 text-white">
      {/* Top line */}
      <div
        className="absolute top-0 left-0 h-[0.4px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #4c5a6e 40%, transparent 100%)",
        }}
      />

      <div className="mx-auto w-full max-w-300 px-5">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-10">
          {/* Logo */}
          <div className="flex flex-col lg:col-span-2">
            <Link
              href="/"
              aria-label="4xcode home"
              prefetch={false}
              className="flex mt-4 mb-2 items-center"
            >
              <Image
                src="/assets/logo1.webp"
                width={48}
                height={48}
                loading="lazy"
                alt="4xcode logo"
                className="h-12 w-[57px] object-contain"
              />
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-[#a7a3a4]">
              Premium engineering studio building the next generation of
              software, AI and SaaS.
            </p>
          </div>

          {/* Studio */}
          <div className="flex flex-col lg:col-span-1">
            <h3 className="mt-4 mb-2 text-[12px] uppercase tracking-[0.2em] text-[#a7a3a4]">
              Studio
            </h3>

            <ul className="flex flex-col gap-1">
              {STUDIO_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    prefetch={false}
                    className="text-[14px] text-white transition-colors hover:text-white/80"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
           <div className="flex flex-col lg:col-span-2 ">
            <h3 className="mt-4 mb-2 text-[12px] uppercase tracking-[0.2em] text-[#a7a3a4]">
              Products
            </h3>

          <ul className="flex flex-col gap-1">
          {Object.entries(data)[1] && (
        <li>
          <Link
            href={Object.entries(data)[1][1].href}
            prefetch={false}
            className="text-[14px] text-white transition-colors hover:text-white/80"
          >
            {Object.entries(data)[1][1].title}
          </Link>
        </li>
  )}
    </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col lg:col-span-2">
            <h3 className="mt-4 mb-2 text-[12px] uppercase tracking-[0.2em] text-[#a7a3a4]">
              Contact
            </h3>

            <ul className="flex flex-col  text-sm text-[#a7a3a4]">
              <li>
                <Link
                  href="mailto:hello@4xcode.com"
                  className="text-white"
                  target="_blank"
                  prefetch={false}
                >
                  info@4xcode.com
                </Link>
              </li>

              <li>
                <Link
                  href="https://maps.app.goo.gl/qVoMxWqZqKPeZm1s8"
                  className="mt-2 block hover:text-white"
                  target="_blank"
                  prefetch={false}
                >01 Padnal Court, Romford RM6 5HR, United Kingdom
                </Link></li>

              <li className="mt-2">Mon - Fri</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col lg:col-span-3">
            <h3 className="mt-4 mb-2 text-[12px] uppercase tracking-[0.2em] text-[#a7a3a4]">
              Newsletter
            </h3>

            <form className="mb-8 flex items-center justify-between rounded-full border border-white/10 bg-[#0a0a0a] p-1.5">
              <input
                type="email"
                placeholder="you@company.com"
                className="w-2/3 lg:w-1/2 bg-transparent px-4 text-sm text-white placeholder:text-[#a7a3a4] focus:outline-none"
              />

              <button
                type="submit"
                className="shrink-0 w-1/3 min-w-[100px] lg:w-1/2 rounded-full bg-[#f90a1f] px-4 py-2 text-sm font-semibold transition-colors hover:bg-[#ed1c20] cursor-pointer"
              >
                Subscribe 
              </button>
            </form>

            {/* Social */}
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <Link
                  key={href}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                  className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 bg-[#0a0a0a] transition-colors hover:bg-[#1a1a1a]"
                >
                  <Icon
                    fontSize="small"
                    className="text-[#a7a3a4] transition-colors hover:text-white"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-center border-t border-white/10 pt-8 text-xs text-[#a7a3a4] md:flex-row">
          <p>© 2026 4XCODE. Engineering the future with code.</p>
        </div>
      </div>
    </footer>
  );
}
