-- Script to modify consultations table columns to allow NULL values for appointment fields

-- Make appointment_date nullable
ALTER TABLE consultations ALTER COLUMN appointment_date DROP NOT NULL;

-- Make appointment_time nullable
ALTER TABLE consultations ALTER COLUMN appointment_time DROP NOT NULL;
