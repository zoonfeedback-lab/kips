"use client";

import { useState } from "react";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";

type Branch = {
  city: string;
  urdu: string;
  detail: string;
  mapQuery: string;
};

const branches: Branch[] = [
  { 
    city: "Abbottabad",     
    urdu: "ایبٹ آباد",            
    detail: "Main Campus, Supply Road",
    mapQuery: "Keyan+Institute+of+Professional+Studies+Abbottabad"
  },
  { 
    city: "Haripur",        
    urdu: "ہری پور",               
    detail: "Shah Maqsood Campus (Main)",
    mapQuery: "Keyan+Institute+of+Professional+Studies+Haripur"
  },
  { 
    city: "Mansehra",       
    urdu: "مانسہرہ",               
    detail: "KIPS Campus Mansehra",
    mapQuery: "Keyan+Institute+of+Professional+Studies+Mansehra"
  },
  { 
    city: "Shinkiari",      
    urdu: "شنکیاری",               
    detail: "KIPS Campus Near Degree College",
    mapQuery: "Shinkiari+KPK+Pakistan"
  },
  { 
    city: "Baffa",          
    urdu: "بفہ",                   
    detail: "KIPS Baffa Campus",
    mapQuery: "Baffa+Mansehra+Pakistan"
  },
  { 
    city: "Mirpur (AJ&K)",  
    urdu: "میرپور (اے جے کے)",    
    detail: "KIPS Mirpur Campus",
    mapQuery: "Mirpur+AJK+Pakistan"
  },
  { 
    city: "Garhi Habibullah",
    urdu: "گڑھی حبیب اللہ",      
    detail: "KIPS Garhi Campus",
    mapQuery: "Garhi+Habibullah+Pakistan"
  },
];

export default function BranchNetwork() {
  const [selectedBranch, setSelectedBranch] = useState<Branch>(branches[0]);

  const headerRef  = useScrollAnimation<HTMLDivElement>();
  const listRef    = useStaggerAnimation<HTMLDivElement>({ staggerMs: 60 });
  const mapRef     = useScrollAnimation<HTMLDivElement>({ rootMargin: "0px 0px -80px 0px" });

  const embedUrl = `https://maps.google.com/maps?q=${selectedBranch.mapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="branches" className="scroll-mt-20 bg-kips-light-50 py-20">
      <div className="container-custom grid items-stretch gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">

        {/* Left List */}
        <div className="flex flex-col justify-between">
          <div ref={headerRef}>
            <span className="section-label">OUR NETWORK</span>
            <h2 className="mb-4 font-display text-3xl font-extrabold tracking-tight text-kips-text-900 lg:text-4xl">
              7 Active Campus Locations
            </h2>
            <p className="mb-6 text-xs text-kips-text-400">
              Click on any campus below to view its location details on the live map.
            </p>
          </div>

          <div ref={listRef} className="flex flex-col gap-3">
            {branches.map((branch) => {
              const isSelected = selectedBranch.city === branch.city;
              return (
                <button
                  key={branch.city}
                  onClick={() => setSelectedBranch(branch)}
                  className={`group flex items-center justify-between rounded-xl border p-4 text-left shadow-xs transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-kips-navy-900 bg-white ring-1 ring-kips-navy-900"
                      : "border-gray-150 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg transition-colors ${
                      isSelected ? "bg-kips-navy-900 text-white" : "bg-kips-navy-900/5 text-kips-navy-900"
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-kips-text-900 transition-colors">
                        {branch.city}
                      </h3>
                      <p className="text-xs text-kips-text-400">{branch.detail}</p>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-kips-navy-700" dir="rtl">
                    {branch.urdu}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right — Google Maps Iframe */}
        <div ref={mapRef} className="flex flex-col">
          <div className="flex-1 min-h-[350px] relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-gray-100">
            <iframe
              title={`${selectedBranch.city} Campus Map`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src={embedUrl}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            />
          </div>
          {/* Active branch status badge */}
          <div className="mt-3 flex items-center justify-between rounded-xl bg-white border border-gray-200 p-4 shadow-xs">
            <div>
              <span className="block text-[0.62rem] font-bold uppercase tracking-wider text-kips-navy-900">
                Selected Campus
              </span>
              <span className="text-sm font-bold text-kips-text-900">
                {selectedBranch.city} — {selectedBranch.detail}
              </span>
            </div>
            <span className="rounded-full bg-emerald-50 border border-emerald-250 px-3 py-1 text-[0.65rem] font-bold text-emerald-700 uppercase tracking-wide">
              Active
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
