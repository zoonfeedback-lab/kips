"use client";

import { useState, type ReactNode } from "react";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { Icons } from "@/components/Icons";

type Program = {
  title: string;
  urduTitle: string;
  detail: string;
  image: string;
  icon: ReactNode;
};

type Category = {
  name: string;
  icon: ReactNode;
  color: string;
  programs: Program[];
};

const categories: Category[] = [
  {
    name: "IT",
    icon: <Icons.Monitor className="h-4 w-4" />,
    color: "text-blue-600 bg-blue-50 border-blue-100",
    programs: [
      {
        title: "Computer AI Tools",
        urduTitle: "کمپیوٹر AI ٹولز",
        detail: "Hands-on AI productivity and workplace tools",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
        icon: <Icons.Cpu className="h-4 w-4" />,
      },
      {
        title: "CIT",
        urduTitle: "سی آئی ٹی",
        detail: "Certificate in Information Technology",
        image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
        icon: <Icons.Code className="h-4 w-4" />,
      },
      {
        title: "DIT",
        urduTitle: "ڈی آئی ٹی",
        detail: "Diploma in Information Technology",
        image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
        icon: <Icons.Monitor className="h-4 w-4" />,
      },
      {
        title: "Graphic Designing",
        urduTitle: "گرافک ڈیزائننگ",
        detail: "Creative design tools and digital media basics",
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
        icon: <Icons.PenTool className="h-4 w-4" />,
      },
    ],
  },
  {
    name: "Professional",
    icon: <Icons.Briefcase className="h-4 w-4" />,
    color: "text-orange-600 bg-orange-50 border-orange-100",
    programs: [
      {
        title: "Safety Officer",
        urduTitle: "سیفٹی آفیسر",
        detail: "OSHA, IOSH, and NEBOSH preparation pathway",
        image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
        icon: <Icons.ShieldCheck className="h-4 w-4" />,
      },
      {
        title: "Montessori Diploma",
        urduTitle: "مونٹیسوری ڈپلومہ",
        detail: "Professional teacher preparation for early years",
        image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800",
        icon: <Icons.Star className="h-4 w-4" />,
      },
      {
        title: "English Language",
        urduTitle: "انگلش لینگویج",
        detail: "Spoken, written, and confidence-building practice",
        image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800",
        icon: <Icons.MessageCircle className="h-4 w-4" />,
      },
    ],
  },
  {
    name: "Academic",
    icon: <Icons.GraduationCap className="h-4 w-4" />,
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    programs: [
      {
        title: "B.Ed (1.5 / 2.5 Years)",
        urduTitle: "بی ایڈ",
        detail: "Teacher education pathway for aspiring educators",
        image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
        icon: <Icons.UserCheck className="h-4 w-4" />,
      },
      {
        title: "ADA",
        urduTitle: "اے ڈی اے",
        detail: "Associate Degree in Arts (old BA pathway)",
        image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
        icon: <Icons.BookOpen className="h-4 w-4" />,
      },
      {
        title: "ADS",
        urduTitle: "اے ڈی ایس",
        detail: "Associate Degree in Science (old BSc pathway)",
        image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800",
        icon: <Icons.Flask className="h-4 w-4" />,
      },
      {
        title: "FA / FSc",
        urduTitle: "ایف اے / ایف ایس سی",
        detail: "Intermediate studies with guided academic support",
        image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=800",
        icon: <Icons.Book className="h-4 w-4" />,
      },
    ],
  },
  {
    name: "Vocational",
    icon: <Icons.Scissors className="h-4 w-4" />,
    color: "text-pink-600 bg-pink-50 border-pink-100",
    programs: [
      {
        title: "Dress Designing",
        urduTitle: "ڈریس ڈیزائننگ",
        detail: "Fashion, cutting, stitching, and tailoring skills",
        image: "https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=800",
        icon: <Icons.Scissors className="h-4 w-4" />,
      },
      {
        title: "Beautician",
        urduTitle: "بیوٹیشن",
        detail: "Salon, skincare, and beauty services training",
        image: "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=800",
        icon: <Icons.Sparkles className="h-4 w-4" />,
      },
      {
        title: "Nursery to FSc Tuition",
        urduTitle: "نرسری تا ایف ایس سی ٹیوشن",
        detail: "Structured support classes for school and college learners",
        image: "https://images.pexels.com/photos/5905540/pexels-photo-5905540.jpeg?auto=compress&cs=tinysrgb&w=800",
        icon: <Icons.PresentationChart className="h-4 w-4" />,
      },
    ],
  },
  {
    name: "Psychology & Parenting",
    icon: <Icons.Brain className="h-4 w-4" />,
    color: "text-violet-600 bg-violet-50 border-violet-100",
    programs: [
      {
        title: "Educational Psychology",
        urduTitle: "تعلیمی نفسیات",
        detail: "Professional guidance on learning theories, student behavior, and academic success.",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        icon: <Icons.Brain className="h-4 w-4" />,
      },
      {
        title: "Child Psychology",
        urduTitle: "بچوں کی نفسیات",
        detail: "Understanding child development, mental health, and emotional well-being.",
        image: "https://images.pexels.com/photos/1648387/pexels-photo-1648387.jpeg?auto=compress&cs=tinysrgb&w=800",
        icon: <Icons.Heart className="h-4 w-4" />,
      },
      {
        title: "Parenting",
        urduTitle: "پیرنٹنگ",
        detail: "Effective parenting strategies, family dynamics, and raising healthy children.",
        image: "https://images.pexels.com/photos/1620780/pexels-photo-1620780.jpeg?auto=compress&cs=tinysrgb&w=800",
        icon: <Icons.Users className="h-4 w-4" />,
      },
      {
        title: "Educational Issues",
        urduTitle: "تعلیمی مسائل",
        detail: "Identifying and resolving academic challenges and institutional issues.",
        image: "https://images.pexels.com/photos/5905555/pexels-photo-5905555.jpeg?auto=compress&cs=tinysrgb&w=800",
        icon: <Icons.AlertCircle className="h-4 w-4" />,
      },
    ],
  },
  {
    name: "Dr. Mudassar Seminars",
    icon: <Icons.Clipboard className="h-4 w-4" />,
    color: "text-teal-600 bg-teal-50 border-teal-100",
    programs: [
      {
        title: "Test Preparations",
        urduTitle: "ٹیسٹ کی تیاری",
        detail: "Professional coaching for ETEA and NTS examinations",
        image: "https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&w=800",
        icon: <Icons.FileText className="h-4 w-4" />,
      },
      {
        title: "Cadet College Test Prep & Interviews",
        urduTitle: "کیریئر اور داخلے",
        detail: "Cadet College Preparations and Interview preparation guidance",
        image: "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=800",
        icon: <Icons.Award className="h-4 w-4" />,
      },
      {
        title: "English Grammar",
        urduTitle: "انگلش گرامر",
        detail: "Comprehensive English Grammar foundation for advanced learners",
        image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=800",
        icon: <Icons.Type className="h-4 w-4" />,
      },
    ],
  },
];

const notes = [
  { label: "ADA / ADS Details",    text: "ADA and ADS are associate degree pathways aligned with the old BA and BSc structure, with guided preparation and academic support for examinations.", tone: "accent" },
  { label: "Psychology & Parenting", text: "Educational Psychology, Child Psychology, Parenting, and Educational Issues. Professional guidance and seminars led by Dr. Mudassar.", tone: "accent" },
  { label: "اردو نوٹ",             text: "نوٹ: اے ڈی اے، اے ڈی ایس، بی ایڈ، سی آئی ٹی، ڈی آئی ٹی، سیفٹی آفیسر، مونٹیسوری، انگلش لینگویج، ڈریس ڈیزائننگ، بیوٹیشن اور نرسری تا ایف ایس سی کلاسز میں داخلے جاری ہیں۔", tone: "light" },
  { label: "AIOU Special Notice",  text: "علامہ اقبال اوپن یونیورسٹی کی اسائنمنٹ اور امتحان کی تیاری رجسٹرڈ ٹیوٹرز کی زیر نگرانی کروائی جاتی ہے۔", tone: "light" },
];

/* ── Coursera / edX style Program Card ── */
function ProgramCard({
  program,
  categoryColor,
}: {
  program: Program;
  categoryColor: string;
}) {
  return (
    <article
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      {/* Course Image on Top */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <img
          src={program.image}
          alt={program.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle overlay for contrast */}
        <div className="absolute inset-0 bg-black/5" />

        {/* Small icon overlay */}
        <div className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/95 text-kips-navy-900 shadow-sm backdrop-blur-xs">
          {program.icon}
        </div>
      </div>

      {/* Course Details */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[0.65rem] font-bold uppercase tracking-wider text-kips-navy-900">
            Professional Program
          </span>
          <span className="text-[0.65rem] font-medium text-kips-text-400">
            Certificate
          </span>
        </div>

        <h4 className="mt-2 font-display text-base font-bold tracking-tight text-kips-text-900 transition-colors group-hover:text-kips-navy-900">
          {program.title}
        </h4>

        {/* Urdu title styled elegantly */}
        <div className="mt-1 font-body text-sm font-semibold text-kips-navy-700" dir="rtl">
          {program.urduTitle}
        </div>

        <p className="mt-3 text-[0.8rem] leading-relaxed text-kips-text-400 flex-1 line-clamp-2">
          {program.detail}
        </p>

        {/* Action link */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-[0.78rem] font-bold text-kips-navy-900">
          <span>Learn more</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </article>
  );
}

/* ── Category Section ── */
function CategoryGroup({ category }: { category: Category }) {
  const headerRef = useScrollAnimation<HTMLDivElement>();
  const gridRef   = useStaggerAnimation<HTMLDivElement>({ staggerMs: 60 });

  return (
    <div className="flex flex-col gap-6">
      {/* Category header */}
      <div ref={headerRef} className="flex items-center gap-3">
        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${category.color} font-semibold shadow-xs`}>
          {category.icon}
        </div>
        <h3 className="font-display text-lg font-bold tracking-tight text-kips-text-900">
          {category.name} Programs
        </h3>
        <div className="h-px flex-grow bg-gray-100" />
        <span className="text-xs font-semibold text-kips-text-400">
          {category.programs.length} Courses
        </span>
      </div>

      {/* Cards Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {category.programs.map((program) => (
          <ProgramCard
            key={program.title}
            program={program}
            categoryColor={category.color}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Main Programs Section ── */
export default function Programs() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const headerRef = useScrollAnimation<HTMLDivElement>();
  const tabsRef   = useScrollAnimation<HTMLDivElement>({ rootMargin: "0px 0px -40px 0px" });
  const notesRef  = useStaggerAnimation<HTMLDivElement>({ staggerMs: 100 });

  const filteredCategories =
    activeFilter === "All"
      ? categories
      : categories.filter((c) => c.name === activeFilter);

  return (
    <section id="programs" className="scroll-mt-20 bg-white py-20">
      <div className="container-custom">

        {/* Header */}
        <div ref={headerRef} className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="section-label">OUR CURRICULUM</span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-kips-text-900 lg:text-4xl">
              Explore Our Programs
            </h2>
            <p className="mt-3 text-sm text-kips-text-400">
              Browse professional certifications, diplomas, and academic prep pathways designed for career success.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div ref={tabsRef} className="mb-10">
          <div className="flex flex-wrap gap-1 pb-1">
            {["All", ...categories.map((c) => c.name)].map((name) => (
              <button
                key={name}
                onClick={() => setActiveFilter(name)}
                className={`filter-tab ${
                  activeFilter === name ? "filter-tab-active" : "filter-tab-inactive"
                }`}
              >
                {name === "All" ? "All Programs" : name}
              </button>
            ))}
          </div>
          <div className="mt-3 h-px bg-gray-100" />
        </div>

        {/* Category groups */}
        <div className="flex flex-col gap-14">
          {filteredCategories.map((category) => (
            <CategoryGroup key={category.name} category={category} />
          ))}
        </div>

        {/* Notes */}
        <div ref={notesRef} className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {notes.map((note) => (
            <div
              key={note.label}
              className={`rounded-xl border p-6 transition-all duration-200 hover:shadow-xs ${
                note.tone === "accent"
                  ? "border-kips-navy-900/10 bg-kips-navy-900/4"
                  : "border-kips-yellow-500/20 bg-kips-yellow-500/5"
              }`}
            >
              <span
                className={`mb-3 inline-block rounded-md px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider ${
                  note.tone === "accent"
                    ? "bg-kips-navy-900 text-white"
                    : "bg-kips-yellow-500 text-kips-navy-900"
                }`}
              >
                {note.label}
              </span>
              <p
                className={`text-sm font-medium leading-relaxed ${
                  note.label === "اردو نوٹ" || note.label === "AIOU Special Notice"
                    ? "font-body text-kips-text-700"
                    : "text-kips-text-900"
                }`}
                dir={
                  note.label === "اردو نوٹ" || note.label === "AIOU Special Notice"
                    ? "rtl"
                    : "ltr"
                }
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
