import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StaticImageData } from "next/image";

export type FounderSectionProps = {
  badgeText: string;
  title: string;
  paragraphs: string[];
  imageSrc: string | StaticImageData;
  imageAlt: string;
  buttonText?: string;
  buttonLink?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
};

const FounderSection = ({
  badgeText,
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  buttonText,
  buttonLink = "/schedule",
  buttonColor = "bg-[#5046E5]",
  buttonHoverColor = "hover:bg-blue-800"
}: FounderSectionProps) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={500}
                className="w-full h-full object-cover"
                style={{ objectPosition: '0% 20%' }}
              />
            </div>
          </div>
          <div>
            <Badge className="mb-4 bg-blue-100 text-blue-800">{badgeText}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`${index === 0 ? "text-lg" : ""} text-gray-600 ${
                  index < paragraphs.length - 1 ? "mb-6" : "mb-8"
                }`}
              >
                {paragraph}
              </p>
            ))}
            {buttonText && (
              <Button className={`${buttonColor} ${buttonHoverColor} text-white`}>
                {buttonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;