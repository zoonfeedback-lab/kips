"use client";

import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";

const whatsappContacts = [
  { label: "WhatsApp Helpline",     number: "0314-4048842", href: "https://wa.me/923144048842" },
  { label: "Admissions WhatsApp",   number: "0301-9884455", href: "https://wa.me/923019884455" },
];

type ContactCTAProps = {
  onEnrollClick: () => void;
};

export default function ContactCTA({ onEnrollClick }: ContactCTAProps) {
  const leftRef     = useScrollAnimation<HTMLDivElement>();
  const contactsRef = useStaggerAnimation<HTMLDivElement>({ staggerMs: 120 });

  return (
    <section id="contact" className="relative overflow-hidden bg-kips-navy-900 py-16 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(250,185,32,0.10),transparent_55%)]" />

      <div className="container-custom relative z-10 flex flex-col items-center justify-between gap-12 lg:flex-row">
        {/* Left */}
        <div ref={leftRef} className="max-w-sm">
          <span className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-kips-yellow-500">
            Get In Touch
          </span>
          <h2 className="font-display mb-3 text-3xl font-extrabold leading-tight tracking-tight text-white lg:text-4xl">
            Call or WhatsApp Us
          </h2>
          <p className="text-sm font-medium text-white/55">
            Get personalized counseling and admissions support — we're here to help you choose the right program.
          </p>
          <button
            onClick={onEnrollClick}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-kips-yellow-500 px-7 py-3 text-sm font-bold text-kips-navy-900 shadow-xl shadow-kips-yellow-500/20 transition-all hover:-translate-y-0.5 hover:bg-kips-yellow-600 hover:shadow-kips-yellow-500/30 cursor-pointer"
          >
            Enroll Online Now <span>→</span>
          </button>
        </div>

        {/* Right — Contact Cards */}
        <div className="flex w-full flex-col gap-5 md:flex-row lg:w-auto lg:gap-8">
          <div ref={contactsRef} className="flex flex-col gap-4">
            {whatsappContacts.map((contact) => (
              <a
                key={contact.number}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-kips-yellow-500/30 hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-kips-yellow-500 shadow-lg shadow-kips-yellow-500/20 transition-transform group-hover:scale-110">
                  <span className="text-xl text-kips-navy-900">📞</span>
                </div>
                <div>
                  <span className="block text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/40">
                    {contact.label}
                  </span>
                  <span className="block text-xl font-extrabold leading-tight tracking-tight text-white group-hover:text-kips-yellow-500 transition-colors lg:text-2xl">
                    {contact.number}
                  </span>
                </div>
              </a>
            ))}
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/30">
              Click any number to open WhatsApp chat.
            </p>
          </div>

          <div className="hidden w-px self-stretch bg-white/10 lg:block" />

          {/* Email */}
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white/20">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/15 shadow-lg">
              <span className="text-xl">✉️</span>
            </div>
            <div>
              <span className="block text-[0.6rem] font-bold uppercase tracking-[0.18em] text-white/40">Email Us</span>
              <div className="text-base font-bold leading-tight tracking-tight text-white lg:text-lg">
                k.13.10.13@gmail.com
              </div>
              <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-widest text-white/35">
                Zoom sessions available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
