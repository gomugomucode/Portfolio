import { motion } from "framer-motion";
import { Terminal, Shield, Zap, Cpu, Code2, Layers } from "lucide-react";
import { SectionGrid, SectionHeader, SectionShell } from "./layout/SectionShell";
import AnimatedSection from "./AnimatedSection";

export interface PhilosophyPillar {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  principles: string[];
}

const philosophyPillars: PhilosophyPillar[] = [
  {
    icon: Shield,
    title: "Type Safety & Predictable Systems",
    subtitle: "Make illegal states unrepresentable",
    description:
      "Static type definitions in TypeScript, Rust, and Pydantic are not bureaucratic overhead—they are live documentation and structural guardrails. Catching bugs at compile-time ensures runtime stability and eliminates entire classes of production crashes.",
    principles: [
      "Strict TypeScript & Rust type bounds",
      "Structural Pydantic runtime schema validation",
      "Explicit error handling over silent try/catch suppression"
    ]
  },
  {
    icon: Zap,
    title: "Performance as a Feature",
    subtitle: "Speed is a non-negotiable user experience parameter",
    description:
      "Sub-second load times are engineered from the foundation up. By analyzing bundle budgets, minimizing main-thread blockages, utilizing edge CDNs, and tuning database queries, applications remain lightning fast under high user concurrency.",
    principles: [
      "Sub-1.2s target content delivery budgets",
      "Explicit image dimensions eliminating layout shifts (CLS)",
      "Edge-cached REST & GraphQL API gateway responses"
    ]
  },
  {
    icon: Cpu,
    title: "AI-First Software Architecture",
    subtitle: "Enhancing developer velocity with structural LLM pipelines",
    description:
      "Integrating machine learning models into production applications requires deterministic validation boundaries. I engineer type-safe Python API gateways and LLM prompt pipelines that guarantee structured JSON outputs for mission-critical apps.",
    principles: [
      "Deterministic JSON schema enforcement for LLM outputs",
      "Decoupled Python inference microservices",
      "Async queuing for latency-heavy ML workloads"
    ]
  },
  {
    icon: Layers,
    title: "Decoupled & Maintainable Design",
    subtitle: "Simple abstractions outlive complex frameworks",
    description:
      "Software complexity must be aggressively managed. By maintaining clean boundaries between client UI layers, stateless API gateways, and persistence engines, applications stay easy to audit, refactor, and scale 3 years after initial launch.",
    principles: [
      "Clear separation of UI components from business domain logic",
      "Stateless API endpoints and relational indexing",
      "Zero vendor lock-in through modular abstraction wrappers"
    ]
  },
  {
    icon: Code2,
    title: "Developer Experience & Pragmatic Value",
    subtitle: "Engineering excellence measured by business outcome",
    description:
      "Over-engineering is as harmful as under-engineering. Every architectural decision—from automated testing suites to CI/CD deployment workflows—is evaluated by how quickly it delivers verifiable value to end users.",
    principles: [
      "Automated CI/CD build & test verification pipelines",
      "Comprehensive inline code documentation & architecture guides",
      "Continuous optimization based on empirical performance metrics"
    ]
  }
];

const EngineeringPhilosophySection = () => {
  return (
    <SectionShell id="philosophy">
      <AnimatedSection>
        <SectionGrid>
          <div className="lg:col-span-12 flex flex-col gap-10">
            <SectionHeader
              index="02 — Mindset"
              title="Engineering philosophy & values."
            />

            <div className="max-w-3xl flex flex-col gap-4 -mt-2">
              <p className="text-body text-muted-foreground leading-relaxed">
                Great software is not built by accident. It is the result of deliberate architectural choices, strict type safety, clear system boundaries, and an unyielding commitment to user experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              {philosophyPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex flex-col justify-between p-6 rounded-lg border border-border bg-card/40 hover:border-primary/40 transition-colors duration-300 gap-6"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>

                      <div className="flex flex-col gap-1">
                        <h3 className="font-display text-lg font-medium text-foreground">
                          {pillar.title}
                        </h3>
                        <span className="font-mono text-[11px] text-primary">
                          {pillar.subtitle}
                        </span>
                      </div>

                      <p className="text-body-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 pt-4 border-t border-border/40">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                        Core Principles
                      </span>
                      <ul className="flex flex-col gap-1.5">
                        {pillar.principles.map((principle, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-2 text-xs text-foreground/90 font-mono">
                            <Terminal className="w-3 h-3 text-primary shrink-0" aria-hidden="true" />
                            <span className="line-clamp-1">{principle}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </SectionGrid>
      </AnimatedSection>
    </SectionShell>
  );
};

export default EngineeringPhilosophySection;
