"use client";

import { useState } from "react";
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
import EnrollmentModal from "@/components/EnrollmentModal";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const openEnrollModal = () => setIsEnrollModalOpen(true);
  const closeEnrollModal = () => setIsEnrollModalOpen(false);

  return (
    <>
      {/* Fixed UI chrome */}
      <ScrollProgress />
      <BackToTop />

      <Navbar onEnrollClick={openEnrollModal} />
      <main>
        <Hero onEnrollClick={openEnrollModal} />
        <StatsBar />
        <About />
        <Programs />
        <WhyKIPS />
        <Affiliations />
        <Reviews />
        <BranchNetwork />
        <ContactCTA onEnrollClick={openEnrollModal} />
      </main>
      <Footer />

      <EnrollmentModal
        isOpen={isEnrollModalOpen}
        onClose={closeEnrollModal}
      />
    </>
  );
}
