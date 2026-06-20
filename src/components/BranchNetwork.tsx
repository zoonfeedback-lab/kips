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

const cityColors = [
  "bg-kips-navy-900",
  "bg-kips-red-600",
  "bg-kips-yellow-600",
  "bg-kips-navy-700",
  "bg-kips-red-700",
  "bg-kips-navy-900",
  "bg-kips-red-600",
];

export default function BranchNetwork() {
  const headerRef  = useScrollAnimation<HTMLDivElement>();
  const listRef    = useStaggerAnimation<HTMLDivElement>({ staggerMs: 75 });
  const imageRef   = useScrollAnimation<HTMLDivElement>({ rootMargin: "0px 0px -80px 0px" });

  return (
    <section id="branches" className="bg-kips-light-50 py-24">
      <div className="container-custom grid items-center gap-16 lg:grid-cols-[1fr,1.2fr]">

        {/* Left */}
        <div>
          <div ref={headerRef}>
            <span className="mb-3 inline-block rounded-full bg-kips-navy-900/8 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-kips-navy-900">
              7 Locations
            </span>
            <h2 className="mb-10 font-display text-4xl font-extrabold leading-tight tracking-tight text-kips-text-900 lg:text-5xl">
              Our Extensive<br />
              <span className="text-kips-navy-900">Branch Network</span>
            </h2>
          </div>

          <div ref={listRef} className="flex flex-col gap-3">
            {branches.map((branch, i) => (
              <article
                key={branch.city}
                className="group flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-kips-navy-900/10 cursor-default"
              >
                <div className="flex items-center gap-4">
                  <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-white font-bold text-lg shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${cityColors[i]}`}>
                    {branch.city[0]}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-kips-text-900 group-hover:text-kips-navy-900 transition-colors">
                      {branch.city}
                    </h3>
                    <p className="text-xs font-medium text-kips-text-400">{branch.detail}</p>
                  </div>
                </div>
                <div className="text-sm font-bold text-kips-text-400 group-hover:text-kips-navy-700 transition-colors" dir="rtl">
                  {branch.urdu}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right — Image */}
        <div ref={imageRef} className="relative group">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-gray-100 shadow-2xl">
            <img
              src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Modern Campus Building"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-kips-navy-900/30 to-transparent" />
          </div>
          <div className="absolute top-5 right-5 rounded-xl bg-kips-yellow-500 px-4 py-2 shadow-lg">
            <span className="block text-[0.6rem] font-black uppercase tracking-widest text-kips-navy-900">
              Regional Leader
            </span>
          </div>
          <div className="absolute -bottom-5 left-5 rounded-2xl bg-kips-navy-900 px-6 py-4 shadow-2xl shadow-kips-navy-900/30">
            <span className="block text-2xl font-extrabold text-white">7+</span>
            <span className="block text-[0.6rem] font-bold uppercase tracking-widest text-white/60">
              Active Campuses
            </span>
          </div>
          <div className="absolute inset-0 -z-10 rounded-3xl bg-kips-navy-900/5 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
