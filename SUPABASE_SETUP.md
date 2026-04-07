# Supabase Setup Guide

## Quick Start

```bash
# 1. Install Supabase CLI (if not already)
npx supabase --version

# 2. Login to Supabase
npx supabase login

# 3. Initialize Supabase project
npx supabase init

# 4. Link to your Supabase project
npx supabase link --project-ref YOUR_PROJECT_ID

# 5. Push schema to database
npx supabase db push
```

---

## Step-by-Step Setup

### 1. Create Supabase Project

1. Go to https://supabase.com
2. Click "New Project"
3. Fill in:
   - **Name:** `stellr` (or your preferred name)
   - **Database Password:** Generate a strong password (save it!)
   - **Region:** Choose closest to your users (e.g., `us-east-1` for US, `eu-west-1` for Europe)
4. Wait for provisioning (~2 minutes)
5. Copy your **Project ID** (e.g., `abcdefghijklnopqrst`)

### 2. Authenticate CLI

```bash
cd /home/ubuntu/.openclaw/workspace/projects/stellr-app
npx supabase login
```

This will open a browser window. Complete the OAuth flow.

### 3. Initialize Supabase

```bash
npx supabase init
```

This creates `supabase/config.toml`.

### 4. Link Project

```bash
npx supabase link --project-ref YOUR_PROJECT_ID
```

Replace `YOUR_PROJECT_ID` with your actual project ID from Step 1.

### 5. Apply Schema

```bash
npx supabase db push
```

This applies the migration from `supabase/migrations/20260407000000_initial_schema.sql`.

### 6. Get API Credentials

1. Go to **Supabase Dashboard** → **Settings** → **API**
2. Copy:
   - **Project URL** → `EXPO_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `EXPO_PUBLIC_SUPABASE_ANON_KEY`

### 7. Configure Environment

The `.env` file is already created at `app/.env`. Update it:

```bash
cd app
# Edit .env with your credentials from Step 6
```

**⚠️ Never commit `.env` to git!** It's in `.gitignore`.

### 8. Test Connection

```bash
# Install tsx if needed
npm install -g tsx

# Run test script
cd /home/ubuntu/.openclaw/workspace/projects/stellr-app
npx tsx test-supabase.ts
```

Expected output:
```
✅ Connected! (No readings yet - this is expected)
⚠️  Insert blocked by RLS (expected without authentication)
✅ Public read access working (0 readings found)
✅ All tests completed!
```

---

## Security Checklist

### ✅ RLS Policies (Already Applied)

The migration includes these RLS policies:

| Table | Policy | Description |
|-------|--------|-------------|
| `users` | SELECT | Users can read own data |
| `users` | INSERT | Users can insert own data |
| `user_profiles` | SELECT | Users can read own profile |
| `user_profiles` | INSERT | Users can insert own profile |
| `user_profiles` | UPDATE | Users can update own profile |
| `daily_readings` | SELECT | Anyone can read (public content) |
| `subscriptions` | SELECT | Users can read own subscription |
| `insights` | SELECT | Anyone can read (public content) |

### ✅ Security Best Practices

- ✅ RLS enabled on all tables
- ✅ Anon key used in client (never service_role key)
- ✅ Views bypass RLS (none in current schema)
- ✅ UPDATE requires SELECT policy (handled)
- ✅ No `user_metadata` claims in authorization

### ⚠️ Production Considerations

Before going to production:

1. **Add authentication** - Implement Supabase Auth or your auth provider
2. **Test RLS policies** - Verify users can only access their own data
3. **Enable 2FA** - For your Supabase account
4. **Set up backups** - Supabase has automated backups, but verify retention
5. **Monitor usage** - Set up alerts for unusual activity

---

## Troubleshooting

### "Supabase not configured" error

**Cause:** Missing or incorrect `.env` file

**Fix:**
```bash
# Check .env exists
ls -la app/.env

# Verify contents
cat app/.env

# Restart Expo dev server
cd app
npm start
```

### "PGRST116" error (relation does not exist)

**Cause:** Schema not applied to database

**Fix:**
```bash
npx supabase db push
```

Or manually run the SQL in Supabase Dashboard → SQL Editor.

### "permission denied for table" error

**Cause:** RLS policy blocking access

**Fix:**
1. Check if user is authenticated
2. Verify RLS policies match your use case
3. For public tables, ensure policy is `USING (true)`

### "Invalid API key" error

**Cause:** Wrong anon key or URL

**Fix:**
1. Go to Supabase Dashboard → Settings → API
2. Copy the **anon/public** key (NOT service_role)
3. Update `app/.env`
4. Restart dev server

### Data not saving

**Checklist:**
- [ ] User is authenticated
- [ ] RLS policy allows INSERT for this table
- [ ] All required fields are provided
- [ ] No database constraint violations

---

## Manual Setup (Alternative)

If you prefer not to use the CLI:

### 1. Create Project via Dashboard
- Go to https://supabase.com
- Create new project
- Wait for provisioning

### 2. Apply Schema Manually
1. Go to **SQL Editor** in Supabase Dashboard
2. Copy contents of `supabase/migrations/20260407000000_initial_schema.sql`
3. Paste and run

### 3. Get Credentials
1. Go to **Settings** → **API**
2. Copy Project URL and anon key
3. Update `app/.env`

### 4. Verify Tables
1. Go to **Table Editor**
2. Verify all 5 tables exist:
   - `users`
   - `user_profiles`
   - `daily_readings`
   - `subscriptions`
   - `insights`

---

## Database Schema Reference

### users
```sql
id UUID (PK)
name TEXT
email TEXT
phone TEXT
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

### user_profiles
```sql
user_id UUID (PK, FK → users.id)
sun_sign TEXT
moon_sign TEXT
rising_sign TEXT
birth_date DATE
birth_time TIME
birth_location TEXT
answers JSONB
created_at TIMESTAMPTZ
```

### daily_readings
```sql
id UUID (PK)
sign TEXT
date DATE
title TEXT
content TEXT
lucky_color TEXT
avoid TEXT
mood TEXT
created_at TIMESTAMPTZ
```

### subscriptions
```sql
user_id UUID (PK, FK → users.id)
status TEXT -- 'active', 'trialing', 'expired', 'cancelled'
plan TEXT -- 'monthly', 'annual'
start_date TIMESTAMPTZ
end_date TIMESTAMPTZ
created_at TIMESTAMPTZ
```

### insights
```sql
id UUID (PK)
type TEXT -- 'transit', 'compatibility', 'career', 'relationship'
sign_filter TEXT[]
title TEXT
content TEXT
premium BOOLEAN
created_at TIMESTAMPTZ
```

---

## Gotchas & Notes

### 1. RLS and Anonymous Access
- Tables with `USING (true)` policy are readable by anyone (including anonymous)
- Tables with `auth.uid()` policies require authentication
- `daily_readings` and `insights` are public by design

### 2. UPDATE Requires SELECT
In Postgres RLS, UPDATE operations require a SELECT policy. The schema includes both.

### 3. Service Role Key
- **Never** expose the `service_role` key in client code
- Only use it in server-side functions with proper security
- The `anon` key is safe for client use

### 4. Database Password
- Save your database password securely
- You'll need it for direct Postgres connections
- Can be reset in Dashboard → Settings → Database if lost

### 5. Region Selection
- Choose region closest to your users for best performance
- Cannot change region after project creation
- Migration between regions requires manual export/import

---

## Next Steps

- [ ] Set up Supabase Auth (email/password, OAuth, etc.)
- [ ] Implement user onboarding flow
- [ ] Add daily readings seed data
- [ ] Integrate RevenueCat for subscriptions
- [ ] Set up automated daily reading generation
- [ ] Create admin dashboard for content management

---

## Resources

- [Supabase Docs](https://supabase.com/docs)
- [RLS Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [Postgres RLS](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)
- [Supabase CLI](https://supabase.com/docs/reference/cli/introduction)
