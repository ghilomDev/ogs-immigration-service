import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch With Us</h1>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help you navigate the complexities of immigration law. Reach out to us for expert guidance and
            support.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-[#5046E5]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Address</h3>
                <p className="text-gray-600">
                  3825 S George Mason Dr, Suite C<br />
                  Falls Church, VA 22041
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-[#5046E5]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">
                  <a href="tel:+15713513940" className="hover:text-blue-600">
                    +1 (571) 351-3940
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-[#5046E5]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">
                  <a href="mailto:openglobesolutions@gmail.com" className="hover:text-blue-600">
                    openglobesolutions@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Add to Contacts Section */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Save Our Contact Information</h3>
              <p className="text-gray-600 mb-6">
                Add OGS Immigration Services to your contacts with one tap for easy access to our services.
              </p>
              <a href="/contacts/OGS-Contact.vcf" download="OGS-Immigration-Services.vcf">
                <Button className="bg-[#EB6769] hover:bg-[#E85D5B] text-white px-8 py-3 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Add to Contacts
                </Button>
              </a>
              <p className="text-sm text-gray-500 mt-3">Compatible with iPhone, Android, and all major contact apps</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input id="name" type="text" placeholder="Enter your full name" className="w-full" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" className="w-full" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="(571) 000-0000" className="w-full" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="uscis-forms">USCIS Form Preparation</option>
                    <option value="asylum">Asylum Case Support</option>
                    <option value="translation">Document Translation</option>
                    <option value="visa">Visa Assistance</option>
                    <option value="family">Family-Based Immigration</option>
                    <option value="employment">Employment Visas</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your immigration needs or questions..."
                    rows={5}
                    className="w-full"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-[#5046E5] hover:bg-[#4338CA] text-white py-3">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us Here</h2>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 font-medium">Interactive map coming soon!</p>
                  <p className="text-sm text-gray-400">
                    3825 S George Mason Dr, Suite C<br />
                    Falls Church, VA 22041
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-[#5046E5] mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Office Hours</h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>By Appointment Only</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Emergency consultations available.</strong> Call us for urgent immigration matters.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What services does OGS Immigration Services provide?
                </h3>
                <p className="text-gray-600">
                  We provide comprehensive immigration services including USCIS form preparation, asylum case support,
                  certified document translation, visa assistance, family-based immigration, and employment visa
                  support.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I book a consultation?</h3>
                <p className="text-gray-600">
                  You can book a consultation by calling us at (571) 351-3940, emailing us at
                  openglobesolutions@gmail.com, or using the contact form above. We offer both in-person and virtual
                  consultations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you offer services for all immigration types?
                </h3>
                <p className="text-gray-600">
                  Yes, we handle a wide range of immigration cases including family-based petitions, employment visas,
                  asylum cases, naturalization, and various USCIS forms. Contact us to discuss your specific needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What languages do you speak?</h3>
                <p className="text-gray-600">
                  Our team is multilingual and can assist clients in various languages. We also provide certified
                  translation services for documents in multiple languages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
