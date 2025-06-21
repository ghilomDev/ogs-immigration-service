import React from 'react';
import { FileText, Shield, Languages, Plane, LucideIcon } from 'lucide-react';

interface ExpertiseItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ExpertiseSectionProps {
  title?: string;
  items?: ExpertiseItem[];
}

export default function ExpertiseSection({
  title = 'Our Expertise',
  items = defaultExpertiseItems,
}: ExpertiseSectionProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-[#5046E5]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const defaultExpertiseItems: ExpertiseItem[] = [
  {
    title: 'USCIS Forms Assistance',
    description:
      'Expert guidance and meticulous preparation for all USCIS forms and applications, ensuring accuracy and compliance.',
    icon: FileText,
  },
  {
    title: 'Asylum Case Support',
    description:
      'Compassionate and thorough assistance with asylum cases, navigating complex asylum applications and legal processes.',
    icon: Shield,
  },
  {
    title: 'Visa Application Help',
    description:
      'Comprehensive assistance with various visa applications, from visitor to work visas, simplifying the process.',
    icon: Plane,
  },
  {
    title: 'Certified Translations',
    description:
      'Accurate and certified translation services for legal documents, ensuring recognition by official bodies.',
    icon: Languages,
  },
];
