-- Fix RLS to allow daily_readings inserts
-- Run this in Supabase SQL Editor

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can read daily readings" ON daily_readings;
DROP POLICY IF EXISTS "Service role can manage daily readings" ON daily_readings;

-- Allow anyone to read AND insert (for seeding)
-- In production, you'd restrict inserts to service_role only
CREATE POLICY "Anyone can read daily readings" ON daily_readings
  FOR SELECT USING (true);

CREATE POLICY "Allow daily readings inserts" ON daily_readings
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Service role can manage daily readings" ON daily_readings
  FOR ALL USING (auth.jwt()->>'role' = 'service_role');
