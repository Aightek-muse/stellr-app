import { Stack } from 'expo-router';
import { useFonts } from '../hooks/useFonts';

export default function RootLayout() {
  const fontsLoaded = useFonts();
  
  if (!fontsLoaded) return null;
  
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="onboarding" options={{ gestureEnabled: false }} />
    </Stack>
  );
}
