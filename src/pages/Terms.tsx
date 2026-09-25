import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 pt-32 pb-16">
      <SEO
        title="Terms of Service — Anupam Baral (@gomugomucode)"
        description="Standard terms of service and usage conditions for Anupam Baral's developer portfolio."
        canonicalUrl="https://anupambaral.com.np/terms"
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
          Terms of Service
        </h1>
        <p className="text-[10px] text-muted-foreground font-mono mt-2">
          LAST UPDATED: JULY 01, 2026
        </p>
      </header>

      <div className="font-sans text-sm text-muted-foreground leading-relaxed space-y-6">
        <p>
          Welcome to the personal developer portfolio of Anupam Baral. By browsing this website, you agree to comply with the terms and conditions outlined below.
        </p>

        <h2 className="font-display text-lg font-bold text-foreground uppercase tracking-tight pt-4">
          1. Intellectual Property
        </h2>
        <p>
          The custom code structure and portfolio design layout are open-source. However, the copy text, custom visual assets, case studies, and personal narrative items are original content and belong strictly to Anupam Baral.
        </p>

        <h2 className="font-display text-lg font-bold text-foreground uppercase tracking-tight pt-4">
          2. Proper Usage
        </h2>
        <p>
          You agree to use this site strictly for professional networking, reviewing work samples, reading technical articles, and inquiring about freelance projects or developer roles. Any malicious actions (DoS attacks, form spamming, or scraping) are prohibited.
        </p>

        <h2 className="font-display text-lg font-bold text-foreground uppercase tracking-tight pt-4">
          3. Disclaimer of Liability
        </h2>
        <p>
          The information and code projects shared on this website are for demonstration purposes. I provide these inputs 'as is' without guarantees of any kind, and will not be liable for any direct or indirect issues resulting from their execution.
        </p>

        <h2 className="font-display text-lg font-bold text-foreground uppercase tracking-tight pt-4">
          4. Contact
        </h2>
        <p>
          If you have any questions regarding the terms of service, you can reach out directly via: <a href="mailto:contact@anupambaral.com.np" className="text-primary underline">contact@anupambaral.com.np</a>.
        </p>
      </div>
    </div>
  );
};

export default Terms;
