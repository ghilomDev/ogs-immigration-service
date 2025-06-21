// This script connects to Supabase and runs the SQL migration to update the consultations table
// It uses your existing .env.local file for credentials

require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

// Get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Error: Missing Supabase credentials in .env.local file');
  console.error(
    'Please make sure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set'
  );
  process.exit(1);
}

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function runMigration() {
  try {
    console.log('Connecting to Supabase...');

    // SQL to make appointment_date nullable
    const result1 = await supabase.rpc(
      'alter_table_consultations_date',
      {},
      {
        headers: { Prefer: 'params=single-object' },
      }
    );

    // SQL to make appointment_time nullable
    const result2 = await supabase.rpc(
      'alter_table_consultations_time',
      {},
      {
        headers: { Prefer: 'params=single-object' },
      }
    );

    if (result1.error) {
      throw new Error(`Error altering appointment_date: ${result1.error.message}`);
    }

    if (result2.error) {
      throw new Error(`Error altering appointment_time: ${result2.error.message}`);
    }

    console.log('✅ Migration completed successfully! The appointment fields are now nullable.');
    console.log('You can now submit forms without appointment date/time.');
  } catch (error) {
    console.error('❌ Error running migration:', error.message);
    console.error('');
    console.error('This likely means you need to create the RPC functions in Supabase first.');
    console.error('Please go to the Supabase SQL Editor and run the following SQL:');
    console.error('');
    console.error('CREATE OR REPLACE FUNCTION alter_table_consultations_date()');
    console.error('RETURNS void AS $$');
    console.error('BEGIN');
    console.error('  ALTER TABLE consultations ALTER COLUMN appointment_date DROP NOT NULL;');
    console.error('END;');
    console.error('$$ LANGUAGE plpgsql SECURITY DEFINER;');
    console.error('');
    console.error('CREATE OR REPLACE FUNCTION alter_table_consultations_time()');
    console.error('RETURNS void AS $$');
    console.error('BEGIN');
    console.error('  ALTER TABLE consultations ALTER COLUMN appointment_time DROP NOT NULL;');
    console.error('END;');
    console.error('$$ LANGUAGE plpgsql SECURITY DEFINER;');
  }
}

runMigration();
