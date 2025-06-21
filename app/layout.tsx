import type { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, UserPlus, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import TikTok from "@/components/icons/TikTok"
import { ActiveLink } from '@/components/active-link'
import { MobileNav } from '@/components/mobile-nav'
import NavigationBookingButton from '@/components/NavigationBookingButton'
import FooterBookingButton from '@/components/FooterBookingButton'
import Link from 'next/link'
import './globals.css'
import '@/styles/accordion.css'
import { rootMetadata, localBusinessSchema } from '@/lib/seo'
import Script from 'next/script'

// Use the enhanced SEO metadata from our seo.ts file
export const metadata: Metadata = rootMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured data for better SEO */}
        <Script
          id="schema-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        
        {/* Google Analytics / Tag Manager script would go here */}
      </head>
      <body>
        {/* Contact Info Bar */}
        <div className="nav-contact-info">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-4">
                <a href="tel:+15713513940" className="flex items-center space-x-1">
                  <Phone className="w-4 h-4" />
                  <span>(571) 351-3940</span>
                </a>
                <a href="mailto:openglobesolutions@gmail.com" className="items-center space-x-1 hidden sm:flex">
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
                <div className="w-8 h-8 bg-[#5046E5] rounded-lg flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-sm"></div>
                  </div>
                </div>
                <span className="text-xl font-bold text-[#5046E5]">OGS Immigration Services</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <ActiveLink href="/">Home</ActiveLink>
                <ActiveLink href="/about">About</ActiveLink>
                <ActiveLink href="/services">Services</ActiveLink>
                <ActiveLink href="/contact">Contact</ActiveLink>
                <ActiveLink href="/schedule">Schedule</ActiveLink>
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
        
        
        {/* Main Content */}
        <main>{children}</main>
        
        {/* Footer */}
        <footer className="bg-[#111827] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-[#5046E5] rounded-lg flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-0.5">
                      <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  <span className="text-xl font-bold">OGS Immigration Services</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Your trusted partner in immigration legal services, providing expert guidance with compassion and
                  integrity.
                </p>
                <div className="flex space-x-4 mb-4">
                  <a href="https://www.facebook.com/OGSImmigrationServices" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <div className="w-9 h-9 bg-gray-700 hover:bg-[#1877F2] rounded-full flex items-center justify-center transition-colors">
                      <Facebook className="w-5 h-5" />
                    </div>
                  </a>
                  <a href="https://www.instagram.com/ogsimmigration" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <div className="w-9 h-9 bg-gray-700 hover:bg-[#E1306C] rounded-full flex items-center justify-center transition-colors">
                      <Instagram className="w-5 h-5" />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/company/ogs-immigration-services" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <div className="w-9 h-9 bg-gray-700 hover:bg-[#0A66C2] rounded-full flex items-center justify-center transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                  </a>
                  <a href="https://www.tiktok.com/@ogsimmigration" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <div className="w-9 h-9 bg-gray-700 hover:bg-[#000000] rounded-full flex items-center justify-center transition-colors">
                      <TikTok className="w-5 h-5" />
                    </div>
                  </a>
                  <a href="https://x.com/OGSImmigration" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                    <div className="w-9 h-9 bg-gray-700 hover:bg-[#1DA1F2] rounded-full flex items-center justify-center transition-colors">
                      <Twitter className="w-5 h-5" />
                    </div>
                  </a>
                </div>
                <div className="flex space-x-3">
                  <a href="/contacts/OGS-Contact.vcf" download="OGS-Immigration-Services.vcf">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#111827]">
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
                    <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/schedule" className="text-gray-300 hover:text-white transition-colors">
                      Schedule
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      3825 S George Mason Dr, Suite C<br />
                      Falls Church, VA 22041
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">+1 (571) 351-3940</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">openglobesolutions@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 OGS Immigration Services. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
