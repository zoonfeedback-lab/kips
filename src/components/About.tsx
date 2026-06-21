"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Icons } from "@/components/Icons";

export default function About() {
  const leftRef = useScrollAnimation<HTMLDivElement>();
  const rightRef = useScrollAnimation<HTMLDivElement>({ rootMargin: "0px 0px -60px 0px" });

  return (
    <section id="about" className="scroll-mt-20 bg-white py-20 border-t border-gray-150">
      <div className="container-custom">
        
        {/* Main Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          
          {/* Left Content */}
          <div ref={leftRef} className="flex flex-col">
            <span className="section-label">ABOUT KEYAN INSTITUTE</span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-kips-text-900 lg:text-4xl">
              A Legacy of Professional and Academic Excellence
            </h2>
            
            <div className="mt-6 flex flex-col gap-4 text-sm text-kips-text-700">
              <p>
                Established under the <strong>Mashal Technical Education System</strong>, Keyan Institute of Professional Studies (KIPS) stands as a beacon of growth across Khyber Pakhtunkhwa (KPK) and Azad Jammu & Kashmir (AJK).
              </p>
              <p>
                We operate across <strong>7 regional campuses</strong>, offering board-certified courses, technical diplomas, and university preparatory programs led by registered tutors and certified trainers.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 border-b border-gray-100 pb-8">
              <div className="flex gap-3 items-start">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-kips-navy-900/5 text-kips-navy-900">
                  <Icons.UserCheck className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-display text-[0.88rem] font-bold text-kips-text-900">Psychological Support</h4>
                  <p className="mt-0.5 text-xs text-kips-text-400">Regular counseling and educational seminars led by Dr. Mudassar (Psychologist).</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-kips-navy-900/5 text-kips-navy-900">
                  <Icons.ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-display text-[0.88rem] font-bold text-kips-text-900">Certified Curriculum</h4>
                  <p className="mt-0.5 text-xs text-kips-text-400">Directly affiliated with leading national testing boards and universities.</p>
                </div>
              </div>
            </div>

            {/* Founder Profile Section (Added) */}
            <div className="mt-8 flex flex-col sm:flex-row gap-5 items-start bg-kips-light-50 border border-gray-150 rounded-xl p-5">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Prof. Sohail Ahmad Khan"
                className="h-20 w-20 rounded-lg object-cover border border-gray-200 flex-shrink-0"
              />
              <div>
                <span className="text-[0.62rem] font-bold text-kips-navy-900 uppercase tracking-widest block mb-0.5">
                  Founder & Managing Director
                </span>
                <h4 className="font-display text-base font-bold text-kips-text-900">
                  Prof. Sohail Ahmad Khan
                </h4>
                <p className="mt-1.5 text-xs text-kips-text-700 leading-relaxed">
                  Prof. Sohail Ahmad Khan founded Mashal Technical Education System and KIPS to bridge the gap between traditional textbooks and technical skills, dedicating over two decades to youth academic development in northern Pakistan.
                </p>
              </div>
            </div>

          </div>

          {/* Right Media Display */}
          <div ref={rightRef} className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Institute leadership meeting"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-xl bg-white p-4 border border-gray-200 shadow-sm max-w-xs">
              <p className="font-body text-xs font-semibold italic text-kips-text-700 leading-relaxed">
                "We don't just teach curricula; we shape careers and build regional leaders."
              </p>
              <p className="mt-2 text-[0.68rem] font-bold uppercase tracking-wider text-kips-navy-900">
                — Prof. Sohail Ahmad Khan
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
