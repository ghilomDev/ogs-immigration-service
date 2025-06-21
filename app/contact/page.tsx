import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import ContactInfoSection from '@/components/sections/ContactInfoSection';
import AddToContactsSection from '@/components/sections/AddToContactsSection';
import ContactFormSection from '@/components/sections/ContactFormSection';
import FAQSection from '@/components/sections/FAQSection';
import FAQAccordionSection from '@/components/sections/FAQAccordionSection';
import {
  contactInfoData,
  addToContactsData,
  contactFormData,
  contactFAQData,
  uscisTranslationFAQData,
} from '@/lib/constants';
import { generatePageMetadata } from '@/lib/seo';
import ContactPageSchema from '@/components/seo/ContactPageSchema';

// Generate page-specific metadata for better SEO
export const metadata: Metadata = generatePageMetadata(
  'Contact Us | Immigration Services in Falls Church, VA',
  'Contact OGS Immigration Services for expert USCIS form help, document translation, and immigration assistance. Visit our office in Falls Church or book a consultation today.',
  '/api/og?title=Contact+OGS+Immigration+Services&type=contact',
  '/contact'
);

export default function ContactPage() {
  return (
    <>
      {/* Add structured data schema for this specific page */}
      <ContactPageSchema />
      {/* Hero Section */}
      <section className="py-16 bg-gray-50" aria-labelledby="contact-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="contact-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch With Us
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help you navigate the complexities of immigration law. Reach out to us for
            expert guidance and support.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactInfoSection cards={contactInfoData} />

          {/* Add to Contacts Section */}
          <AddToContactsSection {...addToContactsData} />

          {/* Contact Form and Map Section */}
          <ContactFormSection
            formTitle={contactFormData.formTitle}
            mapTitle={contactFormData.mapTitle}
            address={contactFormData.address}
            serviceOptions={contactFormData.serviceOptions}
            officeHours={contactFormData.officeHours}
            emergencyText={contactFormData.emergencyText}
          />
        </div>
      </section>

      {/* General FAQ Section */}
      <FAQSection title={contactFAQData.title} faqs={contactFAQData.faqs} />
    </>
  );
}
