import { Stack } from 'expo-router';

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" />
      <Stack.Screen name="name-input" />
      <Stack.Screen name="question" />
      <Stack.Screen name="processing" />
      <Stack.Screen name="reveal/sun" />
      <Stack.Screen name="reveal/moon" />
      <Stack.Screen name="reveal/rising" />
      <Stack.Screen name="reveal/summary" />
    </Stack>
  );
}
