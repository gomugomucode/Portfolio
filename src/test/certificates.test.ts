import { describe, it, expect } from "vitest";
import { certificates } from "@/data/certificates";

describe("Certificates Data Integrity", () => {
  it("should contain all 3 verified DLYTICA certificates", () => {
    expect(certificates.length).toBe(3);

    const dayCert = certificates.find((c) => c.id === "dlytica-1-day-workshop-2026");
    expect(dayCert).toBeDefined();
    expect(dayCert?.title).toContain("Career Guidance");
    expect(dayCert?.certificateNo).toBe("DLYTICA-011-2026");
    expect(dayCert?.issueDate).toBe("2026-07-10");

    const monthCert = certificates.find((c) => c.id === "dlytica-1-month-data-ai-2026");
    expect(monthCert).toBeDefined();
    expect(monthCert?.title).toBe("1-Month Data & AI Training Program");
    expect(monthCert?.certificateNo).toBe("DLY-001-2026");
    expect(monthCert?.issueDate).toBe("2026-07-10");

    const workshopCert = certificates.find((c) => c.id === "dlytica-data-analytics-ai-2026");
    expect(workshopCert).toBeDefined();
    expect(workshopCert?.title).toBe("Data Analytics with AI Workshop");
    expect(workshopCert?.certificateNo).toBe("DLYWS-139-2026");
    expect(workshopCert?.issueDate).toBe("2026-07-25");
  });
});
