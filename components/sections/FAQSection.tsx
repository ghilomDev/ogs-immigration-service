import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQSectionProps = {
  title: string;
  faqs: FAQItem[];
  backgroundColor?: string;
};

const FAQSection = ({
  title,
  faqs,
  backgroundColor = "bg-gray-50"
}: FAQSectionProps) => {
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{title}</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;