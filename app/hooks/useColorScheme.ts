import { useColorScheme as useDeviceColorScheme } from 'react-native';

export function useColorScheme() {
  const deviceColorScheme = useDeviceColorScheme();
  
  // For now, we only support dark mode
  return 'dark' as const;
}
