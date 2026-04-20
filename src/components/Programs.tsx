type Program = {
  title: string;
  urduTitle: string;
  detail: string;
};

type Category = {
  name: string;
  programs: Program[];
};

const categories: Category[] = [
  {
    name: "IT",
    programs: [
      {
        title: "Computer AI Tools",
        urduTitle: "کمپیوٹر AI ٹولز",
        detail: "Hands-on AI productivity and workplace tools",
      },
      {
        title: "CIT",
        urduTitle: "سی آئی ٹی",
        detail: "Certificate in Information Technology",
      },
      {
        title: "DIT",
        urduTitle: "ڈی آئی ٹی",
        detail: "Diploma in Information Technology",
      },
      {
        title: "Graphic Designing",
        urduTitle: "گرافک ڈیزائننگ",
        detail: "Creative design tools and digital media basics",
      },
    ],
  },
  {
    name: "Professional",
    programs: [
      {
        title: "Safety Officer",
        urduTitle: "سیفٹی آفیسر",
        detail: "OSHA, IOSH, and NEBOSH preparation pathway",
      },
      {
        title: "Montessori Diploma",
        urduTitle: "مونٹیسوری ڈپلومہ",
        detail: "Professional teacher preparation for early years",
      },
      {
        title: "English Language",
        urduTitle: "انگلش لینگویج",
        detail: "Spoken, written, and confidence-building practice",
      },
    ],
  },
  {
    name: "Academic",
    programs: [
      {
        title: "B.Ed (1.5 / 2.5 Years)",
        urduTitle: "بی ایڈ",
        detail: "Teacher education pathway for aspiring educators",
      },
      {
        title: "ADA",
        urduTitle: "اے ڈی اے",
        detail: "Associate Degree in Arts (old BA pathway)",
      },
      {
        title: "ADS",
        urduTitle: "اے ڈی ایس",
        detail: "Associate Degree in Science (old BSc pathway)",
      },
      {
        title: "FA / FSc",
        urduTitle: "ایف اے / ایف ایس سی",
        detail: "Intermediate studies with guided academic support",
      },
    ],
  },
  {
    name: "Vocational",
    programs: [
      {
        title: "Dress Designing",
        urduTitle: "ڈریس ڈیزائننگ",
        detail: "Fashion, cutting, stitching, and tailoring skills",
      },
      {
        title: "Beautician",
        urduTitle: "بیوٹیشن",
        detail: "Salon, skincare, and beauty services training",
      },
      {
        title: "Nursery to FSc Tuition",
        urduTitle: "نرسری تا ایف ایس سی ٹیوشن",
        detail: "Structured support classes for school and college learners",
      },
    ],
  },
  {
    name: "Dr. Mudassar Seminars (Education Psychologist)",
    programs: [
      {
        title: "Psychology & Parenting",
        urduTitle: "نفسیات اور پیرنٹنگ",
        detail: "Educational Psychology, Child Psychology, Parenting, and Educational Issues",
      },
      {
        title: "Test Preparations",
        urduTitle: "ٹیسٹ کی تیاری",
        detail: "Professional coaching for ETEA and NTS examinations",
      },
      {
        title: "Cadet College & Interviews",
        urduTitle: "کیریئر اور داخلے",
        detail: "Cadet College Preparations and Interview preparation guidance",
      },
      {
        title: "English Grammar",
        urduTitle: "انگلش گرامر",
        detail: "Comprehensive English Grammar foundation for advanced learners",
      },
    ],
  },
  {
    name: "Professor Khalid Seminars",
    programs: [
      {
        title: "Test Preparations",
        urduTitle: "ٹیسٹ کی تیاری",
        detail: "Professional coaching for CSS, PMS, and competitive examinations",
      },
    ],
  },
];

const notes = [
  {
    label: "ADA / ADS Details",
    text: "ADA and ADS are associate degree pathways aligned with the old BA and BSc structure, with guided preparation and academic support for examinations.",
    tone: "accent",
  },
  {
    label: "اردو نوٹ",
    text: "نوٹ: اے ڈی اے، اے ڈی ایس، بی ایڈ، سی آئی ٹی، ڈی آئی ٹی، سیفٹی آفیسر، مونٹیسوری، انگلش لینگویج، ڈریس ڈیزائننگ، بیوٹیشن اور نرسری تا ایف ایس سی کلاسز میں داخلے جاری ہیں۔",
    tone: "light",
  },
  {
    label: "AIOU Special Notice",
    text: "علامہ اقبال اوپن یونیورسٹی کی اسائنمنٹ اور امتحان کی تیاری رجسٹرڈ ٹیوٹرز کی زیر نگرانی کروائی جاتی ہے۔",
    tone: "light",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="scroll-mt-24 bg-kips-navy-900 py-24">
      <div className="container-custom">
        <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block text-[0.65rem] font-black uppercase tracking-[0.3em] text-kips-yellow-500">
              Categorized Programs
            </span>
            <h2 className="text-5xl font-bold uppercase tracking-tighter text-white lg:text-7xl">
              Our Programs
            </h2>
          </div>
          <div className="mb-4 hidden h-1 w-32 bg-kips-yellow-500 lg:block" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col gap-6">
              <h3 className="border-l-4 border-kips-yellow-500 pl-4 text-xl font-black uppercase tracking-widest text-kips-yellow-500">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {category.programs.map((program) => (
                  <article
                    key={program.title}
                    className="group rounded-sm border border-white/5 bg-white/5 p-6 transition-all duration-300 hover:border-kips-yellow-500/30"
                  >
                    <h4 className="mb-1 text-lg font-bold uppercase tracking-tight text-white transition-colors group-hover:text-kips-yellow-500">
                      {program.title}
                    </h4>
                    <div className="mb-3 text-lg font-bold text-white/40" dir="rtl">
                      {program.urduTitle}
                    </div>
                    <p className="text-sm leading-relaxed text-white/65">
                      {program.detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {notes.map((note) => (
            <div
              key={note.label}
              className={`rounded-sm border p-8 ${
                note.tone === "accent"
                  ? "border-kips-red-600/30 bg-kips-red-600/10"
                  : "border-kips-yellow-500/20 bg-white/5"
              }`}
            >
              <span
                className={`mb-4 inline-block rounded-sm px-3 py-1 text-[0.6rem] font-black uppercase tracking-widest ${
                  note.tone === "accent"
                    ? "bg-kips-red-600 text-white"
                    : "bg-kips-yellow-500 text-kips-navy-900"
                }`}
              >
                {note.label}
              </span>
              <p
                className={`text-lg font-bold leading-relaxed lg:text-xl ${
                  note.label === "اردو نوٹ" || note.label === "AIOU Special Notice"
                    ? "font-body text-white/90"
                    : "text-white"
                }`}
                dir={note.label === "اردو نوٹ" || note.label === "AIOU Special Notice" ? "rtl" : "ltr"}
              >
                {note.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
