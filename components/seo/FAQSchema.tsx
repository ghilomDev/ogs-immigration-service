import Script from 'next/script';
import { baseUrl } from '@/lib/seo';
import { FAQItem } from '@/components/sections/FAQAccordionSection';

interface FAQSchemaProps {
  faqs: FAQItem[];
  title?: string;
}

// This component creates structured data for FAQ sections
// It follows Google's recommended FAQ schema format for rich results
export default function FAQSchema({ faqs, title = "Frequently Asked Questions" }: FAQSchemaProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
