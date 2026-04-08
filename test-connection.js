const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: 'app/.env' });

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

console.log('Testing Supabase connection...');
console.log('URL:', supabaseUrl);

const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
  try {
    // Test 1: Check connection
    console.log('\n✅ Test 1: Checking connection...');
    const { data: tables, error } = await supabase
      .from('daily_readings')
      .select('count', { count: 'exact', head: true });
    
    if (error) throw error;
    console.log('✅ Connection successful!');

    // Test 2: Insert a test user
    console.log('\n✅ Test 2: Inserting test user...');
    const testUser = {
      name: 'Test User ' + Date.now(),
      email: 'test@stellr.app'
    };
    
    const { data: user, error: userError } = await supabase
      .from('users')
      .insert(testUser)
      .select()
      .single();
    
    if (userError) throw userError;
    console.log('✅ User created:', user.name);

    // Test 3: Insert test profile
    console.log('\n✅ Test 3: Inserting test profile...');
    const testProfile = {
      user_id: user.id,
      sun_sign: 'leo',
      moon_sign: 'scorpio',
      rising_sign: 'gemini',
      answers: { '1': 'A', '2': 'B', '3': 'C' }
    };
    
    const { data: profile, error: profileError } = await supabase
      .from('user_profiles')
      .insert(testProfile)
      .select()
      .single();
    
    if (profileError) throw profileError;
    console.log('✅ Profile created for user');

    // Test 4: Read back the data
    console.log('\n✅ Test 4: Reading data back...');
    const { data: readProfile, error: readError } = await supabase
      .from('user_profiles')
      .select('*, users(name)')
      .eq('user_id', user.id)
      .single();
    
    if (readError) throw readError;
    console.log('✅ Data read successfully!');
    console.log('   Sun:', readProfile.sun_sign);
    console.log('   Moon:', readProfile.moon_sign);
    console.log('   Rising:', readProfile.rising_sign);

    // Cleanup
    console.log('\n✅ Test 5: Cleaning up...');
    await supabase.from('user_profiles').delete().eq('user_id', user.id);
    await supabase.from('users').delete().eq('id', user.id);
    console.log('✅ Cleanup complete!');

    console.log('\n🎉 ALL TESTS PASSED! Backend is working! 🎉\n');
  } catch (err) {
    console.error('\n❌ Test failed:', err.message);
    console.error('Details:', err);
    process.exit(1);
  }
}

test();
