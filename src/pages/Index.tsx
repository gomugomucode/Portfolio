import HeroSection from "@/components/HeroSection";
import TabbedContent from "@/components/TabbedContent";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <TabbedContent />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
