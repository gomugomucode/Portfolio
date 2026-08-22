import { useState } from "react";
import { Cpu, Server, Database, Shield, Layers, ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";
import { SectionHeader, SectionShell } from "@/components/layout/SectionShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/siteConfig";
import { ARCHITECTURE_DIAGRAMS, type ArchitectureDiagramSpec } from "@/data/architecture";


const Architecture = () => {
  const [selectedDiagram, setSelectedDiagram] = useState<ArchitectureDiagramSpec>(ARCHITECTURE_DIAGRAMS[0]);
  const url = `${siteConfig.url}/architecture`;

  return (
    <SectionShell bordered={false}>
      <SEO
        title="Interactive System Architecture & Systems Design | Anupam Baral"
        description="Interactive systems design, database schemas, API gateway flows, and architecture diagrams built by Anupam Baral."
        canonicalUrl={url}
      />

      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <header className="flex flex-col gap-4">
          <SectionHeader
            index="08 — Architecture"
            title="Interactive systems design & architecture."
            description="Explore the systems design, API gateways, database schemas, and smart contract flows engineered for production software."
          />
        </header>

        {/* Diagram Selection Tabs */}
        <div className="flex flex-wrap gap-3">
          {ARCHITECTURE_DIAGRAMS.map((diag) => (
            <Button
              key={diag.id}
              variant={selectedDiagram.id === diag.id ? "default" : "outline"}
              onClick={() => setSelectedDiagram(diag)}
              className="gap-2 font-mono text-xs"
            >
              <Layers className="w-3.5 h-3.5" />
              {diag.title}
            </Button>
          ))}
        </div>

        {/* Selected Diagram Spec Card */}
        <Card className="p-6 md:p-8 flex flex-col gap-8 border-primary/30">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Badge variant="default" className="font-mono text-xs">
                {selectedDiagram.category}
              </Badge>
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              {selectedDiagram.title}
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed">
              {selectedDiagram.description}
            </p>
          </div>

          {/* Component Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {selectedDiagram.components.map((comp) => (
              <div key={comp.name} className="p-4 rounded-md bg-muted/40 border border-border/60 flex flex-col gap-1.5">
                <span className="font-mono text-xs font-semibold text-primary">{comp.name}</span>
                <span className="text-xs text-foreground font-medium">{comp.role}</span>
                <span className="text-[11px] font-mono text-muted-foreground">{comp.tech}</span>
              </div>
            ))}
          </div>

          {/* Execution Flow Steps */}
          <div className="flex flex-col gap-3 p-5 rounded-md bg-muted/20 border border-border/50">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              System Execution Flow:
            </span>
            <div className="flex flex-col gap-2.5">
              {selectedDiagram.flowSteps.map((step) => (
                <div key={step} className="flex items-start gap-2.5 text-xs font-mono text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics Evidence */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/40">
            {selectedDiagram.metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-1">
                <span className="font-display text-lg font-bold text-primary">{m.value}</span>
                <span className="font-mono text-[11px] text-muted-foreground">{m.label}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </SectionShell>
  );
};

export default Architecture;
