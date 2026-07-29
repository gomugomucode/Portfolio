/**
 * Production-Safe Structured Logger
 */

type LogLevel = "info" | "warn" | "error" | "debug";

const IS_PROD = import.meta.env.PROD;

const sanitizeArgs = (args: unknown[]): unknown[] => {
  return args.map((arg) => {
    if (typeof arg === "string") {
      // Redact sensitive patterns (tokens, passwords, keys)
      return arg.replace(/(bearer\s+[a-z0-9._-]+|access_key=[a-z0-9-]+|password=[^\s]+)/gi, "[REDACTED]");
    }
    return arg;
  });
};

export const logger = {
  info: (...args: unknown[]) => {
    if (!IS_PROD) {
      console.log("[INFO]", ...sanitizeArgs(args));
    }
  },
  warn: (...args: unknown[]) => {
    console.warn("[WARN]", ...sanitizeArgs(args));
  },
  error: (...args: unknown[]) => {
    console.error("[ERROR]", ...sanitizeArgs(args));
  },
  debug: (...args: unknown[]) => {
    if (!IS_PROD) {
      console.debug("[DEBUG]", ...sanitizeArgs(args));
    }
  },
};
