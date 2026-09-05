import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, Clock, FileText, X, Eye } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { SectionHeader, SectionShell } from "./layout/SectionShell";
import AnimatedSection from "./AnimatedSection";
import { certificates, Certificate } from "@/data/certificates";

export const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <SectionShell id="certificates">
      <AnimatedSection>
        <SectionHeader
          index="06 — Certifications"
          title="Verified credentials, training & technical workshops."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {certificates.map((cert) => (
            <Card
              key={cert.id}
              className="p-6 flex flex-col justify-between gap-6 bg-card border-border hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex flex-col gap-4">
                {/* Header info */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                    <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                  </div>
                  {cert.badge && (
                    <Badge variant="outline" className="font-mono text-[10px] bg-primary/10 text-primary border-primary/30">
                      <ShieldCheck className="w-3 h-3 mr-1 inline-block" aria-hidden="true" />
                      {cert.badge}
                    </Badge>
                  )}
                </div>

                {/* Certificate Title */}
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground mt-1.5">
                    <span>Issued: {cert.issueDate}</span>
                    <span>•</span>
                    <span>No: {cert.certificateNo}</span>
                    {cert.creditHours && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-foreground">
                          <Clock className="w-3 h-3 text-primary" aria-hidden="true" />
                          {cert.creditHours} Credit Hrs
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Image Preview Thumbnail */}
                <button
                  type="button"
                  aria-label={`Expand certificate: ${cert.title}`}
                  className="relative group/img overflow-hidden rounded-lg border border-border/80 bg-black/40 aspect-[4/3] flex items-center justify-center cursor-pointer text-left w-full interactive-focus"
                  onClick={() => setSelectedCert(cert)}
                >
                  <img
                    src={cert.image}
                    alt={`Certificate preview for ${cert.title}`}
                    className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-medium px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground shadow-lg">
                      <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                      View Full Certificate
                    </span>
                  </div>
                </button>

                {/* Description */}
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="default" className="text-[11px] font-mono">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Partners tags */}
                {cert.partners && cert.partners.length > 0 && (
                  <div className="pt-3 border-t border-border/40">
                    <span className="text-[10px] font-mono text-muted-foreground block mb-1.5 uppercase tracking-wider">
                      Academic & Hiring Partners:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {cert.partners.map((partner) => (
                        <span key={partner} className="px-2 py-0.5 rounded bg-muted/40 text-[10px] font-mono text-muted-foreground">
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Actions Footer */}
              <div className="flex items-center justify-between gap-3 pt-4 border-t border-border/60">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedCert(cert)}
                  className="gap-2 text-xs font-mono"
                >
                  <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                  Expand Image
                </Button>
                {cert.pdfUrl && (
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
                  >
                    <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                    Download PDF
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Modal Lightbox Preview */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", duration: 0.3 }}
                className="relative max-w-4xl w-full max-h-[90vh] bg-card border border-border rounded-xl p-4 md:p-6 shadow-2xl flex flex-col gap-4 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between gap-4 border-b border-border pb-3">
                  <div>
                    <h4 className="font-display text-lg font-bold text-foreground">
                      {selectedCert.title}
                    </h4>
                    <p className="text-xs font-mono text-muted-foreground">
                      Issued by {selectedCert.issuer} • No: {selectedCert.certificateNo}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedCert(null)}
                    aria-label="Close modal"
                    className="shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="w-full flex justify-center bg-black/50 rounded-lg p-2 overflow-hidden">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-h-[65vh] w-auto object-contain rounded"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="text-xs font-mono text-muted-foreground">
                    Issued Date: {selectedCert.issueDate} | {selectedCert.badge}
                  </div>
                  {selectedCert.pdfUrl && (
                    <a
                      href={selectedCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline bg-primary/10 px-3 py-1.5 rounded border border-primary/20"
                    >
                      <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                      View Original PDF
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimatedSection>
    </SectionShell>
  );
};

export default CertificatesSection;
