import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card" 
import { Badge } from "@/components/ui/badge"
import { MapPin, Heart, Award, CheckCircle, FileText, Shield, Languages, Plane, Users, Phone, Star } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-about min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Your Trusted Partner in
            <br />
            Immigration Legal Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            At OGS Immigration Services, we empower individuals and families to achieve their immigration goals with
            expertise, compassion, and integrity.
          </p>
          <Button size="lg" className="bg-[#EB6769] hover:bg-[#E85D5B] text-white px-8 py-3 text-lg">
            Book a Consultation
          </Button>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/mogos-founder-new.jpeg"
                  alt="Mogos R., Founder of OGS Immigration Services"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Meet Our Founder</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Founder, Mogos R.</h2>
              <p className="text-lg text-gray-600 mb-6">
                Mogos R., the founder of OGS Immigration Services, is a dedicated and compassionate professional with a
                profound commitment to assisting individuals and families navigate the complex landscape of immigration
                law.
              </p>
              <p className="text-gray-600 mb-6">
                With years of experience and a deep understanding of USCIS procedures, Mogos brings both professional
                expertise and personal empathy to every case. His journey started with a desire to bridge the gap
                between complex legal requirements and the human stories behind each application.
              </p>
              <p className="text-gray-600 mb-8">
                Mogos is committed to empathy and meticulous attention to detail, ensuring every client receives
                personalized and effective support. Located in Falls Church, Virginia, he is perfectly positioned to
                serve clients throughout the Washington D.C. metropolitan area and beyond.
              </p>
              <Button className="bg-[#5046E5] hover:bg-blue-800 text-white">Schedule a Meeting</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Story: A Journey of Dedication and Support
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Founded on the principle of providing accessible and compassionate immigration support, OGS Immigration
            Services began as a vision to help individuals and families achieve their American dreams. Our journey
            started with a deep understanding of the challenges faced by immigrants and a commitment to offering expert
            guidance.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            We understand that behind every immigration case is a human story - dreams of reuniting with family, seeking
            safety, pursuing education, or building a new life. This understanding drives our approach, combining legal
            expertise with genuine care for each client's unique circumstances.
          </p>
          <p className="text-lg text-gray-600">
            Today, we continue to grow and evolve, always maintaining our core values of integrity, compassion, and
            excellence. Our success is measured not just by case approvals, but by the lives we've helped transform and
            the families we've helped reunite.
          </p>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission: Empowering Your Immigration Journey
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to provide exceptional immigration legal support, ensuring every client receives the
                guidance and assistance they need to navigate the complex immigration system successfully.
              </p>
              <p className="text-gray-600">
                We are committed to making immigration services accessible, understandable, and effective for everyone,
                regardless of their background or circumstances. Our goal is to turn the complex into the achievable,
                one case at a time.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-4 h-4 text-[#5046E5]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Empathy & Compassion</h3>
                    <p className="text-gray-600">
                      Understanding the human stories and treating every client with dignity and understanding the
                      unique challenges they face.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-[#5046E5]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Expertise & Precision</h3>
                    <p className="text-gray-600">
                      Delivering the highest quality legal advice and meticulous attention to detail in every case we
                      handle.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-[#5046E5]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Clarity & Simplicity</h3>
                    <p className="text-gray-600">
                      Simplifying complex immigration processes and providing clear communication throughout your
                      journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose OGS Immigration Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-[#5046E5]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">USCIS Forms Mastery</h3>
                <p className="text-gray-600">
                  Comprehensive assistance with all types of USCIS forms, ensuring accuracy and completeness for optimal
                  application success.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#5046E5]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dedicated Asylum Support</h3>
                <p className="text-gray-600">
                  Expert guidance and advocacy for asylum seekers, offering compassionate guidance and expertise
                  throughout the complex procedures.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Languages className="w-8 h-8 text-[#5046E5]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Translations</h3>
                <p className="text-gray-600">
                  Accurate and certified translation services for all official documents, recognized by immigration
                  authorities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-8 h-8 text-[#5046E5]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visa Application Expertise</h3>
                <p className="text-gray-600">
                  Thorough support for various visa applications, from tourist to employment-based visas, ensuring
                  compliance with all requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#5046E5]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Consultations</h3>
                <p className="text-gray-600">
                  One-on-one consultations tailored to your specific situation, providing personalized strategies and
                  clear next steps.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-[#5046E5]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Responsive Communication</h3>
                <p className="text-gray-600">
                  Clear and timely communication throughout your case, keeping you informed and confident throughout the
                  process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "OGS Immigration Services made my complex immigration case feel manageable. Mogos R. and his team were
                  incredibly knowledgeable and provided clear guidance throughout the entire process."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Maria S.</p>
                    <p className="text-sm text-gray-500">Family-Based Immigration</p>
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
                  "The personalized attention and expertise offered by OGS Immigration Services were exceptional. They
                  helped me navigate the asylum process with dignity and achieved a successful outcome."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-gray-900">David Rodriguez</p>
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
                  "Their excellent translation service was quick, accurate, and exactly what I needed for my USCIS
                  submission. Excellent service and attention to detail."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Maria Petrova</p>
                    <p className="text-sm text-gray-500">Document Translation</p>
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
                  "I was very impressed with the personalized approach to my visa application. They clarified every step
                  and ensured all documents were properly prepared and submitted on time."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Ahmed Khan</p>
                    <p className="text-sm text-gray-500">Visa Application</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
