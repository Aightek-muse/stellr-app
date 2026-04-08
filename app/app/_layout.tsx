import { Stack } from 'expo-router';
import { useFonts } from '../hooks/useFonts';
import { useEffect } from 'react';
import { initRevenueCat } from '../lib/revenuecat';

export default function RootLayout() {
  const fontsLoaded = useFonts();
  
  // Initialize RevenueCat on app start
  useEffect(() => {
    initRevenueCat().catch(console.error);
  }, []);
  
  if (!fontsLoaded) return null;
  
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="onboarding" options={{ gestureEnabled: false }} />
    </Stack>
  );
}
