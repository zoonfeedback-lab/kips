const affiliations = [
  { name: "AIOU Islamabad", logo: "/logos/iqbaluni_logo.jpg" },
  { name: "Trade Testing Board", logo: "/logos/board_logo.jpg" },
  { name: "SDC Peshawar", logo: "/logos/skilldev_logo.jpg" },
  { name: "KPBTE Peshawar", logo: "/logos/kpboard_logo.jpg" },
  { name: "Sarhad University Peshawar", logo: "/logos/kp_logo.jpg" },
  { name: "Mashal Technical Education System", logo: "/logos/logo-mtes.svg" },
];

export default function Affiliations() {
  return (
    <section
      id="affiliations"
      className="scroll-mt-24 border-t border-white/5 bg-kips-navy-900 py-24"
    >
      <div className="container-custom">
        <span className="mb-4 block text-center text-[0.7rem] font-black uppercase tracking-[0.3em] text-kips-yellow-500 opacity-80">
          Accredited Excellence
        </span>
        <h2 className="mb-20 text-center text-4xl font-bold uppercase tracking-tighter text-white lg:text-5xl">
          Regional and Board Affiliations
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {affiliations.map((item) => (
            <article
              key={item.name}
              className="group flex flex-col items-center justify-center gap-6 rounded-sm border border-white/5 bg-white/5 p-8 transition-all duration-500 hover:border-kips-yellow-500/30 hover:bg-white/10"
            >
              <div className="relative flex items-center justify-center opacity-40 grayscale transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-md bg-white">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-full w-full object-contain p-1"
                  />
                </div>
              </div>
              <p className="px-2 text-center text-[0.65rem] font-black uppercase tracking-widest text-white/40 transition-colors duration-300 group-hover:text-kips-yellow-500">
                {item.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
