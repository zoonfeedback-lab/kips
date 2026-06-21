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
  "Educational Psychology",
  "Child Psychology",
  "Parenting",
  "Educational Issues",
  "Test Preparations (ETEA/NTS)",
  "Cadet College & Interviews",
  "English Grammar",
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-body">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-kips-navy-900/40 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-gray-250 bg-white shadow-2xl animate-in zoom-in-95 fade-in duration-200">
        
        {/* Full-width Form Section */}
        <div className="p-6 md:p-10">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[0.62rem] font-bold text-kips-navy-900 uppercase tracking-widest block mb-1">
                Online Registration
              </span>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-kips-text-900">
                Student Enrollment Form
              </h2>
              <p className="mt-1 text-xs text-kips-text-400">
                Start your journey. Please fill in your details accurately.
              </p>
            </div>
            <button 
              onClick={onClose}
              className="rounded-full bg-gray-100 p-1.5 text-kips-text-400 hover:bg-gray-200 hover:text-kips-text-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {status === "success" ? (
            <div className="py-16 text-center animate-in fade-in duration-300">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-250">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-kips-text-900">Application Received!</h3>
              <p className="mt-2 text-xs text-kips-text-400">We will reach out to you via WhatsApp shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Name */}
              <div className="flex flex-col gap-1">
                <label className="text-[0.62rem] font-bold uppercase tracking-wider text-kips-text-700">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Rana Tayyab"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-lg border border-gray-200 bg-gray-50/50 px-3 py-2 text-xs text-kips-text-900 placeholder:text-kips-text-400 outline-none transition-all focus:border-kips-navy-900/50 focus:bg-white"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label className="text-[0.62rem] font-bold uppercase tracking-wider text-kips-text-700">WhatsApp Number</label>
                <input
                  required
                  type="tel"
                  placeholder="e.g. 0314-4048842"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="rounded-lg border border-gray-200 bg-gray-50/50 px-3 py-2 text-xs text-kips-text-900 placeholder:text-kips-text-400 outline-none transition-all focus:border-kips-navy-900/50 focus:bg-white"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-[0.62rem] font-bold uppercase tracking-wider text-kips-text-700">Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-lg border border-gray-200 bg-gray-50/50 px-3 py-2 text-xs text-kips-text-900 placeholder:text-kips-text-400 outline-none transition-all focus:border-kips-navy-900/50 focus:bg-white"
                />
              </div>

              {/* Program */}
              <div className="flex flex-col gap-1">
                <label className="text-[0.62rem] font-bold uppercase tracking-wider text-kips-text-700">Interested Course</label>
                <select
                  required
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="rounded-lg border border-gray-200 bg-gray-50/50 px-3 py-2 text-xs text-kips-text-900 outline-none transition-all focus:border-kips-navy-900/50 focus:bg-white appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select Program</option>
                  {programs.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              {/* Branch */}
              <div className="flex flex-col gap-1 sm:col-span-2">
                <label className="text-[0.62rem] font-bold uppercase tracking-wider text-kips-text-700">Preferred Campus</label>
                <select
                  required
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  className="rounded-lg border border-gray-200 bg-gray-50/50 px-3 py-2 text-xs text-kips-text-900 outline-none transition-all focus:border-kips-navy-900/50 focus:bg-white appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select Campus</option>
                  {branches.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1 sm:col-span-2">
                <label className="text-[0.62rem] font-bold uppercase tracking-wider text-kips-text-700">Message (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="I want to join the upcoming session..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-lg border border-gray-200 bg-gray-50/50 px-3 py-2 text-xs text-kips-text-900 placeholder:text-kips-text-400 outline-none transition-all focus:border-kips-navy-900/50 focus:bg-white resize-none"
                />
              </div>

              {/* Submit */}
              <div className="mt-3 sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-kips-yellow-500 py-3 text-xs font-bold uppercase tracking-wider text-kips-navy-900 transition-all hover:bg-kips-yellow-600 cursor-pointer disabled:opacity-50"
                >
                  {status === "loading" ? "Submitting..." : "Submit Enrollment"}
                </button>
                {status === "error" && (
                  <p className="mt-2 text-center text-[0.68rem] font-semibold text-kips-red-700">
                    An error occurred. Please try again or contact WhatsApp.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
