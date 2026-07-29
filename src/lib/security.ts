import { z } from "zod";

/**
 * XSS HTML Sanitization helper
 */
export const escapeHtml = (str: string): string => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

/**
 * Zod Contact Form Validation Schema
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name must not exceed 100 characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." })
    .max(255, { message: "Email must not exceed 255 characters." }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(3000, { message: "Message must not exceed 3000 characters." }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

/**
 * Sliding Window Client-Side Rate Limiter
 */
export class SlidingWindowRateLimiter {
  private key: string;
  private maxRequests: number;
  private windowMs: number;

  constructor(key: string, maxRequests: number = 3, windowMs: number = 60000) {
    this.key = `rate_limit_${key}`;
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  public isAllowed(): { allowed: boolean; retryAfterSeconds: number } {
    try {
      const now = Date.now();
      const stored = localStorage.getItem(this.key);
      let timestamps: number[] = stored ? JSON.parse(stored) : [];

      // Filter out timestamps outside window
      timestamps = timestamps.filter((t) => now - t < this.windowMs);

      if (timestamps.length >= this.maxRequests) {
        const oldestTimestamp = timestamps[0];
        const retryAfterSeconds = Math.ceil((this.windowMs - (now - oldestTimestamp)) / 1000);
        return { allowed: false, retryAfterSeconds };
      }

      timestamps.push(now);
      localStorage.setItem(this.key, JSON.stringify(timestamps));
      return { allowed: true, retryAfterSeconds: 0 };
    } catch {
      // In case localStorage fails, allow request
      return { allowed: true, retryAfterSeconds: 0 };
    }
  }
}
