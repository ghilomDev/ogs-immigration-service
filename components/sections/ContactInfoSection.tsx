"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export type ContactInfoCard = {
  iconName: string;
  title: string;
  content: string;  // Changed from React.ReactNode to string
};

export type ContactInfoSectionProps = {
  cards: ContactInfoCard[];
};

// A mapping of icon names to Lucide icon components
const iconMap: Record<string, React.ElementType> = {
  MapPin,
  Phone,
  Mail,
  Clock
};

// Helper function to clean phone number (remove non-digits)
const cleanPhoneNumber = (phoneNumber: string): string => {
  return phoneNumber.replace(/[^\d]/g, '');
};

// Helper function to format content based on iconName
const formatContent = (iconName: string, content: string) => {
  switch (iconName) {
    case "MapPin":
      return (
        <p>
          {content.split("\n").map((line, i, arr) => (
            <React.Fragment key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      );
    case "Phone":
      return (
        <p>
          <a href={`tel:${cleanPhoneNumber(content)}`} className="hover:text-blue-600">
            {content}
          </a>
        </p>
      );
    case "Mail":
      return (
        <p>
          <a href={`mailto:${content}`} className="hover:text-blue-600">
            {content}
          </a>
        </p>
      );
    default:
      return <p>{content}</p>;
  }
};

const ContactInfoSection = ({ cards }: ContactInfoSectionProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {cards.map((card, index) => {
        const IconComponent = iconMap[card.iconName];
        
        return (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconComponent className="w-8 h-8 text-[#5046E5]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
              <div className="text-gray-600">
                {formatContent(card.iconName, card.content)}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ContactInfoSection;