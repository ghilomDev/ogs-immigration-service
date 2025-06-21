'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, UserPlus } from 'lucide-react';
import { ActiveLink } from '@/components/active-link';
import { usePathname } from 'next/navigation';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-[#5046E5]">
            <Menu className="h-10 w-10" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[250px] sm:w-[300px]">
          {/* Add SheetTitle for accessibility */}
          <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>

          <div className="flex flex-col gap-6 h-full">
            <div className="flex justify-between items-center border-b pb-4">
              <span className="text-lg font-bold text-[#5046E5]">OGS Immigration</span>
            </div>

            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={handleLinkClick}
                className={`px-2 py-1 rounded-md ${pathname === '/' ? 'bg-[#5046E5]/10 font-medium text-[#5046E5]' : 'text-gray-600 hover:text-[#5046E5]'}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={handleLinkClick}
                className={`px-2 py-1 rounded-md ${pathname === '/about' ? 'bg-[#5046E5]/10 font-medium text-[#5046E5]' : 'text-gray-600 hover:text-[#5046E5]'}`}
              >
                About
              </Link>
              <Link
                href="/services"
                onClick={handleLinkClick}
                className={`px-2 py-1 rounded-md ${pathname === '/services' ? 'bg-[#5046E5]/10 font-medium text-[#5046E5]' : 'text-gray-600 hover:text-[#5046E5]'}`}
              >
                Services
              </Link>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className={`px-2 py-1 rounded-md ${pathname === '/contact' ? 'bg-[#5046E5]/10 font-medium text-[#5046E5]' : 'text-gray-600 hover:text-[#5046E5]'}`}
              >
                Contact
              </Link>
              <Link
                href="/schedule"
                onClick={handleLinkClick}
                className={`px-2 py-1 rounded-md ${pathname === '/schedule' ? 'bg-[#5046E5]/10 font-medium text-[#5046E5]' : 'text-gray-600 hover:text-[#5046E5]'}`}
              >
                Schedule
              </Link>
            </nav>

            <div className="space-y-4">
              <a href="/contacts/OGS-Contact.vcf" download="Mogos-R-OGS-Immigration.vcf">
                <Button
                  variant="outline"
                  className="w-full border-[#5046E5] text-[#5046E5] hover:bg-[#5046E5] hover:text-white my-3"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add Contact
                </Button>
              </a>
              <Link href="/schedule" onClick={handleLinkClick}>
                <Button className="w-full bg-[#EB6769] hover:bg-[#E85D5B] text-white">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
