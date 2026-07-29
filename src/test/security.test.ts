import { describe, it, expect, beforeEach } from "vitest";
import { contactSchema, SlidingWindowRateLimiter, escapeHtml } from "../lib/security";

describe("Security Utility Suite", () => {
  describe("escapeHtml", () => {
    it("should escape special XSS characters correctly", () => {
      const input = `<script>alert("xss")</script> & 'hello'`;
      const expected = `&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt; &amp; &#039;hello&#039;`;
      expect(escapeHtml(input)).toBe(expected);
    });

    it("should return unchanged string if no special characters exist", () => {
      const input = "Clean text message 123";
      expect(escapeHtml(input)).toBe(input);
    });
  });

  describe("contactSchema Zod Validation", () => {
    it("should validate valid contact input", () => {
      const validData = {
        name: "Anupam Baral",
        email: "contact@anupambaral.com.np",
        message: "Hello Anupam, I would like to discuss a project collaboration.",
      };
      const result = contactSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it("should reject invalid email address", () => {
      const invalidData = {
        name: "Jane Doe",
        email: "not-an-email",
        message: "Hello world this is a test message.",
      };
      const result = contactSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it("should reject message shorter than 10 characters", () => {
      const invalidData = {
        name: "Jane Doe",
        email: "jane@example.com",
        message: "Short",
      };
      const result = contactSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe("SlidingWindowRateLimiter", () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it("should allow requests up to maximum threshold", () => {
      const limiter = new SlidingWindowRateLimiter("test_key", 2, 60000);
      expect(limiter.isAllowed().allowed).toBe(true);
      expect(limiter.isAllowed().allowed).toBe(true);
      // 3rd attempt exceeds maxRequests = 2
      expect(limiter.isAllowed().allowed).toBe(false);
    });
  });
});
