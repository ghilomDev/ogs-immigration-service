import { baseUrl } from "@/lib/seo";

/**
 * Generate a sitemap
 */
export function GET() {
  // Main pages
  const pages = [
    { url: "", lastModified: new Date() },
    { url: "/about", lastModified: new Date() },
    { url: "/services", lastModified: new Date() },
    { url: "/contact", lastModified: new Date() },
    { url: "/schedule", lastModified: new Date() },
  ];

  // Service detail pages
  const servicePages = [
    { url: "/services/forms", lastModified: new Date() },
    { url: "/services/asylum", lastModified: new Date() },
    { url: "/services/translation", lastModified: new Date() },
    { url: "/services/visas", lastModified: new Date() },
    { url: "/services/family", lastModified: new Date() },
    { url: "/services/employment", lastModified: new Date() },
    { url: "/services/citizenship", lastModified: new Date() },
  ];

  const allPages = [...pages, ...servicePages];

  // Generate the XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(page => {
      return `
    <url>
      <loc>${baseUrl}${page.url}</loc>
      <lastmod>${page.lastModified.toISOString()}</lastmod>
      <changefreq>${page.url === "" ? "weekly" : "monthly"}</changefreq>
      <priority>${page.url === "" ? "1.0" : "0.8"}</priority>
    </url>`;
    })
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
