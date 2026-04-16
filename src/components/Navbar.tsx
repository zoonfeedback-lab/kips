"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#programs", label: "Programs" },
  { href: "#affiliations", label: "About" },
  { href: "#branches", label: "Admissions" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  return (
    <header className="sticky top-0 z-50 p-4 lg:pt-6 lg:px-6 lg:pb-0">
      <nav
        className="flex items-center justify-between gap-4 max-w-[1240px] mx-auto p-4 lg:px-6 border border-white/20 rounded-2xl bg-kips-navy-900/70 backdrop-blur-xl shadow-2xl shadow-kips-navy-900/20"
        aria-label="Primary"
      >
        <Link
          href="#home"
          className="inline-flex items-center gap-4 text-white hover:opacity-90 transition-opacity"
          onClick={() => {
            setIsOpen(false);
            setActiveHash("#home");
          }}
        >
          <img 
            src="/logos/main_logo.jpg" 
            alt="KIPS logo" 
            className="w-12 h-12 rounded-lg bg-white p-1 object-contain shadow-lg"
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-tight uppercase italic">KIPS Academy</span>
            <span className="text-[0.6rem] font-black tracking-[0.2em] text-kips-yellow-500 uppercase opacity-80">Shah Maqsood Campus</span>
          </div>
        </Link>

        <button
          type="button"
          className="flex flex-col gap-1 p-1 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className={`w-6 h-0.5 bg-white rounded-full transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white rounded-full transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white rounded-full transition-all ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
        </button>

        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setActiveHash(item.href)}
              className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                activeHash === item.href ? "text-kips-yellow-500 border-b-2 border-kips-yellow-500 pb-1" : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="hidden lg:inline-flex items-center justify-center px-6 py-2 rounded-sm bg-kips-yellow-500 text-kips-navy-900 font-black text-xs uppercase tracking-widest shadow-xl shadow-kips-yellow-500/20 hover:bg-white transition-all transition-all outline-none"
        >
          Enroll Now
        </Link>
      </nav>

      {/* Mobile Nav Panel */}
      <div
        id="mobile-nav"
        className={`lg:hidden fixed inset-x-4 top-[5.5rem] grid gap-4 p-6 rounded-2xl bg-kips-navy-900/95 backdrop-blur-2xl border border-white/10 shadow-3xl transition-all duration-300 transform ${
          isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-lg font-medium py-2 border-b border-white/5 transition-colors ${
              activeHash === item.href ? "text-kips-yellow-500" : "text-white"
            }`}
            onClick={() => {
              setIsOpen(false);
              setActiveHash(item.href);
            }}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="#contact"
          className="flex items-center justify-center mt-4 w-full p-4 rounded-xl bg-kips-red-600 text-white font-bold shadow-lg"
          onClick={() => setIsOpen(false)}
        >
          Apply Now
        </Link>
      </div>
    </header>
  );
}

