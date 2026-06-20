const linkGroups = [
  {
    title: "Explore",
    items: ["Home", "Programs", "Why KIPS", "Affiliations", "Branches"],
    hrefs: ["#home", "#programs", "#why-kips", "#affiliations", "#branches"],
  },
  {
    title: "Programs",
    items: [
      "IT Programs",
      "Professional Courses",
      "Academic Pathways",
      "Vocational Training",
    ],
    hrefs: ["#programs", "#programs", "#programs", "#programs"],
  },
  {
    title: "Contact Information",
    items: [
      "Shah Maqsood Campus, Haripur, Pakistan",
      "0314-4048842",
      "0301-9884455",
      "k.13.10.13@gmail.com",
    ],
    hrefs: ["#branches", "tel:+923144048842", "tel:+923019884455", "mailto:k.13.10.13@gmail.com"],
  },
];

const regionLine =
  "Abbottabad | Haripur | Mansehra | Shinkiari | Baffa | Mirpur (AJK) | Garhi Habibullah";

export default function Footer() {
  return (
    <footer className="w-full bg-kips-navy-900 py-16 lg:py-20">
      <div className="container-custom">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr,repeat(3,1fr)] lg:gap-16">
          {/* Brand col */}
          <div className="flex flex-col gap-5">
            <img
              src="/logo.PNG"
              alt="KIPS Footer Logo"
              className="h-14 w-auto object-contain transition-opacity hover:opacity-80"
            />
            <div>
              <h3 className="font-display text-xl font-extrabold uppercase leading-tight tracking-tight text-white">
                Keyan Institute of
                <span className="mt-1 block text-sm font-semibold text-kips-yellow-500 normal-case tracking-normal">
                  Professional Studies (KIPS)
                </span>
              </h3>
            </div>
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-white/35">
              {regionLine}
            </span>
            <p className="max-w-xs text-sm font-medium leading-relaxed text-white/50">
              A project of Mashal Technical Education System, helping students
              build strong academic, technical, and professional futures.
            </p>
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-6">
              <h4 className="text-[0.62rem] font-extrabold uppercase tracking-[0.28em] text-kips-yellow-500">
                {group.title}
              </h4>
              <div className="flex flex-col gap-3">
                {group.items.map((item, i) => (
                  <a
                    key={item}
                    href={group.hrefs[i]}
                    className="text-[0.84rem] font-medium text-white/50 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/8 pt-10 md:flex-row">
          <p className="text-[0.68rem] font-semibold uppercase tracking-widest text-white/25">
            © 2026 Keyan Institute of Professional Studies. Built for growth.
          </p>
          <div className="flex gap-8">
            <a href="#contact" className="text-[0.68rem] font-semibold uppercase tracking-widest text-white/25 transition-colors hover:text-white">
              Contact
            </a>
            <a href="#programs" className="text-[0.68rem] font-semibold uppercase tracking-widest text-white/25 transition-colors hover:text-white">
              Programs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
