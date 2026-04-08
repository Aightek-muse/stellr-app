# Apple Privacy Nutrition Label Mapping

**App:** Stellr: Astrology & Birth Chart  
**Developer:** Aytek  
**Date:** April 8, 2026

---

## Data Types to Declare in App Store Connect

### ✅ Data Linked to User

| Data Type | Category | Purpose | Required to Declare? |
|-----------|----------|---------|---------------------|
| Name | Contact Info | App Functionality, Personalization | ✅ Yes |
| User ID | Identifiers | Account Management | ✅ Yes (if using Supabase auth) |
| Birth Date | Contact Info | App Functionality (chart calculation) | ✅ Yes |
| Quiz Answers | User Content | App Functionality, Personalization | ✅ Yes |
| Calculated Signs (Sun/Moon/Rising) | User Content | App Functionality | ✅ Yes |

### ✅ Data Not Linked to User (Anonymous)

| Data Type | Category | Purpose | Required to Declare? |
|-----------|----------|---------|---------------------|
| Daily Reading Views | Usage Data | Analytics | ✅ Yes (anonymous) |
| Crash Data | Diagnostics | App Functionality | ✅ Yes |
| Device Info (model, OS, app version) | Diagnostics | App Functionality, Debugging | ✅ Yes |

### ❌ Data NOT Collected

| Data Type | Collected? |
|-----------|-----------|
| Email Address | ❌ No (not required for onboarding) |
| Location | ❌ No |
| Health & Fitness | ❌ No |
| Financial Info | ❌ No |
| Photos/Videos | ❌ No |
| Audio Data | ❌ No |
| Contacts | ❌ No |
| Browsing History | ❌ No |
| Search History | ❌ No |
| Identifiers (IDFA, advertising ID) | ❌ No |
| Purchases | ❌ No (free app) |
| Sensitive Info | ❌ No |

---

## App Store Connect Privacy Questions

### 1. Do you or your third-party partners collect data from this app?

**Answer:** Yes

**Explanation:** We collect user-provided data (name, optional birth date, quiz answers) and anonymous usage data (daily reading views, crash data) to provide core app functionality.

---

### 2. What data types do you collect?

**Select:**
- ✅ Contact Info → Name
- ✅ Identifiers → User ID (if using Supabase auth)
- ✅ User Content → Quiz answers, calculated signs
- ✅ Usage Data → Product interaction (daily reading views)
- ✅ Diagnostics → Crash data, performance data

---

### 3. Is this data linked to the user's identity?

**Answer:** Yes, for the following:
- Name
- User ID
- Birth date
- Quiz answers
- Calculated signs

**No** (anonymous) for:
- Daily reading views (analytics)
- Crash data
- Device information

---

### 4. Is this data used to track the user across apps and websites?

**Answer:** No

**Explanation:** We do not use IDFA, advertising identifiers, or any tracking mechanisms. We do not share data with third parties for advertising purposes.

---

### 5. Do you collect data for tracking purposes?

**Answer:** No

---

## Privacy Label Summary for App Store Connect

```
Privacy Practices
=================

Data Used to Track You
----------------------
None

Data Linked to You
------------------
• Contact Info (Name)
• Identifiers (User ID)
• User Content (Quiz answers, calculated signs)

Data Not Linked to You
----------------------
• Contact Info (Birth date - optional)
• Usage Data (Daily reading views)
• Diagnostics (Crash data, device info)

Tracking
--------
No tracking (ATT not required)
```

---

## Third-Party Services Disclosure

| Service | Data Access | Purpose | Privacy Policy |
|---------|-------------|---------|----------------|
| Supabase | Name, birth date, quiz answers, calculated signs, usage analytics | Database, auth, analytics | https://supabase.com/privacy |
| Expo | Crash data, device info | Crash reporting | https://expo.dev/privacy |

---

## Checklist for App Store Submission

- [ ] Complete Privacy section in App Store Connect
- [ ] Select all applicable data types from the lists above
- [ ] Mark data as "Linked to User" or "Not Linked to User" as specified
- [ ] Answer "No" to tracking questions (no ATT required)
- [ ] Add privacy policy URL: https://aightek-muse.github.io/stellr-app/privacy-policy
- [ ] Ensure privacy policy is publicly accessible before submission
- [ ] Add privacy policy link in app (Settings or About screen)

---

## Notes

- **ATT (App Tracking Transparency) NOT required** — We do not use IDFA or track users across apps/websites.
- **No email required** — Users can use the app without providing an email address.
- **Minimal data collection** — Only data necessary for core functionality is collected.
- **No ads, no analytics SDKs** — Beyond basic Expo crash reporting and Supabase analytics.
