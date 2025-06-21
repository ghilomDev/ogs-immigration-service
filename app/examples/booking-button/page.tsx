"use client"

import React from 'react'
import BookingButton from '@/components/BookingButton'

export default function BookingButtonExample() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Booking Button Example</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Default Style</h2>
          <BookingButton />
        </div>
        
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Custom Label</h2>
          <BookingButton label="Schedule Now" />
        </div>
        
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Different Style</h2>
          <BookingButton 
            label="Book a Meeting" 
            className="bg-blue-600 hover:bg-blue-700 text-white" 
          />
        </div>
        
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Outline Variant</h2>
          <BookingButton 
            variant="outline" 
            className="border-[#EB6769] text-[#EB6769] hover:bg-[#EB6769] hover:text-white"
            label="Start Consultation"
          />
        </div>
        
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Secondary Style</h2>
          <BookingButton 
            variant="secondary" 
            label="Book Your Appointment"
          />
        </div>
      </div>
    </div>
  )
}
