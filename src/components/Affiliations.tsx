const affiliations = [
  { name: "Mashal Technical System", logo: "/logos/mashal-technical.svg" },
  { name: "HEC Pakistan", logo: "/logos/hec-pakistan.svg" },
  { name: "Trade Testing Board", logo: "/logos/trade-testing-board.svg" },
  { name: "NEBOSH Certified", logo: "/logos/nebosh-logo.svg" },
];

export default function Affiliations() {
  return (
    <section id="affiliations" className="bg-kips-navy-900 py-24 border-t border-white/5 scroll-mt-24">
      <div className="container-custom">
        <span className="block text-center text-[0.7rem] font-black uppercase tracking-[0.3em] text-kips-yellow-500 mb-4 opacity-80">
          Accredited Excellence
        </span>
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-white mb-20 tracking-tighter uppercase italic">
          Global & National Affiliations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {affiliations.map((item) => (
            <article 
              key={item.name} 
              className="flex flex-col items-center justify-center gap-6 group p-8 rounded-sm bg-white/5 border border-white/5 hover:bg-white/10 hover:border-kips-yellow-500/30 transition-all duration-500 cursor-default"
            >
              <div className="relative flex items-center justify-center filter grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                {/* Placeholder for actual logos, keeping the premium look */}
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-2xl">
                  {item.name === "HEC Pakistan" ? "🏛️" : 
                   item.name === "NEBOSH Certified" ? "🛡️" : "🏅"}
                </div>
              </div>
              <p className="text-[0.65rem] font-black text-white/30 group-hover:text-kips-yellow-500 uppercase tracking-widest text-center transition-colors duration-300">
                {item.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

