"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { Icons } from "@/components/Icons";
import { useCourses } from "@/hooks/useCourses";
import { type Course } from "@/data/courses";

// Helper to resolve icon dynamically
function getIcon(name: string, className: string = "h-5 w-5") {
  const IconComponent = Icons[name as keyof typeof Icons];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}

export default function CourseDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const { courses, loading } = useCourses();

  // Find course details
  const course = courses.find((c) => c.slug === slug);

  const handleEnrollClick = () => {
    if (course) {
      router.push(`/enroll?course=${encodeURIComponent(course.title)}`);
    } else {
      router.push("/enroll");
    }
  };

  if (loading) {
    return (
      <>
        <Navbar onEnrollClick={() => router.push("/enroll")} />
        <div className="container-custom py-32 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-kips-navy-900 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-kips-text-400">Loading course details...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!course) {
    return (
      <>
        <Navbar onEnrollClick={() => router.push("/enroll")} />
        <div className="container-custom py-32 text-center">
          <h1 className="font-display text-3xl font-extrabold text-kips-text-900">
            Course Not Found
          </h1>
          <p className="mt-4 text-sm text-kips-text-400">
            The course you are looking for does not exist or has been relocated.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-kips-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-kips-navy-800"
          >
            ← Back to Home
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <ScrollProgress />
      <BackToTop />
      
      {/* Navigation */}
      <Navbar onEnrollClick={handleEnrollClick} />

      <main className="bg-kips-light-50 min-h-screen pb-20">
        
        {/* Breadcrumb Bar */}
        <div className="bg-white border-b border-gray-250 py-4">
          <div className="container-custom flex flex-wrap items-center gap-2 text-xs font-semibold text-kips-text-400">
            <Link href="/" className="hover:text-kips-navy-900">
              Home
            </Link>
            <span>/</span>
            <Link href="/#programs" className="hover:text-kips-navy-900">
              Programs
            </Link>
            <span>/</span>
            <span className="text-kips-navy-900">{course.title}</span>
          </div>
        </div>

        {/* Course Header Banner */}
        <section className="relative overflow-hidden py-24 text-white">
          {/* Background image & dark gradient overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={course.image}
              alt={course.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-transparent" />
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-kips-yellow-500">
                {getIcon(course.iconName, "h-3.5 w-3.5 text-kips-yellow-500")}
                {course.category}
              </span>
              <h1 className="font-display mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                {course.title}
              </h1>
              <div className="mt-2 font-body text-xl font-semibold text-white/85" dir="rtl">
                {course.urduTitle}
              </div>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80">
                {course.detail}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <span>⏱️</span>
                  <span>Duration: <strong>{course.duration}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🎓</span>
                  <span>Affiliation: <strong>{course.certificate}</strong></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Page Content Layout */}
        <div className="container-custom mt-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.8fr_1fr]">
            
            {/* Left Content Side */}
            <div className="flex flex-col gap-8">
              
              {/* What You'll Learn */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-xs">
                <h3 className="font-display text-lg font-bold text-kips-text-900 mb-6">
                  What You'll Learn
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {course.learningOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="mt-0.5 text-emerald-600 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4.5 w-4.5">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-[0.84rem] text-kips-text-700 leading-relaxed">
                        {outcome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Syllabus */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-xs">
                <h3 className="font-display text-lg font-bold text-kips-text-900 mb-6">
                  Course Syllabus / Modules
                </h3>
                <div className="flex flex-col gap-4">
                  {course.syllabus.map((module, idx) => (
                    <div key={idx} className="flex gap-4 items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-kips-navy-900/5 text-kips-navy-900 font-bold text-sm">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-display text-sm font-bold text-kips-text-900">
                          {module}
                        </h4>
                        <p className="mt-1 text-xs text-kips-text-400">
                          Comprehensive training modules designed for active skill acquisition.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements & Prerequisites */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-xs">
                <h3 className="font-display text-lg font-bold text-kips-text-900 mb-4">
                  Requirements
                </h3>
                <ul className="list-disc pl-5 text-[0.84rem] text-kips-text-750 space-y-2">
                  <li>{course.prerequisites}</li>
                  <li>Passion for learning, commitment to classes, and basic study materials.</li>
                </ul>
              </div>

            </div>

            {/* Right Sticky Card */}
            <div>
              <div className="sticky top-28 flex flex-col gap-6">
                
                {/* Course Facts Card */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden rounded-lg mb-6 bg-gray-100">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <h3 className="font-display text-[0.98rem] font-bold text-kips-text-900 mb-4">
                    Course Features
                  </h3>

                  <div className="flex flex-col gap-3 text-xs border-b border-gray-100 pb-5 mb-5">
                    <div className="flex items-center justify-between">
                      <span className="text-kips-text-400 font-medium">Duration</span>
                      <span className="font-semibold text-kips-text-900">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-kips-text-400 font-medium">Accreditation</span>
                      <span className="font-semibold text-kips-text-900">{course.certificate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-kips-text-400 font-medium">Class Format</span>
                      <span className="font-semibold text-kips-text-900">Regular / Weekend / Online</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-kips-text-400 font-medium">Language</span>
                      <span className="font-semibold text-kips-text-900">English / Urdu</span>
                    </div>
                  </div>

                  {/* Campus Availability */}
                  <div className="mb-6">
                    <span className="block text-xs font-bold text-kips-text-900 uppercase tracking-wider mb-2">
                      Available Campuses:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {course.campuses.map((camp) => (
                        <span
                          key={camp}
                          className="rounded-md bg-kips-light-100 px-2 py-1 text-[0.65rem] font-bold text-kips-text-700 border border-gray-200"
                        >
                          {camp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleEnrollClick}
                    className="w-full text-center block rounded-lg bg-kips-yellow-500 py-3 text-sm font-bold text-kips-navy-900 shadow-sm transition-all hover:bg-kips-yellow-600 cursor-pointer"
                  >
                    Enroll in Course
                  </button>
                </div>

                {/* Back to Programs */}
                <Link
                  href="/#programs"
                  className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-3 text-xs font-bold text-kips-text-700 hover:bg-gray-50 hover:text-kips-navy-900 transition-all"
                >
                  ← Explore All Programs
                </Link>

              </div>
            </div>

          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
