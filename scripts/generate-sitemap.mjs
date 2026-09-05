import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const SITE_URL = "https://anupambaral.com.np";
const currentDate = new Date().toISOString().split("T")[0];

const routes = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/about", priority: "0.9", changefreq: "monthly" },
  { url: "/projects", priority: "0.9", changefreq: "weekly" },
  { url: "/projects/e-learning-platform", priority: "0.8", changefreq: "monthly" },
  { url: "/projects/yatra-solana-ride-sharing", priority: "0.8", changefreq: "monthly" },
  { url: "/projects/web3-loyalty-protocol", priority: "0.8", changefreq: "monthly" },
  { url: "/projects/greenstar-suppliers", priority: "0.8", changefreq: "monthly" },
  { url: "/projects/yarshabyte-it-company", priority: "0.8", changefreq: "monthly" },
  { url: "/blog", priority: "0.9", changefreq: "daily" },
  { url: "/blog/yatra-solana-ride-sharing-protocol", priority: "0.8", changefreq: "monthly" },
  { url: "/blog/decoupled-lms-architectures", priority: "0.8", changefreq: "monthly" },
  { url: "/blog/type-safe-ai-pipelines", priority: "0.8", changefreq: "monthly" },
  { url: "/blog/nextjs-edge-rendering", priority: "0.8", changefreq: "monthly" },
  { url: "/now", priority: "0.8", changefreq: "weekly" },
  { url: "/for-recruiters", priority: "0.9", changefreq: "weekly" },
  { url: "/ai", priority: "0.9", changefreq: "weekly" },
  { url: "/open-source", priority: "0.8", changefreq: "weekly" },
  { url: "/contact", priority: "0.8", changefreq: "monthly" },
  { url: "/uses", priority: "0.7", changefreq: "monthly" },
  { url: "/architecture", priority: "0.8", changefreq: "monthly" },
  { url: "/playground", priority: "0.7", changefreq: "monthly" },
  { url: "/privacy", priority: "0.3", changefreq: "yearly" },
  { url: "/terms", priority: "0.3", changefreq: "yearly" },
];

const generateSitemapXml = () => {
  const urls = routes
    .map((route) => {
      const fullUrl = route.url === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.url}`;
      return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>`;
};

const sitemapContent = generateSitemapXml();

// Write to public/sitemap.xml
const publicSitemapPath = path.join(projectRoot, "public", "sitemap.xml");
fs.writeFileSync(publicSitemapPath, sitemapContent, "utf8");
console.log(`[Sitemap Generator] Generated ${routes.length} routes in public/sitemap.xml`);

// Write to dist/sitemap.xml if dist exists
const distDir = path.join(projectRoot, "dist");
if (fs.existsSync(distDir)) {
  const distSitemapPath = path.join(distDir, "sitemap.xml");
  fs.writeFileSync(distSitemapPath, sitemapContent, "utf8");
  console.log(`[Sitemap Generator] Copied sitemap to dist/sitemap.xml`);
}
