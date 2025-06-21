CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create the availability table
CREATE TABLE IF NOT EXISTS availability (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL,
  time_slot VARCHAR(10) NOT NULL,
  is_available BOOLEAN DEFAULT true,
  consultation_id UUID REFERENCES consultations(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(date, time_slot)
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_availability_date ON availability(date);
CREATE INDEX IF NOT EXISTS idx_availability_date_time ON availability(date, time_slot);
CREATE INDEX IF NOT EXISTS idx_availability_consultation_id ON availability(consultation_id);

-- Insert default slots for the next 30 days (excluding weekends)
DO $$
DECLARE
  current_date_var DATE := CURRENT_DATE;
  end_date DATE := CURRENT_DATE + 30;
  time_slots TEXT[] := ARRAY[
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
  ];
  slot TEXT;
BEGIN
  WHILE current_date_var <= end_date LOOP
    IF EXTRACT(DOW FROM current_date_var) NOT IN (0, 6) THEN
      FOREACH slot IN ARRAY time_slots LOOP
        INSERT INTO availability (date, time_slot)
        VALUES (current_date_var, slot)
        ON CONFLICT (date, time_slot) DO NOTHING;
      END LOOP;
    END IF;
    current_date_var := current_date_var + 1;
  END LOOP;
END
$$ LANGUAGE plpgsql;
