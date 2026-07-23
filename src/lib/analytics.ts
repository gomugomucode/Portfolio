/**
 * Production-Grade Privacy-Friendly Analytics & Event Tracking Library
 * Supports Google Analytics 4 (GA4), Microsoft Clarity, and Google Tag Manager (GTM)
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    clarity?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "";
export const CLARITY_PROJECT_ID = import.meta.env.VITE_CLARITY_PROJECT_ID || "";
export const GTM_ID = import.meta.env.VITE_GTM_ID || "";

/**
 * Track custom conversion events in GA4 / Clarity / GTM
 */
export const trackEvent = (
  eventName: string,
  eventParams: Record<string, unknown> = {}
) => {
  try {
    // GA4 Event Tracking
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, eventParams);
    }

    // Microsoft Clarity Custom Event
    if (typeof window !== "undefined" && window.clarity) {
      window.clarity("event", eventName);
    }

    // GTM DataLayer Push
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...eventParams,
      });
    }

    if (import.meta.env.DEV) {
      console.log(`[Analytics Event] ${eventName}:`, eventParams);
    }
  } catch (err) {
    console.error("[Analytics Error]", err);
  }
};

/**
 * Track SPA Route Page Views
 */
export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

/**
 * Predefined Conversion Event Helpers
 */
export const trackContactFormSubmit = (method: string = "web3forms") => {
  trackEvent("contact_form_submit", {
    category: "conversion",
    method,
  });
};

export const trackProjectClick = (projectId: string, projectTitle: string) => {
  trackEvent("project_case_study_click", {
    category: "engagement",
    project_id: projectId,
    project_title: projectTitle,
  });
};

export const trackSocialClick = (platform: string, url: string) => {
  trackEvent("social_link_click", {
    category: "outbound",
    platform,
    destination: url,
  });
};

export const trackResumeDownload = () => {
  trackEvent("resume_download", {
    category: "conversion",
  });
};
