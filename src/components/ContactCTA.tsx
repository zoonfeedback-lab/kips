"use client";

import { useState } from "react";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";

const whatsappContacts = [
  { label: "WhatsApp Helpline",     number: "0314-4048842", href: "https://wa.me/923144048842" },
  { label: "Admissions WhatsApp",   number: "0301-9884455", href: "https://wa.me/923019884455" },
];

type ContactCTAProps = {
  onEnrollClick: () => void;
  fullPage?: boolean;
};

export default function ContactCTA({ onEnrollClick, fullPage = false }: ContactCTAProps) {
  const leftRef     = useScrollAnimation<HTMLDivElement>();
  const contactsRef = useStaggerAnimation<HTMLDivElement>({ staggerMs: 80 });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate query submission
    setSubmitted(true);
  };

  if (fullPage) {
    return (
      <section className="bg-kips-navy-900 py-20 text-white font-body relative overflow-hidden">
        {/* Background Blur Ornaments */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-kips-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-white/3 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            
            {/* Left Column: Form Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xs shadow-xl">
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-kips-yellow-500 block mb-2">
                SEND A MESSAGE
              </span>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-white mb-6">
                Inquire or Leave a Message
              </h2>

              {submitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/35 rounded-xl p-6 text-center animate-in fade-in zoom-in-95 duration-200">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-base font-bold text-white">Query Submitted Successfully</h3>
                  <p className="text-xs text-white/70 mt-2 leading-relaxed">
                    Thank you for contacting Keyan Institute. Our admissions help desk will review your details and reach out shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", subject: "General Inquiry", message: "" }); }}
                    className="mt-5 text-xs font-bold text-kips-yellow-500 hover:text-kips-yellow-400 underline transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[0.68rem] font-bold text-white/60 uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sohail Khan"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-white/30 focus:border-kips-yellow-500 focus:outline-hidden focus:ring-1 focus:ring-kips-yellow-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.68rem] font-bold text-white/60 uppercase tracking-wider mb-2">Phone Number / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0314-4048842"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-white/30 focus:border-kips-yellow-500 focus:outline-hidden focus:ring-1 focus:ring-kips-yellow-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.68rem] font-bold text-white/60 uppercase tracking-wider mb-2">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-kips-navy-900 px-4 py-3 text-xs text-white focus:border-kips-yellow-500 focus:outline-hidden focus:ring-1 focus:ring-kips-yellow-500 transition-all"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Admissions Help">Admissions Help</option>
                      <option value="Technical Diploma Support">Technical Diploma Support</option>
                      <option value="Campus Facilities">Campus Facilities</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[0.68rem] font-bold text-white/60 uppercase tracking-wider mb-2">Your Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your details or admission queries here..."
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-white/30 focus:border-kips-yellow-500 focus:outline-hidden focus:ring-1 focus:ring-kips-yellow-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-kips-yellow-500 py-3.5 text-xs font-bold text-kips-navy-900 shadow-md hover:bg-kips-yellow-400 transition-all cursor-pointer transform active:scale-98"
                  >
                    Submit Query Message
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Contact Details Cards */}
            <div className="space-y-8">
              <div>
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-kips-yellow-500 block mb-2">
                  DIRECT CHANNELS
                </span>
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-white mb-4">
                  Helpline Support Desk
                </h2>
                <p className="text-xs text-white/70 leading-relaxed max-w-sm">
                  Connect with our counselors instantly via call or WhatsApp message. We are available to help you during standard study hours.
                </p>
              </div>

              {/* Contacts Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
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
                      <span className="block text-[0.55rem] font-bold uppercase tracking-wider text-white/50">
                        {contact.label}
                      </span>
                      <span className="block text-base font-extrabold leading-tight text-white group-hover:text-kips-yellow-500 transition-colors">
                        {contact.number}
                      </span>
                    </div>
                  </a>
                ))}

                {/* Email Support Card */}
                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[0.55rem] font-bold uppercase tracking-wider text-white/50">Email Support</span>
                    <div className="text-xs font-bold text-white">
                      k.13.10.13@gmail.com
                    </div>
                    <p className="mt-0.5 text-[0.58rem] text-white/45">
                      Zoom details provided on request
                    </p>
                  </div>
                </div>
              </div>

              {/* Head Office Info */}
              <div className="border-t border-white/10 pt-6">
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-kips-yellow-500 block mb-2">
                  HEADQUARTERS
                </span>
                <h4 className="text-sm font-bold text-white">Shah Maqsood Campus</h4>
                <p className="text-xs text-white/70 mt-1 leading-relaxed max-w-xs">
                  Main Shah Maqsood, near bypass road, Haripur District, Khyber Pakhtunkhwa, Pakistan.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    );
  }

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
