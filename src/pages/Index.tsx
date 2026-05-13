import Navbar from "@/components/Navbar"; // <-- Import the Navbar here
import HeroSection from "@/components/HeroSection";
import TabbedContent from "@/components/TabbedContent";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResourcesSection from "@/components/ResourcesSection";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden font-inter">
      {/* Background spotlights */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-emerald-950/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] rounded-full bg-emerald-950/15 blur-[120px] pointer-events-none" />

      {/* 1. Add the Navbar component at the very top */}
      <Navbar />

      {/* 2. Increased top padding (pt-24) so the fixed Navbar doesn't cover your Hero Section */}
      <div className="relative z-10 container pt-24 pb-12 px-4 space-y-20">

        <HeroSection />

        {/* 3. Wrap your sections in divs with matching 'id's so the Navbar knows where to scroll */}
        <div id="experience">
          <TabbedContent />
        </div>

        <div id="skills">
          <SkillsSection />
        </div>

        <div id="resources">
          <ResourcesSection />
        </div>

        <div id="contact">
          <ContactSection />
        </div>

        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Index;