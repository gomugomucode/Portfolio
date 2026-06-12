import SEO from "@/components/SEO";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="space-y-20">
      <SEO
        title="Hire Anupam Baral | Freelance Developer Nepal"
        description="Get in touch with Anupam Baral for freelance development work, open-source collaborations, or full-time opportunities."
        keywords="Hire Anupam Baral, Freelance Developer Nepal, Contact gomugomucode"
        canonicalUrl="https://anupambaral.com.np/contact"
      />
      <h1 className="sr-only">Contact Anupam Baral | Hire a Freelance Developer</h1>
      <div className="pt-8">
        <ContactSection />
      </div>
    </div>
  );
};

export default Contact;
