export default function Hero() {
  return (
    <div id="home">
      <section className="relative min-h-[calc(100svh-6rem)] -mt-24 pt-32 pb-16 lg:pt-48 lg:pb-32 flex items-center overflow-hidden bg-kips-navy-900 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(254,198,1,0.1),transparent_30%)]" />
        
        <div className="container-custom relative z-10 grid lg:grid-cols-[1.1fr,1fr] items-center gap-12">
          <div className="text-white">
            <span className="inline-block mb-4 px-3 py-1 bg-kips-red-600 text-white text-[0.65rem] font-black uppercase tracking-widest rounded-sm">
              ACADEMIC YEAR 2026-27
            </span>
            <h1 className="text-7xl lg:text-[8.5rem] font-bold leading-[0.85] tracking-tighter font-display uppercase italic">
              KIPS
              <br />
              ACADEMY
            </h1>
            <p className="mt-8 text-white/90 text-lg lg:text-xl font-bold leading-tight">
              Evening Skill Development Program
              <br />
              & Weekend Classes
            </p>
            <p className="mt-6 text-white/60 text-sm max-w-sm leading-relaxed">
              Exclusively designed for professional students and ambitious learners aiming for excellence in technical and academic sectors.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-sm bg-kips-yellow-500 text-kips-navy-900 font-extrabold shadow-xl shadow-kips-yellow-500/20 hover:bg-white transition-all group"
              >
                ENROLL NOW <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center px-8 py-4 rounded-sm border border-white/20 text-white font-bold hover:bg-white/5 transition-all"
              >
                View Programs
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-sm border-[6px] border-kips-yellow-500 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523240715630-3418ba6da001?auto=format&fit=crop&q=80&w=1200" 
                alt="Students studying" 
                className="w-full h-full object-cover brightness-110 saturate-125 transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Excellence Card */}
            <div className="absolute -bottom-10 -left-10 p-8 pt-10 bg-kips-red-600 text-white rounded-sm shadow-2xl max-w-[14rem]">
              <span className="block text-4xl font-black leading-none">20+</span>
              <span className="block text-[0.65rem] font-black uppercase tracking-widest mt-2 opacity-80 leading-tight">
                Years of Excellence
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Bar */}
      <div className="bg-kips-navy-900 py-6 border-b border-white/10">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-sm bg-kips-red-600 flex items-center justify-center shadow-lg shadow-kips-red-600/30">
              <span className="text-2xl text-white">📢</span>
            </div>
            <div>
              <h3 className="text-xl font-black text-kips-yellow-500 uppercase tracking-tight">ADMISSIONS OPEN 2026-27</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-1">
                <p className="text-xs text-white/50 font-medium whitespace-nowrap">Limited seats available for the upcoming session.</p>
                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20" />
                <p className="text-[0.65rem] font-black text-kips-yellow-500 uppercase tracking-widest">
                  Under Supervision: <span className="text-white">Prof: Sohail Ahmed Khan</span>
                </p>
              </div>
            </div>
          </div>
          <a href="#contact" className="px-10 py-4 bg-kips-red-600 text-white font-black uppercase tracking-widest rounded-sm shadow-xl shadow-kips-red-600/20 hover:bg-kips-red-700 transition-all">
            ENROL NOW
          </a>
        </div>
      </div>
    </div>
  );
}

