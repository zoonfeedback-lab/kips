"use client";

import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";

const branches = [
  { city: "Abbottabad",     urdu: "ایبٹ آباد",            detail: "Main Campus, Supply Road"              },
  { city: "Haripur",        urdu: "ہری پور",               detail: "Shah Maqsood Campus (Main)"            },
  { city: "Mansehra",       urdu: "مانسہرہ",               detail: "KIPS Campus Mansehra"                  },
  { city: "Shinkiari",      urdu: "شنکیاری",               detail: "KIPS Campus Near Degree College"       },
  { city: "Baffa",          urdu: "بفہ",                   detail: "KIPS Baffa Campus"                     },
  { city: "Mirpur (AJ&K)",  urdu: "میرپور (اے جے کے)",    detail: "KIPS Mirpur Campus"                    },
  { city: "Garhi Habibullah",urdu: "گڑھی حبیب اللہ",      detail: "KIPS Garhi Campus"                     },
];

export default function BranchNetwork() {
  const headerRef  = useScrollAnimation<HTMLDivElement>();
  const listRef    = useStaggerAnimation<HTMLDivElement>({ staggerMs: 60 });
  const imageRef   = useScrollAnimation<HTMLDivElement>({ rootMargin: "0px 0px -80px 0px" });

  return (
    <section id="branches" className="scroll-mt-20 bg-kips-light-50 py-20">
      <div className="container-custom grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">

        {/* Left */}
        <div>
          <div ref={headerRef}>
            <span className="section-label">OUR NETWORK</span>
            <h2 className="mb-8 font-display text-3xl font-extrabold tracking-tight text-kips-text-900 lg:text-4xl">
              7 Active Campus Locations
            </h2>
          </div>

          <div ref={listRef} className="flex flex-col gap-3">
            {branches.map((branch) => (
              <article
                key={branch.city}
                className="group flex items-center justify-between rounded-xl border border-gray-150 bg-white p-4 shadow-xs transition-all duration-200 hover:border-gray-300"
              >
                <div className="flex items-center gap-3">
                  {/* Clean uniform map pin icon instead of rainbow initials */}
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-kips-navy-900/5 text-kips-navy-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-kips-text-900 group-hover:text-kips-navy-900 transition-colors">
                      {branch.city}
                    </h3>
                    <p className="text-xs text-kips-text-400">{branch.detail}</p>
                  </div>
                </div>
                <div className="text-xs font-bold text-kips-navy-700" dir="rtl">
                  {branch.urdu}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right — Image */}
        <div ref={imageRef} className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <img
              src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Modern Campus Building"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Simple clean card overlay */}
          <div className="absolute -bottom-4 -left-4 rounded-xl bg-kips-navy-900 px-5 py-3 shadow-md text-white">
            <span className="block text-xl font-bold leading-none">7+</span>
            <span className="block text-[0.62rem] font-bold uppercase tracking-wider text-white/60">
              Active Campuses
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
