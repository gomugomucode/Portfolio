import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  base: "/",

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    target: "es2020",
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("lucide-react")) {
              return "vendor-icons";
            }
            if (id.includes("@tanstack") || id.includes("react-query")) {
              return "vendor-query";
            }
            if (id.includes("@radix-ui") || id.includes("framer-motion")) {
              return "vendor-ui";
            }
            if (
              id.includes("/react/") ||
              id.includes("/react-dom/") ||
              id.includes("react-router") ||
              id.includes("react-helmet") ||
              id.includes("scheduler")
            ) {
              return "vendor-react";
            }
            return "vendor";
          }
        },
      },
    },
  },
}));