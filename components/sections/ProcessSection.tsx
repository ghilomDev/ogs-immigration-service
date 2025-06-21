import React from 'react';

type ProcessStepProps = {
  number: number;
  title: string;
  description: string;
};

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-[#5046E5] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export type ProcessSectionProps = {
  title: string;
  steps: ProcessStepProps[];
  backgroundColor?: string;
};

const ProcessSection = ({ title, steps, backgroundColor = 'bg-gray-50' }: ProcessSectionProps) => {
  return (
    <section id="process" className={`py-16 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
