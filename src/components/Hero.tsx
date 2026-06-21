type HeroProps = { onEnrollClick: () => void };

const regionLine = "Abbottabad · Haripur · Mansehra · Shinkiari · Baffa · Mirpur AJK · Garhi Habibullah";

export default function Hero({ onEnrollClick }: HeroProps) {
  return (
    <div id="home">
      {/* ── Main Hero ── */}
      <section className="bg-kips-navy-900 pb-0 pt-16 lg:pt-24">
        <div className="container-custom">
          <div className="grid items-center gap-12 pb-16 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:pb-24">

            {/* Left — copy */}
            <div className="text-white">
              <p className="mb-5 text-[0.7rem] font-bold uppercase tracking-[0.32em] text-kips-yellow-500">
                Mashal Technical Education System
              </p>

              <h1 className="font-display text-5xl font-extrabold leading-[1.06] tracking-tight text-white lg:text-[3.75rem]">
                Build Your<br />Professional<br />
                <span className="text-kips-yellow-500">Future</span>
              </h1>

              <p className="mt-6 max-w-[420px] text-[1rem] leading-relaxed text-white/65">
                Board-certified IT, academic, professional, and vocational programs — 
                delivered across 7 campuses in KPK & AJK.
              </p>

              <div className="mt-4 font-body text-xl font-bold text-white/90" dir="rtl">
                ہنر سیکھیں — اپنا مستقبل سنواریں
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={onEnrollClick} className="btn-primary">
                  Enroll Now →
                </button>
                <a href="#programs" className="btn-ghost">
                  Browse Programs
                </a>
              </div>

              {/* Inline stats */}
              <div className="mt-12 flex gap-10 border-t border-white/10 pt-8">
                {[
                  { v: "12+", l: "Programs" },
                  { v: "7",   l: "Campuses"  },
                  { v: "Board", l: "Certified" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-2xl font-bold text-white">{s.v}</div>
                    <div className="mt-0.5 text-[0.7rem] font-semibold uppercase tracking-wider text-white/40">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image */}
            <div className="relative hidden lg:block">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Students learning at Keyan Institute"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              {/* Single clean badge */}
              <div className="absolute -bottom-5 -left-5 rounded-xl bg-white px-5 py-4 shadow-xl">
                <p className="text-[0.6rem] font-bold uppercase tracking-widest text-kips-text-400">Supervised by</p>
                <p className="mt-0.5 text-sm font-bold text-kips-text-900">Sohail Ahmed Khan</p>
                <p className="text-[0.68rem] font-bold text-kips-navy-900">CEO · MS (CS), M.E</p>
                <p className="text-[0.65rem] text-kips-text-400 mt-1">Dr. Mudassar · Advisor / Psychologist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Admissions Notice ── */}
      <div className="border-b border-gray-200 bg-white py-3">
        <div className="container-custom flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-sm font-medium text-kips-text-700">
            <span className="mr-2 font-bold text-kips-red-600">●</span>
            Admissions open 2026–27 — Limited seats. Online registration via WhatsApp / Zoom.
          </p>
          <button
            onClick={onEnrollClick}
            className="flex-shrink-0 rounded-lg bg-kips-yellow-500 px-5 py-2 text-xs font-bold uppercase tracking-wide text-kips-navy-900 transition-all hover:bg-kips-yellow-600 cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* ── Region strip ── */}
      <div className="bg-kips-light-50 py-2.5">
        <p className="text-center text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-kips-text-400">
          📍 {regionLine}
        </p>
      </div>
    </div>
  );
}
