import React from "react";
import Link from "next/link";
import Image from "next/image";

// Icons
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black py-16 text-white">

      {/* Top line */}
      <div
        className="absolute top-0 left-0 h-[1px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #f63040 40%, transparent 100%)",
        }}
      />

      {/* ✅ GLOBAL WIDTH CONTAINER */}
      <div className="mx-auto w-full max-w-300 px-5">

        {/* Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* Logo */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <Link href="/" aria-label="4xcode home" className="flex items-center">
              <Image
                src="/assets/logo1.png"
                height={48}
                width={48}
                alt="4xcode logo"
                className="h-12 w-[57px] object-contain"
              />
            </Link>

            <p className="max-w-sm text-sm text-[#a7a3a4] leading-relaxed">
              Premium engineering studio building the next generation of software, AI and SaaS.
            </p>
          </div>

          {/* Studio */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-[12px] uppercase tracking-[0.2em] text-[#a7a3a4]">
              Studio
            </h3>

            <ul className="flex flex-col gap-1">
              {["Service", "Work", "Process", "About"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-[14px] text-white hover:text-white/80"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-[12px] uppercase tracking-[0.2em] text-[#a7a3a4]">
              Contact
            </h3>

            <ul className="flex flex-col gap-2 text-sm text-[#a7a3a4]">
              <li>
                <Link href="mailto:hello@4xcode.com" className="text-white">
                  info@4xcode.com
                </Link>
              </li>
              <li>01 Padnal Court, Romford RM6 5HR</li>
              <li>Mon - Fri</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="mb-6 text-[12px] uppercase tracking-[0.2em] text-[#a7a3a4]">
              Newsletter
            </h3>

            <form className="mb-8 flex items-center justify-between rounded-full border border-white/10 bg-[#0a0a0a] p-1.5">
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full bg-transparent px-4 text-sm text-white placeholder:text-[#a7a3a4] focus:outline-none"
              />

              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#f90a1f] px-4 py-2 text-sm font-semibold hover:bg-[#ed1c20] transition"
              >
                Subscribe
              </button>
            </form>

            {/* Social */}
            <div className="flex gap-4">
              {[TwitterIcon, GitHubIcon, LinkedInIcon, PublicIcon].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 bg-[#0a0a0a] hover:bg-[#1a1a1a] transition"
                >
                  <Icon fontSize="small" className="text-[#a7a3a4] hover:text-white" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 text-xs text-[#a7a3a4] md:flex-row">
          <p>© 2026 4XCODE. Engineering the future with code.</p>

          <div className="mt-4 flex gap-6 md:mt-0">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/security" className="hover:text-white">
              Security
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}