const regionLine =
  "Abbottabad | Haripur | Mansehra | Shinkiari | Baffa | Mirpur (AJK) | Garhi Habibullah";

type HeroProps = {
  onEnrollClick: () => void;
};

export default function Hero({ onEnrollClick }: HeroProps) {
  return (
    <div id="home">
      <section className="relative flex min-h-[calc(100svh-6rem)] items-center overflow-hidden border-b border-white/5 bg-kips-navy-900 pb-16 pt-32 lg:pb-32 lg:pt-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(254,198,1,0.1),transparent_30%)]" />

        <div className="container-custom relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr,1fr]">
          <div className="text-white">
            <span className="mb-4 inline-block rounded-sm bg-kips-red-600 px-3 py-1 text-[0.65rem] font-black uppercase tracking-widest text-white">
              A Project of Mashal Technical Education System
            </span>
            <h1 className="font-display text-5xl font-bold uppercase leading-[1] tracking-tighter text-white lg:text-7xl">
              Keyan Institute of
              <br />
              <span className="text-kips-yellow-500">Professional Studies</span>
            </h1>
            <p className="mt-8 text-sm font-black uppercase tracking-[0.24em] text-white/70 lg:tracking-[0.3em]">
              {regionLine}
            </p>

            <div className="mt-8 flex flex-col gap-6">
              <p className="text-lg font-bold leading-tight text-white/90 lg:text-xl">
                Evening Skill Development Program
                <br />
                and Weekend Classes
                <span className="mt-2 block text-sm font-black uppercase tracking-widest text-kips-yellow-500">
                  Evening: 2:00 PM to 6:00 PM
                </span>
              </p>

              <div className="relative inline-block" dir="rtl">
                <div className="inline-flex flex-col items-center gap-1 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 shadow-2xl backdrop-blur-md">
                  <span className="font-body text-3xl font-black leading-none text-kips-yellow-500 lg:text-4xl">
                    ہنر سیکھیں
                  </span>
                  <span className="text-sm font-bold text-white/80 lg:text-base">
                    اور اپنا مستقبل سنواریں
                  </span>
                </div>
                <div className="absolute -right-2 -top-2 h-4 w-4 animate-pulse rounded-full bg-kips-red-600" />
              </div>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60 lg:text-base">
              Professional counseling, academic pathways, and career-focused training
              for students who want practical skills with recognized progression.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={onEnrollClick}
                className="group inline-flex items-center justify-center rounded-sm bg-kips-yellow-500 px-8 py-4 font-extrabold text-kips-navy-900 shadow-xl shadow-kips-yellow-500/20 transition-all hover:bg-white cursor-pointer"
              >
                Enroll Now
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-sm border border-white/20 px-8 py-4 font-bold text-white transition-all hover:bg-white/5"
              >
                View Programs
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border-[6px] border-kips-yellow-500 bg-kips-navy-800 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Professional academic environment"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 max-w-[14rem] rounded-sm bg-kips-red-600 p-8 pt-10 text-white shadow-2xl">
              <span className="block text-4xl font-black leading-none">12+</span>
              <span className="mt-2 block text-[0.65rem] font-black uppercase tracking-widest opacity-80">
                Career-focused programs
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-white/10 bg-kips-navy-900 py-6">
        <div className="container-custom flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-kips-red-600 shadow-lg shadow-kips-red-600/30">
              <span className="text-2xl text-white">📢</span>
            </div>
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight text-kips-yellow-500">
                Admissions Open 2026-27
              </h3>
              <div className="mt-1 flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
                <p className="whitespace-nowrap text-xs font-medium text-white/50">
                  Limited seats available for the upcoming session.
                </p>
                <div className="hidden h-1.5 w-1.5 rounded-full bg-white/20 md:block" />
                <div className="flex flex-col gap-1">
                  <p className="text-[0.65rem] font-black uppercase tracking-widest text-kips-yellow-500">
                    Under supervision:
                  </p>
                  <div className="flex flex-col text-[0.7rem] font-black uppercase tracking-tight text-white md:text-[0.75rem]">
                    <span>Professor Sohail Ahmad Khan</span>
                    <span>Dr. Mudassar (Education Psychologist)</span>
                    {/* <span>Professor Khalid</span> */}
                  </div>
                </div>
              </div>
              <p className="mt-2 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/40">
                For online registration and classes, contact us on WhatsApp or Zoom.
              </p>
            </div>
          </div>
          <button
            onClick={onEnrollClick}
            className="rounded-sm bg-kips-red-600 px-10 py-4 font-black uppercase tracking-widest text-white shadow-xl shadow-kips-red-600/20 transition-all hover:bg-kips-red-700 cursor-pointer"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
