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
  const contactsRef = useStaggerAnimation<HTMLDivElement>({ staggerMs: 80 });

  return (
    <section id="contact" className="scroll-mt-20 bg-kips-navy-900 py-16 lg:py-20 text-white">
      <div className="container-custom flex flex-col items-center justify-between gap-12 lg:flex-row">
        {/* Left */}
        <div ref={leftRef} className="max-w-md">
          <span className="mb-3 inline-block text-[0.68rem] font-bold uppercase tracking-[0.2em] text-kips-yellow-500">
            GET IN TOUCH
          </span>
          <h2 className="font-display mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white lg:text-4xl">
            Ready to Start?<br />Contact Our Team
          </h2>
          <p className="text-sm leading-relaxed text-white/70">
            Reach out directly via Call or WhatsApp for enrollment support, program guides, and classroom details.
          </p>
          <button
            onClick={onEnrollClick}
            className="mt-6 btn-primary"
          >
            Enroll Online Now →
          </button>
        </div>

        {/* Right — Clean Contact Cards */}
        <div className="flex w-full flex-col gap-4 md:flex-row lg:w-auto lg:gap-6">
          <div ref={contactsRef} className="flex flex-col gap-3">
            {whatsappContacts.map((contact) => (
              <a
                key={contact.number}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:bg-white/10 hover:border-kips-yellow-500/30"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-kips-yellow-500 text-kips-navy-900 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[0.6rem] font-bold uppercase tracking-wider text-white/50">
                    {contact.label}
                  </span>
                  <span className="block text-lg font-extrabold leading-tight text-white group-hover:text-kips-yellow-500 transition-colors">
                    {contact.number}
                  </span>
                </div>
              </a>
            ))}
            <p className="text-[0.6rem] font-medium tracking-wide text-white/40 text-center md:text-left">
              Click to open chat.
            </p>
          </div>

          <div className="hidden w-px self-stretch bg-white/10 md:block" />

          {/* Email Card */}
          <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <span className="block text-[0.6rem] font-bold uppercase tracking-wider text-white/50">Email Support</span>
              <div className="text-sm font-bold text-white">
                k.13.10.13@gmail.com
              </div>
              <p className="mt-0.5 text-[0.62rem] text-white/45">
                Zoom details provided on request
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
