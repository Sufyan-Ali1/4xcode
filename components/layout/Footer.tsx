import React from "react";
import Link from "next/link";
import Image from "next/image";

// Material UI Icons
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";

export default function Footer() {
  return (
    <footer className="w-full bg-black px-6 py-12 text-white md:px-10 lg:py-16">
      <div className="mx-auto max-w-[1258px]">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <Link
              href="/"
              aria-label="4xcode home"
              className="flex items-center"
            >
              <Image
                src="/assets/logo1.png"
                height={48}
                width={48}
                alt="4xcode logo"
                className="block h-12 w-[57px] object-contain"
              />
            </Link>
            <p className="mt-2 max-w-sm font-['Inter',sans-serif] text-sm leading-relaxed text-[#a7a3a4]">
              Premium engineering studio building the <br/> next <br/> generation of
              software, AI and SaaS.
            </p>
          </div>

          {/* Column 2: Studio Links */}
          <div className="lg:col-span-2 gap-4">
            <h3 className="mb-6 font-['Inter',sans-serif] text-[12px] font-normal tracking-[0.2em] text-[#a7a3a4] uppercase">
              Studio
            </h3>
            <ul className="flex flex-col gap-1">
              {["Services", "Work", "Process", "About"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="font-['Inter',sans-serif] text-[14px] font-normal text-white transition-colors duration-20"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-2 gap-4">
            <h3 className="mb-6 font-['Inter',sans-serif] text-[12px] font-normal tracking-[0.2em] text-[#a7a3a4] uppercase">
              Contact
            </h3>
            <ul className="flex flex-col gap-1.5 font-['Inter',sans-serif] text-sm text-[#a7a3a4]">
              <li>
                <Link
                  href="mailto:hello@4xcode.com"
                  className="transition-colors duration-200 text-white font-[14px] font-normal"
                >
                  hello@4xcode.com
                </Link>
              </li>
              <li>Remote - EU / US</li>
              <li>Mon - Fri</li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Socials */}
          <div className="lg:col-span-4">
            <h3 className="mb-6 font-['Inter',sans-serif] text-[12px] font-normal tracking-[0.2em] text-[#a7a3a4] uppercase">
              Newsletter
            </h3>

            {/* Newsletter Input */}
            <form className="mb-8 flex items-center justify-between rounded-full border border-white/10 bg-[#0a0a0a] p-1.5 backdrop-blur-md">
              <input
                type="email"
                placeholder="you@company.com"
                required
                className="w-full bg-transparent px-4 font-['Inter',sans-serif] text-sm text-white placeholder:text-[#a7a3a4] focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#f90a1f] px-[16px] py-2.5 font-['Inter',sans-serif] text-sm font-normal text-white transition-colors shadow-[0_0_18px_rgba(239,31,35,0.5)] hover:bg-red-700"
              >
                Subscribe
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="#"
                className="group flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 bg-[#0a0a0a] transition-colors hover:bg-[#1a1a1a]"
              >
                <TwitterIcon
                  fontSize="small"
                  className="text-[#a7a3a4] transition-colors group-hover:text-white"
                />
              </Link>
              <Link
                href="#"
                className="group flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 bg-[#0a0a0a] transition-colors hover:bg-[#1a1a1a]"
              >
                <GitHubIcon
                  fontSize="small"
                  className="text-[#a7a3a4] transition-colors group-hover:text-white"
                />
              </Link>
              <Link
                href="#"
                className="group flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 bg-[#0a0a0a] transition-colors hover:bg-[#1a1a1a]"
              >
                <LinkedInIcon
                  fontSize="small"
                  className="text-[#a7a3a4] transition-colors group-hover:text-white"
                />
              </Link>
              <Link
                href="#"
                className="group flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 bg-[#0a0a0a] transition-colors hover:bg-[#1a1a1a]"
              >
                <PublicIcon
                  fontSize="small"
                  className="text-[#a7a3a4] transition-colors group-hover:text-white"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 font-['Inter',sans-serif] text-xs text-[#a7a3a4] md:flex-row">
          <p>© 2026 4XCODE. Engineering the future with code.</p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
            <Link
              href="/security"
              className="transition-colors hover:text-white"
            >
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
