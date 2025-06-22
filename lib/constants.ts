import {
  Shield,
  Users,
  CheckCircle,
  Phone,
  FileText,
  Languages,
  Plane,
  Building,
  Heart,
  Award,
} from 'lucide-react';
import mogos from '@/public/images/mogos-founder-new.jpeg';
// Why Choose Us Section data
export const whyChooseUsData = {
  title: 'Why Choose OGS Immigration Services?',
  features: [
    {
      icon: Shield,
      title: 'Expert Legal Guidance',
      description: 'Years of experience in immigration law with proven track record of success.',
    },
    {
      icon: Users,
      title: 'Personalized Approach',
      description: 'Every case is unique. We provide tailored solutions for your specific needs.',
    },
    {
      icon: CheckCircle,
      title: 'Proven Track Record',
      description:
        'Hundreds of successful cases with high approval rates across all service areas.',
    },
    {
      icon: Phone,
      title: 'Transparent Communication',
      description: 'Clear updates throughout your case with responsive support when you need it.',
    },
  ],
};

// About page Why Choose Us data
export const aboutWhyChooseUsData = {
  title: 'Why Choose OGS Immigration Services?',
  services: [
    {
      icon: FileText,
      title: 'USCIS Forms Mastery',
      description:
        'Comprehensive assistance with all types of USCIS forms, ensuring accuracy and completeness for optimal application success.',
    },
    {
      icon: Shield,
      title: 'Dedicated Asylum Support',
      description:
        'Expert guidance and advocacy for asylum seekers, offering compassionate guidance and expertise throughout the complex procedures.',
    },
    {
      icon: Languages,
      title: 'Certified Translations',
      description:
        'Accurate and certified translation services for all official documents, recognized by immigration authorities.',
    },
    {
      icon: Plane,
      title: 'Visa Application Expertise',
      description:
        'Thorough support for various visa applications, from tourist to employment-based visas, ensuring compliance with all requirements.',
    },
    {
      icon: Users,
      title: 'Personalized Consultations',
      description:
        'One-on-one consultations tailored to your specific situation, providing personalized strategies and clear next steps.',
    },
    {
      icon: Phone,
      title: 'Responsive Communication',
      description:
        'Clear and timely communication throughout your case, keeping you informed and confident throughout the process.',
    },
  ],
};

export const additionalServicesData = [
  {
    iconName: 'Users',
    title: 'Family-Based Immigration',
    description:
      'Uniting families through accurate form preparation and submission for spouse, parent, and child immigration petitions.',
    link: '/services/family',
  },
  {
    iconName: 'Building',
    title: 'Employment Visas',
    description:
      'Expert support for work-based immigration including skilled professionals, investors, and temporary workers.',
    link: '/services/employment',
  },
  {
    iconName: 'Award',
    title: 'Citizenship & Naturalization',
    description:
      'Comprehensive assistance with the naturalization process—from eligibility checks to interview prep and oath ceremony support.',
    link: '/services/citizenship',
  },
];

export const detailedServicesData = [
  {
    iconName: 'FileText',
    title: 'USCIS Form Preparation',
    badgeText: 'Most Popular',
    badgeColor: 'green',
    description:
      'Expert assistance with a wide range of USCIS and immigration forms, ensuring accuracy and timely submission for a smooth application process.',
    features: [
      { text: 'Form I-129F – Petition for Alien Fiancé(e)' },
      { text: 'Form I-130 – Petition for Alien Relative' },
      { text: 'Form I-131 – Application for Travel Document' },
      { text: 'Form I-485 – Application to Register Permanent Residence or Adjust Status' },
      { text: 'Form I-589 – Application for Asylum and Withholding of Removal' },
      { text: 'Form I-864 – Affidavit of Support' },
      { text: 'Form N-400 – Application for Naturalization' },
      { text: 'Form I-765 – Application for Employment Authorization' },
      { text: 'Form DS-160 – Nonimmigrant Visa Application' },
      { text: 'Form DS-260 – Immigrant Visa Application' },
    ],
    processingTime: '1–2 weeks processing',
    // learnMoreHref: "/services/forms",
    checklistNote: '[Checklist for each form – coming soon]',
    feesNote: '[Government filing fees + MERCCY.COM service fees – to be added]',
  },
  {
    iconName: 'Shield',
    title: 'Asylum Case Support',
    badgeText: 'Specialized Care',
    badgeColor: 'blue',
    description:
      'Compassionate and thorough support for asylum cases within the U.S., helping you compile and submit a strong application package with dignity.',
    features: [
      { text: 'Complete Form I-589 asylum application' },
      { text: 'Document drafting and organization' },
      { text: 'Guidance on required personal statements and evidence' },
      { text: 'Preparation for the USCIS interview' },
      { text: 'Follow-up support and appeal guidance (if needed)' },
    ],
    processingTime: 'Ongoing support',
    // learnMoreHref: "/services/asylum",
    checklistNote: '[Checklist: What the client must provide – to be added]',
    packageNote: '[Details of what an asylum package includes – coming soon]',
  },
  {
    iconName: 'Languages',
    title: 'Certified Document Translation',
    badgeText: 'Fast Turnaround',
    badgeColor: 'purple',
    description:
      'Accurate and certified translations of legal documents for immigration purposes, maintaining linguistic and legal integrity.',
    features: [
      { text: 'Birth and marriage certificates' },
      { text: 'Educational transcripts and diplomas' },
      { text: 'Medical records and police certificates' },
      { text: 'Certified translations accepted by USCIS' },
    ],
    processingTime: '2–5 business days',
    // learnMoreHref: "/services/translation"
  },
  {
    iconName: 'Plane',
    title: 'Visa Assistance',
    badgeText: 'Comprehensive',
    badgeColor: 'orange',
    description:
      'Guidance through various visa application processes, from family-based to employment visas, ensuring accurate documentation and compliance.',
    features: [
      { text: 'Tourist and visitor visas (B-1/B-2)' },
      { text: 'Student visas (F-1, M-1)' },
      { text: 'Employment visas (H-1B, L-1, O-1)' },
      { text: 'Fiancé visas (K-1)' },
    ],
    processingTime: 'Varies by visa type',
    // learnMoreHref: "/services/visas"
  },
];

// Services Section data
export const servicesData = {
  title: 'Our Comprehensive Immigration Services',
  services: [
    {
      icon: FileText,
      title: 'USCIS Forms Preparation',
      description:
        'Expert assistance with all USCIS forms, ensuring accuracy and timely submission for a smooth application process.',
    },
    {
      icon: Shield,
      title: 'Asylum Case Support',
      description:
        'Compassionate and thorough support for asylum cases, helping you navigate complex legal requirements with dignity.',
    },
    {
      icon: Languages,
      title: 'Certified Document Translation',
      description:
        'Accurate and certified translations of legal documents for immigration purposes, maintaining linguistic integrity.',
    },
    {
      icon: Plane,
      title: 'Visa Application Assistance',
      description:
        'Guidance through various visa application processes, from family-based to employment visas, ensuring compliance.',
    },
    {
      icon: Users,
      title: 'Family-Based Immigration',
      description:
        'Uniting families through precise application support for spouse, parent, and child visas.',
    },
    {
      icon: Building,
      title: 'Employment Visas',
      description:
        'Navigating work-based immigration options for professionals, skilled workers, and investors.',
    },
  ],
};

// Services page Process Section data
export const servicesProcessData = {
  title: 'How We Work With You',
  steps: [
    {
      number: 1,
      title: 'Free Consultation',
      description:
        'We start with a comprehensive consultation to understand your unique situation and immigration goals.',
    },
    {
      number: 2,
      title: 'Strategy Development',
      description:
        'We develop a personalized strategy and timeline tailored to your specific case requirements.',
    },
    {
      number: 3,
      title: 'Document Preparation',
      description:
        'We meticulously prepare all necessary documentation and forms with attention to every detail.',
    },
    {
      number: 4,
      title: 'Ongoing Support',
      description:
        'We provide continuous support throughout the process, keeping you informed every step of the way.',
    },
  ],
};

// Process Section data
export const processData = {
  title: 'Our Simple Process',
  steps: [
    {
      number: 1,
      title: 'Initial Consultation',
      description:
        'Book a confidential consultation to discuss your immigration goals and assess your case.',
    },
    {
      number: 2,
      title: 'Case Preparation',
      description: 'We start gathering and preparing all necessary documentation for your case.',
    },
    {
      number: 3,
      title: 'Submission & Follow-up',
      description:
        'Your application is submitted, and we monitor progress while keeping you informed.',
    },
    {
      number: 4,
      title: 'Successful Resolution',
      description:
        'We work tirelessly towards a favorable outcome and celebrate your success with you.',
    },
  ],
};

// Testimonials Section data
export const testimonialsData = {
  title: 'What Our Clients Say',
  testimonials: [
    {
      content:
        '"OGS Immigration Services provided exceptional support during my green card application. Their expertise and attention to detail were truly remarkable. I highly recommend them!"',
      name: 'Aisha K.',
      role: 'Green Card Recipient',
      rating: 5,
    },
    {
      content:
        '"Mogos R. and his team made my asylum process feel less daunting. Their compassion and professional guidance were invaluable. Thank you for everything!"',
      name: 'Carlos M.',
      role: 'Asylum Case',
      rating: 4,
    },
    {
      content:
        '"Professional, knowledgeable, and caring. OGS helped me reunite with my family through the family-based immigration process. Forever grateful!"',
      name: 'Maria S.',
      role: 'Family Reunification',
      rating: 5,
    },
  ],
};

// About page testimonials data
export const aboutTestimonialsData = {
  title: 'What Our Clients Say',
  testimonials: [
    {
      content:
        '"I received amazing help with my asylum application. Mogos R. explained every step clearly and made the process so smooth. Highly recommended!"',
      name: 'Mekdes T.',
      role: 'Asylum Application',
      rating: 5,
    },
    {
      content:
        '"The translation and notary services were fast and accurate. I used the documents for my USCIS interview with no issues. Thank you!"',
      name: 'Abel H.',
      role: 'Document Translation',
      rating: 4,
    },
    {
      content:
        '"Mogos and his team helped me apply for my mom\'s green card. They were professional, kind, and always available. I\'m very grateful!"',
      name: 'Selam B.',
      role: 'Family-Based Immigration',
      rating: 5,
    },
    {
      content:
        '"I needed interpretation for my immigration case. The service was on time, professional, and respectful. Excellent support!"',
      name: 'Tesfay G.',
      role: 'Interpretation Services',
      rating: 4,
    },
    {
      content:
        '"I trusted them with my adjustment of status, and I\'m so glad I did. Everything was done perfectly. They care about their clients!"',
      name: 'Hanna A.',
      role: 'Adjustment of Status',
      rating: 5,
    },
    {
      content:
        '"OGS Immigration Services made my complex immigration case feel manageable. Mogos R. and his team were incredibly knowledgeable and provided clear guidance throughout the entire process."',
      name: 'Maria S.',
      role: 'Family-Based Immigration',
      rating: 4,
    },
  ],
};

// CTA Section data
export const ctaData = {
  title: 'Ready to Take the Next Step?',
  description:
    'Contact us today for a personalized consultation and let us help you achieve your immigration dreams.',
  buttonText: 'Get a Free Consultation',
  buttonLink: '/schedule',
};

// Services page CTA Section data
export const servicesCTAData = {
  title: 'Ready to Start Your Immigration Journey?',
  description:
    'Contact us today for a personalized consultation and let us guide you through every step.',
  buttons: [
    {
      text: 'Schedule Your Consultation',
      link: '/schedule',
      className: 'bg-[#EB6769] hover:bg-[#E85D5B] text-white px-8 py-3 text-lg',
    },
    {
      text: 'Call (571) 351-3940',
      variant: 'outline' as const, // Using a specific variant from the allowed values
      className: 'border-white text-gray-500 hover:bg-white hover:text-[#5046E5] px-8 py-3 text-lg',
    },
  ],
};

// Story Section data
export const storyData = {
  title: 'Our Story: A Journey of Dedication and Support',
  paragraphs: [
    'Founded on the principle of providing accessible and compassionate immigration support, OGS Immigration Services began as a vision to help individuals and families achieve their American dreams. Our journey started with a deep understanding of the challenges faced by immigrants and a commitment to offering expert guidance.',
    "We understand that behind every immigration case is a human story - dreams of reuniting with family, seeking safety, pursuing education, or building a new life. This understanding drives our approach, combining legal expertise with genuine care for each client's unique circumstances.",
    "Today, we continue to grow and evolve, always maintaining our core values of integrity, compassion, and excellence. Our success is measured not just by case approvals, but by the lives we've helped transform and the families we've helped reunite.",
  ],
};

// Founder Section data
export const founderData = {
  badgeText: 'Meet Our Founder',
  title: 'Meet Our Founder, Mogos R.',
  paragraphs: [
    'Mogos R., the founder of OGS Immigration Services, is a dedicated and compassionate professional with a profound commitment to assisting individuals and families navigate the complex landscape of immigration law.',
    'With years of experience and a deep understanding of USCIS procedures, Mogos brings both professional expertise and personal empathy to every case. His journey started with a desire to bridge the gap between complex legal requirements and the human stories behind each application.',
    'Mogos is committed to empathy and meticulous attention to detail, ensuring every client receives personalized and effective support. Located in Falls Church, Virginia, he is perfectly positioned to serve clients throughout the Washington D.C. metropolitan area and beyond.',
  ],
  imageSrc: '/images/mogos-founder-new.jpeg',
  imageAlt: 'Mogos R., Founder of OGS Immigration Services',
  buttonText: 'Schedule a Meeting',
};

// Mission and Values Section data
export const missionValuesData = {
  missionTitle: 'Our Mission: Empowering Your Immigration Journey',
  missionParagraphs: [
    'Our mission is to provide exceptional immigration legal support, ensuring every client receives the guidance and assistance they need to navigate the complex immigration system successfully.',
    'We are committed to making immigration services accessible, understandable, and effective for everyone, regardless of their background or circumstances. Our goal is to turn the complex into the achievable, one case at a time.',
  ],
  valuesTitle: 'Our Core Values',
  values: [
    {
      icon: Heart,
      title: 'Empathy & Compassion',
      description:
        'Understanding the human stories and treating every client with dignity and understanding the unique challenges they face.',
    },
    {
      icon: Award,
      title: 'Expertise & Precision',
      description:
        'Delivering the highest quality legal advice and meticulous attention to detail in every case we handle.',
    },
    {
      icon: CheckCircle,
      title: 'Clarity & Simplicity',
      description:
        'Simplifying complex immigration processes and providing clear communication throughout your journey.',
    },
  ],
};

// Contact Info Section data
export const contactInfoData = [
  {
    iconName: 'MapPin',
    title: 'Our Address',
    content: '3825 S George Mason Dr, Suite C\nFalls Church, VA 22041',
  },
  {
    iconName: 'Phone',
    title: 'Call Us',
    content: '+1 (571) 351-3940',
  },
  {
    iconName: 'Mail',
    title: 'Email Us',
    content: 'openglobesolutions@gmail.com',
  },
];

// Add to Contacts Section data
export const addToContactsData = {
  title: 'Save Our Contact Information',
  description:
    'Add OGS Immigration Services to your contacts with one tap for easy access to our services.',
  buttonText: 'Add to Contacts',
  vcfPath: '/contacts/OGS-Contact.vcf',
  vcfFilename: 'OGS-Immigration-Services.vcf',
  compatibilityNote: 'Compatible with iPhone, Android, and all major contact apps',
};

// Contact Form Section data
export const contactFormData = {
  formTitle: 'Send Us a Message',
  mapTitle: 'Find Us Here',
  address: '3825 S George Mason Dr, Suite C\nFalls Church, VA 22041',
  serviceOptions: [
    { value: 'uscis-forms', label: 'USCIS Form Preparation' },
    { value: 'asylum', label: 'Asylum Case Support' },
    { value: 'translation', label: 'Document Translation' },
    { value: 'visa', label: 'Visa Assistance' },
    { value: 'family', label: 'Family-Based Immigration' },
    { value: 'employment', label: 'Employment Visas' },
    { value: 'consultation', label: 'General Consultation' },
  ],
  officeHours: [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'By Appointment Only' },
  ],
  emergencyText: 'Emergency consultations available. Call us for urgent immigration matters.',
};

// Contact FAQ Section data
export const contactFAQData = {
  title: 'Frequently Asked Questions',
  faqs: [
    {
      question: 'What services does OGS Immigration Services provide?',
      answer:
        'We provide comprehensive immigration services including USCIS form preparation, asylum case support, certified document translation, visa assistance, family-based immigration, and employment visa support.',
    },
    {
      question: 'How can I book a consultation?',
      answer:
        'You can book a consultation by calling us at (571) 351-3940, emailing us at openglobesolutions@gmail.com, or using the contact form above. We offer both in-person and virtual consultations.',
    },
    {
      question: 'Do you offer services for all immigration types?',
      answer:
        'Yes, we handle a wide range of immigration cases including family-based petitions, employment visas, asylum cases, naturalization, and various USCIS forms. Contact us to discuss your specific needs.',
    },
    {
      question: 'What languages do you speak?',
      answer:
        'Our team is multilingual and can assist clients in various languages. We also provide certified translation services for documents in multiple languages.',
    },
  ],
};

// USCIS and Translation FAQ Section data
export const uscisTranslationFAQData = {
  title: 'USCIS Forms & Translation Services',
  subtitle:
    'Get answers to common questions about our USCIS form assistance and document translation services',
  faqs: [
    {
      question: 'What types of USCIS forms can you help with?',
      answer:
        'We assist with all USCIS forms including but not limited to: I-485 (Adjustment of Status), I-130 (Family-Based Petitions), I-765 (Work Authorization), I-751 (Remove Conditions on Residence), I-90 (Green Card Renewal/Replacement), N-400 (Naturalization), I-589 (Asylum), and many more. Our team has extensive experience ensuring forms are completed accurately and effectively.',
    },
    {
      question: 'How does your document translation service work?',
      answer:
        'Our certified translation service includes translating your documents from any language into English (or vice versa), certification by professional translators, formatting that matches the original document, and a signed certificate of accuracy that meets USCIS requirements. We handle all types of documents including birth certificates, marriage certificates, academic records, and legal documents.',
    },
    {
      question: 'Are your translations accepted by USCIS and other government agencies?',
      answer:
        'Yes, all our translations come with a certificate of accuracy and are fully compliant with USCIS, State Department, and other government agency requirements. Our translations have a 100% acceptance rate with immigration authorities.',
    },
    {
      question: 'How quickly can you translate my documents?',
      answer:
        'Our standard turnaround time for document translations is 2-3 business days. We also offer expedited service for urgent needs, with same-day or next-day delivery options available for an additional fee.',
    },
    {
      question: 'What makes your USCIS form preparation service different from online DIY options?',
      answer:
        'Unlike generic online form-filling services, we provide personalized assistance tailored to your unique situation. We review your entire case, identify potential issues before submission, ensure all supporting documentation is properly prepared, and provide guidance on the entire filing process. Our expertise significantly reduces the risk of delays, RFEs (Requests for Evidence), or denials.',
    },
    {
      question: 'Do you offer ongoing support after my USCIS forms are submitted?',
      answer:
        "Yes, our support doesn't end with form submission. We provide guidance throughout the entire process, help you prepare for interviews if required, respond to any USCIS communications including RFEs, and keep you informed about your case status until resolution.",
    },

    // Additional FAQs
    {
      question: 'Can you help if I’ve already submitted my USCIS form and received an RFE?',
      answer:
        'Absolutely. We can review your RFE (Request for Evidence), help you understand what is being asked, gather the necessary documents, and prepare a professional and timely response to strengthen your case.',
    },
    {
      question: 'Do you offer services in languages other than English?',
      answer:
        'Yes. Our team includes certified translators for over 50 languages. We can provide document translations and bilingual support for clients whose primary language is not English.',
    },
    {
      question: 'Is my personal information safe with your service?',
      answer:
        'Yes. We follow strict confidentiality and data security protocols. Your personal documents and information are handled by trained professionals and are never shared with third parties.',
    },
    {
      question: 'What is your pricing for translation and USCIS form preparation?',
      answer:
        'Our pricing depends on the type and complexity of the form or document. We offer transparent, upfront pricing with no hidden fees. Contact us for a free consultation and personalized quote.',
    },
    {
      question: 'Can you help me if I’m located outside the United States?',
      answer:
        'Yes. Our services are fully remote and accessible from anywhere in the world. We work with clients internationally and ensure all documents meet U.S. immigration standards.',
    },
  ],
};

// Schedule page content
export const scheduleHeroContent = {
  title: 'Schedule a Consultation',
  description:
    'Book a consultation with our immigration experts to get personalized guidance on your immigration needs.',
  buttonText: 'View Availability',
  buttonLink: '#consultation-scheduler',
  heroClass: 'hero-schedule',
  isOverlay: true,
};

export const scheduleFounderContent = {
  badgeText: 'Expertise You Can Trust',
  title: 'Expert Immigration Guidance',
  paragraphs: [
    'With years of specialized experience in immigration law, our team provides expert guidance and support for all your immigration needs.',
    "We understand that each case is unique, and we're dedicated to providing personalized solutions tailored to your specific situation.",
    'Choose a time for your consultation, and let us help you navigate the complex immigration process with confidence and peace of mind.',
  ],
  imageSrc: mogos,
  imageAlt: 'Immigration consultation session',
  buttonText: 'Book Your Consultation',
  buttonLink: '#consultation-scheduler',
  buttonColor: 'bg-[#EB6769]',
  buttonHoverColor: 'hover:bg-[#E85D5B]',
};
