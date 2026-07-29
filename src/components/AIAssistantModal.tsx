import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles, X, Search, Send, ArrowRight, Bot } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { aiAssistantEngine, type AIQueryResponse } from "@/lib/aiAssistantEngine";

const SUGGESTED_QUERIES = [
  "Have you built payment systems?",
  "Do you know Docker?",
  "What projects use PostgreSQL?",
  "Show React & Next.js projects",
  "What is your backend stack?",
];

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIAssistantModal = ({ isOpen, onClose }: AIAssistantModalProps) => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<AIQueryResponse | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSearch = (textToQuery?: string) => {
    const q = textToQuery || query;
    if (!q.trim()) return;
    const response = aiAssistantEngine.query(q);
    setResult(response);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
      <Card className="w-full max-w-2xl border-primary/30 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] bg-card">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-muted/40">
          <div className="flex items-center gap-2 font-mono text-xs font-medium text-primary">
            <Bot className="w-4 h-4" /> Portfolio AI Assistant (Zero Hallucination)
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-muted-foreground hover:text-foreground interactive-focus"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input Field */}
        <div className="p-4 border-b border-border flex gap-2">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Ask anything about Anupam's stack, projects, or experience..."
            className="flex-1 font-mono text-xs"
            autoFocus
          />
          <Button onClick={() => handleSearch()} size="sm" className="gap-1.5 font-mono text-xs">
            <Send className="w-3.5 h-3.5" /> Ask
          </Button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto flex flex-col gap-6 flex-1">
          {/* Suggested Queries */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
              Quick Recruiter Questions:
            </span>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED_QUERIES.map((sq) => (
                <button
                  key={sq}
                  onClick={() => {
                    setQuery(sq);
                    handleSearch(sq);
                  }}
                  className="text-xs font-mono px-3 py-1.5 rounded-full border border-border bg-muted/50 hover:bg-primary/10 hover:border-primary/40 text-muted-foreground hover:text-primary transition-all text-left"
                >
                  {sq}
                </button>
              ))}
            </div>
          </div>

          {/* Answer Result Display */}
          {result && (
            <div className="flex flex-col gap-4 p-5 rounded-md border border-primary/20 bg-primary/[0.03]">
              <div className="flex items-center gap-2 text-xs font-mono text-primary font-medium">
                <Sparkles className="w-3.5 h-3.5" /> Matched Topic: {result.matchedTopic}
              </div>
              <p className="text-body-sm leading-relaxed text-foreground">
                {result.answer}
              </p>

              {result.citations.length > 0 && (
                <div className="flex flex-col gap-2 pt-3 border-t border-border/50">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    Verified Citations:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {result.citations.map((c) => (
                      <Link
                        key={c.url}
                        to={c.url}
                        onClick={onClose}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
                      >
                        {c.title} <ArrowRight className="w-3 h-3" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
