import styles from "./Programs.module.css";

const programs = [
  {
    title: "Safety Officer",
    urduTitle: "سیفٹی آفیسر",
    category: "(NEBOSH, OSHA, IOSH)",
    description:
      "International safety certifications for high-level professional careers.",
    featured: true,
  },
  {
    title: "Computer Courses",
    urduTitle: "کمپیوٹر کورسز",
    category: "(CIT, DIT, Graphic Designing)",
    description:
      "Professional IT and training with modern industry tools.",
    featured: true,
  },
  {
    title: "Educational Courses",
    urduTitle: "ایجوکیشنل کورسز",
    category: "(BA, B.ED, Montessori)",
    description: "Professional teacher training and academic degree support.",
  },
  {
    title: "Tuition Classes",
    urduTitle: "ٹیوشن کلاسز",
    category: "(Nursery to FSC)",
    description:
      "Quality academic support for students from elementary to college levels.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-kips-navy-900 py-24">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-[0.65rem] font-black text-kips-yellow-500 uppercase tracking-[0.3em] mb-4 block">
              ACADEMIC EXCELLENCE
            </span>
            <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tighter uppercase italic">
              OUR PROGRAMS
            </h2>
          </div>
          <div className="h-1 w-32 bg-kips-yellow-500 hidden lg:block mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {programs.map((program) => (
            <article
              key={program.title}
              className="group p-10 rounded-sm bg-kips-navy-900 border border-white/10 hover:border-kips-yellow-500/50 transition-all duration-300 cursor-default"
            >
              <div className="mb-10 w-12 h-12 text-kips-yellow-500 group-hover:scale-110 transition-transform origin-left">
                {program.title === "Safety Officer" && (
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                )}
                {program.title === "Computer Courses" && (
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                )}
                {program.title === "Educational Courses" && (
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41c-.076-2.113-.24-4.222-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                )}
                {program.title === "Tuition Classes" && (
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                )}
              </div>

              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                {program.title.split(' ')[0]}
                {program.title.split(' ')[1] ? <span className="block text-kips-yellow-500">{program.title.split(' ')[1]}</span> : null}
              </h3>

              <div className="text-xl font-bold text-kips-yellow-500/40 mb-4" dir="rtl">
                {program.urduTitle}
              </div>

              <div className="text-[0.65rem] font-black text-white/50 uppercase tracking-widest mb-4">
                {program.category}
              </div>

              <p className="text-sm text-white/40 leading-relaxed font-medium">
                {program.description}
              </p>
            </article>
          ))}

          {/* More Programs Card */}
          <article className="p-10 rounded-sm bg-kips-red-600 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-kips-red-700 transition-colors">
            <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-4">
              MORE PROGRAMS
            </h3>
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white text-2xl font-black">+</span>
            </div>
          </article>
        </div>

        {/* AIOU Note from flyer */}
        <div className="mt-12 p-8 rounded-sm bg-white/5 border border-kips-yellow-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
             <span className="inline-block px-3 py-1 bg-kips-yellow-500 text-kips-navy-900 text-[0.65rem] font-black uppercase tracking-widest rounded-sm mb-2">
               Special Note
             </span>
             <h4 className="text-xl font-bold text-white uppercase tracking-tight">AIOU Preparation</h4>
          </div>
          <p className="text-xl lg:text-2xl font-bold text-white/90 text-center leading-relaxed font-body" dir="rtl">
            نوٹ: علامہ اقبال اوپن یونیورسٹی کی اسائنمنٹ اور ایگزیم کی تیاری رجسٹرڈ ٹیوٹرز کی زیر نگرانی
          </p>
        </div>
      </div>
    </section>
  );
}

