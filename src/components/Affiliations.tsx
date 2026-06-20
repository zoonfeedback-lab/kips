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
  const gridRef   = useStaggerAnimation<HTMLDivElement>({ staggerMs: 90 });

  return (
    <section id="affiliations" className="scroll-mt-24 bg-white py-24">
      <div className="container-custom">
        <div ref={headerRef} className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full bg-kips-navy-900/8 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-kips-navy-900">
            Accredited Excellence
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-kips-text-900 lg:text-5xl">
            Regional and Board Affiliations
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[0.92rem] leading-relaxed text-kips-text-700">
            Our programs are recognized by leading national boards and universities, ensuring your qualification carries real value.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {affiliations.map((item) => (
            <article
              key={item.name}
              className="group flex flex-col items-center justify-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-kips-navy-900/15 hover:shadow-xl"
            >
              <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-gray-50 p-1 opacity-50 grayscale transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 group-hover:bg-white group-hover:shadow-md">
                <img src={item.logo} alt={item.name} className="h-full w-full object-contain" />
              </div>
              <p className="px-1 text-center text-[0.62rem] font-bold uppercase tracking-widest text-kips-text-400 transition-colors duration-300 group-hover:text-kips-navy-900">
                {item.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
