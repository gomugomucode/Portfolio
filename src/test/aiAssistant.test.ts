import { describe, it, expect } from "vitest";
import { aiAssistantEngine } from "../lib/aiAssistantEngine";

describe("AI Portfolio Assistant Engine Suite", () => {
  it("should answer payment systems query accurately with citations", () => {
    const res = aiAssistantEngine.query("Have you built payment systems?");
    expect(res.answer).toContain("Yatra");
    expect(res.citations.length).toBeGreaterThan(0);
  });

  it("should answer Docker query accurately", () => {
    const res = aiAssistantEngine.query("Do you know Docker?");
    expect(res.answer).toContain("Docker");
  });

  it("should answer PostgreSQL query accurately", () => {
    const res = aiAssistantEngine.query("What projects use PostgreSQL?");
    expect(res.answer).toContain("PostgreSQL");
  });
});
