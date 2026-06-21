"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

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

function EnrollmentFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    branch: "",
    message: "",
  });

  // Pre-select program from query parameters if available
  useEffect(() => {
    const courseParam = searchParams.get("course");
    if (courseParam) {
      // Find matching program title in programs array (case-insensitive or soft match)
      const matchedProgram = programs.find(
        (p) => p.toLowerCase() === courseParam.toLowerCase() || p.toLowerCase().includes(courseParam.toLowerCase())
      );
      if (matchedProgram) {
        setFormData((prev) => ({ ...prev, program: matchedProgram }));
      }
    }
  }, [searchParams]);

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
          router.push("/");
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="my-auto py-10 max-w-lg mx-auto w-full">
      <span className="text-[0.65rem] font-bold text-kips-navy-900 uppercase tracking-widest block mb-1">
        Online Admissions Open
      </span>
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-kips-text-900 md:text-4xl">
        Student Registration Form
      </h1>
      <p className="mt-2 text-xs text-kips-text-400">
        Submit your application details below. Our academic desk will contact you on your WhatsApp number within 24 hours.
      </p>

      {status === "success" ? (
        <div className="mt-10 p-8 rounded-xl border border-emerald-200 bg-emerald-50 text-center animate-in fade-in duration-300">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-lg font-bold text-emerald-900">Application Submitted!</h3>
          <p className="mt-1 text-xs text-emerald-700">Thank you for choosing KIPS. Redirecting to home...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.65rem] font-bold uppercase tracking-wider text-kips-text-700">
              Full Name <span className="text-kips-red-600">*</span>
            </label>
            <input
              required
              type="text"
              placeholder="e.g. Tayyab Khan"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs text-kips-text-900 placeholder:text-kips-text-400 outline-none transition-all focus:border-kips-navy-900/50 focus:bg-white"
            />
          </div>

          {/* WhatsApp Number */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.65rem] font-bold uppercase tracking-wider text-kips-text-700">
              WhatsApp Number <span className="text-kips-red-600">*</span>
            </label>
            <input
              required
              type="tel"
              placeholder="e.g. 0314-4048842"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs text-kips-text-900 placeholder:text-kips-text-400 outline-none transition-all focus:border-kips-navy-900/50 focus:bg-white"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.65rem] font-bold uppercase tracking-wider text-kips-text-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs text-kips-text-900 placeholder:text-kips-text-400 outline-none transition-all focus:border-kips-navy-900/50 focus:bg-white"
            />
          </div>

          {/* Interested Course */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.65rem] font-bold uppercase tracking-wider text-kips-text-700">
              Interested Course <span className="text-kips-red-600">*</span>
            </label>
            <select
              required
              value={formData.program}
              onChange={(e) => setFormData({ ...formData, program: e.target.value })}
              className="rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs text-kips-text-900 outline-none transition-all focus:border-kips-navy-900/50 focus:bg-white cursor-pointer"
            >
              <option value="" disabled>Select Course</option>
              {programs.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          {/* Campus Choice */}
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label className="text-[0.65rem] font-bold uppercase tracking-wider text-kips-text-700">
              Preferred Campus Location <span className="text-kips-red-600">*</span>
            </label>
            <select
              required
              value={formData.branch}
              onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
              className="rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs text-kips-text-900 outline-none transition-all focus:border-kips-navy-900/50 focus:bg-white cursor-pointer"
            >
              <option value="" disabled>Select Campus</option>
              {branches.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label className="text-[0.65rem] font-bold uppercase tracking-wider text-kips-text-700">
              Message / Special Requirements
            </label>
            <textarea
              rows={3}
              placeholder="Mention class format (Morning/Evening/Weekend) or query..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs text-kips-text-900 placeholder:text-kips-text-400 outline-none transition-all focus:border-kips-navy-900/50 focus:bg-white resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-2 sm:col-span-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-kips-yellow-500 py-3.5 text-xs font-bold uppercase tracking-wider text-kips-navy-900 transition-all hover:bg-kips-yellow-600 cursor-pointer disabled:opacity-50"
            >
              {status === "loading" ? "Submitting Registration..." : "Submit Enrollment Application"}
            </button>
            {status === "error" && (
              <p className="mt-2.5 text-center text-xs font-bold text-kips-red-700">
                Submission error. Please verify network or contact 0314-4048842 directly.
              </p>
            )}
          </div>

        </form>
      )}
    </div>
  );
}

export default function EnrollPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col md:flex-row font-body overflow-x-hidden">
      
      {/* Left Column: Enrollment Form */}
      <div className="w-full md:w-[55%] lg:w-[50%] p-6 sm:p-10 md:p-16 flex flex-col justify-between min-h-screen bg-white">
        
        {/* Header Navigation */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.PNG" alt="KIPS Logo" className="h-10 w-auto object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-sm font-extrabold tracking-tight text-kips-text-900">
                Keyan Institute
              </span>
              <span className="text-[0.6rem] font-bold text-kips-text-400 uppercase tracking-wider">
                Of Professional Studies
              </span>
            </div>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-bold text-kips-text-600 hover:bg-gray-50 hover:text-kips-navy-900 transition-all shadow-xs"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Suspense Wrapped Form */}
        <Suspense fallback={<div className="py-20 text-center text-xs text-kips-text-400">Loading form...</div>}>
          <EnrollmentFormContent />
        </Suspense>

        {/* Footer line */}
        <p className="text-[0.62rem] text-kips-text-400 text-center md:text-left mt-auto">
          © 2026 Keyan Institute of Professional Studies. Affiliated with Mashal Technical Education System.
        </p>

      </div>

      {/* Right Column: Visual Brand Image (Desktop) */}
      <div className="hidden md:block md:w-[45%] lg:w-[50%] relative bg-kips-navy-900">
        <img
          src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Keyan Institute Campus life"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-kips-navy-900 via-kips-navy-900/40 to-transparent" />
        
        {/* Overlay Content */}
        <div className="absolute bottom-20 left-12 right-12 text-white max-w-lg">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-widest text-kips-yellow-500 backdrop-blur-xs">
            ⚡ Registered System
          </span>
          <h2 className="font-display mt-4 text-3xl font-extrabold leading-tight text-white">
            Invest in Your Technical & Professional Future
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-white/70">
            KIPS provides direct exam preparations, computer tools, IT, psychology, and management courses across Abbottabad, Haripur, Mansehra, and more. Certified and globally recognized diploma pathways.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
            <div>
              <span className="block text-2xl font-extrabold text-kips-yellow-500">20+</span>
              <span className="text-[0.62rem] uppercase tracking-wider text-white/50">Diplomas & Courses</span>
            </div>
            <div>
              <span className="block text-2xl font-extrabold text-kips-yellow-500">7+</span>
              <span className="text-[0.62rem] uppercase tracking-wider text-white/50">Active Locations</span>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
