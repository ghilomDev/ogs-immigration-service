import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ConsultationBooking = {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone: string
  appointment_date?: string | null
  appointment_time?: string | null
  service_type?: string | null
  additional_info?: string | null
  status?: string
  created_at?: string
  updated_at?: string
}
