"use client";

import { useRouter } from "next/navigation";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Affiliations from "@/components/Affiliations";
import WhyKIPS from "@/components/WhyKIPS";
import BranchNetwork from "@/components/BranchNetwork";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import StatsBar from "@/components/StatsBar";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  const router = useRouter();

  const handleEnrollClick = () => {
    router.push("/enroll");
  };

  return (
    <>
      {/* Fixed UI chrome */}
      <ScrollProgress />
      <BackToTop />

      <Navbar onEnrollClick={handleEnrollClick} />
      <main>
        <Hero onEnrollClick={handleEnrollClick} />
        <StatsBar />
        <About limitAbout={true} />
        <Programs limitCourses={true} />
        <WhyKIPS />
        <Affiliations />
        <Reviews />
        <BranchNetwork />
        <ContactCTA onEnrollClick={handleEnrollClick} />
      </main>
      <Footer />
    </>
  );
}
