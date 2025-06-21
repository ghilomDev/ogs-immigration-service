import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

type TestimonialProps = {
  content: string;
  name: string;
  role: string;
  rating?: number;
  avatar?: string;
};

const Testimonial = ({ content, name, role, rating = 5, avatar }: TestimonialProps) => {
  // Generate a consistent but random-looking color based on the name
  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-[#5046E5]', // Purple (primary)
      'bg-[#EB6769]', // Red
      'bg-[#22C55E]', // Green
      'bg-[#EAB308]', // Yellow
      'bg-[#06B6D4]', // Cyan
      'bg-[#F97316]', // Orange
    ];

    // Use the sum of character codes to determine a color
    const nameSum = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return colors[nameSum % colors.length];
  };

  // Get initials from name (first letter of first and last name)
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const avatarColorClass = getAvatarColor(name);

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-gray-600 mb-4">{content}</p>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full mr-3 flex items-center justify-center overflow-hidden">
            {avatar ? (
              <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
            ) : (
              <div
                className={`w-full h-full ${avatarColorClass} text-white flex items-center justify-center font-semibold text-sm`}
              >
                {getInitials(name)}
              </div>
            )}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export type TestimonialsSectionProps = {
  title: string;
  testimonials: TestimonialProps[];
  backgroundColor?: string;
};

const TestimonialsSection = ({
  title,
  testimonials,
  backgroundColor = '',
}: TestimonialsSectionProps) => {
  return (
    <section id="testimonials" className={`py-16 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              content={testimonial.content}
              name={testimonial.name}
              role={testimonial.role}
              rating={testimonial.rating}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
