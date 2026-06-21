"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

type NavItem = {
  href: string;
  label: string;
  sectionId: string;
};

const navItems: NavItem[] = [
  { href: "#home",         label: "Home",         sectionId: "home"         },
  { href: "#about",        label: "About",        sectionId: "about"        },
  { href: "#programs",     label: "Programs",     sectionId: "programs"     },
  { href: "#why-kips",     label: "Why KIPS",     sectionId: "why-kips"     },
  { href: "#reviews",      label: "Reviews",      sectionId: "reviews"      },
  { href: "#branches",     label: "Branches",     sectionId: "branches"     },
  { href: "#contact",      label: "Contact",      sectionId: "contact"      },
];

const regionLine =
  "Abbottabad | Haripur | Mansehra | Shinkiari | Baffa | Mirpur (AJK) | Garhi Habibullah";

type NavbarProps = {
  onEnrollClick: () => void;
};

export default function Navbar({ onEnrollClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy — highlight the section currently in view
  useEffect(() => {
    const sectionIds = navItems.map((n) => n.sectionId);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveHash(id);
        },
        {
          rootMargin: "-30% 0px -60% 0px",
          threshold: 0,
        }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden bg-kips-navy-900 py-1.5 px-4 lg:block">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between">
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-white/70">
            📍 {regionLine}
          </span>
          <span className="text-[0.6rem] font-semibold text-white/50">
            ✉️ k.13.10.13@gmail.com &nbsp;|&nbsp; 📞 0301-9884455
          </span>
        </div>
      </div>

      {/* Main navbar */}
      <div
        className={`bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm border-b border-gray-100"
        }`}
      >
        <nav
          className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-3 lg:px-8 lg:py-4"
          aria-label="Primary"
        >
          {/* Logo */}
          <Link
            href="#home"
            className="inline-flex items-center gap-3 transition-opacity hover:opacity-80"
            onClick={() => { setIsOpen(false); setActiveHash("home"); }}
          >
            <img src="/logo.PNG" alt="KIPS Logo" className="h-11 w-auto object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-[1rem] font-bold tracking-tight text-kips-navy-900 lg:text-[1.1rem]">
                Keyan Institute
              </span>
              <span className="text-[0.72rem] font-medium text-kips-text-700">
                Of Professional Studies
              </span>
            </div>
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            className="flex flex-col gap-1.5 p-2 transition-transform active:scale-95 lg:hidden"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((c) => !c)}
          >
            <span className={`h-0.5 w-6 rounded-full bg-kips-navy-900 transition-all duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 rounded-full bg-kips-navy-900 transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`h-0.5 w-6 rounded-full bg-kips-navy-900 transition-all duration-300 ${isOpen ? "-translate-y-1 -rotate-45" : ""}`} />
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveHash(item.sectionId)}
                className={`relative py-1 text-[0.82rem] font-semibold tracking-wide transition-colors duration-200 ${
                  activeHash === item.sectionId
                    ? "text-kips-navy-900"
                    : "text-kips-text-700 hover:text-kips-navy-900"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2.5px] rounded-full bg-kips-yellow-500 transition-all duration-300 ${
                    activeHash === item.sectionId ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={onEnrollClick}
            className="hidden rounded-full bg-kips-yellow-500 px-6 py-2.5 text-sm font-bold text-kips-navy-900 shadow-md shadow-kips-yellow-500/30 transition-all hover:-translate-y-0.5 hover:bg-kips-yellow-600 hover:shadow-lg cursor-pointer lg:inline-flex items-center gap-2"
          >
            Enroll Now <span className="text-xs">→</span>
          </button>
        </nav>

        {/* Mobile menu — smooth height transition */}
        <div
          className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 ease-in-out lg:hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container-custom flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                  activeHash === item.sectionId
                    ? "bg-kips-navy-900/5 text-kips-navy-900"
                    : "text-kips-text-700 hover:bg-gray-50 hover:text-kips-navy-900"
                }`}
                onClick={() => { setIsOpen(false); setActiveHash(item.sectionId); }}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => { setIsOpen(false); onEnrollClick(); }}
              className="mt-3 rounded-full bg-kips-yellow-500 py-3 text-sm font-bold text-kips-navy-900 shadow-md cursor-pointer transition-all hover:bg-kips-yellow-600"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
