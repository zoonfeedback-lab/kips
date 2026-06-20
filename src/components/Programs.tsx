"use client";

import { useState, useRef, useEffect } from "react";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";

type Program = {
  title: string;
  urduTitle: string;
  detail: string;
};

type Category = {
  name: string;
  icon: string;
  programs: Program[];
};

const categories: Category[] = [
  {
    name: "IT",
    icon: "💻",
    programs: [
      { title: "Computer AI Tools",  urduTitle: "کمپیوٹر AI ٹولز",   detail: "Hands-on AI productivity and workplace tools" },
      { title: "CIT",               urduTitle: "سی آئی ٹی",          detail: "Certificate in Information Technology" },
      { title: "DIT",               urduTitle: "ڈی آئی ٹی",          detail: "Diploma in Information Technology" },
      { title: "Graphic Designing", urduTitle: "گرافک ڈیزائننگ",    detail: "Creative design tools and digital media basics" },
    ],
  },
  {
    name: "Professional",
    icon: "🏅",
    programs: [
      { title: "Safety Officer",     urduTitle: "سیفٹی آفیسر",       detail: "OSHA, IOSH, and NEBOSH preparation pathway" },
      { title: "Montessori Diploma", urduTitle: "مونٹیسوری ڈپلومہ", detail: "Professional teacher preparation for early years" },
      { title: "English Language",   urduTitle: "انگلش لینگویج",    detail: "Spoken, written, and confidence-building practice" },
    ],
  },
  {
    name: "Academic",
    icon: "🎓",
    programs: [
      { title: "B.Ed (1.5 / 2.5 Years)", urduTitle: "بی ایڈ",               detail: "Teacher education pathway for aspiring educators" },
      { title: "ADA",                    urduTitle: "اے ڈی اے",              detail: "Associate Degree in Arts (old BA pathway)" },
      { title: "ADS",                    urduTitle: "اے ڈی ایس",             detail: "Associate Degree in Science (old BSc pathway)" },
      { title: "FA / FSc",               urduTitle: "ایف اے / ایف ایس سی",  detail: "Intermediate studies with guided academic support" },
    ],
  },
  {
    name: "Vocational",
    icon: "🪡",
    programs: [
      { title: "Dress Designing",      urduTitle: "ڈریس ڈیزائننگ",            detail: "Fashion, cutting, stitching, and tailoring skills" },
      { title: "Beautician",           urduTitle: "بیوٹیشن",                  detail: "Salon, skincare, and beauty services training" },
      { title: "Nursery to FSc Tuition", urduTitle: "نرسری تا ایف ایس سی ٹیوشن", detail: "Structured support classes for school and college learners" },
    ],
  },
  {
    name: "Psychology & Parenting",
    icon: "🧠",
    programs: [
      { title: "Educational Psychology", urduTitle: "تعلیمی نفسیات",  detail: "Professional guidance on learning theories, student behavior, and academic success." },
      { title: "Child Psychology",       urduTitle: "بچوں کی نفسیات", detail: "Understanding child development, mental health, and emotional well-being." },
      { title: "Parenting",              urduTitle: "پیرنٹنگ",         detail: "Effective parenting strategies, family dynamics, and raising healthy children." },
      { title: "Educational Issues",     urduTitle: "تعلیمی مسائل",   detail: "Identifying and resolving academic challenges and institutional issues." },
    ],
  },
  {
    name: "Dr. Mudassar Seminars",
    icon: "📋",
    programs: [
      { title: "Test Preparations",                       urduTitle: "ٹیسٹ کی تیاری",    detail: "Professional coaching for ETEA and NTS examinations" },
      { title: "Cadet College Test Prep & Interviews",   urduTitle: "کیریئر اور داخلے", detail: "Cadet College Preparations and Interview preparation guidance" },
      { title: "English Grammar",                         urduTitle: "انگلش گرامر",       detail: "Comprehensive English Grammar foundation for advanced learners" },
    ],
  },
];

const notes = [
  { label: "ADA / ADS Details",    text: "ADA and ADS are associate degree pathways aligned with the old BA and BSc structure, with guided preparation and academic support for examinations.", tone: "accent" },
  { label: "Psychology & Parenting", text: "Educational Psychology, Child Psychology, Parenting, and Educational Issues. Professional guidance and seminars led by Dr. Mudassar.", tone: "accent" },
  { label: "اردو نوٹ",             text: "نوٹ: اے ڈی اے، اے ڈی ایس، بی ایڈ، سی آئی ٹی، ڈی آئی ٹی، سیفٹی آفیسر، مونٹیسوری، انگلش لینگویج، ڈریس ڈیزائننگ، بیوٹیشن اور نرسری تا ایف ایس سی کلاسز میں داخلے جاری ہیں۔", tone: "light" },
  { label: "AIOU Special Notice",  text: "علامہ اقبال اوپن یونیورسٹی کی اسائنمنٹ اور امتحان کی تیاری رجسٹرڈ ٹیوٹرز کی زیر نگرانی کروائی جاتی ہے۔", tone: "light" },
];

export default function Programs() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const headerRef = useScrollAnimation<HTMLDivElement>();
  const tabsRef = useScrollAnimation<HTMLDivElement>({ rootMargin: "0px 0px -40px 0px" });
  const notesRef = useStaggerAnimation<HTMLDivElement>({ staggerMs: 100 });

  const filteredCategories =
    activeFilter === "All"
      ? categories
      : categories.filter((c) => c.name === activeFilter);

  return (
    <section id="programs" className="scroll-mt-24 bg-white py-24">
      <div className="container-custom">

        {/* Header */}
        <div ref={headerRef} className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-3 inline-block rounded-full bg-kips-navy-900/8 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-kips-navy-900">
              Categorized Programs
            </span>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-kips-text-900 lg:text-6xl">
              Our Programs
            </h2>
            <p className="mt-4 max-w-xl text-[0.92rem] leading-relaxed text-kips-text-700">
              From short certificates to full degree pathways — choose the program that fits your goals.
            </p>
          </div>
          <div className="hidden h-1 w-24 rounded-full bg-kips-yellow-500 lg:block lg:mb-2" />
        </div>

        {/* Filter Tabs */}
        <div ref={tabsRef} className="mb-12">
          <div className="flex flex-wrap gap-2 pb-1">
            {["All", ...categories.map((c) => c.name)].map((name) => (
              <button
                key={name}
                onClick={() => setActiveFilter(name)}
                className={`filter-tab ${
                  activeFilter === name ? "filter-tab-active" : "filter-tab-inactive"
                }`}
              >
                {name === "All" ? "All Programs" : `${categories.find(c => c.name === name)?.icon} ${name}`}
              </button>
            ))}
          </div>
          {/* Active filter underline indicator */}
          <div className="mt-3 h-px bg-gray-100" />
        </div>

        {/* Category Groups */}
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
              className={`rounded-2xl border p-6 transition-all duration-200 hover:shadow-md ${
                note.tone === "accent"
                  ? "border-kips-navy-900/10 bg-kips-navy-900/4"
                  : "border-kips-yellow-500/25 bg-kips-yellow-500/5"
              }`}
            >
              <span
                className={`mb-3 inline-block rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest ${
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

/* ── Extracted so each group gets its own stagger observer ── */
function CategoryGroup({ category }: { category: Category }) {
  const headerRef = useScrollAnimation<HTMLDivElement>();
  const cardsRef = useStaggerAnimation<HTMLDivElement>({ staggerMs: 70 });

  return (
    <div className="flex flex-col gap-5">
      <div ref={headerRef} className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-kips-navy-900 text-lg shadow-md">
          {category.icon}
        </div>
        <h3 className="font-display text-xl font-bold tracking-tight text-kips-text-900 lg:text-2xl">
          {category.name}
        </h3>
        <div className="h-px flex-grow bg-gray-100" />
      </div>

      <div ref={cardsRef} className="flex gap-5 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
        {category.programs.map((program) => (
          <article
            key={program.title}
            className="group relative flex min-w-[260px] max-w-[300px] flex-shrink-0 flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-kips-navy-900/10 lg:min-w-[280px] cursor-default"
          >
            <div className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full bg-kips-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h4 className="font-display text-base font-bold tracking-tight text-kips-text-900 transition-colors duration-200 group-hover:text-kips-navy-900">
              {program.title}
            </h4>
            <div className="font-body text-base font-semibold text-kips-text-400 transition-colors duration-200 group-hover:text-kips-navy-700" dir="rtl">
              {program.urduTitle}
            </div>
            <div className="h-px w-10 rounded-full bg-gray-200 transition-all duration-300 group-hover:w-full group-hover:bg-kips-yellow-500/40" />
            <p className="text-[0.82rem] leading-relaxed text-kips-text-400 transition-colors duration-200 group-hover:text-kips-text-700">
              {program.detail}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
