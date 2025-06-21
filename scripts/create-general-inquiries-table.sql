-- Create a new table for general inquiries (no appointment needed)
CREATE TABLE general_inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_type TEXT,
  additional_info TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add comment to explain the difference
COMMENT ON TABLE general_inquiries IS 'General contact requests without specific appointment times';
COMMENT ON TABLE consultations IS 'Consultation requests with specific appointment dates and times';
