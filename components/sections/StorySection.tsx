import React from "react";

export type StorySectionProps = {
  title: string;
  paragraphs: string[];
  backgroundColor?: string;
  textAlign?: string;
  maxWidth?: string;
};

const StorySection = ({ 
  title, 
  paragraphs,
  backgroundColor = "bg-gray-50",
  textAlign = "text-center",
  maxWidth = "max-w-4xl"
}: StorySectionProps) => {
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 ${textAlign}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {title}
        </h2>
        {paragraphs.map((paragraph, index) => (
          <p 
            key={index} 
            className={`text-lg text-gray-600 ${
              index < paragraphs.length - 1 ? "mb-6" : ""
            }`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default StorySection;