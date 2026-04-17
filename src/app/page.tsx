"use client";

import { useState } from "react";
import Affiliations from "@/components/Affiliations";
import BranchNetwork from "@/components/BranchNetwork";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import EnrollmentModal from "@/components/EnrollmentModal";

export default function Home() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const openEnrollModal = () => setIsEnrollModalOpen(true);
  const closeEnrollModal = () => setIsEnrollModalOpen(false);

  return (
    <>
      <Navbar onEnrollClick={openEnrollModal} />
      <main>
        <Hero onEnrollClick={openEnrollModal} />
        <Programs />
        <Affiliations />
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

