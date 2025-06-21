import { DetailedServiceCard, DetailedServiceCardProps } from './DetailedServiceCard';
import React from 'react';

export type DetailedServicesSectionProps = {
  title: string;
  subtitle?: string;
  services: DetailedServiceCardProps[];
};

export function DetailedServicesSection({
  title,
  subtitle,
  services,
}: DetailedServicesSectionProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <DetailedServiceCard
              key={index}
              iconName={service.iconName}
              title={service.title}
              badgeText={service.badgeText}
              badgeColor={service.badgeColor}
              description={service.description}
              features={service.features}
              processingTime={service.processingTime}
              learnMoreHref={service.learnMoreHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DetailedServicesSection;
