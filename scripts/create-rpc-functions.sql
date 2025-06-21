-- Create RPC functions to modify the consultations table schema
-- Run this in the Supabase SQL Editor

-- Function to make appointment_date nullable
CREATE OR REPLACE FUNCTION alter_table_consultations_date()
RETURNS void AS $$
BEGIN
  ALTER TABLE consultations ALTER COLUMN appointment_date DROP NOT NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to make appointment_time nullable
CREATE OR REPLACE FUNCTION alter_table_consultations_time()
RETURNS void AS $$
BEGIN
  ALTER TABLE consultations ALTER COLUMN appointment_time DROP NOT NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Run the functions to apply the changes
SELECT alter_table_consultations_date();
SELECT alter_table_consultations_time();

-- Verify the changes (this will show all columns in the table)
SELECT 
  column_name, 
  data_type, 
  is_nullable 
FROM 
  information_schema.columns 
WHERE 
  table_name = 'consultations';
