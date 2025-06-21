// This script verifies if the migration was applied successfully
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase URL or anon key in .env.local file');
  process.exit(1);
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

async function verifyMigration() {
  console.log('Verifying migration by inserting test data without appointment fields...');

  try {
    // Try inserting a consultation without appointment date/time
    const { data, error } = await supabase
      .from('consultations')
      .insert([
        {
          first_name: 'Test',
          last_name: 'User',
          email: 'test@example.com',
          phone: '123-456-7890',
          service_type: 'Test',
          additional_info: 'This is a test to verify nullable fields',
          status: 'test',
        },
      ])
      .select();

    if (error) {
      console.error('Migration verification FAILED. Error:', error);
      console.log('\nThe migration may not have been applied successfully.');
      console.log('Please run the SQL commands directly through the Supabase SQL Editor.');
    } else {
      console.log('Migration verification SUCCESSFUL! 🎉');
      console.log(
        'The consultations table now accepts entries without appointment_date and appointment_time.'
      );
      console.log(
        '\nTest data inserted. You may want to delete this test entry from your database.'
      );
    }
  } catch (err) {
    console.error('Exception during verification:', err);
  }
}

verifyMigration();
