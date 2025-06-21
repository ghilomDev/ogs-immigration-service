// Importing reusable components
import type { Metadata } from 'next';
import ScheduleHeroSection from '@/components/sections/ScheduleHeroSection';
import ExpertiseSection from '@/components/sections/ExpertiseSection';
import FounderSection from '@/components/sections/FounderSection';
import ConsultationScheduler from '@/components/sections/ConsultationScheduler';

// Import content from constants
import { scheduleHeroContent, scheduleFounderContent } from '@/lib/constants';
import { getBookedTimeSlots } from '@/app/actions/consultation';
import { generatePageMetadata } from '@/lib/seo';

// Generate page-specific metadata for better SEO
export const metadata: Metadata = generatePageMetadata(
  'Schedule a Consultation | OGS Immigration Services | Falls Church, VA',
  'Book a free immigration consultation with OGS Immigration Services. Get expert advice on USCIS forms, document translation, and visa applications from our specialists.',
  '/api/og?title=Schedule+a+Consultation&type=schedule',
  '/schedule'
);

const timeSlots = [
  '09:00 AM',
  '09:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '01:00 PM',
  '01:30 PM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
  '05:00 PM',
  '05:30 PM',
];

const unavailableSlots: string[] = [];

export default async function SchedulePage() {
  // Fetch booked time slots from the server
  const bookedSlotsResponse = await getBookedTimeSlots();

  // Extract the booked slots data or use empty object if there's an error
  const bookedSlots = bookedSlotsResponse.success ? bookedSlotsResponse.data : {};

  return (
    <>
      <ScheduleHeroSection {...scheduleHeroContent} />
      <ExpertiseSection />
      <FounderSection {...scheduleFounderContent} />
      <div id="consultation-scheduler">
        <ConsultationScheduler
          timeSlots={timeSlots}
          unavailableSlots={unavailableSlots}
          bookedSlots={bookedSlots}
        />
      </div>
    </>
  );
}
