"use client"

import type React from "react"
// Import the useCalendar hook
import { useCalendar } from "@/hooks"

// Importing reusable components
import ScheduleHeroSection from "@/components/sections/ScheduleHeroSection"
import ExpertiseSection from "@/components/sections/ExpertiseSection"
import FounderSection from "@/components/sections/FounderSection"
import ConsultationScheduler from "@/components/sections/ConsultationScheduler"
import BookingModal from "@/components/sections/BookingModal"

// Import content from constants
import { scheduleHeroContent, scheduleFounderContent } from "@/lib/constants"


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
  // Use our calendar hook instead of managing state locally
  const calendar = useCalendar({
    timeSlots,
    unavailableSlots
  });
  
  // Calendar logic is now in the hook

  // Content is imported from constants.ts

  return (
    <>
      <ScheduleHeroSection {...scheduleHeroContent} />
      <ExpertiseSection />
      <FounderSection {...scheduleFounderContent} />
      <div id="consultation-scheduler">
        <ConsultationScheduler 
          selectedDate={calendar.selectedDate}
          selectedTime={calendar.selectedTime}
          currentMonth={calendar.currentMonth}
          monthNames={calendar.monthNames}
          dayNames={calendar.dayNames}
          year={calendar.year}
          month={calendar.month}
          timeSlots={timeSlots}
          unavailableSlots={unavailableSlots}
          generateCalendarDays={calendar.generateCalendarDays}
          handleDateSelect={calendar.handleDateSelect}
          handleTimeSelect={calendar.handleTimeSelect}
          handleConfirmBooking={calendar.handleConfirmBooking}
          prevMonth={calendar.prevMonth}
          nextMonth={calendar.nextMonth}
        />
      </div>
      <BookingModal 
        showBookingModal={calendar.showBookingModal}
        selectedDate={calendar.selectedDate}
        selectedTime={calendar.selectedTime}
        handleCloseModal={calendar.handleCloseModal}
        handleFormSubmit={calendar.handleFormSubmit}
        isSubmitting={calendar.isSubmitting}
        submitMessage={calendar.submitMessage}
      />
    </>
  )
}
