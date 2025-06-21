import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export type AddToContactsSectionProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  vcfPath?: string;
  vcfFilename?: string;
  compatibilityNote?: string;
  backgroundColor?: string;
};

const AddToContactsSection = ({
  title = 'Save Our Contact Information',
  description = 'Add OGS Immigration Services to your contacts with one tap for easy access to our services.',
  buttonText = 'Add to Contacts',
  vcfPath = '/contacts/OGS-Contact.vcf',
  vcfFilename = 'OGS-Immigration-Services.vcf',
  compatibilityNote = 'Compatible with iPhone, Android, and all major contact apps',
  backgroundColor = 'bg-gradient-to-r from-blue-50 to-purple-50',
}: AddToContactsSectionProps) => {
  return (
    <div className="text-center mb-16">
      <div className={`${backgroundColor} rounded-lg p-8`}>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <a href={vcfPath} download={vcfFilename}>
          <Button className="bg-[#EB6769] hover:bg-[#E85D5B] text-white px-8 py-3 text-lg">
            <Phone className="w-5 h-5 mr-2" />
            {buttonText}
          </Button>
        </a>
        <p className="text-sm text-gray-500 mt-3">{compatibilityNote}</p>
      </div>
    </div>
  );
};

export default AddToContactsSection;
