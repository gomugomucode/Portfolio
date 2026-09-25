import SEO from "@/components/SEO";
import ContactSection from "@/components/ContactSection";
import { siteConfig } from "@/lib/siteConfig";
import {
  getContactPageSchema,
  getBreadcrumbSchema,
} from "@/lib/schema";

const Contact = () => {
  const url = `${siteConfig.url}/contact`;
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Contact", item: "/contact" },
  ];

  const schemas = [
    getContactPageSchema(url),
    getBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <div className="space-y-20">
      <SEO
        title="Contact — Anupam Baral (@gomugomucode)"
        description="Get in touch with Anupam Baral (@gomugomucode) for freelance development work, open-source collaborations, AI software pipelines, or engineering roles."
        canonicalUrl={url}
        schema={schemas}
      />
      <div className="pt-8">
        <ContactSection />
      </div>
    </div>
  );
};

export default Contact;
