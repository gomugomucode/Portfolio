import SEO from "@/components/SEO";
import ContactSection from "@/components/ContactSection";
import { siteConfig } from "@/lib/siteConfig";
import {
  getContactPageSchema,
  getFAQSchema,
  getBreadcrumbSchema,
  getWebPageSchema,
} from "@/lib/schema";

const contactFaqs = [
  {
    question: "How quickly does Anupam Baral respond to project enquiries?",
    answer: "Anupam typically responds to all client and project inquiries within 24 business hours.",
  },
  {
    question: "What contract engagement models are available?",
    answer: "Available for project-based milestones, hourly technical consulting, and dedicated full-stack / AI contract roles.",
  },
];

const Contact = () => {
  const url = `${siteConfig.url}/contact`;
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Contact", item: "/contact" },
  ];

  const schemas = [
    getContactPageSchema(url),
    getFAQSchema(contactFaqs),
    getBreadcrumbSchema(breadcrumbs),
    getWebPageSchema(
      "Hire Anupam Baral | Contact Full Stack & AI Developer Nepal",
      "Get in touch with Anupam Baral for freelance development work, Web3 Solana applications, AI software pipelines, or technical consultation.",
      url,
      breadcrumbs
    ),
  ];

  return (
    <div className="space-y-20">
      <SEO
        title="Hire Anupam Baral | Contact Full Stack & AI Developer Nepal"
        description="Get in touch with Anupam Baral for freelance development work, open-source collaborations, AI software pipelines, or full-time engineering roles."
        keywords="Hire Anupam Baral, Freelance Developer Nepal, Contact gomugomucode, React Developer Hire, Python AI Developer"
        canonicalUrl={url}
        schema={schemas}
      />
      <h1 className="sr-only">Contact Anupam Baral | Hire a Full Stack & AI Developer</h1>
      <div className="pt-8">
        <ContactSection />
      </div>
    </div>
  );
};

export default Contact;
