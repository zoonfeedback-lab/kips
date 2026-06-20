"use client";

import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";

const classFormats = [
  {
    icon: "🏫",
    title: "Regular Classes",
    urdu: "باقاعدہ کلاسز",
    desc: "Weekday sessions designed for focused, structured learning with qualified instructors.",
  },
  {
    icon: "📅",
    title: "Weekend Classes",
    urdu: "ویک اینڈ کلاسز",
    desc: "Saturday & Sunday batches ideal for working professionals and students with busy schedules.",
  },
  {
    icon: "💻",
    title: "Online Classes",
    urdu: "آن لائن کلاسز",
    desc: "Live virtual sessions via Zoom for learners across Pakistan and abroad.",
  },
];

const durations = [
  { label: "3 Months", urdu: "3 ماہ",  highlight: false },
  { label: "6 Months", urdu: "6 ماہ",  highlight: true  },
  { label: "1 Year",   urdu: "1 سال",  highlight: false },
];

const skillCourses = [
  { title: "Safety Tools",    urdu: "سیفٹی ٹولز",         icon: "🦺" },
  { title: "AT-Skills",       urdu: "اے ٹی اسکلز",         icon: "🔧" },
  { title: "First Aid",       urdu: "ابتدائی طبی امداد",  icon: "🩺" },
  { title: "English Language",urdu: "انگلش لینگویج",       icon: "📖" },
  { title: "Writing Skills",  urdu: "تحریری مہارت",        icon: "✍️" },
  { title: "Driving Skills",  urdu: "ڈرائیونگ اسکلز",      icon: "🚗" },
  { title: "تفسیر قرآن",     urdu: "تفسیر قرآن",           icon: "📿" },
];

export default function WhyKIPS() {
  const headerRef   = useScrollAnimation<HTMLDivElement>();
  const durationRef = useStaggerAnimation<HTMLDivElement>({ staggerMs: 100 });
  const formatsRef  = useStaggerAnimation<HTMLDivElement>({ staggerMs: 120 });
  const skillsRef   = useStaggerAnimation<HTMLDivElement>({ staggerMs: 55 });
  const badgesRef   = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="why-kips" className="scroll-mt-24 bg-kips-light-50 py-24">
      <div className="container-custom">

        {/* Header */}
        <div ref={headerRef} className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full bg-kips-navy-900/8 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-kips-navy-900">
            All In One Training
          </span>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-kips-text-900 lg:text-6xl">
            Why Choose <span className="text-kips-navy-900">KIPS</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[0.92rem] leading-relaxed text-kips-text-700">
            From short skill courses to full academic programs — flexible learning pathways for every stage of life.
          </p>
        </div>

        {/* Duration Badges */}
        <div ref={durationRef} className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-kips-text-400">
            Course Duration:
          </span>
          {durations.map((d) => (
            <div
              key={d.label}
              className={`flex flex-col items-center rounded-2xl px-8 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default ${
                d.highlight
                  ? "bg-kips-navy-900 text-white shadow-kips-navy-900/20"
                  : "bg-white border border-gray-100 text-kips-text-900"
              }`}
            >
              <span className="font-display text-xl font-extrabold leading-none">{d.label}</span>
              <span className={`mt-1 text-xs font-semibold ${d.highlight ? "text-white/60" : "text-kips-text-400"}`} dir="rtl">
                {d.urdu}
              </span>
            </div>
          ))}
        </div>

        {/* Class Formats */}
        <div ref={formatsRef} className="mb-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {classFormats.map((format) => (
            <article
              key={format.title}
              className="group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-kips-navy-900/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-kips-yellow-500/12 text-3xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {format.icon}
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-kips-text-900 transition-colors group-hover:text-kips-navy-900">
                  {format.title}
                </h3>
                <div className="mt-0.5 font-body text-sm font-semibold text-kips-text-400" dir="rtl">
                  {format.urdu}
                </div>
              </div>
              <div className="h-px w-10 rounded-full bg-gray-200 transition-all duration-300 group-hover:w-full group-hover:bg-kips-yellow-500/40" />
              <p className="text-sm leading-relaxed text-kips-text-400 group-hover:text-kips-text-700 transition-colors">
                {format.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Skill Courses */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="h-7 w-1.5 rounded-full bg-kips-red-600" />
            <h3 className="font-display text-xl font-bold text-kips-text-900 lg:text-2xl">Skill Courses</h3>
            <div className="h-px flex-grow bg-gray-200" />
          </div>

          <div ref={skillsRef} className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
            {skillCourses.map((course) => (
              <article
                key={course.title}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-kips-navy-900/10 cursor-default"
              >
                <span className="text-3xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
                  {course.icon}
                </span>
                <span className="text-[0.72rem] font-bold uppercase tracking-tight text-kips-text-900 group-hover:text-kips-navy-900 transition-colors">
                  {course.title}
                </span>
                {course.urdu !== course.title && (
                  <span className="text-[0.68rem] font-body text-kips-text-400" dir="rtl">
                    {course.urdu}
                  </span>
                )}
              </article>
            ))}
          </div>

          <div ref={badgesRef} className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-kips-navy-900/15 bg-kips-navy-900/5 px-5 py-2.5">
              <span className="text-base">✅</span>
              <span className="text-xs font-bold uppercase tracking-wider text-kips-navy-900">
                Validated 2-Year Programs Available
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm">
              <span className="text-base">🏆</span>
              <span className="text-xs font-bold uppercase tracking-wider text-kips-text-700">
                Board-Certified Qualifications
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
