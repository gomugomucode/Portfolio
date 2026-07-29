import { describe, it, expect, beforeEach } from "vitest";
import { personalizationEngine } from "../lib/personalization";

describe("Visitor Personalization Engine Suite", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should track and retrieve recently viewed projects", () => {
    personalizationEngine.trackProjectView({
      id: "01",
      title: "Yatra Solana",
      category: "Web3",
    });

    const recent = personalizationEngine.getViewedProjects();
    expect(recent.length).toBe(1);
    expect(recent[0].title).toBe("Yatra Solana");
  });

  it("should save and retrieve article reading progress", () => {
    personalizationEngine.saveReadingProgress("yatra-solana", 45, 320);

    const progress = personalizationEngine.getReadingProgress("yatra-solana");
    expect(progress).not.toBeNull();
    expect(progress?.progressPercent).toBe(45);
    expect(progress?.lastScrollPosition).toBe(320);
  });
});
