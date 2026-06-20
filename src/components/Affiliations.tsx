"use client";

import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";

const affiliations = [
  { name: "AIOU Islamabad",                    logo: "/logos/iqbaluni_logo.jpg" },
  { name: "Trade Testing Board",               logo: "/logos/board_logo.jpg"    },
  { name: "SDC Peshawar",                      logo: "/logos/skilldev_logo.jpg" },
  { name: "KPBTE Peshawar",                    logo: "/logos/kpboard_logo.jpg"  },
  { name: "Sarhad University Peshawar",        logo: "/logos/kp_logo.jpg"       },
  { name: "Mashal Technical Education System", logo: "/logos/logo-mtes.svg"     },
];

export default function Affiliations() {
  const headerRef = useScrollAnimation<HTMLDivElement>();
  const gridRef   = useStaggerAnimation<HTMLDivElement>({ staggerMs: 60 });

  return (
    <section id="affiliations" className="scroll-mt-20 bg-white py-20">
      <div className="container-custom">
        <div ref={headerRef} className="mb-12 text-center">
          <span className="section-label">RECOGNIZED PARTNERS</span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-kips-text-900 lg:text-4xl">
            Board and University Affiliations
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-kips-text-400">
            Our degrees, diplomas, and technical certifications are fully accredited and recognized across Pakistan.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {affiliations.map((item) => (
            <article
              key={item.name}
              className="group flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-150 bg-white p-5 shadow-xs transition-all duration-200 hover:border-gray-300"
            >
              <div className="relative flex h-16 w-full items-center justify-center p-1">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-12 w-auto object-contain opacity-75 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
              <p className="text-center text-[0.6rem] font-bold uppercase tracking-wider text-kips-text-400 transition-colors group-hover:text-kips-navy-900">
                {item.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
