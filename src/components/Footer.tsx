const linkGroups = [
  {
    title: "Explore",
    items: ["Home", "Programs", "Affiliations", "Branches"],
  },
  {
    title: "Programs",
    items: [
      "IT Programs",
      "Professional Courses",
      "Academic Pathways",
      "Vocational Training",
    ],
  },
  {
    title: "Contact Information",
    items: [
      "Shah Maqsood Campus, Haripur, Pakistan",
      "0314-4048842",
      "0301-9884455",
      "k.13.10.13@gmail.com",
    ],
  },
];

const regionLine =
  "Abbottabad | Haripur | Mansehra | Shinkiari | Baffa | Mirpur (AJK) | Garhi Habibullah";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-kips-navy-900 py-16 lg:py-24">
      <div className="container-custom">
        <div className="mb-20 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-[1.5fr,repeat(3,1fr)] lg:gap-24">
          <div className="flex flex-col">
            <div className="mb-6">
              <img
                src="/logos/main_logo.jpg"
                alt="Keyan Institute of Professional Studies footer logo"
                className="h-16 w-16 rounded-xl bg-white p-2 object-contain shadow-xl"
              />
            </div>
            <h3 className="font-display text-2xl font-black uppercase leading-none tracking-tight text-white">
              Keyan Institute of
              <span className="mt-1 block text-sm text-kips-yellow-500 lg:text-base">
                Professional Studies (KIPS)
              </span>
            </h3>
            <span className="mb-4 mt-3 text-[0.6rem] font-black uppercase tracking-[0.24em] text-white/40">
              {regionLine}
            </span>
            <p className="max-w-sm text-sm font-medium leading-relaxed text-white/60">
              A project of Mashal Technical Education System, helping students build
              strong academic, technical, and professional futures.
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title} className="flex flex-col">
              <h4 className="mb-8 text-[0.65rem] font-black uppercase tracking-[0.25em] text-kips-yellow-500">
                {group.title}
              </h4>
              <div className="flex flex-col gap-4">
                {group.items.map((item) => (
                  <p
                    key={item}
                    className="text-[0.85rem] font-medium text-white/60 transition-colors hover:text-white"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-12 text-[0.7rem] font-bold uppercase tracking-widest text-white/30 md:flex-row">
          <p>© 2026 Keyan Institute of Professional Studies. Built for growth.</p>
          <div className="flex gap-10">
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
            <a href="#programs" className="transition-colors hover:text-white">
              Programs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
