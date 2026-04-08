import Purchases from 'react-native-purchases';

const REVENUECAT_API_KEY = process.env.EXPO_PUBLIC_REVENUECAT_API_KEY;

export async function initRevenueCat() {
  if (!REVENUECAT_API_KEY) {
    console.warn('RevenueCat API key not configured');
    return;
  }

  Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);
  await Purchases.configure({ 
    apiKey: REVENUECAT_API_KEY, 
    appUserID: undefined 
  });
}

export async function getSubscriptionStatus() {
  try {
    const customerInfo = await Purchases.getCustomerInfo();
    return {
      isSubscriber: customerInfo.entitlements.active['stellr_plus'] !== undefined,
      expirationDate: customerInfo.entitlements.active['stellr_plus']?.expirationDate,
      originalPurchaseDate: customerInfo.originalPurchaseDate,
    };
  } catch (error) {
    console.error('Failed to get subscription status:', error);
    return {
      isSubscriber: false,
      expirationDate: undefined,
      originalPurchaseDate: undefined,
    };
  }
}

export async function purchaseSubscription() {
  const offerings = await Purchases.getOfferings();
  const currentOffering = offerings.current;
  
  if (!currentOffering) throw new Error('No offerings available');
  
  const { product } = await Purchases.purchasePackage(currentOffering.availablePackages[0]);
  return product;
}

export async function restorePurchases() {
  return await Purchases.restorePurchases();
}
