/**
 * Supabase Connection Test Script
 * 
 * Run this to verify your Supabase setup is working correctly.
 * 
 * Usage:
 *   npx tsx test-supabase.ts
 * 
 * Or add to package.json:
 *   "test:supabase": "tsx test-supabase.ts"
 */

import { createClient } from '@supabase/supabase-js';

// Load environment variables
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase credentials in environment');
  console.error('Expected: EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY');
  console.error('\nMake sure you:');
  console.error('1. Created a .env file in app/ directory');
  console.error('2. Copied credentials from Supabase Dashboard → Settings → API');
  console.error('3. Restarted your dev server after adding .env');
  process.exit(1);
}

console.log('🔍 Testing Supabase connection...');
console.log(`URL: ${supabaseUrl}`);

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  try {
    // Test 1: Basic connectivity
    console.log('\n📡 Test 1: Basic connectivity...');
    const { data: healthData, error: healthError } = await supabase
      .from('daily_readings')
      .select('count')
      .limit(1);
    
    if (healthError) {
      if (healthError.code === 'PGRST116') {
        console.log('✅ Connected! (No readings yet - this is expected)');
      } else {
        throw healthError;
      }
    } else {
      console.log('✅ Connected successfully!');
    }

    // Test 2: Try to insert a test user (will fail without auth, but tests RLS)
    console.log('\n👤 Test 2: Testing user insertion (RLS)...');
    const testUserId = crypto.randomUUID();
    const { error: insertError } = await supabase
      .from('users')
      .insert({
        id: testUserId,
        name: 'Test User',
        email: 'test@example.com'
      });
    
    if (insertError) {
      console.log('⚠️  Insert blocked by RLS (expected without authentication)');
      console.log(`   Error: ${insertError.message}`);
    } else {
      console.log('✅ Insert succeeded (check if RLS is configured correctly)');
    }

    // Test 3: Read public data
    console.log('\n📖 Test 3: Reading public data (daily_readings)...');
    const { data: readings, error: readingsError } = await supabase
      .from('daily_readings')
      .select('*')
      .limit(5);
    
    if (readingsError) {
      console.log(`⚠️  Read error: ${readingsError.message}`);
    } else {
      console.log(`✅ Public read access working (${readings?.length || 0} readings found)`);
    }

    console.log('\n✅ All tests completed!');
    console.log('\n📋 Next steps:');
    console.log('1. Apply the schema migration in Supabase Dashboard → SQL Editor');
    console.log('2. Set up authentication (Supabase Auth or your preferred method)');
    console.log('3. Test with a real authenticated user session');
    
  } catch (error: any) {
    console.error('\n❌ Connection test failed:');
    console.error(`   ${error.message}`);
    console.error('\nTroubleshooting:');
    console.error('• Check that your Supabase project is active');
    console.error('• Verify the URL and anon key are correct');
    console.error('• Make sure the schema has been applied');
    process.exit(1);
  }
}

testConnection();
