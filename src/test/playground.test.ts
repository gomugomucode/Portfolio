import { describe, it, expect } from "vitest";
import { ARCHITECTURE_DIAGRAMS } from "../pages/Architecture";

describe("Architecture & Developer Playground Suite", () => {
  it("should contain valid architecture diagram specifications", () => {
    expect(ARCHITECTURE_DIAGRAMS.length).toBeGreaterThan(0);
    for (const diag of ARCHITECTURE_DIAGRAMS) {
      expect(diag.title).toBeDefined();
      expect(diag.components.length).toBeGreaterThan(0);
      expect(diag.flowSteps.length).toBeGreaterThan(0);
      expect(diag.metrics.length).toBeGreaterThan(0);
    }
  });

  it("should cover Solana and Full-Stack systems", () => {
    const titles = ARCHITECTURE_DIAGRAMS.map((d) => d.title.toLowerCase());
    expect(titles.some((t) => t.includes("solana"))).toBe(true);
    expect(titles.some((t) => t.includes("lms"))).toBe(true);
  });
});
