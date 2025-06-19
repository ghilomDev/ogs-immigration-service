import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  Clock,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-services min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Comprehensive Immigration Services</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Navigating complex immigration laws with clarity and compassion. Your journey starts here.
          </p>
          <Button size="lg" className="bg-[#EB6769] hover:bg-[#E85D5B] text-white px-8 py-3 text-lg">
            Book a Consultation
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive immigration services tailored to your unique needs, ensuring expert guidance
              throughout your immigration journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* USCIS Form Preparation */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="w-8 h-8 text-[#5046E5]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">USCIS Form Preparation</h3>
                    <Badge className="mt-1 bg-green-100 text-green-800">Most Popular</Badge>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Expert assistance with a wide range of USCIS forms, ensuring accuracy and timely submission for a
                  smooth application process.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Form I-485 (Adjustment of Status)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Form I-130 (Family-Based Petitions)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Form I-765 (Work Authorization)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Form N-400 (Naturalization)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>1-2 weeks processing</span>
                  </div>
                  <Button variant="outline" className="border-[#5046E5] text-[#5046E5] hover:bg-blue-50">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Asylum Case Support */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-8 h-8 text-[#5046E5]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Asylum Case Support</h3>
                    <Badge className="mt-1 bg-blue-100 text-blue-800">Specialized Care</Badge>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Compassionate and thorough support for asylum cases, helping you navigate complex legal requirements
                  with dignity.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Initial asylum application (Form I-589)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Case preparation and documentation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Interview preparation and support</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Appeals and follow-up procedures</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Ongoing support</span>
                  </div>
                  <Button variant="outline" className="border-[#5046E5] text-[#5046E5] hover:bg-blue-50">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Certified Document Translation */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Languages className="w-8 h-8 text-[#5046E5]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Certified Document Translation</h3>
                    <Badge className="mt-1 bg-purple-100 text-purple-800">Fast Turnaround</Badge>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Accurate and certified translations of legal documents for immigration purposes, maintaining
                  linguistic integrity.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Birth certificates and marriage certificates</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Educational transcripts and diplomas</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Medical records and police certificates</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">USCIS-accepted certification</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>2-5 business days</span>
                  </div>
                  <Button variant="outline" className="border-[#5046E5] text-[#5046E5] hover:bg-blue-50">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Visa Assistance */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Plane className="w-8 h-8 text-[#5046E5]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Visa Assistance</h3>
                    <Badge className="mt-1 bg-orange-100 text-orange-800">Comprehensive</Badge>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Guidance through various visa application processes, from family-based to employment visas, ensuring
                  compliance.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Tourist and visitor visas (B-1/B-2)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Student visas (F-1, M-1)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Work visas (H-1B, L-1, O-1)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Fiancé visas (K-1)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Varies by visa type</span>
                  </div>
                  <Button variant="outline" className="border-[#5046E5] text-[#5046E5] hover:bg-blue-50">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Additional Specialized Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Family-Based Immigration</h3>
                <p className="text-gray-600 mb-4">
                  Uniting families through precise application support for spouse, parent, and child visas.
                </p>
                <Button variant="outline" size="sm" className="border-sky-600 text-sky-600 hover:bg-sky-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Employment Visas</h3>
                <p className="text-gray-600 mb-4">
                  Navigating work-based immigration options for professionals, skilled workers, and investors.
                </p>
                <Button variant="outline" size="sm" className="border-sky-600 text-sky-600 hover:bg-sky-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Citizenship & Naturalization</h3>
                <p className="text-gray-600 mb-4">
                  Complete support for the naturalization process, from eligibility assessment to oath ceremony.
                </p>
                <Button variant="outline" size="sm" className="border-sky-600 text-sky-600 hover:bg-sky-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">How We Work With You</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5046E5] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Consultation</h3>
              <p className="text-gray-600">
                We start with a comprehensive consultation to understand your unique situation and immigration goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5046E5] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy Development</h3>
              <p className="text-gray-600">
                We develop a personalized strategy and timeline tailored to your specific case requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5046E5] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Document Preparation</h3>
              <p className="text-gray-600">
                We meticulously prepare all necessary documentation and forms with attention to every detail.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5046E5] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                We provide continuous support throughout the process, keeping you informed every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#5046E5] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Immigration Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a personalized consultation and let us guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#EB6769] hover:bg-[#E85D5B] text-white px-8 py-3 text-lg">
              Schedule Your Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#5046E5] px-8 py-3 text-lg"
            >
              Call (571) 351-3940
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
