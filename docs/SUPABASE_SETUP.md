# Supabase Setup Guide

This guide will help you connect your application to Supabase.

## 1. Create a Supabase Project

1. Go to [Supabase](https://supabase.com/) and sign up or sign in
2. Create a new project
3. Choose a name and password for your project
4. Wait for your database to be provisioned

## 2. Get Your API Keys

1. Once your project is ready, go to the project dashboard
2. On the left sidebar, click on "Project Settings"
3. Click on "API" in the settings menu
4. You'll find your "Project URL" and "anon public" key here

## 3. Set Up Your Environment Variables

1. Open your `.env.local` file
2. Update the values with your actual Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## 4. Create Required Tables

In your Supabase SQL Editor, create the necessary tables:

```sql
-- Create consultations table
CREATE TABLE consultations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  appointment_date DATE NOT NULL,
  appointment_time TEXT NOT NULL,
  service_type TEXT,
  additional_info TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated access
CREATE POLICY "Allow authenticated access" ON consultations
  FOR ALL
  TO authenticated
  USING (true);
```

## 5. Restart Your Development Server

After completing these steps, restart your Next.js development server to apply the changes.
