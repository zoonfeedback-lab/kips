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
                <div className="w-16 h-16 text-white group-hover:text-kips-yellow-500 transition-colors flex items-center justify-center">
                  {item.name === "Mashal Technical System" && (
                     <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0a5.999 5.999 0 00-5.466-5.93m0 11.86A5.999 5.999 0 0019.5 12zm-9.595 6.94c.05.003.1.005.15.006A7.5 7.5 0 013 12c0-1.144.256-2.227.712-3.193m11.536 1.86a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  )}
                  {item.name === "HEC Pakistan" && (
                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  )}
                  {item.name === "Trade Testing Board" && (
                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6.119c0 3.842 1.959 7.229 4.902 9.222l1.25.847a1.659 1.659 0 001.761 0l1.25-.847a11.956 11.956 0 004.902-9.222A11.959 11.959 0 0112 2.714z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  )}
                  {item.name === "NEBOSH Certified" && (
                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  )}
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

