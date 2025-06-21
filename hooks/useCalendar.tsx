"use client"

import { useState } from "react"
import { createConsultation } from "@/app/actions/consultation"
import { sendEmailsAfterSubmission } from "@/lib/email-utils"

export interface CalendarDay {
  day: number
  date: Date
  isPast: boolean
  isToday: boolean
  isSelected: boolean
  isWeekend: boolean
  isAvailable: boolean
}

interface UseCalendarProps {
  initialMonth?: Date
  unavailableSlots?: string[]
  timeSlots?: string[]
}

function useCalendar({
  initialMonth = new Date(),
  unavailableSlots = [],
  timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
  ]
}: UseCalendarProps = {}) {
  // State
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [currentMonth, setCurrentMonth] = useState(initialMonth)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  // Calendar data
  const today = new Date()
  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startingDayOfWeek = firstDay.getDay()

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ]

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  // Derived values
  const availableTimeSlots = timeSlots.filter(time => !unavailableSlots.includes(time))

  // Functions
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
    // If a date and time are selected, proceed with them
    // Otherwise, just open the modal for general booking
    setShowBookingModal(true)
    setSubmitMessage(null)
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
        
        // Extract data to send emails
        const firstName = formData.get("firstName") as string;
        const lastName = formData.get("lastName") as string;
        const name = `${firstName} ${lastName}`;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const service = formData.get("service") as string;
        const message = formData.get("message") as string || 
          `Appointment request for ${selectedDate?.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })} at ${selectedTime}`;
          
        // Send emails in background after successful database entry
        sendEmailsAfterSubmission({
          name,
          email,
          phone,
          service,
          message
        }, 100);

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

  const resetBooking = () => {
    setSelectedDate(null)
    setSelectedTime("")
    setShowBookingModal(false)
    setSubmitMessage(null)
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1))
  }

  return {
    // State
    selectedDate,
    selectedTime,
    currentMonth,
    showBookingModal,
    isSubmitting,
    submitMessage,
    
    // Calendar data
    year,
    month,
    monthNames,
    dayNames,
    
    // Functions
    generateCalendarDays,
    handleDateSelect,
    handleTimeSelect,
    handleConfirmBooking,
    handleCloseModal,
    handleFormSubmit,
    nextMonth,
    prevMonth,
    resetBooking,
    
    // Derived values
    availableTimeSlots
  }
}

export default useCalendar
