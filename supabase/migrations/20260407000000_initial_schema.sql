-- Stellr Initial Schema
-- Run this in Supabase SQL Editor or via `supabase db push`

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- User profiles (signs, birth data if provided)
CREATE TABLE IF NOT EXISTS user_profiles (
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  sun_sign TEXT NOT NULL,
  moon_sign TEXT NOT NULL,
  rising_sign TEXT NOT NULL,
  birth_date DATE,
  birth_time TIME,
  birth_location TEXT,
  answers JSONB, -- { "1": "A", "2": "B", ... }
  created_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id)
);

-- Daily readings (cached, generated daily)
CREATE TABLE IF NOT EXISTS daily_readings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sign TEXT NOT NULL, -- aries, taurus, etc.
  date DATE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  lucky_color TEXT,
  avoid TEXT,
  mood TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(sign, date)
);

-- User subscriptions (Stellr+)
CREATE TABLE IF NOT EXISTS subscriptions (
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  status TEXT NOT NULL, -- 'active', 'trialing', 'expired', 'cancelled'
  plan TEXT NOT NULL, -- 'monthly', 'annual'
  start_date TIMESTAMPTZ,
  end_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id)
);

-- Insights (premium content)
CREATE TABLE IF NOT EXISTS insights (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL, -- 'transit', 'compatibility', 'career', 'relationship'
  sign_filter TEXT[], -- which signs this applies to (or null for all)
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  premium BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_daily_readings_sign_date ON daily_readings(sign, date);
CREATE INDEX IF NOT EXISTS idx_insights_premium ON insights(premium, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_insights_sign_filter ON insights USING GIN(sign_filter);

-- ============================================
-- ROW LEVEL SECURITY (RLS) - SECURITY CRITICAL
-- ============================================

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_readings ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE insights ENABLE ROW LEVEL SECURITY;

-- ============================================
-- users table policies
-- ============================================
CREATE POLICY "Users can read own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can insert own data" ON users
  FOR INSERT WITH CHECK (auth.uid() = id);

-- ============================================
-- user_profiles table policies
-- ============================================
CREATE POLICY "Users can read own profile" ON user_profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile" ON user_profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own profile" ON user_profiles
  FOR UPDATE USING (auth.uid() = user_id);

-- ============================================
-- daily_readings table policies (public read)
-- ============================================
CREATE POLICY "Anyone can read daily readings" ON daily_readings
  FOR SELECT USING (true);

-- ============================================
-- subscriptions table policies
-- ============================================
CREATE POLICY "Users can read own subscription" ON subscriptions
  FOR SELECT USING (auth.uid() = user_id);

-- ============================================
-- insights table policies (public read)
-- ============================================
CREATE POLICY "Anyone can read insights" ON insights
  FOR SELECT USING (true);
