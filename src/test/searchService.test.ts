import { describe, it, expect } from "vitest";
import { searchService } from "../lib/searchService";

describe("Multi-Domain Search Service Suite", () => {
  it("should find projects matching keyword 'Solana'", () => {
    const results = searchService.search("Solana");
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((r) => r.title.includes("Yatra"))).toBe(true);
  });

  it("should return empty array for non-matching query", () => {
    const results = searchService.search("xyz123nonexistent");
    expect(results.length).toBe(0);
  });

  it("should filter search results by type", () => {
    const results = searchService.search("Home", "page");
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((r) => r.type === "page")).toBe(true);
  });
});
