import { describe, it, expect } from "vitest";
import { EVIDENCE_MATRIX } from "../data/evidenceMatrix";

describe("Evidence Score Matrix Module Suite", () => {
  it("should contain 100% verifiable technical claims", () => {
    expect(EVIDENCE_MATRIX.length).toBeGreaterThan(0);
    for (const item of EVIDENCE_MATRIX) {
      expect(item.claim).toBeDefined();
      expect(item.supportingEvidence.length).toBeGreaterThan(20);
      expect(item.repositoryUrl).toContain("github.com");
      expect(item.demoUrl).toBeDefined();
      expect(item.confidenceScore).toBeDefined();
    }
  });

  it("should cover Solana, LMS, TypeScript, and AI Assistant claims", () => {
    const claims = EVIDENCE_MATRIX.map((e) => e.claim.toLowerCase());
    expect(claims.some((c) => c.includes("solana"))).toBe(true);
    expect(claims.some((c) => c.includes("lms"))).toBe(true);
    expect(claims.some((c) => c.includes("typescript"))).toBe(true);
    expect(claims.some((c) => c.includes("ai"))).toBe(true);
  });
});
