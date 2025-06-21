import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import '@/styles/accordion.css';
import FAQSchema from '@/components/seo/FAQSchema';

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQAccordionSectionProps = {
  title: string;
  subtitle?: string;
  faqs: FAQItem[];
  backgroundColor?: string;
};

const FAQAccordionSection = ({
  title,
  subtitle,
  faqs,
  backgroundColor = 'bg-gray-50',
}: FAQAccordionSectionProps) => {
  return (
    <section className={`py-16 ${backgroundColor}`}>
      {/* Add structured FAQ data for rich snippets in search results */}
      <FAQSchema faqs={faqs} title={title} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-gray-600 text-center mb-12">{subtitle}</p>}
        <div className="text-left">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="custom-accordion-item">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 py-4 px-4 text-left custom-accordion-trigger">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-600 text-left custom-accordion-content">
                  <div className="py-3">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordionSection;
