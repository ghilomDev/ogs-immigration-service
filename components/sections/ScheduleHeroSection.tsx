import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ScheduleHeroSectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function ScheduleHeroSection({
  title,
  description,
  buttonText = 'Schedule a Free Consultation',
  buttonLink = '#consultation-scheduler',
}: ScheduleHeroSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
        <p className="text-xl text-gray-600 mb-8">{description}</p>
        {buttonText && (
          <Button
            size="lg"
            className="bg-[#5046E5] hover:bg-[#4338CA] text-white px-8 py-3 text-lg"
            asChild
          >
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        )}
      </div>
    </section>
  );
}
