import { baseUrl } from "@/lib/seo";

/**
 * Generate a robots.txt file
 */
export function GET() {
  const robotsTxt = `
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
