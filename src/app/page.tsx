import Affiliations from "@/components/Affiliations";
import BranchNetwork from "@/components/BranchNetwork";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Affiliations />
        <BranchNetwork />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

