import { useState } from "react";
import { Code2, Play, RefreshCw, CheckCircle2, Shield, Search } from "lucide-react";
import SEO from "@/components/SEO";
import { SectionHeader, SectionShell } from "@/components/layout/SectionShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/lib/siteConfig";
import { SlidingWindowRateLimiter, escapeHtml } from "@/lib/security";
import { searchService } from "@/lib/searchService";

const Playground = () => {
  const [htmlInput, setHtmlInput] = useState("<script>alert('xss')</script>Hello World");
  const [escapedOutput, setEscapedOutput] = useState("");
  const [searchQuery, setSearchQuery] = useState("React");
  const [searchResults, setSearchResults] = useState<{ title: string; type: string; url: string }[]>([]);

  const handleTestEscape = () => {
    setEscapedOutput(escapeHtml(htmlInput));
  };

  const handleTestSearch = () => {
    const results = searchService.search(searchQuery);
    setSearchResults(results);
  };

  const url = `${siteConfig.url}/playground`;

  return (
    <SectionShell bordered={false}>
      <SEO
        title="Playground — Anupam Baral (@gomugomucode)"
        description="Interactive code playground showcasing security sanitization, rate limiting algorithms, and multi-domain fuzzy search engines by Anupam Baral (@gomugomucode)."
        canonicalUrl={url}
      />

      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <header className="flex flex-col gap-4">
          <SectionHeader
            index="09 — Playground"
            title="Interactive code playground & algorithms."
            description="Test live security sanitization, rate limiting logic, and fuzzy search algorithms written for this portfolio."
          />
        </header>

        {/* Experiment 1: HTML XSS Sanitizer */}
        <Card className="p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2 font-mono text-sm font-semibold text-primary">
            <Shield className="w-4 h-4" /> Live XSS HTML Sanitizer (`escapeHtml`)
          </div>
          <p className="text-body-sm text-muted-foreground">
            Enter any HTML string to test sanitization against malicious Script injection attacks.
          </p>
          <div className="flex gap-2">
            <Input
              value={htmlInput}
              onChange={(e) => setHtmlInput(e.target.value)}
              className="font-mono text-xs"
            />
            <Button onClick={handleTestEscape} size="sm" className="gap-1.5 font-mono text-xs">
              <Play className="w-3.5 h-3.5" /> Sanitize
            </Button>
          </div>
          {escapedOutput && (
            <div className="p-4 rounded-md bg-muted/50 border border-border font-mono text-xs text-foreground">
              <span className="text-muted-foreground block text-[10px] uppercase mb-1">Sanitized Result:</span>
              {escapedOutput}
            </div>
          )}
        </Card>

        {/* Experiment 2: Multi-Domain Fuzzy Search Engine */}
        <Card className="p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2 font-mono text-sm font-semibold text-primary">
            <Search className="w-4 h-4" /> Multi-Domain Fuzzy Search Engine (`multiDomainSearch`)
          </div>
          <p className="text-body-sm text-muted-foreground">
            Test instant indexing across projects, skills, articles, and site pages.
          </p>
          <div className="flex gap-2">
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="font-mono text-xs"
            />
            <Button onClick={handleTestSearch} size="sm" className="gap-1.5 font-mono text-xs">
              <Search className="w-3.5 h-3.5" /> Search
            </Button>
          </div>
          {searchResults.length > 0 && (
            <div className="flex flex-col gap-2 p-4 rounded-md bg-muted/50 border border-border">
              <span className="text-[10px] font-mono text-muted-foreground uppercase">Matches Found ({searchResults.length}):</span>
              {searchResults.map((res, i) => (
                <div key={i} className="flex items-center justify-between text-xs font-mono text-foreground py-1 border-b border-border/40 last:border-0">
                  <span>{res.title}</span>
                  <span className="text-muted-foreground text-[10px]">{res.type}</span>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </SectionShell>
  );
};

export default Playground;
