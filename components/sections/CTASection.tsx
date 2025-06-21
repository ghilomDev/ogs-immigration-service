import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export type CTASectionProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundColor?: string;
  buttonColor?: string;
  buttonHoverColor?: string;
  textColor?: string;
};

const CTASection = ({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundColor = "bg-[#5046E5]",
  buttonColor = "bg-[#EB6769]",
  buttonHoverColor = "hover:bg-[#E85D5B]",
  textColor = "text-white"
}: CTASectionProps) => {
  return (
    <section className={`py-16 ${backgroundColor} ${textColor}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl mb-8 text-blue-100">{description}</p>
        <Link href={buttonLink}>
          <Button 
            size="lg" 
            className={`${buttonColor} ${buttonHoverColor} text-white px-8 py-3 text-lg`}
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;