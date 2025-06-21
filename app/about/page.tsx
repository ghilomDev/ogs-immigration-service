import { Button } from "@/components/ui/button"
import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServicesSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import StorySection from "@/components/sections/StorySection"
import FounderSection from "@/components/sections/FounderSection"
import MissionValuesSection from "@/components/sections/MissionValuesSection"
import { 
  aboutWhyChooseUsData, 
  aboutTestimonialsData,
  storyData,
  founderData,
  missionValuesData 
} from "@/lib/constants"

export default function AboutPage() {
  return (
    <>
      <HeroSection 
        title={<>About OGS<br />Immigration Services</>}
        description="We are committed to helping individuals and families navigate the complex immigration process with expertise and compassion."
        heroClass="hero-about"
        heightClass="h-[500px]"
      />

      {/* Our Story Section */}
      <StorySection
        title={storyData.title}
        paragraphs={storyData.paragraphs}
      />

      {/* Founder Section */}
      <FounderSection
        badgeText={founderData.badgeText}
        title={founderData.title}
        paragraphs={founderData.paragraphs}
        imageSrc={founderData.imageSrc}
        imageAlt={founderData.imageAlt}
        buttonText={founderData.buttonText}
      />

      {/* Mission and Values */}
      <MissionValuesSection
        missionTitle={missionValuesData.missionTitle}
        missionParagraphs={missionValuesData.missionParagraphs}
        valuesTitle={missionValuesData.valuesTitle}
        values={missionValuesData.values}
      />

      {/* Why Choose Us */}
      <ServicesSection
        title={aboutWhyChooseUsData.title}
        services={aboutWhyChooseUsData.services}
        backgroundColor="bg-gray-50"
      />

      {/* Client Testimonials */}
      <TestimonialsSection 
        title={aboutTestimonialsData.title}
        testimonials={aboutTestimonialsData.testimonials}
      />
    </>
  )
}
