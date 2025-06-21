"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, Shield, Languages, Plane, Users, Building, Award, LucideIcon } from "lucide-react";

type CenteredServiceItemProps = {
  iconName: string; // Changed from icon: React.ElementType
  title: string;
  description: string;
  link?: string;
  iconBgColor?: string;
  iconTextColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  buttonHoverBgColor?: string;
};

// A mapping of icon names to Lucide icon components
const iconMap: Record<string, LucideIcon> = {
  FileText,
  Shield,
  Languages,
  Plane,
  Users,
  Building,
  Award
};

const CenteredServiceItem = ({ 
  iconName, 
  title, 
  description, 
  link = "/services",
  iconBgColor = "bg-sky-100",
  iconTextColor = "text-sky-600",
  buttonColor = "border-sky-600",
  buttonTextColor = "text-sky-600",
  buttonHoverBgColor = "hover:bg-sky-50"
}: CenteredServiceItemProps) => {
  // Get the icon component from the map, or use Users as default
  const Icon = iconMap[iconName] || Users;

  return (
    <Card className="text-center hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className={`w-16 h-16 ${iconBgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
          <Icon className={`w-8 h-8 ${iconTextColor}`} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <Link href={link}>
          <Button 
            variant="outline" 
            size="sm" 
            className={`${buttonColor} ${buttonTextColor} ${buttonHoverBgColor}`}
          >
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export type CenteredServicesSectionProps = {
  title: string;
  services: CenteredServiceItemProps[];
  backgroundColor?: string;
  columns?: "two" | "three" | "four";
};

const CenteredServicesSection = ({ 
  title, 
  services,
  backgroundColor = "bg-gray-50",
  columns = "three"
}: CenteredServicesSectionProps) => {
  
  // Determine column classes based on the columns prop
  const columnClasses = {
    two: "md:grid-cols-1 lg:grid-cols-2",
    three: "md:grid-cols-2 lg:grid-cols-3",
    four: "md:grid-cols-2 lg:grid-cols-4"
  };
  
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          {title}
        </h2>
        <div className={`grid ${columnClasses[columns]} gap-8`}>
          {services.map((service, index) => (
            <CenteredServiceItem
              key={index}
              iconName={service.iconName}
              title={service.title}
              description={service.description}
              link={service.link}
              iconBgColor={service.iconBgColor}
              iconTextColor={service.iconTextColor}
              buttonColor={service.buttonColor}
              buttonTextColor={service.buttonTextColor}
              buttonHoverBgColor={service.buttonHoverBgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CenteredServicesSection;