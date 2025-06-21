import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import { generatePageMetadata } from '@/lib/seo';
import {
  whyChooseUsData,
  servicesData,
  processData,
  testimonialsData,
  ctaData,
  uscisTranslationFAQData,
} from '@/lib/constants';
import {
  FileText,
  Shield,
  Languages,
  Plane,
  Users,
  Building,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  UserPlus,
} from 'lucide-react';
import Link from 'next/link';
import FAQAccordionSection from '@/components/sections/FAQAccordionSection';

// Generate page-specific metadata for better SEO
export const metadata: Metadata = generatePageMetadata(
  'OGS Immigration Services | Expert Immigration Assistance in Falls Church, VA',
  'Professional assistance with USCIS forms, asylum applications, certified document translation, and comprehensive immigration services in Falls Church, VA. Free consultations available.',
  '/api/og?title=OGS+Immigration+Services&type=home',
  '/'
);

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            Your Trusted Partner in
            <br />
            Immigration Legal Services
          </>
        }
        description="Navigating immigration law can be complex. We provide clear, compassionate, and professional guidance every step of the way."
        buttonText="Book a Free Consultation"
        useBookingModal={true}
      />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection title={whyChooseUsData.title} features={whyChooseUsData.features} />

      {/* Services Section */}
      <ServicesSection title={servicesData.title} services={servicesData.services} />

      {/* Process Section */}
      <ProcessSection title={processData.title} steps={processData.steps} />

      {/* Testimonials Section */}
      <TestimonialsSection
        title={testimonialsData.title}
        testimonials={testimonialsData.testimonials}
      />

      {/* CTA Section */}
      <CTASection
        title={ctaData.title}
        description={ctaData.description}
        buttonText={ctaData.buttonText}
        buttonLink={ctaData.buttonLink}
      />
      {/* USCIS and Translation FAQ Accordion Section */}
      <FAQAccordionSection
        title={uscisTranslationFAQData.title}
        subtitle={uscisTranslationFAQData.subtitle}
        faqs={uscisTranslationFAQData.faqs}
        backgroundColor="bg-white"
      />
    </>
  );
}
