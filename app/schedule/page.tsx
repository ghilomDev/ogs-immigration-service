"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  FileText,
  Shield,
  Languages,
  Plane,
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  X,
  Loader2,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { createConsultation } from "@/app/actions/consultation"

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
]

const unavailableSlots = ["10:00 AM", "02:00 PM", "03:30 PM"] // Example unavailable slots

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  // Calendar logic
  const today = new Date()
  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startingDayOfWeek = firstDay.getDay()

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const generateCalendarDays = () => {
    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const isPast = date < today
      const isToday = date.toDateString() === today.toDateString()
      const isSelected = selectedDate?.toDateString() === date.toDateString()
      const isWeekend = date.getDay() === 0 || date.getDay() === 6

      days.push({
        day,
        date,
        isPast,
        isToday,
        isSelected,
        isWeekend,
        isAvailable: !isPast && !isWeekend,
      })
    }

    return days
  }

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    setSelectedTime("")
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  const handleConfirmBooking = () => {
    if (selectedDate && selectedTime) {
      setShowBookingModal(true)
      setSubmitMessage(null)
    }
  }

  const handleCloseModal = () => {
    setShowBookingModal(false)
    setSubmitMessage(null)
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const formData = new FormData(e.currentTarget)

      // Add appointment date and time to form data
      if (selectedDate && selectedTime) {
        formData.append("appointmentDate", selectedDate.toISOString().split("T")[0])
        formData.append("appointmentTime", selectedTime)
      }

      const result = await createConsultation(formData)

      if (result.success) {
        setSubmitMessage({ type: "success", text: result.message || "Consultation booked successfully!" })

        // Reset form and close modal after a delay
        setTimeout(() => {
          setShowBookingModal(false)
          setSelectedDate(null)
          setSelectedTime("")
          setSubmitMessage(null)
        }, 2000)
      } else {
        setSubmitMessage({ type: "error", text: result.error || "Failed to book consultation" })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitMessage({ type: "error", text: "An unexpected error occurred. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Trusted Partner in Immigration Legal Services
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            OGS Immigration Services provides expert assistance with USCIS forms, asylum cases, visa help, and certified
            translations. Building trust, one case at a time.
          </p>
          <Button size="lg" className="bg-[#5046E5] hover:bg-[#4338CA] text-white px-8 py-3 text-lg">
            Schedule a Free Consultation
          </Button>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-[#5046E5]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">USCIS Forms Assistance</h3>
              <p className="text-gray-600 text-sm">
                Expert guidance and meticulous preparation for all USCIS forms and applications, ensuring accuracy and
                compliance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#5046E5]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Asylum Case Support</h3>
              <p className="text-gray-600 text-sm">
                Compassionate and thorough assistance with asylum cases, navigating complex asylum applications and
                legal processes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-[#5046E5]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visa Application Help</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive assistance with various visa applications, from visitor to work visas, simplifying the
                process.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Languages className="w-8 h-8 text-[#5046E5]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Translations</h3>
              <p className="text-gray-600 text-sm">
                Accurate and certified translation services for legal documents, ensuring recognition by official
                bodies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/mogos-founder-new.jpeg"
                  alt="Mogos R., Founder & Lead Immigration Specialist"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Mogos R.</h2>
              <p className="text-[#5046E5] font-medium mb-4 text-xl">Founder & Lead Immigration Specialist</p>
              <p className="text-gray-600 mb-6 text-lg">
                Mogos R. is a dedicated immigration specialist with extensive experience in immigration law, committed
                to providing compassionate and effective legal support. His mission is to simplify complex legal
                processes for clients, ensuring clarity and peace of mind.
              </p>
              <p className="text-gray-600 mb-6">
                With a deep understanding of USCIS procedures and immigration challenges, Mogos provides personalized
                guidance tailored to each client's unique situation. His approach combines professional expertise with
                genuine care for every individual and family he serves.
              </p>
              <Button variant="outline" className="border-[#5046E5] text-[#5046E5] hover:bg-[#5046E5] hover:text-white">
                Learn More About Mogos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Your Consultation Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Schedule Your Consultation</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calendar */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="sm" onClick={prevMonth}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <CardTitle className="text-xl">
                    {monthNames[month]} {year}
                  </CardTitle>
                  <Button variant="ghost" size="sm" onClick={nextMonth}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {dayNames.map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-gray-500 p-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {generateCalendarDays().map((dayData, index) => (
                    <div key={index} className="aspect-square">
                      {dayData && (
                        <button
                          onClick={() => dayData.isAvailable && handleDateSelect(dayData.date)}
                          disabled={!dayData.isAvailable}
                          className={`
                            w-full h-full rounded-lg text-sm font-medium transition-colors
                            ${
                              dayData.isSelected
                                ? "bg-[#5046E5] text-white"
                                : dayData.isToday
                                  ? "bg-blue-100 text-[#5046E5]"
                                  : dayData.isAvailable
                                    ? "hover:bg-gray-100 text-gray-900"
                                    : "text-gray-300 cursor-not-allowed"
                            }
                          `}
                        >
                          {dayData.day}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Available Times */}
            <div>
              {selectedDate ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Available Times for{" "}
                      {selectedDate.toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {timeSlots.map((time) => {
                        const isUnavailable = unavailableSlots.includes(time)
                        const isSelected = selectedTime === time

                        return (
                          <button
                            key={time}
                            onClick={() => !isUnavailable && handleTimeSelect(time)}
                            disabled={isUnavailable}
                            className={`
                              p-3 rounded-lg text-sm font-medium transition-colors border
                              ${
                                isSelected
                                  ? "bg-[#5046E5] text-white border-[#5046E5]"
                                  : isUnavailable
                                    ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                                    : "bg-white text-gray-900 border-gray-200 hover:border-[#5046E5] hover:text-[#5046E5]"
                              }
                            `}
                          >
                            {time}
                            {isUnavailable && <div className="text-xs text-gray-400 mt-1">Unavailable</div>}
                          </button>
                        )
                      })}
                    </div>

                    {selectedTime && (
                      <Button
                        onClick={handleConfirmBooking}
                        className="w-full bg-[#5046E5] hover:bg-[#4338CA] text-white"
                      >
                        Book Appointment
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a Date</h3>
                    <p className="text-gray-600">
                      Please select a date from the calendar to view available appointment times.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Complete Your Booking</h2>
                <p className="text-gray-600 mt-1">
                  Appointment for{" "}
                  {selectedDate?.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  at {selectedTime}
                </p>
              </div>
              <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="p-6">
              {submitMessage && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    submitMessage.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  <div className="flex items-center">
                    {submitMessage.type === "success" ? (
                      <CheckCircle className="w-5 h-5 mr-2" />
                    ) : (
                      <X className="w-5 h-5 mr-2" />
                    )}
                    {submitMessage.text}
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(571) 000-0000"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5046E5] focus:border-transparent disabled:opacity-50"
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
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please describe your immigration needs or any specific questions..."
                    rows={4}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCloseModal}
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-[#5046E5] hover:bg-[#4338CA] text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Booking...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Confirm Appointment
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
