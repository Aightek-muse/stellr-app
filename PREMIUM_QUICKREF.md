# 🎯 Stellr+ Premium System - Quick Reference

## Files Created/Modified

### New Files (3)
```
app/components/Paywall.tsx       ← Full-screen premium modal
app/components/LockedCard.tsx    ← Locked feature card wrapper
app/lib/revenuecat.ts            ← RevenueCat integration
```

### Modified Files (6)
```
app/store/useAppStore.ts         ← Added subscription state/actions
app/app/(tabs)/index.tsx         ← Locked compatibility card
app/app/(tabs)/chart.tsx         ← Locked chart screen
app/app/(tabs)/profile.tsx       ← Subscription status + manage
app/app/_layout.tsx              ← Init RevenueCat on start
app/package.json                 ← Added react-native-purchases
```

### Config (Manual)
```
app/.env                         ← Update with RevenueCat keys
```

---

## Architecture

```
User opens app
    ↓
RevenueCat initialized (_layout.tsx)
    ↓
checkSubscription() called (each screen)
    ↓
Zustand store updated
    ↓
UI renders based on isSubscriber

Free User:
- LockedCard → Tap → Paywall
- Chart → Locked preview
- Profile → "Unlock Stellr+"

Subscriber:
- Card → Opens directly
- Chart → Full content
- Profile → "Manage Subscription"
```

---

## Component Tree

```
Paywall (Modal)
├─ Header (star icon + headline)
├─ Features (6 benefits)
├─ Pricing Toggle (Monthly/Annual)
├─ Price Display
├─ CTA Button (Start Free Trial)
├─ Trust Indicators
└─ Restore Purchases

LockedCard (TouchableOpacity)
└─ Card (locked prop)
   ├─ Lock icon overlay
   ├─ Stellr+ badge
   └─ Content (opacity 0.7)
```

---

## State Flow

```typescript
// Zustand Store
subscription: {
  isSubscriber: boolean;
  expirationDate?: string;
  originalPurchaseDate?: string;
}

// Actions
checkSubscription()     → RevenueCat.getCustomerInfo()
purchaseSubscription()  → RevenueCat.purchasePackage()
restorePurchases()      → RevenueCat.restorePurchases()
```

---

## User Actions

### Upgrade Flow
1. Tap locked feature
2. Paywall opens
3. Toggle pricing (Monthly/Annual)
4. Tap "Start Free Trial"
5. RevenueCat sheet appears
6. Confirm with FaceID/TouchID
7. Feature unlocks
8. Profile badge → "Stellr+"

### Restore Flow
1. Profile → Restore Purchases
2. RevenueCat restores
3. Subscription status updated
4. Features unlock

### Manage Subscription
1. Profile → Manage Subscription
2. Opens App Store / Play Store
3. User manages in native UI

---

## RevenueCat Entitlement

```
Entitlement: stellr_plus
Products:
  - Monthly: ₺29.99/month
  - Annual: ₺199.99/year (44% off)
```

---

## Testing Commands

```bash
# Start dev server
cd /home/ubuntu/.openclaw/workspace/projects/stellr-app/app
npm start

# iOS Simulator
# Press 'i'

# Android Emulator
# Press 'a'

# Check branch
cd ..
git branch  # Should show dev/premium*

# View commit
git log -1 --stat
```

---

## Manual Steps (User)

1. ✅ Create RevenueCat account
2. ✅ Configure iOS app (com.aightek.stellr)
3. ✅ Configure Android app (com.aightek.stellr)
4. ✅ Create entitlement: stellr_plus
5. ✅ Add products (monthly + annual)
6. ✅ Get API keys
7. ✅ Update app/.env
8. ✅ Test in simulator
9. ✅ Build TestFlight
10. ✅ Test with real purchase

---

## Success Metrics (Post-Launch)

- Paywall view → Purchase conversion
- Monthly vs Annual split
- Churn rate (30-day)
- MRR (Monthly Recurring Revenue)
- LTV (Lifetime Value)

Track in RevenueCat dashboard.

---

**Branch:** `dev/premium`  
**PR:** https://github.com/Aightek-muse/stellr-app/pull/new/dev/premium  
**Status:** ✅ Ready for RevenueCat setup
