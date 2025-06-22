import type { Metadata } from 'next';

// Base URL for the website (used for canonical URLs and site maps)
export const baseUrl = 'https://merccy.com';

// Company/website information constants
export const siteInfo = {
  name: 'OGS Immigration Services',
  title: 'OGS Immigration Services | Immigration Assistance in Falls Church, VA',
  description:
    'Expert assistance with USCIS forms, asylum applications, certified document translation, and immigration services in Falls Church, VA. Free consultations available.',
  keywords: [
    'immigration services',
    'USCIS form preparation',
    'document translation',
    'asylum application help',
    'immigration consultant Falls Church',
    'certified translation services',
    'green card application',
    'family-based immigration',
    'adjustment of status',
    'naturalization help',
    'immigration document translation',
    'Virginia immigration assistance',
  ],
  address: {
    street: '3825 S George Mason Dr, Suite C',
    city: 'Falls Church',
    state: 'VA',
    zip: '22041',
    country: 'United States',
    phone: '+15713513940',
    email: 'openglobesolutions@gmail.com',
  },
  // For social media sharing and cards
  social: {
    image: `${baseUrl}/images/og-image.jpg`,
    twitter: '@OGSImmigration',
    facebook: 'OGSImmigrationServices',
  },
  // Opening Hours for schema.org structured data
  openingHours: ['Monday-Friday 09:00-18:00', 'Saturday 10:00-16:00', 'Sunday By Appointment'],
  sameAs: [
    'https://www.facebook.com/OGSImmigrationServices',
    'https://twitter.com/OGSImmigration',
    'https://www.linkedin.com/company/ogs-immigration-services',
  ],
};

// Root metadata for layout.tsx
export const rootMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteInfo.title,
    template: `%s | ${siteInfo.name}`,
  },
  description: siteInfo.description,
  keywords: siteInfo.keywords,
  authors: [
    {
      name: 'Mogos R.',
      url: baseUrl,
    },
  ],
  creator: siteInfo.name,
  publisher: siteInfo.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  // Open Graph metadata
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: siteInfo.title,
    description: siteInfo.description,
    siteName: siteInfo.name,
    images: [
      {
        url: siteInfo.social.image,
        width: 1200,
        height: 630,
        alt: `${siteInfo.name} - Immigration Services`,
      },
    ],
  },
  // Twitter card metadata
  twitter: {
    card: 'summary_large_image',
    title: siteInfo.title,
    description: siteInfo.description,
    site: siteInfo.social.twitter,
    creator: siteInfo.social.twitter,
    images: [siteInfo.social.image],
  },
  // Canonical URL
  alternates: {
    canonical: baseUrl,
  },
  // Robots instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Verification for search engines
  verification: {
    google: 'google-site-verification-code', // Replace with your actual verification code
    yandex: 'yandex-verification-code',
    other: {
      'msvalidate.01': 'bing-verification-code',
    },
  },
  // Region and language
  category: 'immigration services',
  other: {
    'geo.region': 'US-VA',
    'geo.placename': 'Falls Church',
  },
};

// Schema.org structured data for LocalBusiness (JSON-LD)
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: siteInfo.name,
  description: siteInfo.description,
  url: baseUrl,
  telephone: siteInfo.address.phone,
  email: siteInfo.address.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteInfo.address.street,
    addressLocality: siteInfo.address.city,
    addressRegion: siteInfo.address.state,
    postalCode: siteInfo.address.zip,
    addressCountry: siteInfo.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '38.843665',
    longitude: '-77.118662',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '16:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '10:00',
      closes: '14:00',
      description: 'By appointment only',
    },
  ],
  sameAs: siteInfo.sameAs,
  image: siteInfo.social.image,
  priceRange: '$$',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: '38.843665',
      longitude: '-77.118662',
    },
    geoRadius: '50km',
  },
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: '38.843665',
      longitude: '-77.118662',
    },
    geoRadius: '50km',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Immigration Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'USCIS Form Preparation',
          description:
            'Expert assistance with all USCIS forms, ensuring accuracy and timely submission for a smooth application process.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Document Translation',
          description:
            'Accurate and certified translations of legal documents for immigration purposes, maintaining linguistic integrity.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Asylum Case Support',
          description:
            'Compassionate and thorough support for asylum cases, helping you navigate complex legal requirements with dignity.',
        },
      },
    ],
  },
};

// Generate page-specific metadata
export function generatePageMetadata(
  pageTitle: string,
  pageDescription?: string,
  pageImage?: string,
  path?: string
): Metadata {
  // Default to site description if page description is not provided
  const description = pageDescription || siteInfo.description;
  // Default to site image if page image is not provided
  const image = pageImage || siteInfo.social.image;
  // Default to base URL if path is not provided
  const url = path ? `${baseUrl}${path}` : baseUrl;

  return {
    title: pageTitle,
    description,
    openGraph: {
      title: pageTitle,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      title: pageTitle,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}
