// This script connects to Supabase and runs SQL migrations
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase URL or service role key in .env.local file');
  process.exit(1);
}

// Initialize Supabase client with service role key for admin privileges
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Migration files in order of execution
const migrationFiles = [
  'create-consultations-table.sql',
  'create-availability-table.sql',
  'create-general-inquiries-table.sql',
  'create-rpc-functions.sql',
  'update-consultations-table.sql'
];

async function runMigrations() {
  console.log('Starting database migrations...');
  
  for (const filename of migrationFiles) {
    try {
      console.log(`Processing migration: ${filename}`);
      const filePath = path.join(process.cwd(), 'scripts', filename);
      
      // Skip if file doesn't exist
      if (!fs.existsSync(filePath)) {
        console.log(`Skipping migration ${filename} - file not found`);
        continue;
      }
      
      const sqlContent = fs.readFileSync(filePath, 'utf8');
      
      // Execute the SQL using Supabase's REST API
      const { error } = await supabase.rpc('exec_sql', { query: sqlContent });
      
      if (error) {
        console.error(`Error executing ${filename}:`, error);
        // Don't exit, try the next migration
      } else {
        console.log(`Successfully executed ${filename}`);
      }
    } catch (err) {
      console.error(`Failed to process ${filename}:`, err);
    }
  }
  
  console.log('Migration process completed.');
}

// Run the migrations
runMigrations().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
