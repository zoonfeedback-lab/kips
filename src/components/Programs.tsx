"use client";

import { useState } from "react";
import Link from "next/link";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { Icons } from "@/components/Icons";
import { coursesData, type Course } from "@/data/courses";

type Category = {
  name: string;
  iconName: string;
  color: string;
  programs: Course[];
};

// Get icon component dynamically from library
function getIcon(name: string, className: string = "h-4 w-4") {
  const IconComponent = Icons[name as keyof typeof Icons];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}

// Group data by category dynamically
const categoryList: { [key: string]: { icon: string; color: string } } = {
  "IT": { icon: "Monitor", color: "text-blue-600 bg-blue-50 border-blue-100" },
  "Professional": { icon: "Briefcase", color: "text-orange-600 bg-orange-50 border-orange-100" },
  "Academic": { icon: "GraduationCap", color: "text-indigo-600 bg-indigo-50 border-indigo-100" },
  "Vocational": { icon: "Scissors", color: "text-pink-600 bg-pink-50 border-pink-100" },
  "Psychology & Parenting": { icon: "Brain", color: "text-violet-600 bg-violet-50 border-violet-100" },
  "Dr. Mudassar Seminars": { icon: "Clipboard", color: "text-teal-600 bg-teal-50 border-teal-100" }
};

const categories: Category[] = Object.keys(categoryList).map((catName) => {
  const meta = categoryList[catName];
  return {
    name: catName,
    iconName: meta.icon,
    color: meta.color,
    programs: coursesData.filter((c) => c.category === catName)
  };
});

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
  program: Course;
  categoryColor: string;
}) {
  return (
    <Link
      href={`/courses/${program.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer"
    >
      {/* Course Image on Top */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <img
          src={program.image}
          alt={program.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5" />

        {/* Small icon overlay */}
        <div className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/95 text-kips-navy-900 shadow-sm backdrop-blur-xs">
          {getIcon(program.iconName, "h-4.5 w-4.5")}
        </div>
      </div>

      {/* Course Details */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[0.65rem] font-bold uppercase tracking-wider text-kips-navy-900">
            {program.category} Program
          </span>
          <span className="text-[0.65rem] font-medium text-kips-text-400">
            {program.duration}
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
          <span>View Course Details</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
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
          {getIcon(category.iconName, "h-4 w-4")}
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
