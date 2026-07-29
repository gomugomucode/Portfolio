/**
 * Core Web Vitals Performance Telemetry Module
 */

export interface Metric {
  id: string;
  name: "LCP" | "CLS" | "FID" | "INP" | "TTFB";
  value: number;
  rating: "good" | "needs-improvement" | "poor";
}

export const reportWebVitals = (metric: Metric) => {
  if (import.meta.env.DEV) {
    console.log(`[Web Vitals] ${metric.name}: ${metric.value} (${metric.rating})`);
  }
};
