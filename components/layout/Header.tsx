"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/service" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    // Outer fixed wrapper takes full width for ambient blurring effects
    <header className="fixed top-0 left-0 right-0 z-100 w-full bg-black/50 px-5 py-4 backdrop-blur-md md:px-12 lg:px-23">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-1 py-3">
        <Link
          href="/"
          aria-label="4xcode home"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/assets/logo1.png"
            width={57}
            height={48}
            alt="4xcode logo"
            priority
            className="h-12 w-[57px] object-contain"
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden shrink-0 items-center gap-1 md:flex"
        >
          {NAV_ITEMS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className="flex shrink-0 items-center justify-center whitespace-nowrap px-3 py-2.5 transition-colors duration-200"
              >
                <span
                  className={`font-['Inter',sans-serif] text-base font-medium leading-6 transition-colors duration-200 ${isActive ? "text-white" : "text-white/50"}`}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="group hidden h-13.25 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-[#f90a1f] bg-[#f90a1f]/20 px-12.5 py-5 backdrop-blur-md transition-colors duration-200 hover:bg-[#f90a1f]/30 min-[900px]:flex"
        >
          <span
            className="h-2.5 w-2.5 shrink-0 rounded-full bg-white"
            aria-hidden="true"
          />
          <span className="font-['Inter',sans-serif] text-[20px] font-bold text-white">
            Start Project
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          className="flex items-center justify-center p-2 md:hidden"
        >
          {isMenuOpen ? (
            <CloseIcon sx={{ fontSize: 30, color: "#fff" }} />
          ) : (
            <MenuIcon sx={{ fontSize: 30, color: "#fff" }} />
          )}
        </button>
      </div>

      {/* Mobile Drops */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={closeMenu}
          />
          <div className="absolute left-6 right-6 top-[calc(100%+12px)] z-50 md:hidden">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A]/95 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              <nav className="flex flex-col p-4">
                {NAV_ITEMS.map(({ label, href }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="rounded-xl px-4 py-3 transition-all duration-200"
                    >
                      <span
                        className={`font-['Inter',sans-serif] text-base font-medium leading-6 ${isActive ? "text-white" : "text-white/50"}`}
                      >
                        {label}
                      </span>
                    </Link>
                  );
                })}
                <div className="my-4 h-px bg-white/10" />
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="group flex items-center justify-center gap-2 rounded-full border-2 border-[#f90a1f] bg-[#f90a1f]/20 px-8 py-3.5 backdrop-blur-md transition-colors duration-200 hover:bg-[#f90a1f]/30"
                >
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full bg-white"
                    aria-hidden="true"
                  />
                  <span className="font-['Inter',sans-serif] text-[20px] font-bold text-white">
                    Start Project
                  </span>
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
