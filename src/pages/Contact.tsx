import SEO from "@/components/SEO";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="space-y-20">
      <SEO 
        title="Hire Annupam Baral | Freelance Developer Nepal"
        description="Get in touch with Annupam Baral for freelance development work, open-source collaborations, or full-time opportunities."
        keywords="Hire Annupam Baral, Freelance Developer Nepal, Contact gomugomucode"
        canonicalUrl="https://anupambaral.com.np/contact"
      />
      <div className="pt-8">
        <ContactSection />
      </div>
    </div>
  );
};

export default Contact;
