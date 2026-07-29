import { describe, it, expect } from "vitest";
import { ENGINEERING_CASE_STUDIES } from "../data/caseStudies";
import { ENGINEERING_DECISIONS } from "../data/engineeringDecisions";

describe("Engineering Case Studies Suite", () => {
  it("should contain valid case studies with all required architectural sections", () => {
    expect(ENGINEERING_CASE_STUDIES.length).toBeGreaterThan(0);
    for (const cs of ENGINEERING_CASE_STUDIES) {
      expect(cs.title).toBeDefined();
      expect(cs.problem.length).toBeGreaterThan(20);
      expect(cs.whyItMattered.length).toBeGreaterThan(20);
      expect(cs.constraints.length).toBeGreaterThan(0);
      expect(cs.architectureOverview.length).toBeGreaterThan(20);
      expect(cs.technicalDecisions.length).toBeGreaterThan(0);
      expect(cs.lessonsLearned.length).toBeGreaterThan(10);
    }
  });

  it("should contain architectural decisions with alternatives rejected", () => {
    expect(ENGINEERING_DECISIONS.length).toBeGreaterThan(0);
    for (const dec of ENGINEERING_DECISIONS) {
      expect(dec.technology).toBeDefined();
      expect(dec.whyChosen.length).toBeGreaterThan(10);
      expect(dec.alternativesRejected.length).toBeGreaterThan(0);
    }
  });
});
