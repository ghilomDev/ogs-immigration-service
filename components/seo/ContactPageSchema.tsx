import Script from 'next/script';
import { siteInfo, baseUrl } from '@/lib/seo';

// This component adds page-specific structured data for contact page SEO
export default function ContactPageSchema() {
  // Create contact page specific schema
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${baseUrl}/contact/#contactpage`,
    name: `Contact ${siteInfo.name}`,
    description: 'Contact page for OGS Immigration Services',
    url: `${baseUrl}/contact`,
    provider: {
      '@type': 'LegalService',
      name: siteInfo.name,
      url: baseUrl,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteInfo.address.phone,
      email: siteInfo.address.email,
      contactType: 'customer service',
      availableLanguage: ['English', 'Spanish', 'Amharic', 'Tigrinya'],
    },
  };

  return (
    <Script
      id="contact-page-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
    />
  );
}
