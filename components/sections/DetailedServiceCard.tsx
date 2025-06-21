'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Clock,
  CheckCircle,
  FileText,
  Shield,
  Languages,
  Plane,
  Users,
  Building,
  Award,
  LucideIcon,
} from 'lucide-react';
import React from 'react';
import Link from 'next/link';

export type ServiceFeature = {
  text: string;
};

export type DetailedServiceCardProps = {
  iconName: string; // Changed from icon: React.ElementType to iconName: string
  title: string;
  badgeText?: string;
  badgeColor?: 'green' | 'blue' | 'purple' | 'orange' | string;
  description: string;
  features: ServiceFeature[];
  processingTime: string;
  learnMoreHref?: string;
};

const getBadgeColors = (color: string) => {
  switch (color) {
    case 'green':
      return 'bg-green-100 text-green-800';
    case 'blue':
      return 'bg-blue-100 text-blue-800';
    case 'purple':
      return 'bg-purple-100 text-purple-800';
    case 'orange':
      return 'bg-orange-100 text-orange-800';
    default:
      return color;
  }
};

// A mapping of icon names to Lucide icon components
const iconMap: Record<string, LucideIcon> = {
  FileText,
  Shield,
  Languages,
  Plane,
  Users,
  Building,
  Award,
  CheckCircle,
  Clock,
};

export function DetailedServiceCard({
  iconName,
  title,
  badgeText,
  badgeColor = 'green',
  description,
  features,
  processingTime,
  learnMoreHref = '/services',
}: DetailedServiceCardProps) {
  const badgeColorClasses = getBadgeColors(badgeColor);

  // Get the icon component from the map, or use FileText as default
  const Icon = iconMap[iconName] || FileText;

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
            <Icon className="w-8 h-8 text-[#5046E5]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
            {badgeText && <Badge className={`mt-1 ${badgeColorClasses}`}>{badgeText}</Badge>}
          </div>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-gray-700">{feature.text}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            <span>{processingTime}</span>
          </div>
          {/* <Link href={learnMoreHref}>
            <Button 
              variant="outline" 
              className="border-[#5046E5] text-[#5046E5] hover:bg-blue-50"
            >
              Learn More
            </Button>
          </Link> */}
        </div>
      </CardContent>
    </Card>
  );
}
