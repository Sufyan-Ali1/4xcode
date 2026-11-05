"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import site from "@/data/site.json";

export default function Header({ data = site.header, brand = site.brand }: { data?: typeof site.header; brand?: typeof site.brand }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-100 flex w-full items-center justify-center py-4 backdrop-blur-md bg-black/50">
      
      {/* ✅ Reduced width here */}
      <div className="mx-auto flex w-full max-w-300 items-center justify-between gap-6 rounded-[22px] px-5 py-3 lg:gap-20">
        <Link
          href={brand.href}
          aria-label={brand.homeLabel}
          className="flex shrink-0 items-center"
        >
          <Image
            src={brand.logo}
            width={57}
            height={48}
            alt={brand.logoAlt}
            priority
            className="h-12 w-[57px] object-contain"
          />
        </Link>

        <nav
          aria-label={data.navigationLabel}
          className="hidden shrink-0 items-center gap-1 md:flex"
        >
          {data.navigation.map(({ label, href }) => {
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
          href={data.action.href}
          className="group hidden h-13.25 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-[#f90a1f] bg-[#f90a1f]/20 px-12.5 py-5 backdrop-blur-md transition-colors duration-200 hover:bg-[#f90a1f]/30 min-[900px]:flex"
        >
          <span
            className="h-2.5 w-2.5 shrink-0 rounded-full bg-white"
            aria-hidden="true"
          />
          <span className="font-['Inter',sans-serif] text-[20px] font-bold text-white">
            {data.action.label}
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? data.closeMenuLabel : data.openMenuLabel}
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          className="flex items-center justify-end md:hidden"
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
                {data.navigation.map(({ label, href }) => {
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
                  href={data.action.href}
                  onClick={closeMenu}
                  className="group flex items-center justify-center gap-2 rounded-full border-2 border-[#f90a1f] bg-[#f90a1f]/20 px-8 py-3.5 backdrop-blur-md transition-colors duration-200 hover:bg-[#f90a1f]/30"
                >
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-white" />
                  <span className="font-['Inter',sans-serif] text-[20px] font-bold text-white">
                    {data.action.label}
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
