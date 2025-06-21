"use server"

import { supabase } from "@/lib/supabase"
import type { ConsultationBooking } from "@/lib/supabase"

export async function createConsultation(formData: FormData) {
  try {
    // Get values from form data
    const appointmentDate = formData.get("appointmentDate") as string | null;
    const appointmentTime = formData.get("appointmentTime") as string | null;
    
    // Create consultation data object
    const consultationData: Omit<ConsultationBooking, "id" | "created_at" | "updated_at"> = {
      first_name: formData.get("firstName") as string,
      last_name: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service_type: (formData.get("service") as string) || null,
      additional_info: (formData.get("message") as string) || null,
      status: "pending",
    }
    
    // Only add appointment details if they exist
    if (appointmentDate && appointmentDate.trim() !== '') {
      consultationData.appointment_date = appointmentDate;
    }
    
    if (appointmentTime && appointmentTime.trim() !== '') {
      consultationData.appointment_time = appointmentTime;
    }

    const { data, error } = await supabase.from("consultations").insert([consultationData]).select().single()

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        error: "Failed to book consultation. Please try again.",
      }
    }

    return {
      success: true,
      data: data,
      message: "Consultation booked successfully!",
    }
  } catch (error) {
    console.error("Server error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}

export async function getConsultations() {
  try {
    const { data, error } = await supabase.from("consultations").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        error: "Failed to fetch consultations.",
      }
    }

    return {
      success: true,
      data: data,
    }
  } catch (error) {
    console.error("Server error:", error)
    return {
      success: false,
      error: "An unexpected error occurred.",
    }
  }
}

export async function updateConsultationStatus(id: string, status: string) {
  try {
    const { data, error } = await supabase
      .from("consultations")
      .update({
        status: status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        error: "Failed to update consultation status.",
      }
    }

    return {
      success: true,
      data: data,
      message: "Consultation status updated successfully!",
    }
  } catch (error) {
    console.error("Server error:", error)
    return {
      success: false,
      error: "An unexpected error occurred.",
    }
  }
}
