// This script connects to your Supabase database and generates instructions for running the SQL migration
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  console.error('Missing Supabase URL in .env.local file');
  process.exit(1);
}

// Read the SQL migration file
const sqlFile = path.join(process.cwd(), 'scripts', 'update-consultations-table.sql');
const sqlContent = fs.readFileSync(sqlFile, 'utf8');

// Generate instructions for running the SQL in Supabase Dashboard
function displayMigrationInstructions() {
  console.log(`
=======================================================================
SUPABASE SQL MIGRATION INSTRUCTIONS
=======================================================================

Follow these steps to run the SQL migration in your Supabase project:

1. Log into your Supabase dashboard at https://app.supabase.com/
2. Select your project: ${supabaseUrl.replace('https://', '')}
3. Navigate to the "SQL Editor" in the left sidebar
4. Click on "New Query"
5. Copy and paste the following SQL:

${sqlContent}

6. Click "Run" to execute the SQL statements
7. Verify the changes by going to "Table Editor" > "consultations"
   and checking that appointment_date and appointment_time are now nullable

=======================================================================
`);
}

// Display the instructions
displayMigrationInstructions();
