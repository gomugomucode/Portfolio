import SEO from "@/components/SEO";
import { SectionHeader, SectionShell } from "@/components/layout/SectionShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/siteConfig";
import { USES_CATEGORIES, type TechUseCategory } from "@/data/uses";


const Uses = () => {
  const url = `${siteConfig.url}/uses`;

  return (
    <SectionShell bordered={false}>
      <SEO
        title="Uses — Anupam Baral (@gomugomucode)"
        description="A curated look into the hardware, software, editor setup, terminal configuration, and AI engineering tools used daily by Anupam Baral (@gomugomucode)."
        canonicalUrl={url}
      />

      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <header className="flex flex-col gap-4">
          <SectionHeader
            index="07 — Uses"
            title="Development setup & tooling."
            description="A detailed list of the hardware, code editor setup, terminal configuration, and AI tools I use daily."
          />
        </header>

        <div className="grid grid-cols-1 gap-8">
          {USES_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Card key={cat.title} className="p-6 flex flex-col gap-6">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground">
                      {cat.title}
                    </h2>
                    <p className="text-xs text-muted-foreground">{cat.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-4 rounded-md bg-muted/40 border border-border/60 flex flex-col gap-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-mono text-sm font-semibold text-foreground">
                          {item.name}
                        </h3>
                        {item.tag && (
                          <Badge variant="outline" className="font-mono text-[9px]">
                            {item.tag}
                          </Badge>
                        )}
                      </div>
                      <p className="text-body-sm text-muted-foreground leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
};

export default Uses;
