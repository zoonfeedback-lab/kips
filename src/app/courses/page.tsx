"use client";

import { useRouter } from "next/navigation";
import Programs from "@/components/Programs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function CoursesPage() {
  const router = useRouter();

  const handleEnrollClick = () => {
    router.push("/enroll");
  };

  return (
    <>
      <ScrollProgress />
      <BackToTop />
      <Navbar onEnrollClick={handleEnrollClick} />

      <main>
        {/* Page Hero Header */}
        <div className="bg-kips-navy-900 py-16 text-white text-center relative overflow-hidden font-body">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,185,32,0.1),transparent_40%)]" />
          <div className="container-custom relative z-10">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-kips-yellow-500">
              ACCREDITED CURRICULUMS
            </span>
            <h1 className="font-display text-3xl font-extrabold tracking-tight mt-2 sm:text-4xl">
              Professional Programs & Courses
            </h1>
            <p className="mt-3 text-xs text-white/70 max-w-lg mx-auto leading-relaxed">
              Explore our technical diplomas, IT certifications, teacher training, and safety courses verified by state boards.
            </p>
          </div>
        </div>

        {/* Programs section */}
        <Programs />
      </main>

      <Footer />
    </>
  );
}
