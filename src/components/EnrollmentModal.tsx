"use client";

import { useState, useEffect } from "react";

type EnrollmentModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const programs = [
  "Computer AI Tools",
  "CIT / DIT",
  "Graphic Designing",
  "Safety Officer",
  "Montessori Diploma",
  "English Language",
  "B.Ed / ADA / ADS",
  "FA / FSc",
  "Dress Designing",
  "Beautician",
  "Psychology & Parenting",
  "Test Preparations (ETEA/NTS)",
  "Cadet College / Interview Prep",
];

const branches = [
  "Haripur (Shah Maqsood)",
  "Abbottabad",
  "Mansehra",
  "Shinkiari",
  "Baffa",
  "Mirpur (AJ&K)",
  "Garhi Habibullah",
];

export default function EnrollmentModal({ isOpen, onClose }: EnrollmentModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    branch: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        // Reset form after 2 seconds and close
        setTimeout(() => {
          setStatus("idle");
          setFormData({ name: "", phone: "", email: "", program: "", branch: "", message: "" });
          onClose();
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-kips-navy-900/80 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-kips-navy-900 shadow-2xl animate-in zoom-in-95 fade-in duration-300">
        {/* Decorative Top Accent */}
        <div className="h-1.5 w-full bg-kips-yellow-500" />
        
        <div className="p-6 lg:p-10">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white lg:text-4xl">
                Online <span className="text-kips-yellow-500">Enrollment</span>
              </h2>
              <p className="mt-2 text-sm font-medium text-white/50">
                Start your journey with Keyan Institute. Please fill in your details correctly.
              </p>
            </div>
            <button 
              onClick={onClose}
              className="group rounded-full bg-white/5 p-2 transition-colors hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white transition-transform group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {status === "success" ? (
            <div className="py-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-kips-yellow-500 text-kips-navy-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Application Received!</h3>
              <p className="mt-2 text-white/60">We will contact you shortly on your provided WhatsApp number.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[0.65rem] font-black uppercase tracking-widest text-kips-yellow-500">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="Rana Tayyab"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/20 outline-none transition-all focus:border-kips-yellow-500/50 focus:bg-white/10"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-[0.65rem] font-black uppercase tracking-widest text-kips-yellow-500">WhatsApp Number</label>
                <input
                  required
                  type="tel"
                  placeholder="0314-4048842"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/20 outline-none transition-all focus:border-kips-yellow-500/50 focus:bg-white/10"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1">
                <label className="text-[0.65rem] font-black uppercase tracking-widest text-kips-yellow-500">Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/20 outline-none transition-all focus:border-kips-yellow-500/50 focus:bg-white/10"
                />
              </div>

              {/* Program */}
              <div className="flex flex-col gap-2">
                <label className="text-[0.65rem] font-black uppercase tracking-widest text-kips-yellow-500">Interested Program</label>
                <select
                  required
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-kips-yellow-500/50 focus:bg-white/10 appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-kips-navy-900">Select Program</option>
                  {programs.map((p) => (
                    <option key={p} value={p} className="bg-kips-navy-900">{p}</option>
                  ))}
                </select>
              </div>

              {/* Branch */}
              <div className="flex flex-col gap-2">
                <label className="text-[0.65rem] font-black uppercase tracking-widest text-kips-yellow-500">Preferred Campus</label>
                <select
                  required
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-kips-yellow-500/50 focus:bg-white/10 appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-kips-navy-900">Select Campus</option>
                  {branches.map((b) => (
                    <option key={b} value={b} className="bg-kips-navy-900">{b}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[0.65rem] font-black uppercase tracking-widest text-kips-yellow-500">Message (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="I want to join the next batch..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/20 outline-none transition-all focus:border-kips-yellow-500/50 focus:bg-white/10 resize-none"
                />
              </div>

              {/* Submit */}
              <div className="mt-4 md:col-span-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full items-center justify-center gap-3 rounded-lg bg-kips-yellow-500 px-8 py-4 font-black uppercase tracking-widest text-kips-navy-900 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-kips-yellow-500/20 active:translate-y-0 disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="h-5 w-5 animate-spin text-kips-navy-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Submit Enrollment"
                  )}
                </button>
                {status === "error" && (
                  <p className="mt-3 text-center text-xs font-bold text-kips-red-600">Something went wrong. Please try again or WhatsApp us.</p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
