import styles from "./Programs.module.css";

const programs = [
  {
    title: "Safety Officer",
    category: "NEBOSH, OSHA, IOSH",
    description:
      "International safety certifications for high-level professional careers.",
    featured: true,
    icon: "/icons/safety-officer.svg",
  },
  {
    title: "Computer Courses",
    category: "CIT, DIT, Graphic Designing",
    description:
      "Professional IT and design training with modern industry tools.",
    featured: true,
    icon: "/icons/graphic-design.svg",
  },
  {
    title: "Educational Courses",
    category: "BA, B.ED, Montessori",
    description: "Professional teacher training and academic degree support.",
    icon: "/icons/education.svg",
  },
  {
    title: "Tuition Classes",
    category: "Nursery to FSC",
    description:
      "Quality academic support for students from elementary to college levels.",
    icon: "/icons/tuition.svg",
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
              <div className="mb-10 text-4xl text-kips-yellow-500 group-hover:scale-110 transition-transform origin-left">
                {program.title === "Safety Officer" ? "👨‍🚒" : 
                 program.title === "Computer Courses" ? "💻" :
                 program.title === "Educational Courses" ? "🎓" : "📚"}
              </div>

              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
                {program.title.split(' ')[0]}
                {program.title.split(' ')[1] ? <span className="block text-kips-yellow-500">{program.title.split(' ')[1]}</span> : null}
              </h3>

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
      </div>
    </section>
  );
}

