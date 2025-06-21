import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TikTok from '@/components/icons/TikTok';
import FooterBookingButton from '@/components/FooterBookingButton';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-l from-[#3a4b6a] to-[#1b263d] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-auto h-auto">
                <Image
                  src="/images/logo.svg"
                  alt="OGS Immigration Services Logo"
                  width={100}
                  height={10}
                  className="rounded-lg bg-white p-2"
                />
              </div>
            </div>
            <p className="text-gray-100 mb-4">
              Your trusted partner in immigration legal services, providing expert guidance with
              compassion and integrity.
            </p>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/OGSImmigrationServices"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <div className="w-9 h-9 bg-white bg-opacity-20 hover:bg-[#1877F2] rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </div>
              </a>
              <a
                href="https://www.instagram.com/ogsimmigration"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <div className="w-9 h-9 bg-white bg-opacity-20 hover:bg-[#E1306C] rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/ogs-immigration-services"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <div className="w-9 h-9 bg-white bg-opacity-20 hover:bg-[#0A66C2] rounded-full flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
              </a>
              <a
                href="https://www.tiktok.com/@ogsimmigration"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <div className="w-9 h-9 bg-white bg-opacity-20 hover:bg-[#000000] rounded-full flex items-center justify-center transition-colors">
                  <TikTok className="w-5 h-5" />
                </div>
              </a>
              <a
                href="https://x.com/OGSImmigration"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <div className="w-9 h-9 bg-white bg-opacity-20 hover:bg-[#1DA1F2] rounded-full flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </div>
              </a>
            </div>
            <div className="flex space-x-3">
              <a href="/contacts/OGS-Contact.vcf" download="OGS-Immigration-Services.vcf">
                <Button
                  variant="outline"
                  className="border-white text-[#111827] hover:bg-white hover:text-[#5046E5]"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Add To Contact
                </Button>
              </a>
              <FooterBookingButton />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-100 hover:text-sky-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-100 hover:text-sky-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-100 hover:text-sky-300 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="text-gray-100 hover:text-sky-300 transition-colors"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-100 hover:text-sky-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-100">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">
                  3825 S George Mason Dr, Suite C<br />
                  Falls Church, VA 22041
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a
                  href="tel:+15713513940"
                  className="text-sm text-gray-100 hover:text-sky-300 transition-colors"
                >
                  +1 (571) 351-3940
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a
                  href="mailto:openglobesolutions@gmail.com"
                  className="text-sm text-gray-100 hover:text-sky-300 transition-colors"
                >
                  openglobesolutions@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white border-opacity-30 mt-8 pt-8 text-center text-white">
          <p>&copy; {new Date().getFullYear()} OGS Immigration Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
