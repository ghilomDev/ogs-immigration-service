-- Create availability table for managing time slots
CREATE TABLE IF NOT EXISTS availability (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL,
  time_slot VARCHAR(10) NOT NULL,
  is_available BOOLEAN DEFAULT true,
  consultation_id UUID REFERENCES consultations(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(date, time_slot)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_availability_date ON availability(date);
CREATE INDEX IF NOT EXISTS idx_availability_date_time ON availability(date, time_slot);
CREATE INDEX IF NOT EXISTS idx_availability_consultation_id ON availability(consultation_id);

-- Insert default available time slots for the next 30 days (excluding weekends)
DO $$
DECLARE
  current_date DATE := CURRENT_DATE;
  end_date DATE := CURRENT_DATE + INTERVAL '30 days';
  time_slots TEXT[] := ARRAY[
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
  ];
  slot TEXT;
BEGIN
  WHILE current_date <= end_date LOOP
    -- Skip weekends (Saturday = 6, Sunday = 0)
    IF EXTRACT(DOW FROM current_date) NOT IN (0, 6) THEN
      FOREACH slot IN ARRAY time_slots LOOP
        INSERT INTO availability (date, time_slot, is_available)
        VALUES (current_date, slot, true)
        ON CONFLICT (date, time_slot) DO NOTHING;
      END LOOP;
    END IF;
    current_date := current_date + INTERVAL '1 day';
  END LOOP;
END $$;
