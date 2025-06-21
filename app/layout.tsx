import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeadContent from '@/components/HeadContent';
import Image from 'next/image';
import './globals.css';
import '@/styles/accordion.css';
import { rootMetadata } from '@/lib/seo';

// Use the enhanced SEO metadata from our seo.ts file
export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
