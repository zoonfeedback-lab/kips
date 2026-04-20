"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
  badge?: string;
};

const navItems: NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#programs", label: "Programs" },
  { href: "#news", label: "News", }, // News 
  { href: "#affiliations", label: "Affiliations" },
  { href: "#branches", label: "Branches" },
];

const regionLine =
  "Abbottabad | Haripur | Mansehra | Shinkiari | Baffa | Mirpur (AJK) | Garhi Habibullah";

type NavbarProps = {
  onEnrollClick: () => void;
};

export default function Navbar({ onEnrollClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar for Locations */}
      <div className="hidden bg-kips-navy-800/80 backdrop-blur-sm border-b border-white/5 py-1.5 px-4 lg:block">
        <div className="mx-auto flex max-w-[1240px] items-center justify-end">
          <span className="text-[0.6rem] font-black uppercase tracking-[0.25em] text-white/50">
            📍 {regionLine}
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="p-4 lg:px-6 lg:pt-4 lg:pb-0">
        <nav
          className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 rounded-2xl border border-white/10 bg-kips-navy-900/80 p-4 shadow-2xl shadow-black/20 backdrop-blur-md lg:px-8 lg:py-5"
          aria-label="Primary"
        >
          <Link
            href="#home"
            className="inline-flex items-center gap-3 text-white transition-all hover:opacity-90 lg:gap-5"
            onClick={() => {
              setIsOpen(false);
              setActiveHash("#home");
            }}
          >
            <img
              src="/KIPSLOGO.PNG"
              alt="KIPS Logo"
              className="h-12 w-auto object-contain transition-transform hover:scale-105 lg:h-16"
            />
            <div className="flex flex-col">
              <h3 className="font-display text-[1.1rem] font-bold tracking-tight text-white lg:text-[1.3rem]">
                Keyan Institute
              </h3>
              <span className="text-[0.8rem] font-medium text-white/70 lg:text-[0.9rem]">
                Of Professional Studies
              </span>
            </div>
          </Link>

          <button
            type="button"
            className="flex flex-col gap-1.5 p-2 transition-transform active:scale-95 lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-all ${isOpen ? "translate-y-2 rotate-45" : ""
                }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-all ${isOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-white transition-all ${isOpen ? "-translate-y-1 -rotate-45" : ""
                }`}
            />
          </button>

          <div className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveHash(item.href)}
                className={`py-2 text-[0.85rem] font-bold tracking-widest uppercase transition-colors duration-300 ${activeHash === item.href
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                  }`}
              >
                <span className="relative inline-block">
                  {item.label}
                  {/* Notification Badge */}
                  {item.badge && (
                    <span className="absolute -right-8 -top-3 flex h-4 items-center justify-center rounded-full bg-kips-yellow-500 px-1.5 text-[0.55rem] font-black text-kips-navy-900 shadow-sm shadow-kips-yellow-500/50">
                      {item.badge}
                    </span>
                  )}
                  {/* precision-width Active Underline */}
                  {activeHash === item.href && (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-t-full bg-kips-yellow-500" />
                  )}
                </span>
              </Link>
            ))}
          </div>

          <button
            onClick={onEnrollClick}
            className="hidden items-center justify-center rounded-full bg-kips-yellow-500 px-8 py-3 text-xs font-black uppercase tracking-widest text-kips-navy-900 shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_6px_16px_rgba(255,255,255,0.4)] cursor-pointer lg:inline-flex"
          >
            Enroll Now
          </button>
        </nav>

        <div
          id="mobile-nav"
          className={`fixed inset-x-4 top-[5.5rem] grid gap-4 rounded-2xl border border-white/10 bg-kips-navy-900/95 p-6 shadow-3xl backdrop-blur-2xl transition-all duration-300 lg:hidden ${isOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0"
            }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between border-b border-white/5 py-2 text-lg font-medium transition-colors ${activeHash === item.href ? "text-kips-yellow-500" : "text-white"
                }`}
              onClick={() => {
                setIsOpen(false);
                setActiveHash(item.href);
              }}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="rounded-full bg-kips-yellow-500 px-2 py-0.5 text-xs font-black text-kips-navy-900 shadow-sm shadow-kips-yellow-500/30">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onEnrollClick();
            }}
            className="mt-4 flex w-full items-center justify-center rounded-xl bg-kips-yellow-500 p-4 font-bold text-kips-navy-900 shadow-lg cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      </div>
    </header>
  );
}
