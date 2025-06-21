import HeroSection from "@/components/sections/HeroSection"
import DetailedServicesSection from "@/components/sections/DetailedServicesSection"
import CenteredServicesSection from "@/components/sections/CenteredServicesSection"
import ProcessSection from "@/components/sections/ProcessSection"
import EnhancedCTASection from "@/components/sections/EnhancedCTASection"
import { detailedServicesData, additionalServicesData, servicesProcessData, servicesCTAData } from "@/lib/constants"

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title={<>Our Immigration<br />Legal Services</>}
        description="We offer a comprehensive range of immigration services to help you achieve your goals with confidence."
        heroClass="hero-services"
        heightClass="h-[500px]"
      />

      {/* Services Content */}
      <DetailedServicesSection 
        title="Our Specialized Services"
        subtitle="We provide comprehensive immigration services tailored to your unique needs, ensuring expert guidance throughout your immigration journey."
        services={detailedServicesData}
      />

      {/* Additional Services */}
      <CenteredServicesSection 
        title="Additional Specialized Services"
        backgroundColor="bg-gray-50"
        columns="three"
        services={additionalServicesData}
      />

      {/* Process Section */}
      <ProcessSection 
        title={servicesProcessData.title}
        backgroundColor="bg-white"
        steps={servicesProcessData.steps}
      />

      {/* CTA Section */}
      <EnhancedCTASection 
        title={servicesCTAData.title}
        description={servicesCTAData.description}
        backgroundColor="bg-[#5046E5]"
        buttons={servicesCTAData.buttons}
      />
    </>
  )
}
