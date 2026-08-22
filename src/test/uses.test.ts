import { describe, it, expect } from "vitest";
import { USES_CATEGORIES } from "../data/uses";

describe("Uses Developer Setup Module Suite", () => {
  it("should contain valid tech setup categories", () => {
    expect(USES_CATEGORIES.length).toBeGreaterThan(0);
    for (const cat of USES_CATEGORIES) {
      expect(cat.title).toBeDefined();
      expect(cat.description.length).toBeGreaterThan(10);
      expect(cat.items.length).toBeGreaterThan(0);
    }
  });

  it("should cover hardware, editor, terminal, and AI tools", () => {
    const titles = USES_CATEGORIES.map((c) => c.title.toLowerCase());
    expect(titles.some((t) => t.includes("hardware"))).toBe(true);
    expect(titles.some((t) => t.includes("editor"))).toBe(true);
    expect(titles.some((t) => t.includes("terminal"))).toBe(true);
    expect(titles.some((t) => t.includes("ai"))).toBe(true);
  });
});
