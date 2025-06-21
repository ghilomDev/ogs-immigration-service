import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, X, Loader2 } from "lucide-react";

interface BookingModalProps {
  showBookingModal: boolean;
  selectedDate: Date | null;
  selectedTime: string;
  handleCloseModal: () => void;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isSubmitting: boolean;
  submitMessage: { type: "success" | "error"; text: string } | null;
  availableServices?: Array<{value: string, label: string}>;
}

export default function BookingModal({
  showBookingModal,
  selectedDate,
  selectedTime,
  handleCloseModal,
  handleFormSubmit,
  isSubmitting,
  submitMessage,
  availableServices = defaultServices
}: BookingModalProps) {
  if (!showBookingModal) return null;
  
  // Prevent body scrolling when modal is open
  React.useEffect(() => {
    if (showBookingModal) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showBookingModal]);
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[9999]">
      <div className="bg-white rounded-lg max-w-2xl w-full my-8 mx-auto max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Complete Your Booking</h2>
            {selectedDate && selectedTime ? (
              <p className="text-gray-600 mt-1">
                Appointment for{" "}
                {selectedDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                at {selectedTime}
              </p>
            ) : (
              <p className="text-gray-600 mt-1">
                Contact us to schedule a consultation
              </p>
            )}
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
                {availableServices.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
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
  );
}

const defaultServices = [
  { value: "uscis-forms", label: "USCIS Form Preparation" },
  { value: "asylum", label: "Asylum Case Support" },
  { value: "translation", label: "Document Translation" },
  { value: "visa", label: "Visa Assistance" },
  { value: "family", label: "Family-Based Immigration" },
  { value: "employment", label: "Employment Visas" },
  { value: "consultation", label: "General Consultation" }
];
