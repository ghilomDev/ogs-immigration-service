# Updating the Supabase Database Schema

To fix the not-null constraint error for appointment fields, follow these steps to execute the SQL script:

1. Log into your Supabase dashboard at https://app.supabase.com/
2. Select your project
3. Navigate to the "SQL Editor" section in the left sidebar
4. Create a "New Query"
5. Copy and paste the contents of the `update-consultations-table.sql` file into the editor
6. Click "Run" to execute the script

This will modify the consultations table to allow NULL values for appointment_date and appointment_time columns.

## Verification

After running the script, you can verify the changes by:

1. Going to the "Table Editor" section
2. Selecting the "consultations" table
3. Checking that the appointment_date and appointment_time columns no longer have the "not null" constraint

## Note

Remember to update your application code to handle the possibility of null values in these fields in any queries or display logic.
