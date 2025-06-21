"use client"

import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Button } from "@/components/ui/button"
import { useCalendar } from "@/hooks"
import BookingModal from "@/components/sections/BookingModal"

interface BookingButtonProps {
  label?: string
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

export default function BookingButton({ 
  label = "Book Consultation", 
  className = "bg-[#EB6769] hover:bg-[#E85D5B] text-white", 
  variant = "default" 
}: BookingButtonProps) {
  // Use our calendar hook to manage booking state
  const calendar = useCalendar()
  
  // State to track if we're in the browser (for portal rendering)
  const [isBrowser, setIsBrowser] = useState(false)
  
  useEffect(() => {
    setIsBrowser(true)
  }, [])
  
  const handleClick = () => {
    // Open the modal directly when the button is clicked
    calendar.handleConfirmBooking()
  }

  // Modal component that will be rendered via portal
  const Modal = () => {
    if (!calendar.showBookingModal) return null
    
    return (
      <BookingModal 
        showBookingModal={calendar.showBookingModal}
        selectedDate={calendar.selectedDate}
        selectedTime={calendar.selectedTime}
        handleCloseModal={calendar.handleCloseModal}
        handleFormSubmit={calendar.handleFormSubmit}
        isSubmitting={calendar.isSubmitting}
        submitMessage={calendar.submitMessage}
      />
    )
  }

  return (
    <>
      <Button 
        onClick={handleClick} 
        className={className}
        variant={variant}
      >
        {label}
      </Button>

      {/* Render modal via portal to avoid positioning issues */}
      {isBrowser && calendar.showBookingModal && 
        createPortal(<Modal />, document.body)
      }
    </>
  )
}
