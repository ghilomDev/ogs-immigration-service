import React from 'react';
import { LucideIcon } from 'lucide-react';

type ValueItemProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const ValueItem = ({ icon: Icon, title, description }: ValueItemProps) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
        <Icon className="w-4 h-4 text-[#5046E5]" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export type MissionValuesSectionProps = {
  missionTitle: string;
  missionParagraphs: string[];
  valuesTitle: string;
  values: ValueItemProps[];
  backgroundColor?: string;
};

const MissionValuesSection = ({
  missionTitle,
  missionParagraphs,
  valuesTitle,
  values,
  backgroundColor = '',
}: MissionValuesSectionProps) => {
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{missionTitle}</h2>
            {missionParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`${index === 0 ? 'text-lg' : ''} text-gray-600 ${
                  index < missionParagraphs.length - 1 ? 'mb-6' : ''
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{valuesTitle}</h2>
            <div className="space-y-6">
              {values.map((value, index) => (
                <ValueItem
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValuesSection;
