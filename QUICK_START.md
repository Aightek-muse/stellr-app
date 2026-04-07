# Supabase Setup - Quick Start Card

## ✅ What's Done

- [x] Schema updated with proper RLS policies
- [x] Test script created (`test-supabase.ts`)
- [x] Documentation updated (`SUPABASE_SETUP.md`)
- [x] `.env` file template created (git-ignored)
- [x] Changes committed to `dev/backend-active` branch

---

## 🚀 Next Steps (Manual - Requires Your Input)

### 1. Create Supabase Project
```
Go to: https://supabase.com
Click: New Project
Name: stellr
Region: Choose closest to users
```

### 2. Login to Supabase CLI
```bash
cd /home/ubuntu/.openclaw/workspace/projects/stellr-app
npx supabase login
```
(This opens browser for OAuth)

### 3. Initialize & Link
```bash
npx supabase init
npx supabase link --project-ref YOUR_PROJECT_ID
```
(Get project ID from Supabase dashboard URL)

### 4. Apply Schema
```bash
npx supabase db push
```

### 5. Update .env
```bash
# Get from: Dashboard → Settings → API
# - Project URL
# - anon/public key

cd app
# Edit .env with your credentials
```

### 6. Test Connection
```bash
cd /home/ubuntu/.openclaw/workspace/projects/stellr-app
npx tsx test-supabase.ts
```

---

## 🔐 Security Checklist

| Check | Status |
|-------|--------|
| RLS enabled on all tables | ✅ In schema |
| Users can only read own data | ✅ Policy applied |
| Public tables explicitly marked | ✅ daily_readings, insights |
| Anon key (not service_role) in client | ✅ Documented |
| UPDATE has SELECT policy | ✅ Included |

---

## 📁 Files Modified

```
stellr-app/
├── app/
│   └── .env                    ← Update with your credentials
├── supabase/
│   └── migrations/
│       └── 20260407000000_initial_schema.sql  ← Updated with RLS
├── test-supabase.ts            ← New test script
├── SUPABASE_SETUP.md           ← Full documentation
└── QUICK_START.md              ← This file
```

---

## 🐛 Common Issues

**"relation does not exist"**
→ Run `npx supabase db push`

**"permission denied"**
→ Check RLS policies, verify authentication

**"Invalid API key"**
→ Use anon key, not service_role key

**.env not loading**
→ Restart Expo dev server after editing

---

## 📞 Need Help?

See full documentation: `SUPABASE_SETUP.md`

Or run: `npx supabase --help`
