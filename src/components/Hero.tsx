const regionLine =
  "Abbottabad | Haripur | Mansehra | Shinkiari | Baffa | Mirpur (AJK) | Garhi Habibullah";

type HeroProps = {
  onEnrollClick: () => void;
};

export default function Hero({ onEnrollClick }: HeroProps) {
  return (
    <div id="home">
      {/* Hero Section — keeps brand blue background */}
      <section className="relative flex min-h-[calc(100svh-6rem)] items-center overflow-hidden bg-kips-navy-900 pb-16 pt-24 lg:pb-28 lg:pt-36">
        {/* Decorative radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(250,185,32,0.13),transparent_55%)]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-kips-yellow-500/5 blur-3xl" />

        <div className="container-custom relative z-10 grid items-center gap-10 lg:grid-cols-[1.15fr,1fr]">
          {/* Left — Text */}
          <div className="text-white">
            {/* Badge */}
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-widest text-kips-yellow-500 backdrop-blur-sm ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-kips-yellow-500 animate-pulse" />
              A Project of Mashal Technical Education System
            </span>

            {/* Heading */}
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white lg:text-6xl xl:text-7xl">
              Keyan Institute of
              <br />
              <span className="text-kips-yellow-500">Professional Studies</span>
            </h1>

            {/* Region */}
            <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/50">
              {regionLine}
            </p>

            {/* Sub-headline */}
            <div className="mt-7 flex flex-col gap-4">
              <p className="text-lg font-semibold leading-snug text-white/85 lg:text-xl">
                Evening Skill Development Program
                <br />
                and Weekend Classes
                <span className="mt-1.5 block text-sm font-bold uppercase tracking-widest text-kips-yellow-500">
                  Evening: 2:00 PM – 6:00 PM
                </span>
              </p>

              {/* Urdu tagline */}
              <div className="relative inline-block" dir="rtl">
                <div className="inline-flex flex-col items-center gap-1 rounded-2xl border border-white/15 bg-white/8 px-6 py-4 shadow-2xl backdrop-blur-md">
                  <span className="font-body text-3xl font-black leading-none text-kips-yellow-500 lg:text-4xl">
                    ہنر سیکھیں
                  </span>
                  <span className="text-sm font-semibold text-white/75 lg:text-base">
                    اور اپنا مستقبل سنواریں
                  </span>
                </div>
                <div className="absolute -right-2 -top-2 h-3.5 w-3.5 animate-pulse rounded-full bg-kips-red-600 shadow-lg shadow-kips-red-600/40" />
              </div>
            </div>

            <p className="mt-6 max-w-lg text-[0.92rem] leading-relaxed text-white/55">
              Professional counseling, academic pathways, and career-focused
              training for students who want practical skills with recognized
              progression.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={onEnrollClick}
                className="group inline-flex items-center gap-2 rounded-full bg-kips-yellow-500 px-8 py-3.5 text-sm font-bold text-kips-navy-900 shadow-xl shadow-kips-yellow-500/25 transition-all hover:-translate-y-0.5 hover:bg-kips-yellow-600 hover:shadow-2xl cursor-pointer"
              >
                Enroll Now
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
              <a
                href="#programs"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-8 py-3.5 text-sm font-bold text-white transition-all hover:border-white/60 hover:bg-white/8"
              >
                View Programs
              </a>
            </div>
          </div>

          {/* Right — Image Card */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border-4 border-kips-yellow-500/40 shadow-2xl shadow-black/40">
              <img
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Professional academic environment"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-kips-navy-900/50 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-8 -left-6 rounded-2xl bg-kips-red-600 p-6 shadow-2xl shadow-kips-red-600/30">
              <span className="block text-4xl font-extrabold leading-none text-white">12+</span>
              <span className="mt-1 block text-[0.6rem] font-bold uppercase tracking-widest text-white/80">
                Career-focused programs
              </span>
            </div>
            {/* Floating badge top-right */}
            <div className="absolute -right-4 -top-4 rounded-xl bg-white px-4 py-2 shadow-xl">
              <span className="block text-[0.6rem] font-black uppercase tracking-widest text-kips-navy-900">
                Board Certified
              </span>
              <span className="block text-[0.55rem] text-kips-text-400">
                AIOU · TTB · KPBTE · SDC
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Banner — light on dark strip */}
      <div className="bg-kips-navy-800 py-5">
        <div className="container-custom flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex items-center gap-5">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-kips-yellow-500 shadow-lg">
              <span className="text-xl">📢</span>
            </div>
            <div>
              <h3 className="text-base font-bold uppercase tracking-tight text-kips-yellow-500">
                Admissions Open 2026–27
              </h3>
              <div className="mt-0.5 flex flex-wrap items-center gap-x-4 gap-y-1">
                <p className="text-xs font-medium text-white/50">
                  Limited seats — register now.
                </p>
                <div className="flex flex-col text-[0.65rem] font-semibold uppercase tracking-tight text-white/80">
                  <span>Under supervision: Professor Sohail Ahmad Khan</span>
                  <span>Dr. Mudassar (Education Psychologist)</span>
                </div>
              </div>
              <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/35">
                Online registration & classes via WhatsApp / Zoom
              </p>
            </div>
          </div>
          <button
            onClick={onEnrollClick}
            className="flex-shrink-0 rounded-full bg-kips-yellow-500 px-8 py-3 text-sm font-bold text-kips-navy-900 shadow-lg shadow-kips-yellow-500/20 transition-all hover:bg-kips-yellow-600 cursor-pointer"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
