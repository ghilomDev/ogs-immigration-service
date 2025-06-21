import Script from 'next/script';
import { localBusinessSchema } from '@/lib/seo';

export default function HeadContent() {
  return (
    <>
      {/* Favicon */}
      <link rel="icon" href="/images/logo-2.svg" type="image/svg+xml" sizes="any" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#5046E5" />

      {/* Structured data for better SEO */}
      <Script
        id="schema-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Google Analytics / Tag Manager script would go here */}
    </>
  );
}
