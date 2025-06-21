import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export type CTAButtonProps = {
  text: string;
  link?: string;
  variant?: "default" | "outline" | "secondary";
  className?: string;
  onClick?: () => void;
};

export type EnhancedCTASectionProps = {
  title: string;
  description: string;
  buttons: CTAButtonProps[];
  backgroundColor?: string;
  textColor?: string;
  descriptionColor?: string;
  buttonLayout?: "row" | "column";
};

const EnhancedCTASection = ({
  title,
  description,
  buttons,
  backgroundColor = "bg-[#5046E5]",
  textColor = "text-white",
  descriptionColor = "text-blue-100",
  buttonLayout = "row"
}: EnhancedCTASectionProps) => {
  return (
    <section className={`py-16 ${backgroundColor} ${textColor}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className={`text-xl mb-8 ${descriptionColor}`}>{description}</p>
        <div className={`flex ${buttonLayout === "row" ? "flex-col sm:flex-row" : "flex-col"} gap-4 justify-center`}>
          {buttons.map((button, index) => (
            button.link ? (
              <Link href={button.link} key={index}>
                <Button 
                  size="lg" 
                  variant={button.variant || "default"}
                  className={button.className || ""}
                  onClick={button.onClick}
                >
                  {button.text}
                </Button>
              </Link>
            ) : (
              <Button 
                key={index}
                size="lg" 
                variant={button.variant || "default"}
                className={button.className || ""}
                onClick={button.onClick}
              >
                {button.text}
              </Button>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedCTASection;