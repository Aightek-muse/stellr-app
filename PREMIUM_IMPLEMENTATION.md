# Stellr+ Premium/Paywall System - Implementation Guide

## ✅ Completed

### 1. RevenueCat SDK Installed
- Package: `react-native-purchases`
- Location: `app/package.json`

### 2. RevenueCat Configuration
- **File:** `app/lib/revenuecat.ts`
- **Functions:**
  - `initRevenueCat()` - Initialize on app start
  - `getSubscriptionStatus()` - Check if user is subscriber
  - `purchaseSubscription()` - Trigger purchase flow
  - `restorePurchases()` - Restore previous purchases

### 3. Paywall UI Component
- **File:** `app/components/Paywall.tsx`
- **Features:**
  - Full-screen modal with slide animation
  - Premium illustration (gold star)
  - 6 key benefits with emoji icons
  - Pricing toggle (Monthly/Annual)
  - Primary CTA: "Start Free Trial"
  - Trust indicators (7-day free, cancel anytime)
  - Restore purchases link
- **Copy:** From UX writing guidelines

### 4. LockedCard Component
- **File:** `app/components/LockedCard.tsx`
- **Features:**
  - Wraps Card component
  - Lock icon overlay
  - Opacity 0.7
  - Tap → opens Paywall

### 5. Zustand Store Updated
- **File:** `app/store/useAppStore.ts`
- **New State:**
  ```typescript
  subscription: {
    isSubscriber: boolean;
    expirationDate?: string;
    originalPurchaseDate?: string;
  } | null;
  ```
- **New Actions:**
  - `checkSubscription()` - Fetch status from RevenueCat
  - `purchaseSubscription()` - Trigger purchase
  - `restorePurchases()` - Restore previous purchases

### 6. Screens Updated

#### Home Dashboard (`app/app/(tabs)/index.tsx`)
- Compatibility card → LockedCard
- Tap → opens Paywall
- Check subscription on mount

#### Chart Screen (`app/app/(tabs)/chart.tsx`)
- Non-subscribers → see locked preview
- Subscribers → see full chart (placeholder)
- "Unlock My Full Chart" → opens Paywall

#### Profile Screen (`app/app/(tabs)/profile.tsx`)
- Badge shows "Stellr+" or "Free"
- CTA changes based on status:
  - Free: "Unlock Stellr+"
  - Subscriber: "Manage Subscription" → App Store
- Shows expiration date for subscribers

### 7. App Layout
- **File:** `app/app/_layout.tsx`
- RevenueCat initialized on app start

### 8. Environment Config
- **File:** `app/.env` (not committed - update manually)
```bash
EXPO_PUBLIC_REVENUECAT_API_KEY_IOS=your-ios-key
EXPO_PUBLIC_REVENUECAT_API_KEY_ANDROID=your-android-key
EXPO_PUBLIC_REVENUECAT_API_KEY=your-revenuecat-key
```

### 9. Git Branch
- **Branch:** `dev/premium`
- **Pushed:** ✅
- **PR:** https://github.com/Aightek-muse/stellr-app/pull/new/dev/premium

---

## 🔧 Manual Setup Required

### Step 1: Create RevenueCat Account
1. Go to https://app.revenuecat.com
2. Sign up (free tier is fine for testing)
3. Create new app: "Stellr"

### Step 2: Configure Apps
1. **Add iOS app:**
   - Bundle ID: `com.aightek.stellr`
   - Get API key from RevenueCat
2. **Add Android app:**
   - Package: `com.aightek.stellr`
   - Get API key from RevenueCat

### Step 3: Configure Products
1. In RevenueCat dashboard:
   - Go to Products → Create entitlement
   - Name: `stellr_plus`
   - Add products:
     - Monthly: ₺29.99/month
     - Annual: ₺199.99/year (44% savings)
2. Configure for both iOS and Android

### Step 4: Update .env
```bash
cd /home/ubuntu/.openclaw/workspace/projects/stellr-app/app
cp .env .env.local  # if needed
# Update with your actual keys:
EXPO_PUBLIC_REVENUECAT_API_KEY_IOS=pk_live_xxx
EXPO_PUBLIC_REVENUECAT_API_KEY_ANDROID=pk_live_xxx
```

### Step 5: Test in Simulator/TestFlight
1. **iOS:**
   ```bash
   cd app
   npm start
   # Press 'i' for iOS simulator
   ```
2. **Test flow:**
   - Free user → Tap locked feature → See Paywall → Close → Still locked
   - Free user → Tap "Start Free Trial" → RevenueCat sheet → Confirm → Unlocked
   - Subscriber → Tap locked feature → Opens directly
   - Subscriber → Profile → "Manage Subscription" → App Store

---

## 🧪 Testing Checklist

### Free User Flow
- [ ] Open app → Home dashboard
- [ ] Tap "Compatibility" card → Paywall opens
- [ ] Close paywall → Card still locked
- [ ] Tap "Full Chart" button → Locked preview shown
- [ ] Tap "Unlock My Full Chart" → Paywall opens
- [ ] Profile → Badge shows "Free"
- [ ] Profile → CTA says "Unlock Stellr+"

### Subscriber Flow
- [ ] Purchase subscription (test mode)
- [ ] Home → Compatibility card → Opens directly
- [ ] Chart → Full chart content shown
- [ ] Profile → Badge shows "Stellr+"
- [ ] Profile → CTA says "Manage Subscription"
- [ ] Profile → Shows expiration date
- [ ] Tap "Manage Subscription" → App Store opens

### Restore Purchases
- [ ] Install on new device
- [ ] Profile → Tap "Restore Purchases"
- [ ] Subscription restored → Features unlocked

---

## 📝 Notes

### RevenueCat Sandbox Testing
- Use sandbox accounts for testing purchases
- iOS: Create sandbox tester in App Store Connect
- Android: Add license test users in Google Play Console
- Purchases in sandbox don't charge real money

### Production Checklist
- [ ] Configure production API keys
- [ ] Set up RevenueCat webhooks (optional - for backend sync)
- [ ] Test with real payment (small amount)
- [ ] Verify subscription status updates correctly
- [ ] Test subscription cancellation flow
- [ ] Test refund flow

### Pricing Strategy
Current pricing (Turkey - TRY):
- Monthly: ₺29.99
- Annual: ₺199.99 (44% savings = ₺160.89 saved)

Consider:
- Introductory pricing for early adopters
- Lifetime tier (one-time payment)
- Regional pricing adjustments

---

## 🚀 Next Steps

1. **Complete RevenueCat setup** (user action)
2. **Test in simulator** (developer action)
3. **Build for TestFlight** (developer action)
4. **Gather feedback** from beta testers
5. **Iterate** on paywall copy/design if needed
6. **Launch** to production

---

## 📞 Support

- RevenueCat Docs: https://docs.revenuecat.com
- React Native Purchases: https://github.com/RevenueCat/react-native-purchases
- RevenueCat Community: https://community.revenuecat.com

**Questions?** Check the RevenueCat dashboard analytics for conversion rates, churn, and MRR once live.
