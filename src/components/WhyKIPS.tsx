"use client";

import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { Icons } from "@/components/Icons";

const classFormats = [
  {
    Icon: Icons.Building,
    title: "Regular Classes",
    urdu: "باقاعدہ کلاسز",
    desc: "Weekday sessions designed for focused, structured learning with qualified instructors.",
  },
  {
    Icon: Icons.Calendar,
    title: "Weekend Classes",
    urdu: "ویک اینڈ کلاسز",
    desc: "Saturday & Sunday batches ideal for working professionals and students with busy schedules.",
  },
  {
    Icon: Icons.Video,
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
  { Icon: Icons.ShieldCheck, title: "Safety Tools",     urdu: "سیفٹی ٹولز",        color: "text-blue-600 bg-blue-50/50 border-blue-100" },
  { Icon: Icons.Wrench,      title: "AT-Skills",        urdu: "اے ٹی اسکلز",        color: "text-gray-700 bg-gray-50 border-gray-200"       },
  { Icon: Icons.HeartPulse,  title: "First Aid",        urdu: "ابتدائی طبی امداد", color: "text-red-600 bg-red-50/50 border-red-100"           },
  { Icon: Icons.BookOpen,    title: "English Language", urdu: "انگلش لینگویج",      color: "text-blue-600 bg-blue-50/50 border-blue-100"        },
  { Icon: Icons.PenLine,     title: "Writing Skills",   urdu: "تحریری مہارت",       color: "text-indigo-600 bg-indigo-50/50 border-indigo-100"  },
  { Icon: Icons.Car,         title: "Driving Skills",   urdu: "ڈرائیونگ اسکلز",    color: "text-teal-600 bg-teal-50/50 border-teal-100"        },
  { Icon: Icons.Moon,        title: "تفسیر قرآن",       urdu: "تفسیر قرآن",         color: "text-emerald-600 bg-emerald-50/50 border-emerald-100" },
];

export default function WhyKIPS() {
  const headerRef   = useScrollAnimation<HTMLDivElement>();
  const durationRef = useStaggerAnimation<HTMLDivElement>({ staggerMs: 80 });
  const formatsRef  = useStaggerAnimation<HTMLDivElement>({ staggerMs: 100 });
  const skillsRef   = useStaggerAnimation<HTMLDivElement>({ staggerMs: 50 });
  const badgesRef   = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="why-kips" className="scroll-mt-20 bg-kips-light-50 py-20">
      <div className="container-custom">

        {/* Header */}
        <div ref={headerRef} className="mb-12 text-center">
          <span className="section-label">FLEXIBLE EDUCATION</span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-kips-text-900 lg:text-4xl">
            Why Choose Keyan Institute
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-kips-text-400">
            We provide structured learning formats, flexible durations, and practical skill courses tailored to your schedule.
          </p>
        </div>

        {/* Duration Badges */}
        <div ref={durationRef} className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <span className="text-xs font-bold uppercase tracking-wider text-kips-text-400">
            Program Durations:
          </span>
          {durations.map((d) => (
            <div
              key={d.label}
              className={`flex flex-col items-center rounded-xl px-6 py-3 border transition-all duration-200 ${
                d.highlight
                  ? "bg-kips-navy-900 border-kips-navy-900 text-white shadow-sm"
                  : "bg-white border-gray-200 text-kips-text-900"
              }`}
            >
              <span className="font-display text-base font-bold leading-none">{d.label}</span>
              <span
                className={`mt-1 text-xs font-semibold ${d.highlight ? "text-white/70" : "text-kips-text-400"}`}
                dir="rtl"
              >
                {d.urdu}
              </span>
            </div>
          ))}
        </div>

        {/* Class Formats */}
        <div ref={formatsRef} className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {classFormats.map((format) => (
            <article
              key={format.title}
              className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-kips-navy-900/5 text-kips-navy-900">
                <format.Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-kips-text-900">
                  {format.title}
                </h3>
                <div className="mt-0.5 font-body text-xs font-semibold text-kips-navy-700" dir="rtl">
                  {format.urdu}
                </div>
              </div>
              <p className="text-[0.82rem] leading-relaxed text-kips-text-400">
                {format.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Skill Courses */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <h3 className="font-display text-lg font-bold text-kips-text-900">
              Short Skill Courses
            </h3>
            <div className="h-px flex-grow bg-gray-200" />
          </div>

          <div ref={skillsRef} className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {skillCourses.map((course) => (
              <article
                key={course.title}
                className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs ${course.color}`}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-xs">
                  <course.Icon className="h-4.5 w-4.5" />
                </div>
                <span className="text-[0.72rem] font-bold uppercase tracking-tight leading-tight text-kips-text-900">
                  {course.title}
                </span>
                {course.urdu !== course.title && (
                  <span className="text-[0.62rem] font-body text-kips-text-400" dir="rtl">
                    {course.urdu}
                  </span>
                )}
              </article>
            ))}
          </div>

          {/* Badges */}
          <div ref={badgesRef} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-xs">
              <Icons.ShieldCheck className="h-4 w-4 text-kips-navy-900" />
              <span className="text-[0.72rem] font-bold uppercase tracking-wider text-kips-navy-900">
                Validated 2-Year Programs Available
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-xs">
              <Icons.Award className="h-4 w-4 text-kips-yellow-600" />
              <span className="text-[0.72rem] font-bold uppercase tracking-wider text-kips-text-700">
                Board-Certified Qualifications
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
