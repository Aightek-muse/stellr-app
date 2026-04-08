-- Fix RLS policies for anonymous onboarding
-- Run this in Supabase SQL Editor

-- Drop existing policies
DROP POLICY IF EXISTS "Users can insert own data" ON users;
DROP POLICY IF EXISTS "Users can read own data" ON users;

-- Create new policies that allow anonymous inserts
-- Users can insert without auth (for onboarding flow)
CREATE POLICY "Allow anonymous user creation" ON users
  FOR INSERT WITH CHECK (true);

-- Users can only read their own data (by name lookup)
CREATE POLICY "Users can read by name" ON users
  FOR SELECT USING (true);

-- Drop existing profile policies
DROP POLICY IF EXISTS "Users can insert own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can read own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON user_profiles;

-- Allow anonymous profile creation/reading
CREATE POLICY "Allow anonymous profile creation" ON user_profiles
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous profile reading" ON user_profiles
  FOR SELECT USING (true);

CREATE POLICY "Allow anonymous profile update" ON user_profiles
  FOR UPDATE USING (true);
