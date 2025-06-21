import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ReactNode } from "react"
import BookingButton from "@/components/BookingButton"

type HeroSectionProps = {
  title: ReactNode
  description: string
  buttonText?: string
  buttonLink?: string
  heroClass?: string
  heightClass?: string
  isOverlay?: boolean // Whether to show an overlay
  useBookingModal?: boolean // Whether to use the BookingButton component
}

export default function HeroSection({
  title,
  description,
  buttonText = "Book a Free Consultation",
  buttonLink = "/schedule",
  heroClass = "hero-home",
  heightClass = "",// Default height is full screen, but can be customized
  isOverlay = true,
  useBookingModal = false
}: HeroSectionProps) {
  return (
    <section className={`relative ${heroClass} ${heightClass} flex items-center justify-center`}>
      <div className={`absolute inset-0 ${isOverlay ? "hero-overlay" : ""}`}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          {description}
        </p>
        {buttonText && (
          useBookingModal ? (
            <BookingButton 
              label={buttonText}
              className="bg-[#EB6769] hover:bg-[#E85D5B] text-white px-8 py-3 text-lg"
            />
          ) : (
            <Button size="lg" className="bg-[#EB6769] hover:bg-[#E85D5B] text-white px-8 py-3 text-lg" asChild>
              <Link href={buttonLink}>
                {buttonText}
              </Link>
            </Button>
          )
        )}
      </div>
    </section>
  )
}