import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  FileText,
  Shield,
  Languages,
  Plane,
  Users,
  Building,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  UserPlus,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-home min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Your Trusted Partner in
            <br />
            Immigration Legal Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Navigating immigration law can be complex. We provide clear, compassionate, and professional guidance every
            step of the way.
          </p>
          <Button size="lg" className="bg-[#EB6769] hover:bg-[#E85D5B] text-white px-8 py-3 text-lg">
            Book a Free Consultation
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose OGS Immigration Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Legal Guidance</h3>
              <p className="text-gray-600">
                Years of experience in immigration law with proven track record of success.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Approach</h3>
              <p className="text-gray-600">
                Every case is unique. We provide tailored solutions for your specific needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
              <p className="text-gray-600">
                Hundreds of successful cases with high approval rates across all service areas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Communication</h3>
              <p className="text-gray-600">
                Clear updates throughout your case with responsive support when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Comprehensive Immigration Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-[#5046E5]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">USCIS Forms Preparation</h3>
                <p className="text-gray-600 mb-4">
                  Expert assistance with all USCIS forms, ensuring accuracy and timely submission for a smooth
                  application process.
                </p>
                <Link
                  href="/services"
                  className="text-[#5046E5] hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#5046E5]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Asylum Case Support</h3>
                <p className="text-gray-600 mb-4">
                  Compassionate and thorough support for asylum cases, helping you navigate complex legal requirements
                  with dignity.
                </p>
                <Link
                  href="/services"
                  className="text-[#5046E5] hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Languages className="w-6 h-6 text-[#5046E5]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Document Translation</h3>
                <p className="text-gray-600 mb-4">
                  Accurate and certified translations of legal documents for immigration purposes, maintaining
                  linguistic integrity.
                </p>
                <Link
                  href="/services"
                  className="text-[#5046E5] hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Plane className="w-6 h-6 text-[#5046E5]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visa Application Assistance</h3>
                <p className="text-gray-600 mb-4">
                  Guidance through various visa application processes, from family-based to employment visas, ensuring
                  compliance.
                </p>
                <Link
                  href="/services"
                  className="text-[#5046E5] hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#5046E5]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Family-Based Immigration</h3>
                <p className="text-gray-600 mb-4">
                  Uniting families through precise application support for spouse, parent, and child visas.
                </p>
                <Link
                  href="/services"
                  className="text-[#5046E5] hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-[#5046E5]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Employment Visas</h3>
                <p className="text-gray-600 mb-4">
                  Navigating work-based immigration options for professionals, skilled workers, and investors.
                </p>
                <Link
                  href="/services"
                  className="text-[#5046E5] hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Simple Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5046E5] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Consultation</h3>
              <p className="text-gray-600">
                Book a confidential consultation to discuss your immigration goals and assess your case.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5046E5] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Case Preparation</h3>
              <p className="text-gray-600">
                We start gathering and preparing all necessary documentation for your case.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5046E5] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Submission & Follow-up</h3>
              <p className="text-gray-600">
                Your application is submitted, and we monitor progress while keeping you informed.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5046E5] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Successful Resolution</h3>
              <p className="text-gray-600">
                We work tirelessly towards a favorable outcome and celebrate your success with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "OGS Immigration Services provided exceptional support during my green card application. Their
                  expertise and attention to detail were truly remarkable. I highly recommend them!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Aisha K.</p>
                    <p className="text-sm text-gray-500">Green Card Recipient</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Mogos R. and his team made my asylum process feel less daunting. Their compassion and professional
                  guidance were invaluable. Thank you for everything!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Carlos M.</p>
                    <p className="text-sm text-gray-500">Asylum Case</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Professional, knowledgeable, and caring. OGS helped me reunite with my family through the
                  family-based immigration process. Forever grateful!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Maria S.</p>
                    <p className="text-sm text-gray-500">Family Reunification</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#5046E5] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a personalized consultation and let us help you achieve your immigration dreams.
          </p>
          <Button size="lg" className="bg-[#EB6769] hover:bg-[#E85D5B] text-white px-8 py-3 text-lg">
            Get a Free Consultation
          </Button>
        </div>
      </section>
    </>
  )
}
