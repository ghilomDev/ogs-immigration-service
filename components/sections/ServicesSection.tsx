import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

type ServiceItemProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
};

const ServiceItem = ({ icon: Icon, title, description, link = '/services' }: ServiceItemProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-[#5046E5]" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={link}
          className="text-[#5046E5] hover:text-blue-800 font-medium inline-flex items-center"
        >
          Learn More <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </CardContent>
    </Card>
  );
};

export type ServicesSectionProps = {
  title: string;
  services: ServiceItemProps[];
  backgroundColor?: string; // Optional background color for the section
};

const ServicesSection = ({ title, services, backgroundColor }: ServicesSectionProps) => {
  return (
    <section id="services" className={`py-16 bg-gray-50 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
