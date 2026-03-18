import HeroSection from "@/components/HeroSection";
import TabbedContent from "@/components/TabbedContent";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <TabbedContent />
      <ContactSection />
    </div>
  );
};

export default Index;
