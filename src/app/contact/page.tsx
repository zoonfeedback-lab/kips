"use client";

import { useRouter } from "next/navigation";
import ContactCTA from "@/components/ContactCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function ContactPage() {
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
        {/* Full Page Contact Form & Direct Helplines */}
        <ContactCTA onEnrollClick={handleEnrollClick} fullPage={true} />
      </main>

      <Footer />
    </>
  );
}
