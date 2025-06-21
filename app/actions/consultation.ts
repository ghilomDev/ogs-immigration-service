'use server';

import { supabase } from '@/lib/supabase';
import type { ConsultationBooking, ConsultationStatus } from '@/lib/supabase';

export async function createConsultation(formData: FormData) {
  try {
    // Get values from form data
    const appointmentDate = formData.get('appointmentDate') as string | null;
    const appointmentTime = formData.get('appointmentTime') as string | null;

    // Create consultation data object
    const consultationData: Omit<ConsultationBooking, 'id' | 'created_at' | 'updated_at'> = {
      first_name: formData.get('firstName') as string,
      last_name: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      service_type: (formData.get('service') as string) || null,
      additional_info: (formData.get('message') as string) || null,
      status: 'pending',
    };

    // Only add appointment details if they exist
    if (appointmentDate && appointmentDate.trim() !== '') {
      consultationData.appointment_date = appointmentDate;
    }

    if (appointmentTime && appointmentTime.trim() !== '') {
      consultationData.appointment_time = appointmentTime;
    }

    const { data, error } = await supabase
      .from('consultations')
      .insert([consultationData])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return {
        success: false,
        error: 'Failed to book consultation. Please try again.',
      };
    }

    return {
      success: true,
      data: data,
      message: 'Consultation booked successfully!',
    };
  } catch (error) {
    console.error('Server error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}

export async function getConsultations() {
  try {
    const { data, error } = await supabase
      .from('consultations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return {
        success: false,
        error: 'Failed to fetch consultations.',
      };
    }

    return {
      success: true,
      data: data,
    };
  } catch (error) {
    console.error('Server error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred.',
    };
  }
}

// This function is specifically for server components
export async function getConsultationsServer() {
  try {
    const { data, error } = await supabase
      .from('consultations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Failed to fetch consultations.');
    }

    return data || [];
  } catch (error) {
    console.error('Server error:', error);
    throw error;
  }
}

export async function updateConsultationStatus(id: string, status: string) {
  try {
    // Validate the status to ensure it's one of the allowed values
    const validStatuses = ['pending', 'contacted', 'processing', 'finished'];

    if (!validStatuses.includes(status)) {
      return {
        success: false,
        error: 'Invalid status value provided.',
      };
    }

    const { data, error } = await supabase
      .from('consultations')
      .update({
        status: status,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return {
        success: false,
        error: 'Failed to update consultation status.',
      };
    }

    return {
      success: true,
      data: data,
      message: 'Consultation status updated successfully!',
    };
  } catch (error) {
    console.error('Server error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred.',
    };
  }
}

export async function getBookedTimeSlots() {
  try {
    const { data, error } = await supabase
      .from('consultations')
      .select('appointment_date, appointment_time')
      .gte('appointment_date', new Date().toISOString().split('T')[0])
      .order('appointment_date', { ascending: true });

    if (error) {
      console.error('Supabase error:', error);
      return {
        success: false,
        error: 'Failed to fetch booked time slots.',
      };
    }

    // Transform data into a map of date -> array of time slots
    const slotsByDate: Record<string, string[]> = {};

    data.forEach(slot => {
      const date = slot.appointment_date;
      const timeSlot = slot.appointment_time;

      if (!date || !timeSlot) return; // Skip if date or time is missing

      if (!slotsByDate[date]) {
        slotsByDate[date] = [];
      }

      slotsByDate[date].push(timeSlot);
    });

    return {
      success: true,
      data: slotsByDate,
    };
  } catch (error) {
    console.error('Server error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred.',
    };
  }
}
