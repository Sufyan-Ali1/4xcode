import React from "react";
import Link from "next/link";
import Image from "next/image";

// Icons
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";

const STUDIO_LINKS = [
  { label: "Service", href: "/service" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

const SOCIAL_LINKS = [
  {
    label: "Twitter",
    Icon: TwitterIcon,
    href: "https://twitter.com/4xcode",
  },
  {
    label: "GitHub",
    Icon: GitHubIcon,
    href: "https://github.com/4xcode",
  },
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/company/4xcode-software/",
  },
  {
    label: "Website",
    Icon: PublicIcon,
    href: "https://4xcode.com",
  },
];

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

      <div className="mx-auto w-full max-w-300 px-5">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Logo */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <Link
              href="/"
              aria-label="4xcode home"
              prefetch={false}
              className="flex items-center"
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
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-[12px] uppercase tracking-[0.2em] text-[#a7a3a4]">
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

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-[12px] uppercase tracking-[0.2em] text-[#a7a3a4]">
              Contact
            </h3>

            <ul className="flex flex-col gap-2 text-sm text-[#a7a3a4]">
              <li>
                <Link
                  href="mailto:hello@4xcode.com"
                  className="text-white"
                  prefetch={false}
                >
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
                className="shrink-0 rounded-full bg-[#f90a1f] px-4 py-2 text-sm font-semibold transition-colors hover:bg-[#ed1c20]"
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
        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 text-xs text-[#a7a3a4] md:flex-row">
          <p>© 2026 4XCODE. Engineering the future with code.</p>

          <div className="mt-4 flex gap-6 md:mt-0">
            <Link
              href="/privacy"
              prefetch={false}
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              prefetch={false}
              className="transition-colors hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="/security"
              prefetch={false}
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