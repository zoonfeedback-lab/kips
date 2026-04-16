const affiliations = [
  { name: "AIOU Islamabad", logo: "/logos/iqbaluni_logo.jpg" },
  { name: "Trade Testing Board", logo: "/logos/board_logo.jpg" },
  { name: "SDC Peshawar", logo: "/logos/skilldev_logo.jpg" },
  { name: "KPBTE Peshawar", logo: "/logos/kpboard_logo.jpg" },
  { name: "Mashal Technical System", logo: "/logos/logo-mtes.svg" },
];

export default function Affiliations() {
  return (
    <section id="affiliations" className="bg-kips-navy-900 py-24 border-t border-white/5 scroll-mt-24">
      <div className="container-custom">
        <span className="block text-center text-[0.7rem] font-black uppercase tracking-[0.3em] text-kips-yellow-500 mb-4 opacity-80">
          Accredited Excellence
        </span>
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-white mb-20 tracking-tighter uppercase italic">
          Regional & Board Affiliations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {affiliations.map((item) => (
            <article 
              key={item.name} 
              className="flex flex-col items-center justify-center gap-6 group p-8 rounded-sm bg-white/5 border border-white/5 hover:bg-white/10 hover:border-kips-yellow-500/30 transition-all duration-500 cursor-default"
            >
              <div className="relative flex items-center justify-center filter grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                <div className="w-16 h-16 flex items-center justify-center overflow-hidden rounded-md bg-white">
                  <img 
                    src={item.logo} 
                    alt={item.name} 
                    className="w-full h-full object-contain p-1"
                  />
                </div>
              </div>
              <p className="text-[0.65rem] font-black text-white/30 group-hover:text-kips-yellow-500 uppercase tracking-widest text-center transition-colors duration-300 px-2 leading-tight">
                {item.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
