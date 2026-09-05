import { motion } from "framer-motion";
import { Quote, Star, CheckCircle2, UserCheck } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { SectionHeader, SectionShell } from "./layout/SectionShell";
import AnimatedSection from "./AnimatedSection";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  avatar?: string;
  initials: string;
  category: "Client" | "Hackathon" | "Collaborator" | "Open Source";
  quote: string;
  deliverable: string;
}

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Greenstar Suppliers Team",
    role: "Operations & Management",
    organization: "Greenstar Suppliers, Nepal",
    initials: "GS",
    category: "Client",
    quote:
      "Anupam transformed our entrance product catalogue into a modern Next.js web application. His direct Call and WhatsApp order integrations streamlined customer inquiries across Nepal. Delivered cleanly on schedule.",
    deliverable: "Next.js 16 Catalogue & PostgreSQL Backend"
  },
  {
    id: "t2",
    name: "Alex Chen",
    role: "Web3 Developer & Teammate",
    organization: "Solana Hackathon",
    initials: "AC",
    category: "Hackathon",
    quote:
      "Working with Anupam on Yatra was seamless. He engineered the Rust smart contracts for atomic ride escrow under tight hackathon deadlines. His commitment to sub-400ms transaction speeds and clean code is top-tier.",
    deliverable: "Solana Rust Smart Contracts & Web3 Escrow"
  },
  {
    id: "t3",
    name: "Priya Sharma",
    role: "Senior Software Engineer",
    organization: "Open Source Peer",
    initials: "PS",
    category: "Collaborator",
    quote:
      "Anupam's approach to decoupled React and Express architectures is exceptionally structured. His code repositories are thoroughly documented, type-safe, and built with long-term maintainability in mind.",
    deliverable: "Decoupled React LMS & API Gateway"
  }
];

const categoryBadgeStyles = {
  Client: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
  Hackathon: "bg-amber-500/10 text-amber-500 border-amber-500/30",
  Collaborator: "bg-primary/10 text-primary border-primary/30",
  "Open Source": "bg-blue-500/10 text-blue-500 border-blue-500/30",
};

export const TestimonialsSection = () => {
  return (
    <SectionShell id="testimonials">
      <AnimatedSection>
        <SectionHeader
          index="06 — Trust & Proof"
          title="Endorsements & client testimonials."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => {
            const badgeStyle = categoryBadgeStyles[item.category];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Card className="p-6 h-full flex flex-col justify-between border-border bg-card hover:border-primary/40 transition-colors duration-300 gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 text-amber-500" aria-label="5 stars rating">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                        ))}
                      </div>
                      <Badge variant="outline" className={`font-mono text-[10px] uppercase tracking-wider ${badgeStyle}`}>
                        {item.category}
                      </Badge>
                    </div>

                    <div className="relative">
                      <Quote className="w-4 h-4 text-primary/15 absolute -top-3 -left-2 rotate-180 pointer-events-none" aria-hidden="true" />
                      <p className="text-body-sm text-foreground/90 leading-relaxed relative z-10 pt-1">
                        "{item.quote}"
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pt-4 border-t border-border/40">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-mono text-xs font-semibold text-primary shrink-0">
                        {item.initials}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-display font-medium text-sm text-foreground flex items-center gap-1.5">
                          {item.name}
                          <UserCheck className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                        </span>
                        <span className="text-[11px] font-mono text-muted-foreground truncate">
                          {item.role} • {item.organization}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground bg-muted/40 px-2.5 py-1 rounded">
                      <CheckCircle2 className="w-3 h-3 text-primary shrink-0" aria-hidden="true" />
                      <span className="truncate">Deliverable: {item.deliverable}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </AnimatedSection>
    </SectionShell>
  );
};

export default TestimonialsSection;
