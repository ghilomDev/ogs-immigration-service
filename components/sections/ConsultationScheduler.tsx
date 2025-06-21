import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export interface ConsultationSchedulerProps {
  selectedDate: Date | null;
  selectedTime: string;
  currentMonth: Date;
  monthNames: string[];
  dayNames: string[];
  year: number;
  month: number;
  timeSlots: string[];
  unavailableSlots: string[];
  generateCalendarDays: () => any[];
  handleDateSelect: (date: Date) => void;
  handleTimeSelect: (time: string) => void;
  handleConfirmBooking: () => void;
  prevMonth: () => void;
  nextMonth: () => void;
}

export default function ConsultationScheduler({
  selectedDate,
  selectedTime,
  currentMonth,
  monthNames,
  dayNames,
  year,
  month,
  timeSlots,
  unavailableSlots,
  generateCalendarDays,
  handleDateSelect,
  handleTimeSelect,
  handleConfirmBooking,
  prevMonth,
  nextMonth
}: ConsultationSchedulerProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Schedule Your Consultation</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calendar */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Button variant="ghost" size="sm" onClick={prevMonth}>
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <CardTitle className="text-xl">
                  {monthNames[month]} {year}
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={nextMonth}>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 mb-4">
                {dayNames.map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 p-2">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {generateCalendarDays().map((dayData, index) => (
                  <div key={index} className="aspect-square">
                    {dayData && (
                      <button
                        onClick={() => dayData.isAvailable && handleDateSelect(dayData.date)}
                        disabled={!dayData.isAvailable}
                        className={`
                          w-full h-full rounded-lg text-sm font-medium transition-colors
                          ${
                            dayData.isSelected
                              ? "bg-[#5046E5] text-white"
                              : dayData.isToday
                                ? "bg-blue-100 text-[#5046E5]"
                                : dayData.isAvailable
                                  ? "hover:bg-gray-100 text-gray-900"
                                  : "text-gray-300 cursor-not-allowed"
                          }
                        `}
                      >
                        {dayData.day}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Available Times */}
          <div>
            {selectedDate ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Available Times for{" "}
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {timeSlots.map((time) => {
                      const isUnavailable = unavailableSlots.includes(time);
                      const isSelected = selectedTime === time;

                      return (
                        <button
                          key={time}
                          onClick={() => !isUnavailable && handleTimeSelect(time)}
                          disabled={isUnavailable}
                          className={`
                            p-3 rounded-lg text-sm font-medium transition-colors border
                            ${
                              isSelected
                                ? "bg-[#5046E5] text-white border-[#5046E5]"
                                : isUnavailable
                                  ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                                  : "bg-white text-gray-900 border-gray-200 hover:border-[#5046E5] hover:text-[#5046E5]"
                            }
                          `}
                        >
                          {time}
                          {isUnavailable && <div className="text-xs text-gray-400 mt-1">Unavailable</div>}
                        </button>
                      );
                    })}
                  </div>

                  {selectedTime && (
                    <Button
                      onClick={handleConfirmBooking}
                      className="w-full bg-[#5046E5] hover:bg-[#4338CA] text-white"
                    >
                      Book Appointment
                    </Button>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a Date</h3>
                  <p className="text-gray-600">
                    Please select a date from the calendar to view available appointment times.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
