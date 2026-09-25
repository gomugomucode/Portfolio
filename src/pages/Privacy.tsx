import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 pt-32 pb-16">
      <SEO
        title="Privacy Policy — Anupam Baral (@gomugomucode)"
        description="Privacy policy and data protection standards for Anupam Baral's developer portfolio."
        canonicalUrl="https://anupambaral.com.np/privacy"
      />

      <div className="mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          Back Home
        </Link>
      </div>

      <header className="mb-10">
        <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground block mb-2">
          LEGAL & COMPLIANCE
        </span>
        <h1 className="font-display font-bold tracking-tighter text-3xl sm:text-4xl text-foreground uppercase">
          Privacy Policy
        </h1>
        <p className="text-[10px] text-muted-foreground font-mono mt-2">
          LAST UPDATED: JULY 01, 2026
        </p>
      </header>

      <div className="font-sans text-sm text-muted-foreground leading-relaxed space-y-6">
        <p>
          This website functions strictly as a professional developer portfolio. I respect your privacy and do not collect, process, or sell any personal data through cookies or tracking codes.
        </p>

        <h2 className="font-display text-lg font-bold text-foreground uppercase tracking-tight pt-4">
          1. Data Collection
        </h2>
        <p>
          I do not store any personal data. If you use the contact form on this website, the information you submit (Name, Email, and Message) is directly securely passed to the Web3Forms API to send me an email. None of this data is cached or stored locally on this website's servers.
        </p>

        <h2 className="font-display text-lg font-bold text-foreground uppercase tracking-tight pt-4">
          2. Analytical Cookies
        </h2>
        <p>
          This website does not deploy Google Analytics, Facebook Pixels, or other advertising cookies. It is built to run cleanly without trackers, cookies, or user profile generation.
        </p>

        <h2 className="font-display text-lg font-bold text-foreground uppercase tracking-tight pt-4">
          3. Dynamic Integrations
        </h2>
        <p>
          This portfolio embeds links to external profiles including GitHub, LinkedIn, and Medium. When you leave this website to visit these links, their respective privacy guidelines apply.
        </p>

        <h2 className="font-display text-lg font-bold text-foreground uppercase tracking-tight pt-4">
          4. Contact Information
        </h2>
        <p>
          If you have questions regarding data compliance or this privacy policy, you can contact me directly at: <a href="mailto:contact@anupambaral.com.np" className="text-primary underline">contact@anupambaral.com.np</a>.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
