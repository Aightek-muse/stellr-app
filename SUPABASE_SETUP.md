# Supabase Setup Guide

## 1. Create Project

1. Go to https://supabase.com
2. Create new project (region: closest to your users)
3. Wait for project to provision (~2 min)

## 2. Run Schema

1. Go to SQL Editor
2. Copy schema from `supabase/migrations/20260407000000_initial_schema.sql`
3. Run all tables

## 3. Get Credentials

1. Go to Settings → API
2. Copy:
   - Project URL → `.env` `EXPO_PUBLIC_SUPABASE_URL`
   - anon/public key → `.env` `EXPO_PUBLIC_SUPABASE_ANON_KEY`

## 4. Configure Environment

1. Copy `.env.example` to `.env` in the `app/` directory:
   ```bash
   cd app
   cp .env.example .env
   ```

2. Update `.env` with your Supabase credentials:
   ```bash
   EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

## 5. Seed Daily Readings (Optional)

To pre-populate 30 days of readings for all 12 signs, you can:

1. Use the Supabase Dashboard → Table Editor → daily_readings → Insert row
2. Or create a seed script using the `saveDailyReading` function from `lib/database.ts`

Example seed data structure:
```typescript
{
  sign: 'aries', // or taurus, gemini, etc.
  date: '2026-04-07', // YYYY-MM-DD
  title: 'Cosmic Energy Shifts',
  content: 'Today brings opportunities for...',
  lucky_color: 'Deep Blue',
  avoid: 'Impulsive decisions',
  mood: 'Reflective'
}
```

## 6. Test Connection

1. Run the app:
   ```bash
   cd app
   npm start
   ```

2. Complete onboarding flow
3. Check Supabase dashboard → Table Editor → user_profiles
4. Verify user data is saved

## 7. Row Level Security (RLS)

The migration file includes basic RLS policies. For production:

- Review and tighten policies based on your security requirements
- Consider adding authentication if needed
- Test policies thoroughly before deploying

## Troubleshooting

### "Supabase not configured" error
- Check that `.env` file exists in `app/` directory
- Verify `EXPO_PUBLIC_SUPABASE_URL` and `EXPO_PUBLIC_SUPABASE_ANON_KEY` are set
- Restart Expo dev server after changing `.env`

### "PGRST116" errors
- This is expected when a reading doesn't exist yet
- The app handles this gracefully with fallback content

### Data not saving
- Check browser/dev console for errors
- Verify Supabase project is active
- Check RLS policies aren't blocking inserts

## Next Steps

- [ ] Implement RevenueCat for subscriptions
- [ ] Add push notifications for daily reminders
- [ ] Create admin dashboard for content management
- [ ] Set up automated daily reading generation
