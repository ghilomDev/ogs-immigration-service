'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Send, Clock, CheckCircle, X, Loader2 } from 'lucide-react';
import { createConsultation } from '@/app/actions/consultation';
import { sendEmailsAfterSubmission } from '@/lib/email-utils';

export type ServiceOption = {
  value: string;
  label: string;
};

export type OfficeHours = {
  day: string;
  hours: string;
};

export type ContactFormSectionProps = {
  formTitle?: string;
  mapTitle?: string;
  address?: string;
  serviceOptions: ServiceOption[];
  officeHours: OfficeHours[];
  emergencyText?: string;
};

const ContactFormSection = ({
  formTitle = 'Send Us a Message',
  mapTitle = 'Find Us Here',
  address = '3825 S George Mason Dr, Suite C\nFalls Church, VA 22041',
  serviceOptions,
  officeHours,
  emergencyText = 'Emergency consultations available. Call us for urgent immigration matters.',
}: ContactFormSectionProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const formData = new FormData(e.currentTarget);

      // Convert form data to match ConsultationBooking format
      const name = formData.get('name') as string;
      const nameParts = name.split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
      const email = formData.get('email') as string;
      const phone = formData.get('phone') as string;
      const service = formData.get('service') as string;
      const message = formData.get('message') as string;

      // Replace with firstName and lastName fields
      formData.delete('name');
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);

      // Add message as additional_info
      if (message) {
        formData.append('additional_info', message as string);
      }

      // Save to database first
      const result = await createConsultation(formData);

      // If database submission was successful, send emails
      if (result.success) {
        // Use the reusable function to send emails in background
        sendEmailsAfterSubmission(
          {
            name,
            email,
            phone,
            service,
            message,
          },
          100
        ); // 100 millisecond delay
      }

      if (result.success) {
        setSubmitMessage({
          type: 'success',
          text: 'Thank you! Your message has been sent successfully.',
        });
        // Reset form - safely check if the form element exists before calling reset
        if (e.currentTarget && typeof e.currentTarget.reset === 'function') {
          e.currentTarget.reset();
        }
      } else {
        setSubmitMessage({
          type: 'error',
          text: result.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage({
        type: 'error',
        text: 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Contact Form */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{formTitle}</h2>
        {submitMessage && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              submitMessage.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            <div className="flex items-center">
              {submitMessage.type === 'success' ? (
                <CheckCircle className="w-5 h-5 mr-2" />
              ) : (
                <X className="w-5 h-5 mr-2" />
              )}
              {submitMessage.text}
            </div>
          </div>
        )}
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full"
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
              className="w-full"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(571) 000-0000"
              className="w-full"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isSubmitting}
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Your Message *
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Please describe your immigration needs or questions..."
              rows={5}
              className="w-full"
              required
              disabled={isSubmitting}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#5046E5] hover:bg-[#4338CA] text-white py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </div>

      {/* Map and Additional Info */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{mapTitle}</h2>

        {/* Map Placeholder */}
        <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500 font-medium">Interactive map coming soon!</p>
            <p className="text-sm text-gray-400">
              {address.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < address.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
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
              {officeHours.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item.day}:</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
            {emergencyText && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>{emergencyText}</strong>
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactFormSection;
