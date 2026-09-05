import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// Ensure requestIdleCallback maintains Window context under strict WebIDL engines (Firefox)
if (typeof window !== "undefined" && typeof window.requestIdleCallback === "function") {
  try {
    window.requestIdleCallback = window.requestIdleCallback.bind(window);
    window.cancelIdleCallback = window.cancelIdleCallback.bind(window);
  } catch {
    // Non-configurable in some environments
  }
}

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  );
}
