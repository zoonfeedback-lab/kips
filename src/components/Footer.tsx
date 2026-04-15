import styles from "./Footer.module.css";

const linkGroups = [
  {
    title: "Academic Links",
    items: ["Home", "About", "Abbottabad", "Programs", "Admissions", "Mansehra"],
  },
  {
    title: "Quick Links",
    items: ["Weekend Classes", "Nursery to FSC", "Safety Officer", "CIT & DIT", "B.ED & Montessori"],
  },
  {
    title: "Contact Information",
    items: [
      "Shah Maqsood Campus, Haripur, Pakistan",
      "0334-9267992",
      "k.13.10.13@gmail.com",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-kips-navy-900 border-t border-white/5 py-16 lg:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr,repeat(3,1fr)] gap-16 lg:gap-24 mb-20">
          <div className="flex flex-col">
            <h3 className="text-3xl font-black tracking-tighter text-white mb-1 font-display italic uppercase">
              KIPS <span className="text-kips-yellow-500">ACADEMY</span>
            </h3>
            <span className="text-[0.65rem] font-black text-white tracking-[0.3em] uppercase mb-8 opacity-60">
              Shah Maqsood Campus
            </span>
            <p className="text-[0.9rem] leading-relaxed max-w-xs text-white/40 font-medium italic">
              "Dedicated to empowering students through vocational training and academic
              excellence since its inception."
            </p>
            <div className="flex gap-3 mt-10">
              {["f", "in", "x"].map((icon) => (
                <span
                  key={icon}
                  className="grid place-items-center w-10 h-10 rounded-xl bg-kips-red-600 text-white text-sm font-black hover:bg-kips-red-700 hover:-translate-y-1 transition-all cursor-pointer shadow-lg shadow-kips-red-600/20"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title} className="flex flex-col">
              <h4 className="text-kips-yellow-500 text-[0.65rem] font-black uppercase tracking-[0.25em] mb-8">
                {group.title}
              </h4>
              <div className="flex flex-col gap-4">
                {group.items.map((item) => (
                  <p
                    key={item}
                    className="text-[0.85rem] text-white/50 hover:text-white transition-colors cursor-pointer font-medium"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-[0.7rem] font-bold text-white/20 uppercase tracking-widest">
          <p>© 2026 KIPS Academy. Built for Excellence.</p>
          <div className="flex gap-10">
            <a href="#contact" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


