import Image from 'next/image';
import { Mail, Phone, MapPin, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ActiveLink } from '@/components/active-link';
import { MobileNav } from '@/components/mobile-nav';
import NavigationBookingButton from '@/components/NavigationBookingButton';

export default function Navbar() {
  return (
    <>
      {/* Contact Info Bar */}
      <div className="nav-contact-info">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a
                  href="tel:+15713513940"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  +1 (571) 351-3940
                </a>
              </div>
              <a
                href="mailto:openglobesolutions@gmail.com"
                className="items-center space-x-1 hidden sm:flex hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>openglobesolutions@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Falls Church, VA</span>
              <span className="sm:hidden">VA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky-nav shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="max-w-7xl h-auto">
                <Image
                  src="/images/logo-2.svg"
                  alt="OGS Immigration Services Logo"
                  width={130}
                  height={100}
                  className="rounded-lg"
                />
              </div>
              {/* <span className="text-xl font-bold text-[#5046E5]">OGS Immigration Services</span> */}
            </div>
            <div className="hidden md:flex space-x-8">
              <ActiveLink href="/">Home</ActiveLink>
              <ActiveLink href="/about">About</ActiveLink>
              <ActiveLink href="/services">Services</ActiveLink>
              <ActiveLink href="/schedule">Schedule</ActiveLink>
              <ActiveLink href="/contact">Contact</ActiveLink>
            </div>
            {/* Mobile Navigation */}
            <MobileNav />
            <div className="items-center space-x-3 hidden xl:flex">
              <a href="/contacts/OGS-Contact.vcf" download="Mogos-R-OGS-Immigration.vcf">
                <Button
                  variant="outline"
                  className="border-[#5046E5] text-[#5046E5] hover:bg-[#5046E5] hover:text-white"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add To Contact
                </Button>
              </a>
              <NavigationBookingButton />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
