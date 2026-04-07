import { supabase } from './supabase';
import type { SignResult } from './signAlgorithm';

/**
 * Get or create user by name
 * Returns user ID
 */
export async function getOrCreateUser(name: string): Promise<string> {
  if (!supabase) throw new Error('Supabase not configured');

  // Try to find existing user
  const { data: existing, error: fetchError } = await supabase
    .from('users')
    .select('id')
    .eq('name', name)
    .single();

  if (existing) {
    return existing.id;
  }

  // Create new user
  const { data: newUser, error: insertError } = await supabase
    .from('users')
    .insert({ name })
    .select('id')
    .single();

  if (insertError) throw insertError;
  return newUser.id;
}

/**
 * Save user profile with signs and answers
 */
export async function saveUserProfile(
  userId: string,
  name: string,
  signs: SignResult,
  answers: Record<number, string>
) {
  if (!supabase) throw new Error('Supabase not configured');

  const { data, error } = await supabase
    .from('user_profiles')
    .upsert({
      user_id: userId,
      sun_sign: signs.sun.sign.toLowerCase(),
      moon_sign: signs.moon.sign.toLowerCase(),
      rising_sign: signs.rising.sign.toLowerCase(),
      answers: answers,
      birth_date: signs.sun.birthDate || null,
      birth_time: signs.sun.birthTime || null,
      birth_location: signs.sun.birthLocation || null,
    });

  if (error) throw error;
  return data;
}

/**
 * Get daily reading for a sign and date
 * Returns null if not found (PGRST116)
 */
export async function getDailyReading(sign: string, date: string) {
  if (!supabase) throw new Error('Supabase not configured');

  const { data, error } = await supabase
    .from('daily_readings')
    .select('*')
    .eq('sign', sign.toLowerCase())
    .eq('date', date)
    .single();

  // PGRST116 = not found, which is OK
  if (error && error.code !== 'PGRST116') throw error;
  return data;
}

/**
 * Check subscription status for a user
 */
export async function getSubscriptionStatus(userId: string) {
  if (!supabase) throw new Error('Supabase not configured');

  const { data, error } = await supabase
    .from('subscriptions')
    .select('status, plan, end_date')
    .eq('user_id', userId)
    .single();

  // PGRST116 = not found (no subscription)
  if (error && error.code !== 'PGRST116') throw error;
  return data;
}

/**
 * Get premium insights for a sign
 */
export async function getPremiumInsights(sign: string) {
  if (!supabase) throw new Error('Supabase not configured');

  const { data, error } = await supabase
    .from('insights')
    .select('*')
    .or(`sign_filter.is.null,sign_filter.cs.{${sign}}`)
    .eq('premium', true)
    .order('created_at', { ascending: false })
    .limit(10);

  if (error) throw error;
  return data;
}

/**
 * Save daily reading (for admin/seeding)
 */
export async function saveDailyReading(reading: {
  sign: string;
  date: string;
  title: string;
  content: string;
  lucky_color?: string;
  avoid?: string;
  mood?: string;
}) {
  if (!supabase) throw new Error('Supabase not configured');

  const { data, error } = await supabase
    .from('daily_readings')
    .upsert({
      sign: reading.sign.toLowerCase(),
      date: reading.date,
      title: reading.title,
      content: reading.content,
      lucky_color: reading.lucky_color,
      avoid: reading.avoid,
      mood: reading.mood,
    });

  if (error) throw error;
  return data;
}
