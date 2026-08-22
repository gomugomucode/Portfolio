import React from "react";
import { ArrowDown } from "lucide-react";
import type { ArchitectureNode } from "@/data/architecture";

export type { ArchitectureNode };

export interface ArchitectureDiagramProps {
  projectTitle: string;
  nodes: ArchitectureNode[];
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  projectTitle,
  nodes,
}) => {
  return (
    <div className="w-full p-6 md:p-8 rounded-lg border border-border bg-card/60 backdrop-blur-sm flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-semibold">
          System Flow & Visual Architecture
        </span>
        <h4 className="font-display text-lg font-medium text-foreground">
          {projectTitle} — System Component Flow
        </h4>
      </div>

      {/* Visual Flow Nodes Stack */}
      <div className="flex flex-col items-center gap-3 relative py-2">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const isLast = index === nodes.length - 1;

          return (
            <React.Fragment key={node.layer + node.name}>
              {/* Node Box */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-12 items-center p-4 rounded-md border border-border bg-background/80 hover:border-primary/40 transition-colors duration-200 gap-4 shadow-sm">
                <div className="sm:col-span-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                      {node.layer}
                    </span>
                    <span className="text-sm font-medium font-display text-foreground">
                      {node.name}
                    </span>
                  </div>
                </div>

                <div className="sm:col-span-4 flex items-center">
                  <span className="px-2.5 py-1 rounded bg-muted text-xs font-mono text-foreground font-medium">
                    {node.technology}
                  </span>
                </div>

                <div className="sm:col-span-4 text-xs text-muted-foreground leading-relaxed">
                  {node.description}
                </div>
              </div>

              {/* Connecting Flow Arrow */}
              {!isLast && (
                <div className="flex items-center justify-center py-1 text-primary/70" aria-hidden="true">
                  <ArrowDown className="w-4 h-4 animate-pulse" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ArchitectureDiagram;

