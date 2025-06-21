import React from "react";
import { LucideIcon } from "lucide-react";

type FeatureProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const Feature = ({ icon: Icon, title, description }: FeatureProps) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-sky-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export type WhyChooseUsSectionProps = {
  title: string;
  features: FeatureProps[];
};

const WhyChooseUsSection = ({ title, features }: WhyChooseUsSectionProps) => {
  return (
    <section id="why-choose-us" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;