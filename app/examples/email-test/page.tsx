'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { sendEmail } from '@/lib/email';
import { toast } from '@/hooks/use-toast';

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Contact Form Submission',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    try {
      // Send confirmation email to the user
      await sendEmail({
        to: formData.email,
        subject: 'Thank you for your inquiry',
        message: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2c3e50;">Thank You for Contacting Us</h2>
            <p>Dear ${formData.name},</p>
            <p>Thank you for reaching out to us. One of our representatives will contact you shortly regarding your inquiry.</p>
            <p>Here's a summary of your submission:</p>
            <ul>
              <li><strong>Name:</strong> ${formData.name}</li>
              <li><strong>Email:</strong> ${formData.email}</li>
              <li><strong>Phone:</strong> ${formData.phone}</li>
              <li><strong>Message:</strong> ${formData.message}</li>
            </ul>
            <p>We value your interest and will do our best to assist you promptly.</p>
            <p>Best regards,<br>The OGS Immigration Team</p>
          </div>
        `,
      });
      
      // Also send notification to admin (optional)
      await sendEmail({
        to: 'ghilomyonathan@gmail.com', // Your admin email
        subject: `New Contact Form: ${formData.subject}`,
        message: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2c3e50;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          </div>
        `,
      });
      
      toast({
        title: 'Message sent successfully',
        description: 'Thank you! We will contact you shortly.',
        variant: 'default',
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Contact Form Submission',
        message: '',
      });
      
    } catch (error) {
      toast({
        title: 'Failed to send message',
        description: 'There was an error sending your message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input 
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number (optional)"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="How can we help you?"
            rows={4}
          />
        </div>
        
        <Button 
          type="submit"
          className="w-full"
          disabled={isSending}
        >
          {isSending ? 'Sending...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
}
